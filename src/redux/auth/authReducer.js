import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  access_token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.access_token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("auth/login/pending", (state) => {
        return { ...state, loading: true, access_token: null };
      })
      .addCase("auth/login/fulfilled", (state, action) => {
        return { ...state, loading: false, access_token: action.payload.access_token };
      })
      .addCase("auth/login/rejected", (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })
      .addCase("auth/logout/pending", (state) => {
        return { ...state, loading: true };
      })
      .addCase("auth/logout/fulfilled", (state) => {
        return initialState;
      })
      .addCase("auth/logout/rejected", (state, action) => {
        return { ...state, loading: false, error: action.payload.error };
      });
  },
});

export default authSlice.reducer;
