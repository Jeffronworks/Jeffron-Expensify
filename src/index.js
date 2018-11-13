import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import registerServiceWorker from "./registerServiceWorker";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDom.render(JSX, document.getElementById("root"));

registerServiceWorker();
