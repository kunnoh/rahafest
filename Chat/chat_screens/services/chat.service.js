import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const acceptedFriendsList = async (userId) => {
  try {
    const { data } = await axios.get(`${prod.local}/accepted-friends/${userId}`);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const FriendRequests = async (userId) => {
  try {
    const { data } = await axios.get(`${prod.local}/friend-request/${userId}`);
    return data;
  } catch (e) {
    throw handleError(e);
  }
}

export { acceptedFriendsList, FriendRequests };
