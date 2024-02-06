import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ZoomableImage from './components/ZoomImg';

const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
      {/* <Image style={styles.img} source={require('./assets/images/floormap.jpeg')}/> */}
      <ZoomableImage
        style = {styles.zoomimg}
        imageWidth = { 800 }
        imageHeight = { 500 }
        source = { require('./assets/images/floormap.jpeg') }

      />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  img: {
    width: '95%'
  },
  zoomimg: {
    flex: 1,
    alignSelf: 'stretch',
    width: '98%'
  }
});