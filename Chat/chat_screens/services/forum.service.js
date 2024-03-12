import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetAllMessages = async (access_token) => {
  try {
    const { data } = axios.get(`${prod.local}/forum/messages`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const PostMessage = async (access_token, msg) => {
  try {
    const { data } = axios.post(`${prod.local}/forum/messages`, msg, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

export { GetAllMessages, PostMessage };
