import { selectLoading, selectUser, selectError } from './user-selector';

let state;
beforeAll(() => {
  state = {
    user: {
      loading: false,
      user: 'user',
      error: 'error'
    }, 
    repos: {
      loading: false,
      repos: 'repos',
      error: 'error'
    }
  };
});

describe('Repos Selector Module', () => {
  it('selects loading', () => {
    expect(selectLoading(state)).toEqual(false);
  });
  it('selects user', () => {
    expect(selectUser(state)).toEqual('user');
  });
  it('selects error', () => {
    expect(selectError(state)).toEqual('error');
  });
});


