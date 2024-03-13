import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import { UserType } from "../UserContext";
import UserChat from "../components/UserChat";
import { acceptedFriendsList } from "../services/chat.service";

const ChatsScreen = () => {
  const [acceptedFriends, setAcceptedFriends] = useState([]);
  const { access_token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const acceptedFriend = async () => {
      try {
        const friends = await acceptedFriendsList(access_token);
        // console.log("ACCEPTED FRIENDS:\t", friends);
        setAcceptedFriends(friends);
      } catch (error) {
        console.log("error showing the accepted friends", error);
      }
    };
    acceptedFriend();
  }, []);
  return (
    <SafeAreaView>
      {acceptedFriends.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 50 }}>You have no friends to chat with</Text>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable>
          {acceptedFriends.map((item, index) => (
            <UserChat key={index} item={item} />
          ))}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatsScreen;
