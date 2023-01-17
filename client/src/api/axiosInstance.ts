import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {};
      config.headers.Authorization = `Bearer ${token}`; //여기는 accessToken
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    return res;
  },
  (error: AxiosError) => {
    const tokenMissing = error.response?.data === "Token is missing";

    if (tokenMissing) {
      alert("로그인해주세요");
    } else {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
