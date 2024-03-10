import React, { useEffect, useContext, useState, useRef } from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native";

import { success } from "../../../src/utils/toast";
import { UserType } from "../UserContext";
import FriendRequest from "../components/FriendRequest";
import AcceptedFriend from "../components/acceptedFriends/acceptedFriend.component";
import { FriendRequests } from "../services/chat.service";
import { AcceptRequest, GetUserFriends, RemoveFriend } from "../services/user.service";

const FriendsScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [isAccepted, setIsAccepted] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    fetchFriendRequests();
    // fetchFriends();
  }, []);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriendRequests = async () => {
    try {
      const response = await FriendRequests(userId);
      setFriendRequests(response);
    } catch (err) {
      console.log("error message", err);
    }
  };

  const fetchFriends = async () => {
    try {
      const response = await GetUserFriends(userId);
      // console.log(response[0])
      setFriends(response);
      // setFriends([{"_id": "65e6dbcf0908b4cf19983b88", "email": "Dere@gmail.com", "freindRequests": [], "friends": ["65e6ae2c4c14e7508a763136"], "image": "1", "name": "Dere", "sentFriendRequests": ["65e6ae2c4c14e7508a763136", "65e077fc81a3fbec15184442", "65e0379e636bc2478142e5f7", "65e0374e636bc2478142e5f3", "65e039e08d8a5066c945aeca"]}, {"_id": "65e6dbcf0908b4cf19983b88", "email": "Dere@gmail.com", "freindRequests": [], "friends": ["65e6ae2c4c14e7508a763136"], "image": "1", "name": "Dere", "sentFriendRequests": ["65e6ae2c4c14e7508a763136", "65e077fc81a3fbec15184442", "65e0379e636bc2478142e5f7", "65e0374e636bc2478142e5f3", "65e039e08d8a5066c945aeca"]}]);
    } catch (err) {
      console.log("error message", err);
    }
  };

  const acceptRequest = async (friendRequestId) => {
    try {
      const resp = await AcceptRequest(friendRequestId, userId);
      success("Friend request accepted!", 2000);
      // console.log("USERID:: \t", resp);
      setIsAccepted(true);
    } catch (err) {
      console.log("error acceptin the friend request", err);
    }
  };

  const Unfriend = async (friendId) => {
    console.log("UNFRIEND", friendId);
    try {
      const res = await RemoveFriend(friendId);
      fetchFriends();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 10, marginHorizontal: 12 }}>
        {friendRequests.length > 0 && <Text>Your Friend Requests!</Text>}

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
      {friends.length > 0 && (
        <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 15 }}>My friends</Text>
      )}
      <FlatList
        ref={scrollViewRef}
        data={friends}
        renderItem={({ item, index }) => (
          <AcceptedFriend index={index} item={item} Unfriend={Unfriend} />
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{ padding: 15 }}
      />
    </SafeAreaView>
  );
};

export default FriendsScreen;
