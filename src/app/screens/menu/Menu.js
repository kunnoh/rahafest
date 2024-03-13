import React, { useState } from "react";
import { SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";
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

  const handleIndexChange = (selectedIndex) => {
    if (selectedIndex >= 0 && selectedIndex < routes.length) {
      setIndex(selectedIndex);
    } else {
      console.error("Invalid index provided:", selectedIndex);
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <TabView
        style={styles.tabview}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={handleIndexChange}
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
    flex: 1,
  },
});
