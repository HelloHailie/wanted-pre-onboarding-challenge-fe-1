import axiosInstance from "./axiosInstance";
import { UserInfo, AuthResponse } from "../types/model";

const AuthAPI = {
  signUp: (data: UserInfo) => {
    return axiosInstance.post("/users/create", data);
  },
  login: (data: UserInfo): Promise<AuthResponse> => {
    return axiosInstance.post("/users/login", data);
  },
};

export default AuthAPI;
