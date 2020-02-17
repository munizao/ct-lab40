import { combineReducers } from 'redux';
import { reposReducer } from './repos-reducer';
import { userReducer } from './user-reducer';

export default combineReducers({
  user: userReducer,
  repos: reposReducer
});
