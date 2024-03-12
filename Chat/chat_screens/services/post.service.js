import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetPosts = async (access_token) => {
  console.log("TOKEN::\t", access_token);
  try {
    const { data } = await axios.get(`${prod.local}/forum/messages`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const SendPost = async (formData, access_token) => {
  try {
    const { data } = await axios.post(`${prod.local}/forum/messages`, formData, {
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

const UpdatePost = async (access_token, formData) => {
  try {
    const { data } = await axios.post(`${prod.local}/forum/messages`, formData, {
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

const DeletePost = async (access_token, messageIds) => {
  try {
    const { data } = await axios.delete(`${prod.local}/forum/messages/${messageIds}`, {
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

export { GetPosts, SendPost, UpdatePost, DeletePost };
