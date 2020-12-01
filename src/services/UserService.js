import axios from 'axios'

import http from "../http-common";

class UserService {
  getAll() {
    return http.get("/");
  }

  

  create(data) {
    return http.post("/register", data);
  }

  update(id, data) {
    return http.put(`/updateDetails/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  
}

export default new UserService();