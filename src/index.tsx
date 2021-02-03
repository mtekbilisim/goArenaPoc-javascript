import React from "react";
import { render } from "react-snapshot";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.less";
import "react-virtualized/styles.css";

// import reportWebVitals from "./reportWebVitals";

process.env.NODE_ENV === "development"
  ? ReactDOM.render(
      <React.StrictMode>
        <div className='go-arena-app'>
          <App />
        </div>
      </React.StrictMode>,
      document.getElementById("root")
    )
  : render(
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
