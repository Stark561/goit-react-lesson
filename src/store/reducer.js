import { combineReducers } from 'redux';
import { todoReducer } from './todo/todoSlice';
import { usersReducer } from './users/usersSlice';
import { authReducer } from './auth/authSlice';

const reducer = combineReducers({
  todo: todoReducer,
  users: usersReducer,
  auth: authReducer,
});

export default reducer;
