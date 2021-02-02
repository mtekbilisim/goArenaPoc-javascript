import * as React from "react";
import Routes from "routes";
import { createStore, StoreProvider } from "easy-peasy";
import Store, { ConfigureStore } from "store";
import { ConfigProvider } from "antd";
import tr_TR from "antd/es/locale/tr_TR";

const store = createStore(Store, ConfigureStore);

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <ConfigProvider locale={{ ...tr_TR, Image: { preview: "Fotoğrafı Gör" } }}>
      <StoreProvider store={store}>
        <Routes />
      </StoreProvider>
    </ConfigProvider>
  );
}
