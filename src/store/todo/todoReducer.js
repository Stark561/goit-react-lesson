import { initialState } from './initialState';

import { TODO_ADD, TODO_DELETE, TODO_FILTER } from './types';

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_ADD:
      return { ...state, todo: [...state.todo, payload] };

    case TODO_DELETE:
      return { ...state, todo: state.todo.filter(el => el.id !== payload) };

    // case TODO_FILTER:
    //   return {
    //     ...state,
    //     filteredTodo: state.todo.filter(el =>
    //       el.todoName.toLowerCase().includes(payload.toLowerCase())
    //     ),
    //   };

    case TODO_FILTER:
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
