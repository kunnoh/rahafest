import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Menu = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/background.webp")}
      style={{ flex: 1, position: "relative" }}
      resizeMode="cover">
      <View style={styles.container}>
        <Text>Menu</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Menu;
