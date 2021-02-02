import * as React from "react";
import Routes from "routes";
import { createStore, StoreProvider } from "easy-peasy";
import Store, { ConfigureStore } from "store";

const store = createStore(Store, ConfigureStore);

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <StoreProvider store={store}>
      <h1>Go Arena</h1>
      <Routes />
    </StoreProvider>
  );
}
