import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatMessagesScreen from "../../Chat/chat_screens/screens/ChatMessagesScreen";
import ChatsScreen from "../../Chat/chat_screens/screens/ChatsScreen";
import DashboardScreen from "../../Chat/chat_screens/screens/DashboardScreen";
import FriendsScreen from "../../Chat/chat_screens/screens/FriendsScreen";
import LoginScreen from "../../Chat/chat_screens/screens/LoginScreen";
import RegisterScreen from "../../Chat/chat_screens/screens/RegisterScreen";
import FeedsScreen from "../../Chat/chat_screens/screens/feeds/FeedsScreen";

const Stack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="Feeds" component={FeedsScreen} />
      <Stack.Screen name="Chats" component={ChatsScreen} />
      <Stack.Screen name="Messages" component={ChatMessagesScreen} />
    </Stack.Navigator>
  );
}
