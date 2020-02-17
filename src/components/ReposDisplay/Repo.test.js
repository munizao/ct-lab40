import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo';

describe('Repo component', () => {
  it('renders Repo', () => {
    const repo = {
      name: 'hello-world',
      open_issues: 5,
      forks: 3,
      stargazers_count: 7,
      created_at: '2020-02-17T04:30:09.735Z',
      updated_at: '2020-02-17T04:30:09.735Z',
      description: 'I just wanted to say hello to the world.'
    };
    const wrapper = shallow(<Repo repo={repo}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
