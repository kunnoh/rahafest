import React, { useEffect, useContext, useState, useRef } from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { success } from "../../../src/utils/toast";
import { UserType } from "../UserContext";
import FriendRequest from "../components/FriendRequest";
import AcceptedFriend from "../components/acceptedFriends/acceptedFriend.component";
import { FriendRequests } from "../services/chat.service";
import { AcceptRequest, GetUserFriends, RemoveFriend } from "../services/user.service";

const FriendsScreen = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const scrollViewRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { access_token } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchFriendRequests();
    fetchFriends();
  }, []);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  };

  // useEffect(() => {
  //   fetchFriends();
  // }, []);

  const fetchFriendRequests = async () => {
    try {
      const response = await FriendRequests(access_token);
      setFriendRequests(response);
    } catch (err) {
      console.log("error message", err);
    }
  };

  const fetchFriends = async () => {
    try {
      const response = await GetUserFriends(access_token);
      // console.log(response)
      setFriends(response);
    } catch (err) {
      console.log("error message", err);
    }
  };

  const acceptRequest = async (friendRequestId) => {
    try {
      const resp = await AcceptRequest(friendRequestId, access_token);
      success("Friend request accepted!", 2000);
      setIsAccepted(true);
      fetchFriends();
      fetchFriendRequests();
    } catch (err) {
      console.log("error acceptin the friend request", err);
    }
  };

  const Unfriend = async (friend) => {
    // console.log("UNFRIEND", friend);
    const recipientId = friend._id;
    setIsLoading(true);
    try {
      const res = await RemoveFriend(access_token, recipientId);
      fetchFriends();
      // console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 10, marginHorizontal: 12 }}>
        {friendRequests.length > 0 && <Text>Your Friend Requests!</Text>}
        {friendRequests.length === 0 && (
          <Text style={{ textAlign: "center", marginHorizontal: 20 }}>
            You have no Friend Requests!
          </Text>
        )}

        {friendRequests.map((item, index) => (
          <FriendRequest
            key={index}
            item={item}
            friendRequests={friendRequests}
            Unfriend={Unfriend}
            setFriendRequests={setFriendRequests}
            acceptRequest={acceptRequest}
            isAccepted={isAccepted}
          />
        ))}
      </View>
      {friends.length === 0 && (
        <Text style={{ textAlign: "center", marginHorizontal: 20 }}>You have no Friends!</Text>
      )}
      {friends.length > 0 && (
        <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 15 }}>Recent friends</Text>
      )}
      <FlatList
        ref={scrollViewRef}
        data={friends}
        renderItem={({ item, index }) => (
          <AcceptedFriend index={index} item={item} isLoading={isLoading} Unfriend={Unfriend} />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{ padding: 15 }}
      />
    </SafeAreaView>
  );
};

export default FriendsScreen;
