import { 
  FETCH_USER,
  FETCH_REPOS,
} from '../action-types';
import { getUser, getRepos } from '../../services/github-api';

export const fetchUser = (userName) => ({
  type: FETCH_USER,
  payload: getUser(userName)
});

export const fetchRepos = (userName) => ({
  type: FETCH_REPOS,
  payload: getRepos(userName)
});
