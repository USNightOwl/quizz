import AxiosClient from "./axios";

const resource = "/index";

export default {
  get() {
    return AxiosClient.get(`${resource}`);
  }
}

