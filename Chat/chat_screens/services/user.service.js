import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetFriendRequestSent = async (access_token) => {
  try {
    const { data } = await axios.get(`${prod.local}/friend-requests/sent`, {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const GetUserFriends = async (access_token) => {
  try {
    const { data } = await axios.get(`${prod.local}/friends`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const SendFriendRequest = async (access_token, selectedUserId) => {
  try {
    const { data } = await axios.post(
      `${prod.local}/friend-request`,
      { selectedUserId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const FetchUserMessages = async (access_token, itemId) => {
  try {
    const { data } = await axios.get(`${prod.local}/messages/${itemId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const CancelFriendRequest = async (access_token, selectedUserId) => {
  try {
    const { data } = await axios.put(
      `${prod.local}/friend-request`,
      { selectedUserId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const AcceptRequest = async (friendReqId, access_token) => {
  try {
    const { data } = await axios.post(
      `${prod.local}/friend-request/accept`,
      {
        selectedUserId: friendReqId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    // console.log("FRIENDID:: \t", friendReqId);
    // console.log("USERID::\t", userId);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const RemoveFriend = async (access_token, recipientId) => {
  try {
    const { data } = await axios.post(
      `${prod.local}/unfriend`,
      { recipientId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

export {
  GetFriendRequestSent,
  GetUserFriends,
  SendFriendRequest,
  AcceptRequest,
  CancelFriendRequest,
  FetchUserMessages,
  RemoveFriend,
};
