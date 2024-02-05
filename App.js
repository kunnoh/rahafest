import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, Pressable, Linking } from 'react-native';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';
import MamaKilo from './components/MamaKilo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Lineup from './Lineup';
import Schedule from './Schedule';
import Chat from './Chat/chat_screens/Chat';
import Info from './Info';
import LineupList from './LineupList';
import LineupDetail from './LineupDetail';



const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {

  const LineupStack = () => {
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="LineupList" component={LineupList} />
        <Stack.Screen name="LineupDetail" component={LineupDetail} />
      </Stack.Navigator>
    )     
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={
        {
          tabBarStyle: { borderTopWidth: 0},
          tabBarShowLabel: false,
        }
      }>
        
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarIcon : ({size, focused }) => focused ? <Entypo name="home" size={size} color='#bc4a0d'/> : <Entypo name="home" size={size} color='black'/>,
          tabBarLabelStyle: {color: 'black'},
        }} />

        <Tab.Screen name="Lineup" component={LineupStack} options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <FontAwesome5 name="compact-disc" size={size} color='#bc4a0d' /> : <FontAwesome5 name="compact-disc" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }} />

        <Tab.Screen name="Schedule" component={Schedule} options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <MaterialCommunityIcons name="calendar-clock" size={size} color='#bc4a0d' /> : <MaterialCommunityIcons name="calendar-clock" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }}/>

        <Tab.Screen name="Info" component={Info} options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <Ionicons name="information-circle" size={size} color='#bc4a0d' /> : <Ionicons name="information-circle" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }}/>

        {/* <Tab.Screen name="Chat" component={Chat} options={{
          headerShown: false,
          tabBarIcon : ({size, focused}) => focused ? <Entypo name="chat" size={size} color='#bc4a0d' /> : <Entypo name="chat" size={size} color='black' />,
          tabBarLabelStyle: {color: 'black'}
        }}/> */}
      </Tab.Navigator>
    </NavigationContainer>
  )

}





const styles = StyleSheet.create({
  

 
});
