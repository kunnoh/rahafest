import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetAllMessages = async () => {
  try {
    const { data } = axios.get(`${prod.local}/forum/messages`);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const PostMessage = async (msg) => {
  try {
    const { data } = axios.post(`${prod.local}/forum/messages`, msg, headers);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

export { GetAllMessages, PostMessage };
