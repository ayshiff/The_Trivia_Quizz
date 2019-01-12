import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow, configure } from "enzyme";
import Home from "./Home";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(
      <Home
        score={0}
        categories={[
          { question: "test", id: 23 },
          { question: "test", id: 24 }
        ]}
        isLoading={false}
      />
    );
  });
});
