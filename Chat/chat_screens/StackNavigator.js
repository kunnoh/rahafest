import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ChatMessagesScreen from "./screens/ChatMessagesScreen";
import ChatsScreen from "./screens/ChatsScreen";
import FriendsScreen from "./screens/FriendsScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import FeedsScreen from "./screens/feeds/FeedsScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="Feeds" component={FeedsScreen} />

      <Stack.Screen name="Chats" component={ChatsScreen} />

      <Stack.Screen name="Messages" component={ChatMessagesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
