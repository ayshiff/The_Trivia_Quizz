import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow, configure } from "enzyme";
import HomeContainer from "./HomeContainer";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<HomeContainer />);
  });
});
