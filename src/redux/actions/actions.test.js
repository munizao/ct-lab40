import { 
  FETCH_USER,
  FETCH_REPOS,
} from '../action-types';
import { fetchUser, fetchRepos } from './actions';

jest.mock('../../services/request.js');

describe('actions module', () => {
  it('fetchUser creates a FETCH_USER action', () => {
    expect(fetchUser('octocat')).toEqual({
      type: FETCH_USER,
      payload: Promise.resolve('path: /users/octocat')
    });
  });

  it('fetchRepos creates a FETCH_REPOS action', () => {
    expect(fetchRepos('octocat')).toEqual({
      type: FETCH_REPOS,
      payload: Promise.resolve('path: /users/octocat/repos')
    });
  });
});
