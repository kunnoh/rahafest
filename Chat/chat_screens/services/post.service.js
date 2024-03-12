import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetPosts = async () => {
  try {
    const { data } = await axios.get(`${prod.local}/forum/messages`);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const SendPost = async (formData) => {
  try {
    const { data } = await axios.post(`${prod.local}/forum/messages`, formData, headers);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const UpdatePost = async (formData) => {
  try {
    const { data } = await axios.post(`${prod.local}/forum/messages`, formData, headers);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const DeletePost = async (messageIds) => {
  try {
    const { data } = await axios.delete(`${prod.local}/forum/messages/${messageIds}`);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

export { GetPosts, SendPost, UpdatePost, DeletePost };
