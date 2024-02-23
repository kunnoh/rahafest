import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import MamaKilo from "../../utils/MamaKilo";

const Schedule = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MamaKilo color="#fff" size={40} height={80}>
        Lineup
      </MamaKilo>
      <View style={styles.container}>
        <Text style={{ color: "#fff" }}>Schedule</Text>
      </View>
    </SafeAreaView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 40,
    // alignItems: "center",
    backgroundColor: "rgb(33, 37, 41)",
    flex: 1,
    justifyContent: "center",
  },
  div: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "rgba(5,5,5, 0.5)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    color: "#fff",
  },
});
