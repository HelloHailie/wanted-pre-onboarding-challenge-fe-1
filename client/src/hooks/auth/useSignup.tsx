import { useMutation } from "@tanstack/react-query";
import AuthAPI from "../../api/auth";
import { UserInfo } from "../../types/model";

const useSignup = () => {
  return useMutation((userInfo: UserInfo) => AuthAPI.signUp(userInfo), {
    onError: (signupData: any) => {
      alert(signupData.response.data.details);
    },
  });
};

export default useSignup;
