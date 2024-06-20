import AxiosClient from "./axios";

const resource = "/category";

export default {
  get(classId: string, currentPage: number) {
    return AxiosClient.get(`${resource}/${classId}/exams?page=${currentPage}`);
  },
  getOne(exerciseId: string) {
    return AxiosClient.get(`/exam/${exerciseId}`);
  }
}

