import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";


export const forgotAction = createAsyncThunk('forgot/password', async (payload, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`/auth/resetlink` , payload.data);
    const data = response.data;
    return data;
  } catch (error) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message)
  }
});