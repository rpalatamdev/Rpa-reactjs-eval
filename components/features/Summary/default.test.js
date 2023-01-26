import React from "react";
import { shallow } from "enzyme";

import Summary from "./default";

describe("Feature Summary", () => {
  it("Should display Component Summary", () => {
    const thisProps = {
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fuga?",
    };
    const wrapper = shallow(<Summary {...thisProps}></Summary>);
    const expected = <h2>{thisProps.summary}</h2>;
    expect(wrapper.equals(expected)).toBe(true);
  });
  it("Should display default title", () => {
    const wrapper = shallow(<Summary></Summary>);
    const expected = <h2>Default Summary</h2>;
    expect(wrapper.equals(expected)).toBe(true);
  });
});
