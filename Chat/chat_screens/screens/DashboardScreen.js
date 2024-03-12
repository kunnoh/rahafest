import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import "core-js/stable/atob";
import { jwtDecode } from "jwt-decode";
import React, { useLayoutEffect, useContext, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../../src/redux/auth/authActions";
import { danger, success } from "../../../src/utils/toast";
import { UserType } from "../UserContext";
import User from "../components/User";
import { GetUsers } from "../services/home.service";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);
  const { access_token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => <Text style={{ fontSize: 16, fontWeight: "bold" }}>Swift Chat</Text>,
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
            <Ionicons
              // onPress={() => navigation.navigate("Chats")}
              name="chatbox-ellipses-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Feeds")}>
            <MaterialIcons
              // onPress={() => navigation.navigate("Feeds")}
              name="forum"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Friends")}>
            <MaterialIcons
              // onPress={() => navigation.navigate("Friends")}
              name="people-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons onPress={handleLogout} name="logout" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers([]);
      if (!access_token) {
        navigation.navigate("Login");
        return;
      }

      const decodedToken = jwtDecode(access_token);
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
  }, [access_token]);

  async function handleLogout() {
    dispatch(logout());
    if (!access_token) {
      success("You are now logged out", 2000);
    }
    // try {
    //   navigation.navigate("Login");
    // } catch (e) {
    //   console.log(e);
    //   danger("Failed to log you out!", 2000);
    // }
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

export default DashboardScreen;
