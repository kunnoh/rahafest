import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetMessages = async (access_token, recepientId) => {
  try {
    const { data } = await axios.get(`${prod.local}/messages/${recepientId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const GetRecipientData = async (access_token, recepientId) => {
  try {
    const { data } = await axios.get(`${prod.local}/user/${recepientId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const SendMessage = async (access_token, formData) => {
  try {
    const { data } = await axios.post(`${prod.local}/messages`, formData, {
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

const DeleteMesages = async (access_token, messageIds) => {
  try {
    const { data } = await axios.post(
      `${prod.local}/deleteMessages`,
      { messageIds },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return data;
  } catch (e) {
    console.log(e)
    throw handleError(e);
  }
};

export { GetMessages, GetRecipientData, SendMessage, DeleteMesages };
