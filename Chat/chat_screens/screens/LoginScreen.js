import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MamaKilo from "../../../components/MamaKilo";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Home");
        } else {
          // token not found , show the login screen itself
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, []);

  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
  });

  const handleLogin = () => {
    const user = {
      email,
      password,
    };

    axios
      .post("http://127.0.0.0:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);

        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid email or password");
        console.log("Login Error", error);
      });
  };
  return (
    <ImageBackground
      source={require("../../../assets/images/6.webp")}
      style={{ flex: 1, position: "relative" }}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={{ height: 150, width: 150, marginRight: 10, flex: 1 / 4 }}
            source={require("../../../assets/images/rahalogo.png")}
          />

          {/** <span style={{ color: "#11e0ff" }}>R</span>
    <span style={{ color: "#ffffff" }}>A</span>
    <span style={{ color: "#e42eff" }}>H</span>
    <span style={{ color: "#ffdf2d" }}>A</span>
    <span style={{ color: "#05e705" }}>F</span>
    <span style={{ color: "#ff1748" }}>E</span>
    <span style={{ color: "#ffffff" }}>S</span>
<span style={{ color: "#11e0ff" }}>T</span> **/}
        </View>

        <View
          style={{
            marginTop: 200,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <MamaKilo color="white" height={40} size={30}>
            SIGN IN TO CHAT
          </MamaKilo>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "white",
                borderBottomWidth: 4,
                marginVertical: 10,
                width: 300,
                color: "white",
              }}
              placeholderTextColor="white"
              placeholder="Enter Your Email"
            />
          </View>

          <View
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "white",
                borderBottomWidth: 4,
                marginVertical: 10,
                width: 300,
                color: "white",
              }}
              placeholderTextColor="white"
              placeholder="Enter Your Password"
            />
          </View>

          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
            }}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}>
              Login
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 40 }}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
              Dont't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>

      <StatusBar style="light" />
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },

  container: {
    flex: 1,
    position: "relative",
  },

  logo: {
    position: "absolute",
    zIndex: 1,
    // elevation: 1,
    // flexDirection: 'row',
    alignItems: "center",
    marginRight: 10,
    marginLeft: Dimensions.get("window").width / 2 - 75,
    marginTop: 50,
    marginBottom: 20,
  },

  mamakilo: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
  },

  mamakiloContainer: {
    // backgroundColor: "#483248",
    zIndex: 1,
    // position: 'absolute',
    marginTop: 100,
    marginLeft: Dimensions.get("window").width / 2 - 200,
    height: 200,
    paddingHorizontal: 10,
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
});
