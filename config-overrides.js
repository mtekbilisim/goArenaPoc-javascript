const { override, addLessLoader, useBabelRc, addWebpackAlias, addBabelPlugin, addBundleVisualizer, addWebpackPlugin, fixBabelImports } = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
// const fs = require("fs");
const path = require("path");

function myOverrides(config, env) {
  config.plugins.push(new AntdDayjsWebpackPlugin());
  return config;
}

module.exports = override(
  myOverrides,
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  process.env.NODE_ENV === "production" && addBundleVisualizer(),
  addLessLoader({
    javascriptEnabled: true,
  }),
  useBabelRc()
);
