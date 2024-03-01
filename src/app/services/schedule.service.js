import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const GetSchedule = async () => {
  try {
    const { data } = await axios.get(prod.endpoint + "/api/lineup");
    return data;
  } catch (error) {
    // console.log(error);
    handleError(error);
  }
};

export { GetSchedule };
