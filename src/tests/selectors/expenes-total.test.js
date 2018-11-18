import expenseTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return zero if no expense is added", () => {
  const result = expenseTotal([]);
  expect(result).toBe(0);
});
test("should correctly add up multiple expense", () => {
  const result = expenseTotal(expenses);
  expect(result).toBe(114195);
});
test("should correctly add up a single expense", () => {
  const result = expenseTotal([expenses[0]]);
  expect(result).toBe(195);
});
