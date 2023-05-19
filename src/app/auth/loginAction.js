import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";


export const loginAction = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
  try {
    const response = await axiosInstance.post(`/signin` , payload , {
      headers:{ "Content-Type" : "application/json" , "Accept" : "application/json" }
    });
    const data = response.data;
    return data;
  } catch (error) {
    const message = error.message;
    return thunkAPI.rejectWithValue(message)
  }
});