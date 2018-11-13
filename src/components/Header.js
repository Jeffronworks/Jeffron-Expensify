import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>

    <p>
      <NavLink activeClassName="is-active" to="/" exact={true}>
        Home
      </NavLink>
      <NavLink activeClassName="is-active" to="/create">
        {" "}
        Create Expense
      </NavLink>
    </p>
  </header>
);

export default Header;
