import React from "react";
import ReactDOM from "react-dom";
import "react-virtualized/styles.css";
import App from "./App";
import "./index.less";

// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <div className='go-arena-app'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
