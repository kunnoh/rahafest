import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MamaKilo from "../../../src/utils/MamaKilo";
import { danger, success } from "../../../src/utils/toast";
import { RegisterApi } from "../services/auth.service";
import { ActivityIndicator } from "react-native-paper";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("1");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleRegister = async () => {
    const user = {
      name,
      email,
      password,
      image,
    };
    setLoading(true);
    try {
      const newUser = await RegisterApi(user);
      console.log(newUser);
      navigation.navigate("Login");
      success("You are now registered. Login now!", 2000);
      setName("");
      setEmail("");
      setPassword("");
      setImage("");
    } catch (e) {
      console.log(e);
      danger(e.errorMessage.message);
    } finally {
      setLoading(false);
    }
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
        </View>

        <View
          style={{
            marginTop: 180,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <MamaKilo color="white" height={40} size={30}>
            REGISTER TO CHAT
          </MamaKilo>
        </View>

        <View style={{ marginTop: 8 }}>
          <View
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "white",
                borderBottomWidth: 3,
                marginVertical: 10,
                width: 300,
                color: "white",
              }}
              placeholderTextColor="white"
              placeholder="Enter your name"
            />
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "white",
                borderBottomWidth: 3,
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
                borderBottomWidth: 3,
                marginVertical: 10,
                width: 300,
                color: "white",
              }}
              placeholderTextColor="white"
              placeholder="Enter Your Password"
            />
          </View>

          <View
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TextInput
              value={image}
              onChangeText={(text) => setImage(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "white",
                borderBottomWidth: 3,
                marginVertical: 10,
                width: 300,
                color: "white",
              }}
              placeholderTextColor="white"
              placeholder="Image"
            />
          </View>

          {/* <Pressable
            onPress={handleRegister}
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
              Sign Up
            </Text>
          </Pressable> */}

          <Pressable
            onPress={handleRegister}
            disabled={loading}
            style={{
              width: 200,
              backgroundColor: "#4A55A2",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
              flexDirection: "row",
              justifyContent: "center",
            }}>
            {/* Conditionally render ActivityIndicator when loading */}
            {loading ? (
              <ActivityIndicator size="small" color="white" style={{ marginRight: 10 }} />
            ) : null}
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}>
              Sign Up
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 40 }}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
              Already Have an account? Sign in
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>

      <StatusBar style="light" />
    </ImageBackground>
  );
};

export default RegisterScreen;

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
