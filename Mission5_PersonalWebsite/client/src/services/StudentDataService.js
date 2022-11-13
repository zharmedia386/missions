import http from "../http-common";

class StudentDataService {
  getAll() {
    return http.get("/students");
  }

  get(id) {
    return http.get(`/students/${id}`);
  }

  create(data) {
    return http.post("/students", data);
  }

  update(data) {
    return http.put("/students", data);
  }

  delete(data) {
    return http.delete("/students", data);
  }

  deleteAll() {
    return http.delete(`/students`);
  }

  findByName(name) {
    return http.get(`/students?name=${name}`);
  }

  login(data) {
    return http.post("/auth", data);
  }
}

export default new StudentDataService();