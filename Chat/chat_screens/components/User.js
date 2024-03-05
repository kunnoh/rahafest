import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import prod from "../../../env/env";
import { UserType } from "../UserContext";
import {
  CancelFriendRequest,
  GetFriendRequestSent,
  GetUserFriends,
  SendFriendRequest,
} from "../services/user.service";
import { ActivityIndicator } from "react-native-paper";

const User = ({ item }) => {
  const { userId, setUserId } = useContext(UserType);
  const [requestSent, setRequestSent] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);
  const [userFriends, setUserFriends] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        console.log("CURRENT USER::\t", userId);
        const resp = await GetFriendRequestSent(userId);
        console.log("FRIEND REQ SENT::\t", resp);
        setFriendRequests(resp);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchFriendRequests();
  }, []);

  useEffect(() => {
    const fetchUserFriends = async () => {
      try {
        const resp = await GetUserFriends(userId);
        console.log("Friends::\t", resp);
        setUserFriends("USER FRIENDS::\t", resp);
      } catch (error) {
        console.log("Error message", error);
      }
    };

    fetchUserFriends();
  }, []);

  const sendFriendRequest = async (currentUserId, selectedUserId) => {
    try {
      setLoading(true);
      const resp = await SendFriendRequest(currentUserId, selectedUserId);
      setRequestSent(true);
      console.log("SEND FRIEND REQ::\t", resp);
    } catch (error) {
      console.log("error message", error);
    } finally {
      setLoading(false);
    }
  };

  const cancelFriendRequest = async () => {
    try {
      const { data } = await CancelFriendRequest();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Pressable style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
      <View>
        {/* <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            resizeMode: "cover",
          }}
          source={{ uri: item.image || "" }}
        /> */}
      </View>

      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{item?.name}</Text>
        <Text style={{ marginTop: 4, color: "gray" }}>{item?.email}</Text>
      </View>
      {userFriends.includes(item._id) ? (
        <Pressable
          style={{
            backgroundColor: "#82CD47",
            padding: 10,
            width: 105,
            borderRadius: 6,
          }}>
          <Text style={{ textAlign: "center", color: "white" }}>Friends</Text>
        </Pressable>
      ) : requestSent || friendRequests.some((friend) => friend._id === item._id) ? (
        <Pressable
          onPress={() => cancelFriendRequest(userId, item._id)}
          style={{
            backgroundColor: "gray",
            padding: 10,
            width: 105,
            borderRadius: 6,
          }}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 13 }}>Request Sent</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => sendFriendRequest(userId, item._id)}
          style={{
            backgroundColor: "#567189",
            padding: 10,
            borderRadius: 6,
            width: 105,
          }}>
          {/* Conditionally render ActivityIndicator when loading */}
          {loading ? (
            <ActivityIndicator size="small" color="white" style={{ marginRight: 10 }} />
          ) : null}
          <Text style={{ textAlign: "center", color: "white", fontSize: 13 }}>Add Friend</Text>
        </Pressable>
      )}
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({});
