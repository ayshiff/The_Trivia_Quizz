import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Category from './Category';

configure({ adapter: new Adapter() });

const redirect = jest.mock();
const setScore = jest.mock();
const setError = jest.mock();

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Category
        redirect={redirect}
        title="Test"
        setScore={setScore}
        setError={setError}
        score={0}
        error={0}
        categoryName="Test"
        categoryValues={[
          { question: 'test', id: 23 },
          { question: 'test', id: 24 }
        ]}
      />
    );
    expect(wrapper.find('section')).to.have.length(1);
  });
});
