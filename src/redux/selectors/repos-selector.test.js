import { selectLoading, selectRepos, selectError } from './repos-selector';

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
  it('selects repos', () => {
    expect(selectRepos(state)).toEqual('repos');
  });
  it('selects error', () => {
    expect(selectError(state)).toEqual('error');
  });
});


