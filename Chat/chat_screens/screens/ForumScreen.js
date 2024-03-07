import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

const ForumScreen = () => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
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

  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Forum",
      headerLeft: () => {
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
        </View>;
      },
    });
  });

  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date(time).toLocaleString("en-US", options);
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1 }}
        onContentSizeChange={handleSizeContentChange}
      />
    </KeyboardAvoidingView>
  );
};

export default ForumScreen;
