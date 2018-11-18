const getTotalExpenses = expenses => {
  const amountArray = expenses.map(expense => expense.amount);
  const total = amountArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return total;
};
export default getTotalExpenses;
