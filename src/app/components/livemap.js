import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Callout, Marker } from "react-native-maps";

import { AndroidLocation } from "../../utils/permissions";

const LiveMap = () => {
  const [initPosition, setInitPosition] = useState({
    latitude: -1.32795117588182,
    longitude: 36.80049889657756,
  });

  useEffect(() => {
    const getLocation = async () => {
      try {
        await AndroidLocation();
        const { coords } = await Location.getCurrentPositionAsync();
        setInitPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getLocation();
  }, []);

  console.log(initPosition);

  return (
    <Marker coordinate={{ latitude: initPosition.latitude, longitude: initPosition.longitude }}>
      <Callout>
        <View style={styles.imageContainer}>
          <Image style={styles.icon} source={require("../../../assets/icons/bar1.png")} />
        </View>
      </Callout>
    </Marker>
  );
};

export default LiveMap;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    height: 32,
    width: 32,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    padding: 5,
  },
});
