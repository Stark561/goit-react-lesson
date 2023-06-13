import { combineReducers } from 'redux';
import { todoReducer } from './todo/todoSlice';
import { usersReducer } from './users/usersSlice';

const reducer = combineReducers({
  todo: todoReducer,
  users: usersReducer,
});

export default reducer;
