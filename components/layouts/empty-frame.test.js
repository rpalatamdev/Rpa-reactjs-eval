import React from "react";
import { shallow } from "enzyme";

import EmptyFrame from "./basic-frame.jsx";

describe("Layout EmptyFrame", () => {
  it("Should display Component EmptyFrame", () => {
    const wrapper = shallow(<EmptyFrame></EmptyFrame>);
    expect(wrapper.exists()).toBe(true);
  });
});
