import { combineReducers } from 'redux';
import todoReducer from './todo/todoReducer';

const reducer = combineReducers({
  todo: todoReducer,
});

export default reducer;
