import axios from "axios";

import handleError from "./errorHandler";
import prod from "../../../env/env";

const GetFaq = async () => {
  try {
    const { data } = await axios.get(prod.endpoint + "/api/faqs");
    return data;
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};

export { GetFaq };
