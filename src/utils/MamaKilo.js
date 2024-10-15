import { loadAsync } from "expo-font";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const MamaKilo = ({ children, color, size, height }) => {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   async function loadFonts() {
  //     await loadAsync({
  //       "MamaKilo Black": require("../../assets/fonts/MamaKilo_Decorative.otf"),
  //       // "MamaKilo Black": require("../../assets/fonts/mamaKilodecorative.otf"),
  //     });
  //     setFontsLoaded(true);
  //   }

  //   loadFonts();
  // }, []);
  Font;
  const [fontsLoaded] = Font.useFonts({
    "MamaKilo Black": require("../../assets/fonts/MamaKilo_Decorative.otf"),
  });

  if (!fontsLoaded)
    return (
      <Text
        style={{
          color,
          fontSize: size,
          justifyContent: "center",
          alignItems: "center",
        }}>
        {children}
      </Text>
    );

  return (
    <Text
      style={{
        fontFamily: "MamaKilo Black",
        color,
        fontSize: size,
        justifyContent: "center",
        alignItems: "center",
        height,
      }}>
      {children}
    </Text>
  );
};

export default MamaKilo;
