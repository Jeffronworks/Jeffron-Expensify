import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD EXPENSE

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT EXPENSE

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET TEXT FILTER

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SET SORT BY DATE

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SET SORT BY AMOUNT

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SET START DATE

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET END DATE

const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

//expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// filters reducer

const filtersReducerDefaultState = {
  text: "",
  sortBy: "Date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "Date"
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "Amount"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

//GET VISIBLE EXPENSES

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "Date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "Amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(VisibleExpenses);
});

// store dispatch

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 200, createdAt: -221000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }));

// store.dispatch(setTextFilter("Rent"));
// store.dispatch(setTextFilter());

// store.dispatch(setTextFilter("Rent"));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

/* const demoState = {
  expenses: [
    {
      id: "jisnkjsnsjdb",
      description: "january rent",
      note: "this was the final payment for that address",
      amount: "56200",
      createdAt: 0
    }
  ],
  filters: {
    text: "rents",
    sortBy: "amount", // or dates
    startDate: undefined,
    endDate: undefined
  }
};
 */
