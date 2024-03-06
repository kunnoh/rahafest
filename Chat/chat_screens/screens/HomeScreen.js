import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useContext, useEffect, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";

import { danger, success } from "../../../src/utils/toast";
import { UserType } from "../UserContext";
import User from "../components/User";
import { GetUsers } from "../services/home.service";
const HomeScreen = () => {
  const navigation = useNavigation();
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => <Text style={{ fontSize: 16, fontWeight: "bold" }}>Swift Chat</Text>,
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons
            onPress={() => navigation.navigate("Chats")}
            name="chatbox-ellipses-outline"
            size={24}
            color="black"
          />
          <MaterialIcons
            onPress={() => navigation.navigate("Friends")}
            name="people-outline"
            size={24}
            color="black"
          />

          <MaterialIcons onPress={handleLogout} name="logout" size={24} color="black" />
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    setUsers([]);
    const fetchUsers = async () => {
      const token = await AsyncStorage.getItem("authToken");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      setUserId(userId);

      try {
        const { data } = await GetUsers(userId);
        setUsers(data);
      } catch (error) {
        danger(error.errorMessage.message, 2000);
      }
    };

    fetchUsers();
  }, []);

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("refreshToken");
      navigation.navigate("Login");
      success("You are now logged out", 2000);
    } catch (e) {
      console.log(e);
      danger("Failed to log you out!", 2000);
      return false;
    }
  }

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        {users.map((item, index) => (
          <User key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
