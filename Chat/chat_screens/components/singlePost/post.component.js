import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text, Pressable, TouchableOpacity } from "react-native";

import { feedsStyle } from "./post.style";

export const Post = ({ index, item }) => {
  const openHandler = () => {
    alert(item.username);
  };

  const handleLike = () => {
    alert("liked " + item.name + " post!");
  };
  return (
    <Pressable key={index}>
      <View style={feedsStyle.postContainer}>
        <Image style={feedsStyle.thumbnail} source={item?.profileImage} />
        <View style={feedsStyle.content}>
          <View style={feedsStyle.nameContainer}>
            <TouchableOpacity
              onPress={openHandler}
              style={{ display: "flex", flexDirection: "row" }}>
              <Text style={feedsStyle.name}>{item?.name}</Text>
              <Text style={feedsStyle.username}>@{item?.username}</Text>
            </TouchableOpacity>
            <Text style={feedsStyle.time}>{item?.timeStamp}</Text>
            <TouchableOpacity style={{ marginLeft: 12 }}>
              <Ionicons name="ellipsis-vertical" size={24} />
            </TouchableOpacity>
          </View>
          <Text style={feedsStyle.message}>{item?.messageText}</Text>
          <View style={feedsStyle.feedback}>
            <TouchableOpacity style={{ padding: 5, width: 50 }} onPress={handleLike}>
              <Ionicons name="heart" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
