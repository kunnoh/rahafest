import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  FlatList,
  Platform,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { UserType } from "../../UserContext";
import { Post } from "../../components/singlePost/post.component";
import { GetAllMessages } from "../../services/forum.service";

const FeedsScreen = () => {
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const { userId, setUserId } = useContext(UserType);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const fetchAllMessages = async () => {
    try {
      const res = await GetAllMessages();
      // setMessages(res);
      setMessages([
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText: "This is a sample feed content.",
          timeStamp: "23h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
        {
          profileImage: require("../../../api/files/1688547106897-739523091-image.jpg"),
          name: "alvin",
          username: "kunnoh",
          messageType: "text",
          messageText:
            "This is a sample feed content.uidbduifnb huwahfoa awhuohofa pc ascipbasuiap",
          timeStamp: "2h",
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllMessages();
  }, []);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  };

  const handleSizeContentChange = () => {
    scrollToBottom();
  };

  const handleEmojiPress = () => {
    setShowEmojiSelector(!showEmojiSelector);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Your feeds",
      headerLeft: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
        </View>
      ),
    });
  });

  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };

  const handleLike = (text) => {
    // alert(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ height: "100%" }}>
      <FlatList
        ref={scrollViewRef}
        data={messages}
        renderItem={({ item, index }) => <Post index={index} item={item} handleLike={handleLike} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Pressable
        style={{
          position: "absolute",
          bottom: 10,
          right: 35,
          backgroundColor: "purple",
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}>
        <TouchableOpacity>
          <Ionicons name="create" size={54} color="salmon" />
        </TouchableOpacity>
      </Pressable>
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#dddddd",
          marginBottom: showEmojiSelector ? 0 : 25,
          bottom: 0,
        }}>
        <Entypo
          onPress={handleEmojiPress}
          style={{ marginRight: 5 }}
          name="emoji-happy"
          size={24}
          color="gray"
        />
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#dddddd",
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
          placeholder="Type Your message..."
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            marginHorizontal: 8,
          }}> */}
      {/* <Entypo onPress={pickImage} name="camera" size={24} color="gray" /> */}
      {/* </View> */}
      {/* </View> */}
    </KeyboardAvoidingView>
  );
};

export default FeedsScreen;
