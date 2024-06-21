import AxiosClient from "./axios";

const resource = "/index";
const resourceCategory = "/categories";

export default {
  get() {
    return AxiosClient.get(`${resource}`);
  },
  getCategory() {
    return AxiosClient.get(`${resourceCategory}`)
  }
}

