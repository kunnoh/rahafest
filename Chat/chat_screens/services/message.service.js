import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetMessages = async (userId, recepientId) => {
  try {
    const { data } = await axios.get(`${prod.local}/messages/${userId}/${recepientId}`);
    return data;
  } catch (e) {
    console.log(e);
    throw handleError(e);
  }
};

const GetRecipientData = async (recepientId) => {
  try {
    const { data } = await axios.get(`${prod.local}/user/${recepientId}`);
    console.log("RECIPIENT::\t", data);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const SendMessage = async (formData) => {
  try {
    const { data } = await axios.post(`${prod.local}/messages`, formData, headers);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const DeleteMesages = async (messageIds) => {
  try {
    const { data } = await axios.post(`${prod.local}/deleteMessages`, { messageIds }, headers);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

export { GetMessages, GetRecipientData, SendMessage, DeleteMesages };
