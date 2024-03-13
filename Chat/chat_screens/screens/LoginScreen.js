import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { login, getUser } from "../../../src/redux/auth/authActions";
import MamaKilo from "../../../src/utils/MamaKilo";
import { danger, success } from "../../../src/utils/toast";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { access_token, error, loading, user } = useSelector((state) => state.auth);

  if (error) {
    console.log("check credentials");
    danger("check credentals!", 2000);
  }

  useEffect(() => {
    if (access_token) {
      dispatch(getUser(access_token));
    }
  }, [access_token]);
  useEffect(() => {
    if (error) {
      console.log("check credentials");
      danger("check credentals!", 2000);
    }
  }, [error]);

  useEffect(() => {
    if (user && !error) {
      success("Welcome", 3000);
      navigation.navigate("Dashboard", 3000);
    }
  }, [user]);

  const [fontsLoaded] = useFonts({
    "Roboto-Light": require("../../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
  });

  const handleLogin = async () => {
    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Validate inputs
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }

    const user = {
      email,
      password,
    };

    dispatch(login(user));
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

          <Pressable
            onPress={handleLogin}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "relative",
  },

  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.01)",
  },
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
