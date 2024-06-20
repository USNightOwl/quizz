import AxiosClient from "./axios";

const resource = "/category";

export default {
  get(classId: string) {
    return AxiosClient.get(`${resource}/${classId}/exams`);
  }
}

