import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { emailCheck, passwordCheck } from "../../utils/validator";
import useLogin from "../../hooks/auth/useLogin";
import useSignup from "../../hooks/auth/useSignup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin(navigate);
  const { mutate: signUpMutate } = useSignup();

  const emailValidatorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailCheck(email) ? setIsActive(true) : setIsActive(false);
    setEmail(e.target.value);
  };
  const passwordValidatorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordCheck(password) ? setIsActive(true) : setIsActive(false);
    setPassword(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      loginMutate({ email, password });
    } else {
      signUpMutate({ email, password });
    }
  };

  return (
    <Container>
      <AuthTab isLogin={isLogin}>
        <button type='button' onClick={() => setIsLogin(true)}>
          로그인
        </button>
        <button type='button' onClick={() => setIsLogin(false)}>
          회원가입
        </button>
      </AuthTab>

      <AuthForm onSubmit={submitHandler}>
        <InputInfo>
          <Input
            type='email'
            placeholder='
            EMAIL'
            required
            value={email}
            onChange={emailValidatorHandler}
          ></Input>

          <Input
            type='password'
            placeholder='PASSWORD'
            required
            value={password}
            onChange={passwordValidatorHandler}
          ></Input>
        </InputInfo>

        <button className={isActive ? "Active" : "Disabled"}>
          {isLogin ? "로그인" : "회원가입"}
        </button>
      </AuthForm>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const AuthTab = styled.div<{ isLogin: boolean }>`
  width: 300px;
  display: flex;

  button {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* border-top: 1px solid gray; */
    box-shadow: rgba(50, 50, 93, 0.25) 1px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) -1px 1px 3px -1px;
    border: 0;
    border-bottom: 0;
    background-color: transparent;
    padding: 10px 30px;
    flex-basis: 50%;
    cursor: pointer;
  }

  & > button:first-child {
    background-color: ${({ isLogin }) => (isLogin ? "#5586eb" : "inherit")};
    color: ${({ isLogin }) => (isLogin ? "#ffffff" : "#000000")};
  }
  & > button:last-child {
    background-color: ${({ isLogin }) => (isLogin ? "inherit" : "#5586eb")};
    color: ${({ isLogin }) => (isLogin ? "#000000" : "#ffffff")};
  }
`;

const AuthForm = styled.form`
  /* border: 1px solid gray; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 10px 0px;
    background-color: transparent;
    border: 1px solid #81a4ea;
    padding: 10px;
    width: 88%;
    border-radius: 10px;
  }

  .Disabled {
    background-color: inherit;
  }
  .Active {
    background-color: #5586eb;
    color: white;
  }
`;

const InputInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Input = styled.input`
  padding: 10px;
  margin: 10px 0px;
  width: 80%;
  border: 1px solid lightblue;
  border-radius: 10px;
`;
