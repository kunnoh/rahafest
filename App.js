import { FontAwesome5, Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

import { Info, Menu, Schedule } from "./src/app/screens";
import LineupDetail from "./src/app/screens/LineupDetail";
import LineupList from "./src/app/screens/LineupList";
import MapScreen from "./src/app/screens/Map";
import HomeScreen from "./src/app/screens/home/index";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const LineupStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LineupList" component={LineupList} />
        <Stack.Screen name="LineupDetail" component={LineupDetail} />
      </Stack.Navigator>
    );
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { borderTopWidth: 0 },
            tabBarShowLabel: false,
          }}>
          <Tab.Screen
            name="Homer"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, focused }) =>
                focused ? (
                  <Entypo name="home" size={size} color="#bc4a0d" />
                ) : (
                  <Entypo name="home" size={size} color="black" />
                ),
              tabBarLabelStyle: { color: "black" },
            }}
          />

          <Tab.Screen
            name="Lineup"
            component={LineupStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, focused }) =>
                focused ? (
                  <FontAwesome5 name="compact-disc" size={size} color="#bc4a0d" />
                ) : (
                  <FontAwesome5 name="compact-disc" size={size} color="black" />
                ),
              tabBarLabelStyle: { color: "black" },
            }}
          />

          <Tab.Screen
            name="Schedule"
            component={Schedule}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, focused }) =>
                focused ? (
                  <MaterialCommunityIcons name="calendar-clock" size={size} color="#bc4a0d" />
                ) : (
                  <MaterialCommunityIcons name="calendar-clock" size={size} color="black" />
                ),
              tabBarLabelStyle: { color: "black" },
            }}
          />

          <Tab.Screen
            name="Info"
            component={Info}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, focused }) =>
                focused ? (
                  <Ionicons name="information-circle" size={size} color="#bc4a0d" />
                ) : (
                  <Ionicons name="information-circle" size={size} color="black" />
                ),
              tabBarLabelStyle: { color: "black" },
            }}
          />

          <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, focused }) =>
                focused ? (
                  <MaterialCommunityIcons name="food-fork-drink" size={size} color="#bc4a0d" />
                ) : (
                  <MaterialCommunityIcons name="food-fork-drink" size={size} color="black" />
                ),
              tabBarLabelStyle: { color: "black" },
            }}
          />

          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, focused }) =>
                focused ? (
                  <MaterialCommunityIcons name="google-maps" size={size} color="#bc4a0d" />
                ) : (
                  <MaterialCommunityIcons name="google-maps" size={size} color="black" />
                ),
              tabBarLabelStyle: { color: "black" },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
