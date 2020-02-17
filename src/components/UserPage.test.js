import React from 'react';
import 'react-redux';
import { shallow } from 'enzyme';
import UserPage from './UserPage';

describe('UserPage component', () => {
  it('renders UserPage', () => {
    const wrapper = shallow(<UserPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
