import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserName, logInUser } from 'services/users-api';

export const logInAsynk = createAsyncThunk(
  'auth/logIn',
  async (logIndata, { dispatch }) => {
    const responce = await logInUser(logIndata);
    dispatch(getUserNameAsynk());
    return responce;
  }
);

export const getUserNameAsynk = createAsyncThunk('auth/userName', async () => {
  const responce = await getUserName();
  return responce;
});
