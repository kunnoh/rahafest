import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const acceptedFriendsList = async (access_token) => {
  try {
    const { data } = await axios.get(`${prod.local}/accepted-friends`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    // console.log({ chattes: data });
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const FriendRequests = async (access_token) => {
  try {
    const { data } = await axios.get(`${prod.local}/friend-request`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

export { acceptedFriendsList, FriendRequests };
