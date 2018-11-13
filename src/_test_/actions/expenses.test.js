import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense from an object", () => {
  const action = editExpense("abc123", { note: "a note edit" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: { note: "a note edit" }
  });
});

test("should setup add expense with provided vaules", () => {
  const expensedata = {
    description: "gass bill",
    note: " a new note for gass bill",
    createdAt: 1234,
    amount: 300
  };
  const action = addExpense(expensedata);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expensedata,
      id: expect.any(String)
    }
  });
});

test("should setup add expense with default vaules", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
