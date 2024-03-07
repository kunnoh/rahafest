import React, { useEffect, useContext, useState } from "react";
import { Text, View } from "react-native";

import { UserType } from "../UserContext";
import FriendRequest from "../components/FriendRequest";
import { FriendRequests } from "../services/chat.service";

const FriendsScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [friendRequests, setFriendRequests] = useState([]);
  useEffect(() => {
    fetchFriendRequests();
  }, []);

  const fetchFriendRequests = async () => {
    try {
      const response = await FriendRequests(userId);
      setFriendRequests(response);
    } catch (err) {
      console.log("error message", err);
    }
  };

  return (
    <View style={{ padding: 10, marginHorizontal: 12 }}>
      {friendRequests.length > 0 && <Text>Your Friend Requests!</Text>}

      {friendRequests.map((item, index) => (
        <FriendRequest
          key={index}
          item={item}
          friendRequests={friendRequests}
          setFriendRequests={setFriendRequests}
        />
      ))}
    </View>
  );
};

export default FriendsScreen;
