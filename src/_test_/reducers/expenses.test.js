import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual([]);
});

test("should remove by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expenseReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const newExpense = {
    id: "4",
    description: "drinks",
    note: "",
    amount: 278,
    createdAt: 77780
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense
  };
  const state = expenseReducer(expenses, action);

  expect(state).toEqual([...expenses, newExpense]);
});

test("should edit an expense", () => {
  const amount = 234520;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit an expense if id not found", () => {
  const amount = 234520;
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: {
      amount
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
