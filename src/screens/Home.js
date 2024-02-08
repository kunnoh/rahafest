import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, Pressable, Linking } from 'react-native';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';
import MamaKilo from '../utils/MamaKilo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';

export default function Home() {

 let [fontsLoaded] = Font.useFonts({
  'Roboto-Light': require('../../assets/fonts/Roboto-Light.ttf'),
  'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
 })


  return ( 
    <ImageBackground source={require('../../assets/images/background.webp')} style={{flex: 1, position: 'relative'}} resizeMode='cover'>
      <SafeAreaView style={styles.container}>
      <View style = {styles.logo}>
      
        <Image style={{height: 130, width: 130, marginRight: 10, flex: 1/4}} source={require('../../assets/images/rahalogo.png')} />

      {/**<span style={{ color: "#11e0ff" }}>R</span>
      <span style={{ color: "#ffffff" }}>A</span>
      <span style={{ color: "#e42eff" }}>H</span>
      <span style={{ color: "#ffdf2d" }}>A</span>
      <span style={{ color: "#05e705" }}>F</span>
      <span style={{ color: "#ff1748" }}>E</span>
      <span style={{ color: "#ffffff" }}>S</span>
  <span style={{ color: "#11e0ff" }}>T</span> **/}
                  
      {/**<View style={{flex: 3/4}}>
       //<MamaKilo color="#ffffff" size={25} height={35}>Food, Art, Culture, Music</MamaKilo>
//</View> **/}
        
        
        

      </View>

      <View style={{marginLeft: 20, marginBottom: 60, marginTop: 200}}>
        {fontsLoaded? <Text style={{fontFamily: 'Roboto-Light', color:'white', fontSize: 20}}>VENUE</Text> : <Text style={{color:'white', fontSize: 20}}>VENUE</Text>}
        <MamaKilo color="#ffffff" size={25} height={35}>UHURU GARDENS</MamaKilo>
        <MamaKilo color="#ffffff" size={25} height={35}>NAIROBI, KENYA</MamaKilo>
      </View>

      <View style={{marginLeft: 20, flexDirection: 'row-reverse'}}>
        
        <View>
        {fontsLoaded? <Text style={{fontFamily: 'Roboto-Light', color:'white', fontSize: 20}}>DATES</Text> : <Text style={{color:'white', fontSize: 20}}>DATES</Text>}
        <MamaKilo color="#ffffff" size={25} height={35}>SAT 30TH & SUN 31ST</MamaKilo>
        <MamaKilo color="#ffffff" size={25} height={35}>MARCH 2024</MamaKilo>
        </View>
      </View>

      <View style={{marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 100, marginRight: 20}}>
        <Pressable style={{position: 'relative', justifyContent: 'center', alignItems: 'center'}} onPress={()=>Linking.openURL('http://www.rahafest.com/events')}>
          <Image source={require('../../assets/images/blob-grid-orange-nobg.png')} style={{height: 120, width: 120, opacity: 0.15}}/>
          <View style={{position: 'absolute'}}>
            <FontAwesome5 name='headphones' size={50} color='white'/>
            {fontsLoaded 
            ? <Text style={{fontFamily: 'Roboto-Bold', color: 'white', fontWeight: 'bold', marginTop: 5}}>Playlist</Text>
            : <Text style={{color: 'white', fontWeight: 'bold', marginTop: 5}}>Playlist</Text>
            }
          </View>
        </Pressable>


        <Pressable style={{position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/images/blob-grid-orange-nobg.png')} style={{height: 120, width: 120, opacity: 0.15}}/>
          <View style={{position: 'absolute'}}>
          <Entypo name='mobile' size={50} color='white'/>
          {fontsLoaded 
            ? <Text style={{fontFamily: 'Roboto-Bold', color: 'white', fontWeight: 'bold', marginTop: 5}}>Socials</Text>
            : <Text style={{color: 'white', fontWeight: 'bold', marginTop: 5}}>Socials</Text>
            }
          </View>
        </Pressable>


        <Pressable style={{position: 'relative', justifyContent: 'center', alignItems: 'center'}} onPress={()=>Linking.openURL('http://www.rahafest.com/partners')}>
          <Image source={require('../../assets/images/blob-grid-orange-nobg.png')} style={{height: 120, width: 120, opacity: 0.15}}/>
          <View style={{position: 'absolute'}}>
            <Ionicons name='people-sharp' size={50} color='white'/>
            {fontsLoaded 
            ? <Text style={{fontFamily: 'Roboto-Bold', color: 'white', fontWeight: 'bold', marginTop: 5}}>Partners</Text>
            : <Text style={{color: 'white', fontWeight: 'bold', marginTop: 5}}>Partners</Text>
            }
          </View>
        </Pressable>
      </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </ImageBackground>
  );
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
    position: "absolute",
    zIndex: 1,
    //elevation: 1,
    //flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginLeft: (Dimensions.get('window').width / 2 ) - 65,
    marginTop: 50,
    marginBottom: 60,
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
