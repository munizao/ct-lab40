import React from 'react';
import 'react-redux';
import { shallow } from 'enzyme';
import UserDisplay from './UserDisplay';

describe('UserDisplay component', () => {
  it('renders UserDisplay', () => {
    const wrapper = shallow(<UserDisplay />);
    expect(wrapper).toMatchSnapshot();
  });
});
