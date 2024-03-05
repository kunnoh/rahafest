import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";

import { UserType } from "../UserContext";
import UserChat from "../components/UserChat";
import { acceptedFriendsList } from "../services/chat.service";

const ChatsScreen = () => {
  const [acceptedFriends, setAcceptedFriends] = useState([]);
  const { userId, setUserId } = useContext(UserType);
  const navigation = useNavigation();
  useEffect(() => {
    const acceptedFriend = async () => {
      try {
        const friends = await acceptedFriendsList(userId);
        console.log("MABESHTE", friends);
        setAcceptedFriends(friends);
      } catch (error) {
        console.log("error showing the accepted friends", error);
      }
    };

    acceptedFriend();
  }, []);
  console.log("friends", acceptedFriends);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Pressable>
        {acceptedFriends.map((item, index) => (
          <UserChat key={index} item={item} />
        ))}
      </Pressable>
    </ScrollView>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({});
