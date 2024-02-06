import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, Pressable, Linking, FlatList } from 'react-native';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';
import MamaKilo from '../../components/MamaKilo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LineupList from './LineupList';
import LineupDetail from './LineupDetail';


const Stack = createNativeStackNavigator()


export default function Lineup() {

    return(
        <></>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  background: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  }, 

  logo: {
    //position: "absolute",
    //zIndex: 1,
    //elevation: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    //marginLeft: (Dimensions.get('window').width / 2 ) - 75,
    marginTop: 40,
    marginBottom: 20,
    
    
   
  },

  mamakiloContainer: {
    //backgroundColor: "#483248",
    zIndex: 1,
    //position: 'absolute',
    marginTop: 150,
    marginLeft: (Dimensions.get('window').width / 2 ) - 200,
    height: 200,
    paddingHorizontal: 10, 
    opacity: 0.8, justifyContent: 'center',
    alignItems: 'center',
    width: 400
  },

  mamakilo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1
    
  }



 
});
