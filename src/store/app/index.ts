import { action, thunk, Action, computed, persist, Thunk, Computed } from "easy-peasy";
import { IRoute } from "models/route";

interface IAppState {
  currentRoute: IRoute | undefined;
}

export interface IAppStoreModel extends IAppState {
  setCurrentRoute: Action<IAppState, IRoute | undefined>;
  sidebar: Computed<IAppState, boolean>;
}

const Layout: IAppStoreModel = persist(
  {
    sidebar: computed((state) => state.currentRoute?.hasSidebar ?? true),
    setCurrentRoute: action((state, payload) => {
      state.currentRoute = payload;
    }),
    currentRoute: undefined,
  },
  { storage: "localStorage" }
);

export default Layout;
