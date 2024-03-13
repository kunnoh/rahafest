import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LineupStack from "./LineupStack";
import Chat from "../../Chat/chat_screens/Chat";
import { Info, Menu, Schedule, Map } from "../app/screens";
import HomeScreen from "../app/screens/home";

const Tab = createBottomTabNavigator();

export default function HomeNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { borderTopWidth: 0 },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Homee"
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
        component={Map}
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

      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) =>
            focused ? (
              <MaterialCommunityIcons name="chat" size={size} color="#bc4a0d" />
            ) : (
              <MaterialCommunityIcons name="chat" size={size} color="black" />
            ),
          tabBarLabelStyle: { color: "black" },
        }}
      />
    </Tab.Navigator>
  );
}
