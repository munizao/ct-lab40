import React from 'react';
import 'react-redux';
import { shallow } from 'enzyme';
import ReposDisplay from './ReposDisplay';

describe('ReposDisplay component', () => {
  it('renders ReposDisplay', () => {
    const wrapper = shallow(<ReposDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
