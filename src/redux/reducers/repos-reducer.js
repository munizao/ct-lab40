import { 
  FETCH_REPOS_PENDING,
  FETCH_REPOS_FULFILLED,
  FETCH_REPOS_REJECTED,
  FETCH_USER_REJECTED
} from '../action-types';

export const initialState = {
  loading: false,
  user: null,
  error: null
};

export const reposReducer = (state = initialState, action) => {
  switch(action.type) {
    // Note: middleware handles FETCH_REPOS for us, and gives us the other actions 
    case FETCH_REPOS_PENDING:
      return { ...state, loading: true, repos: null, error: null,  };
    case FETCH_REPOS_FULFILLED:
      return { ...state, loading: false, repos: action.payload, error: null };
    case FETCH_REPOS_REJECTED:
      return { ...state, loading: false, repos: null, error: action.payload };
    case FETCH_USER_REJECTED:
      return { ...state, loading: false, repos: null, error: null }; 
    default:
      return state;
  }
};
