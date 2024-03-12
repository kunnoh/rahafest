import { createAsyncThunk } from "@reduxjs/toolkit";

import { LoginApi, LogoutApi } from "../../../Chat/chat_screens/services/auth.service";

// export const login = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
//   try {
//     const c = await LoginApi(userData);
//     console.log("DAta: \t", c);
//     return c;
//     // return await LoginApi(userData);
//   } catch (e) {
//     rejectWithValue(e);
//   }
// });

// export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
//   try {
//     return await LogoutApi();
//   } catch (e) {
//     rejectWithValue(e);
//   }
// });

export const login = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await LoginApi(userData);
    console.log("Login successful:", response);
    return response;
  } catch (error) {
    // console.error("Login failed:", error.message);
    return rejectWithValue("Login failed. Please try again."); // Provide a more descriptive error message
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  try {
    const response = await LogoutApi();
    console.log("Logout successful:", response);
    return response;
  } catch (error) {
    // console.error("Logout failed:", error.message);
    return rejectWithValue("Logout failed. Please try again."); // Provide a more descriptive error message
  }
});
