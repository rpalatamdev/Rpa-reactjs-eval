import React from "react";
import { shallow } from "enzyme";

import Title from "./default";

describe("Feature Title", () => {
  it("Should display prop title", () => {
    const thisProps = { title: "title" };
    const wrapper = shallow(<Title {...thisProps}></Title>);
    const expected = <h1>{thisProps.title}</h1>;
    expect(wrapper.equals(expected)).toBe(true);
  });
  it("Should display default title", () => {
    const wrapper = shallow(<Title></Title>);
    const expected = <h1>Default Title</h1>;
    expect(wrapper.equals(expected)).toBe(true);
  });
});
