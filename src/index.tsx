import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./components/App";

import { store } from "./store/store";

import "./styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);