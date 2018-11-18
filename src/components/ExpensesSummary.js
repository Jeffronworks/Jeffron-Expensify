import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import SelectExpenses from "../selectors/expenses";
import SelectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = props => {
  const expenseWord = props.expenseCount === 1 ? "expense" : "expenses";
  const formattedExpenseTotal = numeral(props.expenseTotal / 100).format(
    "$0,0.00"
  );
  return (
    <div>
      <h1>
        Viewing {props.expenseCount} {expenseWord} totalling{" "}
        {formattedExpenseTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = SelectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: SelectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
