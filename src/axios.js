import axios from "axios";

const instance = axios.create({
  // baseURL: "https://api.earneasy24.com/api/",
  baseURL:"https://test-api.earneasy24.net/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

export default instance;
