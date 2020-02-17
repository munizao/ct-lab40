import { userReducer, initialState } from './user-reducer';
import { fetchUser } from '../actions/actions';
import { FETCH_USER_REJECTED, FETCH_USER_PENDING, FETCH_USER_FULFILLED } from '../action-types';
jest.mock('../../services/request.js');

describe('User reducer', () => {
  it('FETCH_USER doesn\'t do anything in the reducer', () => {
    const newState = userReducer(initialState, fetchUser());
    expect(newState).toEqual(initialState);
  });

  it('FETCH_USER_PENDING sets loading, unsets user and error', () => {
    const newState = userReducer(initialState, { type: FETCH_USER_PENDING });
    expect(newState).toEqual({ ...initialState, loading: true, user: null, error: null });
  });

  it('FETCH_USER_FULFILLED unsets loading and error, sets user', () => {
    const newState = userReducer(initialState, { type: FETCH_USER_FULFILLED, payload: 'user data' });
    expect(newState).toEqual({ ...initialState, loading: false, user: 'user data', error: null });
  });

  it('FETCH_USER_REJECTED unsets loading and user, sets error', () => {
    const newState = userReducer(initialState, { type: FETCH_USER_REJECTED, payload: 'error data' });
    expect(newState).toEqual({ ...initialState, loading: false, user: null, error: 'error data' });
  });
});
