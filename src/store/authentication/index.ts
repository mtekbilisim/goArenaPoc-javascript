import { action, thunk, Action, computed, persist, Thunk, Computed } from "easy-peasy";
import { Login as LoginModel, User } from "models/user";
import { Login } from "services/authentication";
import { StoreRequestStatus } from "store/types";

interface IAuthStoreState {
  token: string | undefined;
  user: User | undefined;
  tokenHeaderSet: any;
  request: StoreRequestStatus;
  error: string | null;
}

export interface IAuthStoreModel extends IAuthStoreState {
  setTokenHeaderSet: Action<IAuthStoreState, boolean>;
  setRequest: Action<IAuthStoreState, StoreRequestStatus>;
  setError: Action<IAuthStoreState, string>;
  login: Thunk<IAuthStoreModel, LoginModel, string>;
  loginSuccess: Action<IAuthStoreState, string>;
  logout: Thunk<IAuthStoreModel>;
  logoutSuccess: Action<IAuthStoreState>;
  setUser: Action<IAuthStoreState, User>;
  setToken: Action<IAuthStoreState, string>;
  valid: Computed<IAuthStoreState>;
}

const Auth: IAuthStoreModel = persist(
  {
    token: undefined,
    user: undefined,
    tokenHeaderSet: false,
    valid: computed((state) => !!state.token && !!state.user?.id),
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
        const data = await Login(payload);
        console.log("data", data);
        actions.loginSuccess(data.access_token);
        actions.setRequest(StoreRequestStatus.SUCCESS);
        return data.access_token;
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
