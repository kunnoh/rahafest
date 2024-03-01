import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Callout, Marker } from "react-native-maps";

import { AndroidLocation } from "../../utils/permissions";

const LiveMap = () => {
  const [initPosition, setInitPosition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = async () => {
      try {
        await AndroidLocation();
        const { coords } = await Location.getCurrentPositionAsync();
        setInitPosition(coords);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    getLocation();
  }, []);

  console.log(initPosition);

  return (
    <Marker coordinate={{ latitude: -1.2714877, longitude: 36.8102461 }}>
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
