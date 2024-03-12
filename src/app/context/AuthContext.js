import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";

import prod from "../../../env/env";

const TOKEN_KEY = "access_token";
const REFRESH_KEY = "refresh_token";
const AuthContext = createContext({});
const headers = {
  "Content-Type": "application/json",
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await SecureStore.getItemAsync(TOKEN_KEY);
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setAuthState({
            token,
            authenticated: true,
          });
        }
      } catch (error) {
        console.error("Error loading token:", error);
      }
    };
    loadToken();
  }, []);

  const register = async (email, password, name, image) => {
    try {
      return await axios.post(`${prod.local}/users`, { email, password });
    } catch (e) {
      return { error: true, msg: e.response.data.msg };
    }
  };

  const login = async (user) => {
    try {
      const { data } = await axios.post(`${prod.local}/login`, user, headers);
      console.log("RES LOGin::\t", data);
      setAuthState({
        token: data.token,
        authenticated: true,
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      await SecureStore.setItemAsync(TOKEN_KEY, data.access_token);
      await SecureStore.setItemAsync(REFRESH_KEY, data.refresh_token);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    await SecureStore.deleteItemAsync(REFRESH_KEY);
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
