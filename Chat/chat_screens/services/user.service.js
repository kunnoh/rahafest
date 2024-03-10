import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetFriendRequestSent = async (user_id) => {
  try {
    const { data } = await axios.get(`${prod.local}/friend-requests/sent/${user_id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const GetUserFriends = async (user_id) => {
  try {
    const { data } = await axios.get(`${prod.local}/friends/${user_id}`);
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const SendFriendRequest = async (currentUserId, selectedUserId) => {
  try {
    const { data } = await axios.post(
      `${prod.local}/friend-request`,
      { currentUserId, selectedUserId },
      headers,
    );
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const FetchUserMessages = async (userId, itemId) => {
  try {
    const { data } = await axios.get(`${prod.local}/messages/${userId}/${itemId}`);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const CancelFriendRequest = async (currentUserId, selectedUserId) => {
  try {
    const { data } = await axios.put(
      `${prod.local}/friend-request`,
      { currentUserId, selectedUserId },
      headers,
    );
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const AcceptRequest = async (friendReqId, userId) => {
  try {
    const { data } = await axios.post(
      `${prod.local}/friend-request/accept`,
      {
        senderId: friendReqId,
        recepientId: userId,
      },
      headers,
    );
    // console.log("FRIENDID:: \t", friendReqId);
    // console.log("USERID::\t", userId);
    return data;
  } catch (e) {
    throw handleError(e);
  }
};

const RemoveFriend = async (friendId) => {
  try {
    const { data } = await axios.post(`${prod.local}/unfriend`, friendId, headers);
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
