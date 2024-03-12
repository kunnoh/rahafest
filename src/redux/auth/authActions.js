import { createAsyncThunk } from "@reduxjs/toolkit";

import { LoginApi, LogoutApi, GetUserApi } from "../../../Chat/chat_screens/services/auth.service";

export const login = createAsyncThunk("auth/login", (userData, { rejectWithValue }) => {
  try {
    return LoginApi(userData);
  } catch (error) {
    console.log("Login failed:", error.message);
    return rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", (_, { rejectWithValue }) => {
  try {
    return LogoutApi();
  } catch (error) {
    console.log("Logout failed:", error.message);
    return rejectWithValue(error.message);
  }
});

export const getUser = createAsyncThunk("auth/getUser", (token, { rejectWithValue }) => {
  try {
    console.log("token", token);
    return GetUserApi(token);
  } catch (error) {
    console.log("Get user failed:", error.message);
    return rejectWithValue(error.message);
  }
});
