import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const testText = "this is my testText";
  const action = {
    type: "SET_TEXT_FILTER",
    text: testText
  };
  const state = filtersReducer(undefined, action);

  expect(state.text).toBe(testText);
});

test("sort set startDate filter", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: moment().toNow
  };
  const state = filtersReducer(undefined, action);

  expect(state.startDate).toBe(moment().toNow);
});

test("sort set endDate filter", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: moment().toNow
  };
  const state = filtersReducer(undefined, action);

  expect(state.endDate).toBe(moment().toNow);
});
