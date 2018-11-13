import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should check if text is set", () => {
  const action = setTextFilter("testing checking");

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "testing checking"
  });
});

test("should check if text is default", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("checks for date sorting", () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("checks for sort by amount", () => {
  const action = sortByAmount();

  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should generate start date action object", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate end date action object", () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
