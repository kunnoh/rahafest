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
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import MamaKilo from "../../../src/utils/MamaKilo";
import { danger, success } from "../../../src/utils/toast";
import { RegisterApi } from "../services/auth.service";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("1");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [imageError, setImageError] = useState("");
  const navigation = useNavigation();
  const handleRegister = async () => {
    setNameError("");
    setEmailError("");
    setImageError("");
    setPasswordError("");
    const user = {
      name,
      email,
      password,
      image,
    };
    if (email === "" || password === "" || name === "" || image === "") {
      if (email === "") {
        setEmailError("Email is empty!");
      }
      if (password === "") {
        setPasswordError("Password is empty!");
      }
      if (name === "") {
        setNameError("Name is empty!");
      }
      if (image === "") {
        setImageError("Image is required!");
      }
      return;
    }

    try {
      setLoading(true);
      const newUser = await RegisterApi(user);
      console.log(newUser);
      navigation.navigate("Login");
      success("You are now registered. Login now!", 2000);
      setName("");
      setEmail("");
      setPassword("");
      setImage("");
      setNameError("");
      setEmailError("");
      setImageError("");
      setPasswordError("");
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
              style={[styles.input, nameError && styles.inputError]}
              placeholderTextColor="white"
              placeholder="Enter your name"
            />
            {nameError ? <Text style={styles.errorMessage}>{nameError}</Text> : null}
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={[styles.input, emailError && styles.inputError]}
              placeholderTextColor="white"
              placeholder="Enter Your Email"
            />
            {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}
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
              style={[styles.input, passwordError && styles.inputError]}
              placeholderTextColor="white"
              placeholder="Enter Your Password"
            />
            {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
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
              placeholderTextColor="white"
              placeholder="Image"
              style={[styles.input, imageError && styles.inputError]}
            />
            {imageError ? <Text style={styles.errorMessage}>{imageError}</Text> : null}
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
  input: {
    fontSize: 20,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 300,
    color: "#000",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#b5a39a",
    backgroundColor: "#b5a39a",
  },
  inputError: {
    borderBottomColor: "red",
  },
  errorMessage: {
    color: "red",
    marginBottom: 5,
  },
});
