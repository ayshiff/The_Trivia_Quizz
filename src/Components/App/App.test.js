import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow, configure } from "enzyme";
import App, { Context } from "./App";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);

    wrapper.setState({ SCORE: 0, ERROR: 0 });

    wrapper.setScore = jest.mock();

    expect(wrapper.find(Context.Provider)).to.have.length(1);
    expect(wrapper.find(Context.Consumer)).to.have.length(1);
    expect(wrapper.find("div")).to.have.length(2);
    expect(wrapper.find("footer")).to.have.length(1);
  });
});
