import AxiosClient from "./axios";

const resource = "/index";
const resourceCategory = "/categories";
const resourceSearchCategory = "/searchChildren";

export default {
  get() {
    return AxiosClient.get(`${resource}`);
  },
  getCategory() {
    return AxiosClient.get(`${resourceCategory}`)
  },
  searchCategory(searchText: string, parentId: number = 14) {
    return AxiosClient.post(`${resourceSearchCategory}`, {
      keyword: searchText,
      parentId,
    });
  }
}

