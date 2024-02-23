import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import Partners from "./Partners";
import Playlist from "./Playlist";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Playlist" component={Playlist} />
      <Stack.Screen name="Partners" component={Partners} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
