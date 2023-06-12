import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        state.todo.push(payload);
      },
      prepare: task => {
        const id = nanoid();
        return { payload: { id, todoName: task, completed: false } };
      },
    },
    deleteTodo: (state, { payload }) => {
      state.todo = state.todo.filter(task => task.id !== payload);
    },
    filterTodo: (state, { payload }) => {
      state.filter = payload;
    },
    reverseStatus: (state, { payload }) => {
      state.todo = state.todo.map(task =>
        task.id === payload ? { ...task, completed: !task.completed } : task
      );
    },
  },
});

export const { addTodo, deleteTodo, filterTodo, reverseStatus } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;
