import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";

import registerServiceWorker from "./registerServiceWorker";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(addExpense({ description: "water bill", amount: 4300 }));
store.dispatch(addExpense({ description: "gas bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "tax bill", amount: 109500 }));

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses);

const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDom.render(JSX, document.getElementById("root"));

registerServiceWorker();
