import { createAsyncThunk } from "@reduxjs/toolkit";

import { GetUserApi } from "../../../Chat/chat_screens/services/auth.service";

export const getUsers = createAsyncThunk("chat/fetchChat", async (token) => {
  const response = await GetUserApi(token);
  return response;
});
export const fetchChat = createAsyncThunk("chat/fetchChat", async (token) => {
  const response = await GetUserApi(token);
  return response;
});
