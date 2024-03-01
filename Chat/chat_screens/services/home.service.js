import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const headers = {
  "Content-Type": "application/json",
};

const GetUsers = async (user_id) => {
  try {
    const { data } = await axios.get(prod.local + "/users/" + user_id);
    return data;
  } catch (error) {
    console.log(error);
    throw handleError(error);
  }
};

export { GetUsers };
