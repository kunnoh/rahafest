import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import Drinks from "./Drinks";
import Food from "./Food";

const renderScene = SceneMap({
  drinks: Drinks,
  food: Food,
});

const Menu = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    { key: "food", title: "Food" },
    { key: "drinks", title: "Drinks" },
  ]);

  return (
    <SafeAreaView style={styles.safeView}>
      <TabView
        style={styles.tabview}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  tabview: {
    marginTop: 40,
    color: "green",
    flex: 1,
  },
});
