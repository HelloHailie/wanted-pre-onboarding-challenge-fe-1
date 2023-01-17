import { useMutation } from "@tanstack/react-query";
import AuthAPI from "../../../api/auth";
import { AuthResponse, UserInfo, TNavigate } from "../../../types/model";

const useLogin = (navigate: TNavigate) => {
  return useMutation((userInfo: UserInfo) => AuthAPI.login(userInfo), {
    onSuccess: (loginData: any) => {
      console.log(loginData);
      const token = loginData.token;
      localStorage.setItem("token", token);
      navigate("/todo");
    },
    onError: (loginData: any) => {
      alert(loginData.response.data.details);
    },
  });
};

export default useLogin;
