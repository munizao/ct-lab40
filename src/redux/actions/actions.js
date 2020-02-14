import { 
  FETCH_USER,
  FETCH_REPOS,
} from '../constants/action-types';

export const fetchUser = (user) => ({
  type: FETCH_USER,
  payload: user
});

export const fetchRepos = (user) => ({
  type: FETCH_REPOS,
  payload: user
});
