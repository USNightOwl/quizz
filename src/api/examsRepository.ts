import AxiosClient from "./axios";

const resource = "/category";
const resourceExam = "/exam";

export default {
  get(classId: string, currentPage: number) {
    return AxiosClient.get(`${resource}/${classId}/exams?page=${currentPage}`);
  },
  getOne(exerciseId: string) {
    return AxiosClient.get(`${resourceExam}/${exerciseId}`);
  },
  search(searchText: string, page: number) {
    return AxiosClient.post('/search', {
      keyword: searchText,
      page: page || 1,
    });
  },
  submit(formData: any) {
    return AxiosClient.post(`${resourceExam}/submit`, formData);
  }
}

