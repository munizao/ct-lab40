import { 
  FETCH_USER_PENDING,
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED
} from '../action-types';

const initialState = {
  loading: false,
  user: null,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // Note: middleware handles FETCH_USER for us, and gives us the other actions 
    case FETCH_USER_PENDING:
      return { ...state, loading: true };
    case FETCH_USER_FULFILLED:
      return { ...state, loading: false, user: action.payload, error: null };
    case FETCH_USER_REJECTED:
      return { ...state, loading: false, user: null, error: action.payload }; 
    default:
      return state;
  }
}
