import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const GetPartners = async () => {
  try {
    const { data } = await axios.get(prod.endpoint + "/api/partners");
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

export { GetPartners };
