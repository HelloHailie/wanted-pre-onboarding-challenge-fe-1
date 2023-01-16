import axios, { AxiosRequestConfig } from "axios";

// import { IToken } from "../types/model";

// export const getTokenFromLocalStorage = (): null | IToken => {
//   const result = localStorage.getItem("token");
//   const token = result ? JSON.parse(result) : null;
//   return token;
// };

// export const authHeader = () => {
//   const token = getTokenFromLocalStorage();
//   return {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   };
// };

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

export default axiosInstance;
