import { combineReducers } from 'redux';
import { todoReducer } from './todo/todoSlice';

const reducer = combineReducers({
  todo: todoReducer,
});

export default reducer;
