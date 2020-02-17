import { reposReducer, initialState } from './repos-reducer';
import { fetchRepos } from '../actions/actions';
import { FETCH_REPOS_REJECTED, FETCH_REPOS_PENDING, FETCH_REPOS_FULFILLED } from '../action-types';
jest.mock('../../services/request.js');

describe('Repos reducer', () => {
  it('FETCH_REPOS doesn\'t do anything in the reducer', () => {
    const newState = reposReducer(initialState, fetchRepos());
    expect(newState).toEqual(initialState);
  });

  it('FETCH_REPOS_PENDING sets loading, unsets repos and error', () => {
    const newState = reposReducer(initialState, { type: FETCH_REPOS_PENDING });
    expect(newState).toEqual({ ...initialState, loading: true, repos: null, error: null });
  });

  it('FETCH_REPOS_FULFILLED unsets loading and error, sets repos', () => {
    const newState = reposReducer(initialState, { type: FETCH_REPOS_FULFILLED, payload: 'repos data' });
    expect(newState).toEqual({ ...initialState, loading: false, repos: 'repos data', error: null });
  });

  it('FETCH_REPOS_REJECTED unsets loading and repos, sets error', () => {
    const newState = reposReducer(initialState, { type: FETCH_REPOS_REJECTED, payload: 'error data' });
    expect(newState).toEqual({ ...initialState, loading: false, repos: null, error: 'error data' });
  });
});
