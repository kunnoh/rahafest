import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ZoomableImage from '../../components/ZoomImg';
import MapView, { Callout, Marker } from 'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.h2}>Map</Text> */}
      {/* <ZoomableImage
        style = {styles.zoomimg}
        imageWidth = { 800 }
        imageHeight = { 500 }
        source = { require('../../assets/images/floormap.jpeg') }
      /> */}

      <MapView
        style = {{ flex: 1 }}
        initialRegion={{
          latitude: 37.645,
          longitude: -213.22,
          latitudeDelta: 0.43,
          longitudeDelta: 0.423
        }}
      >
        <Marker
          coordinate={{ latitude: 37.645, longitude: -213.22 }}
          title='Marker title'
          description='description marker'
        >
          <Callout>
            <View>
              <Text>Custom label</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
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
  h2: {
    fontSize: 30,
    marginTop: '9%'
  },
  zoomimg: {
    flex: 1,
    alignSelf: 'stretch',
    width: '100%'
  }
});