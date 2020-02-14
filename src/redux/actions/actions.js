import { 
  FETCH_USER,
  FETCH_USER_LOADING,
  FETCH_REPOS,
  FETCH_REPOS_LOADING
} from '../constants/action-types';

export const fetchUser = (user) => ({
  type: FETCH_USER,
  payload: user
});

export const fetchUserLoading = (user) => ({
  type: FETCH_USER_LOADING,
  payload: user
});

export const fetchRepos = (user) => ({
  type: FETCH_REPOS,
  payload: user
});

export const fetchReposLoading = (user) => ({
  type: FETCH_REPOS_LOADING,
  payload: user
});
