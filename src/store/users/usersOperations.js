import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteUser, fetchUsers } from 'services/users-api';

export const getUsersThunk = createAsyncThunk(
  'users/getAllUsers',
  async ({ skip, LIMIT }, { rejectWithValue }) => {
    try {
      const { data } = await fetchUsers(skip, LIMIT);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  'users/deleteUser',
  async (userId, { rejectWithValue, dispatch }) => {
    try {
      await deleteUser(userId);
      //   dispatch(getUsersThunk({ skip: 0, LIMIT: 10 }));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
