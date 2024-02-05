import { Platform, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useFonts, loadAsync } from 'expo-font'


const MamaKilo = ({children, color, size, height}) => {  
  const [fontsLoaded, setFontsLoaded] = useState(false)
 
  //let [fontsLoaded] = useFonts({
    // 'MamaKilo Black': require('../assets/fonts/MamaKilo Black.ttf')
  //})

  useEffect(()=>{
      async function loadFonts(){
          await loadAsync({
              'MamaKilo Black': require('../assets/fonts/MamaKilo_Decorative.otf')
          })

          setFontsLoaded(true)
      }

      loadFonts()
  }, [])

  if (!fontsLoaded){
    return <Text style={{color: color, fontSize: size, justifyContent: 'center', alignItems: 'center'}}>{children}</Text>
  }


  return (
    <Text style={{fontFamily: 'MamaKilo Black', color: color, fontSize: size, justifyContent: 'center', alignItems: 'center', height: height}}>{children}</Text>
  )
}

export default MamaKilo

const styles = StyleSheet.create({})