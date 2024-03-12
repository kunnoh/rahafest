import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const LoginApi = async (userData) => {
  try {
    const { data } = await axios.post(`${prod.local}/login`, userData, headers);
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const GetUserApi = async (token) => {
  try {
    const { data } = await axios.get(`${prod.local}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const RegisterApi = async (userData) => {
  try {
    const { data } = await axios.post(`${prod.local}/register`, userData, headers);
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

const LogoutApi = async () => {
  try {
    const { data } = await axios.get(`${prod.local}/logout`);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

const RefreshTokenApi = async () => {
  try {
    const { data } = await axios.post(`${prod.local}/refresh-token`);
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

export { LoginApi, RegisterApi, LogoutApi, RefreshTokenApi, GetUserApi };
