import { Pressable, Image, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { acceptedFriendStyle } from "./acceptedFriend.style";

const AcceptedFriend = ({ index, item, isLoading, Unfriend }) => {
  const goToChat = () => {
    alert("Chat with " + item.name);
    // console.log(item);
  };

  return (
    <Pressable key={index} style={acceptedFriendStyle.mainPressable} onPress={goToChat}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "wheat" }}
        source={{ uri: item.image }}
      />

      <Text style={{ fontSize: 15, marginLeft: 10, flex: 1 }}>{item?.name}</Text>

      <Pressable onPress={() => Unfriend(item)} style={acceptedFriendStyle.unfriendPressable}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white" style={{ marginRight: 10 }} />
        ) : (
          <Text style={{ textAlign: "center", color: "white" }}>Unfriend</Text>
        )}
      </Pressable>
    </Pressable>
  );
};

export default AcceptedFriend;
