import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  access_token: null,
  otp: null,
  pinReset: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("auth/login/pending", (state) => {
        state.loading = true;
      })
      .addCase("auth/login/fulfilled", (state, action) => {
        state.loading = false;
        state.access_token = action.payload.access_token;
        state.otp = action.payload.otp;
      })
      .addCase("auth/login/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("auth/logout/pending", (state) => {
        state.loading = true;
      })
      .addCase("auth/logout/fulfilled", (state) => {
        state.loading = false;
        state.user = null;
        state.access_token = null;
        state.isVerified = false;
        state.otp = null;
      })
      .addCase("auth/logout/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("auth/getUser/pending", (state) => {
        state.loading = true;
      })
      .addCase("auth/getUser/fulfilled", (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase("auth/getUser/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("auth/register/pending", (state) => {
        state.loading = true;
      })
      .addCase("auth/register/fulfilled", (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase("auth/register/rejected", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
