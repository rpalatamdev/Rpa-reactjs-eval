import React from "react";
import { shallow } from "enzyme";

import BasicFrame from "./basic-frame.jsx";

describe("Layout BasicFrame", () => {
  it("Should display Component BasicFrame", () => {
    const wrapper = shallow(<BasicFrame></BasicFrame>);
    expect(wrapper.exists()).toBe(true);
  });
});
