import AxiosClient from "./axios";

const resource = "/category";

export default {
  get(classId: string, currentPage: number) {
    return AxiosClient.get(`${resource}/${classId}/exams?page=${currentPage}`);
  },
  getOne(exerciseId: string) {
    return AxiosClient.get(`/exam/${exerciseId}`);
  },
  search(searchText: string, page: number) {
    return AxiosClient.post('/search', {
      keyword: searchText,
      page: page || 1,
    });
  },
}

