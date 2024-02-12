import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, Pressable, Linking, FlatList } from 'react-native'
import * as Font from 'expo-font'
import { useEffect, useState } from 'react'
import MamaKilo from '../utils/MamaKilo'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'

export default function LineupDetail () {
  const navigation = useNavigation()
  const route = useRoute()

  return (

      <ImageBackground source={{ uri: 'https://www.wknd.fi/content/uploads/2023/08/WKND23_Day2_223431_HeikkiSalonen_.jpg' }} style={{ flex: 1, position: 'relative' }} resizeMode='cover'>

      <SafeAreaView style={styles.container}>

      <Pressable style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" color='white' size={40} />
      </Pressable>

      <View style = {styles.logo}>

        <Image style={{ height: 130, width: 130, marginRight: 10, flex: 1 / 4 }} source={require('../../assets/images/rahalogo.png')} />

      {/** <span style={{ color: "#11e0ff" }}>R</span>
      <span style={{ color: "#ffffff" }}>A</span>
      <span style={{ color: "#e42eff" }}>H</span>
      <span style={{ color: "#ffdf2d" }}>A</span>
      <span style={{ color: "#05e705" }}>F</span>
      <span style={{ color: "#ff1748" }}>E</span>
      <span style={{ color: "#ffffff" }}>S</span>
  <span style={{ color: "#11e0ff" }}>T</span> **/}

       {/** <View style={{flex: 3/4}}>
       <MamaKilo color="#ffffff" size={25} height={35}>Food, Art, Culture, Music</MamaKilo>
</View>**/}

       </View>

       <View style={{ marginHorizontal: 20, flex: 1, alignItems: 'center', marginTop: 160 }}>
          {route.params.item.imageDetail()}

          <MamaKilo color="white" size={40} height={50}>{route.params.item.name}</MamaKilo>

          <MamaKilo color="white" size={30} height={40}>{route.params.item.country}</MamaKilo>

          <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Entypo name="spotify" size={40} color= "#1DB954" style={{ marginHorizontal: 10 }}/>
            <Entypo name="facebook" size={40} color= "#4267B2" style={{ marginHorizontal: 10 }}/>
            <Entypo name="instagram" size={40} color= "#C13584" style={{ marginHorizontal: 10 }} />
            <Entypo name="youtube" size={40} color= "#FF0000" style={{ marginHorizontal: 10 }} />
            <Entypo name="soundcloud" size={40} color= "#ff8800" style={{ marginHorizontal: 10 }} />

          </View>

       </View>

      </SafeAreaView>

      <StatusBar style="light" />

      </ImageBackground>

  )
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },

  container: {
    flex: 1,
    position: 'relative'
  },

  logo: {
    position: 'absolute',
    zIndex: 1,
    // elevation: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginLeft: (Dimensions.get('window').width / 2) - 65,
    marginTop: 60,
    marginBottom: 20

  },

  mamakilo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1

  },

  mamakiloContainer: {
    // backgroundColor: "#483248",
    zIndex: 1,
    // position: 'absolute',
    marginTop: 100,
    marginLeft: (Dimensions.get('window').width / 2) - 200,
    height: 200,
    paddingHorizontal: 10,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400
  }

})
