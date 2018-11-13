import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NotFound from "../../components/NotFound";

test("should render NotFound page", () => {
  const wrapper = shallow(<NotFound />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
