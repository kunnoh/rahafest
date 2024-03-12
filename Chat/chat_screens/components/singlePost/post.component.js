import { Ionicons } from "@expo/vector-icons";
import { View, Image, Text, Pressable, TouchableOpacity } from "react-native";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";

import { feedsStyle } from "./post.style";

export const Post = ({ index, item, editPost, deletePost, handleLike }) => {
  const openHandler = () => {
    alert(item.username);
  };

  const handlelike = () => {
    alert("liked " + item.name + " post!");
  };

  const openOptions = () => {
    alert("open options");
  };

  const editpost = async () => {
    editPost(item);
  }

  const deletepost = async () => {
    deletePost(item);
  }

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
              {/* <Text style={feedsStyle.username}>@{item?.name}</Text> */}
            </TouchableOpacity>
            {/* <Text style={feedsStyle.time}>{item?.timeStamp}</Text> */}
            {/* <TouchableOpacity style={{ marginLeft: 12 }} onPress={openOptions}>
              <Ionicons name="ellipsis-vertical" size={24} />
            </TouchableOpacity> */}
            {/* <Menu>
              <MenuTrigger />
              <MenuOptions>
                <MenuOption onSelect={editpost} text="edit" />
                <MenuOption onSelect={deletepost} text="delete" />
              </MenuOptions>
            </Menu> */}
          </View>
          <Text style={feedsStyle.message}>{item?.message}</Text>
          {/* <Text style={feedsStyle.message}>{item?.messageText}</Text> */}
          {/* <View style={feedsStyle.feedback}>
            <TouchableOpacity style={{ padding: 5, width: 50 }} onPress={handleLike}>
              <Ionicons name="heart" size={24} color="black" />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Pressable>
  );
};
