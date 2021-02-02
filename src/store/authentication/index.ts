import { action, thunk, Action, computed, persist, Thunk, Computed } from "easy-peasy";
import { Login } from "services/authentication";
import { StoreRequestStatus } from "store/types";

interface IAuthStoreState {
  token: string | undefined;
  user: object | undefined;
  tokenHeaderSet: any;
  request: StoreRequestStatus;
  error: string | null;
}

export interface IAuthStoreModel extends IAuthStoreState {
  setTokenHeaderSet: Action<IAuthStoreState, boolean>;
  setRequest: Action<IAuthStoreState, StoreRequestStatus>;
  setError: Action<IAuthStoreState, string>;
  login: Thunk<IAuthStoreModel, object, string>;
  loginSuccess: Action<IAuthStoreState, string>;
  logout: Thunk<IAuthStoreModel>;
  logoutSuccess: Action<IAuthStoreState>;
  setUser: Action<IAuthStoreState, object>;
  setToken: Action<IAuthStoreState, string>;
  valid: Computed<IAuthStoreState>;
}

const Auth: IAuthStoreModel = persist(
  {
    token: undefined || "DEV",
    user: undefined,
    tokenHeaderSet: false,
    //@ts-ignore
    valid: computed((state) => (!!state.token && !!state.user?.id) || true),
    request: StoreRequestStatus.IDLE,
    error: null,
    setTokenHeaderSet: action((state, payload) => {
      state.tokenHeaderSet = payload;
    }),
    setRequest: action((state, payload) => {
      state.request = payload;
    }),
    setError: action((state, payload) => {
      state.error = payload;
      throw payload;
    }),

    /**
     * Login actions
     */
    login: thunk(async (actions, payload, helpers) => {
      actions.setRequest(StoreRequestStatus.PENDING);
      try {
        //@ts-ignore
        const { token } = await Login(payload);
        actions.loginSuccess(token);
        actions.setRequest(StoreRequestStatus.SUCCESS);
        return token;
      } catch (error) {
        console.error("Error while login -> ", error);
        actions.setRequest(StoreRequestStatus.ERROR);
        actions.setError(error);
      }
      actions.setRequest(StoreRequestStatus.IDLE);
    }),
    loginSuccess: action((state, payload) => {
      state.token = payload;
    }),

    /**
     * Logout actions
     */
    logout: thunk(async (actions, payload) => {
      actions.logoutSuccess();
    }),
    logoutSuccess: action((state, payload) => {
      state.token = undefined;
      state.user = undefined;
      state.tokenHeaderSet = false;
      localStorage.clear();
    }),

    setUser: action((state, payload) => {
      state.user = payload;
    }),
    setToken: action((state, payload) => {
      state.token = payload;
    }),
  },
  { blacklist: ["user"], storage: "localStorage" }
);

export default Auth;
