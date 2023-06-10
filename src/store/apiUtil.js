import axios from "axios";

const api = axios.create();

// request(요청)시 아래의 로직이 인터셉트 된다.
api.interceptors.request.use(
  async (request) => {
    return request;
  },
  async (error) => Promise.reject(error)
);

// response(응답)시 아래의 로직이 인터셉트 된다.
api.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => Promise.reject(error)
);
// API 설정
api.config = {
  baseUrl: "http://localhost:8080",
};

export default api;
