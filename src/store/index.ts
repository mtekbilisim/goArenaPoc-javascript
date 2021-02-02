import { createTypedHooks } from "easy-peasy";

import Auth from "./authentication";
import App, { IAppStoreModel } from "./app";

import { IAuthStoreModel } from "./authentication";

export interface IStoreModel {
  Auth: IAuthStoreModel;
  Layout: IAppStoreModel;
}

const Store = {
  Auth: Auth,
  Layout: App,
};

export const ConfigureStore = {
  name: "goArena-poc",
};

export default Store;

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<IStoreModel>();
export { useStoreActions, useStoreState, useStoreDispatch, useStore };
