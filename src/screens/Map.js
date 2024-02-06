import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Map = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Map</Text> */}
      <Image source={require('../../assets/images/floormap.jpeg')}/>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})