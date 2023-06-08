import { TODO_ADD, TODO_DELETE, TODO_FILTER } from './types';

export const addTodoAction = todo => {
  return {
    type: TODO_ADD,
    payload: todo,
  };
};

export const deleteTodoAction = todoId => {
  return {
    type: TODO_DELETE,
    payload: todoId,
  };
};

export const filterTodoAction = filter => {
  return {
    type: TODO_FILTER,
    payload: filter,
  };
};
