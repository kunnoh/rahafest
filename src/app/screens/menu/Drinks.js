import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Drinks = () => {
  return (
    <View style={styles.container}>
      <Text>Drinks</Text>
    </View>
  );
};

export default Drinks;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
