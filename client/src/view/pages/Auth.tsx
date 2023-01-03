import React, { useState } from "react";
import styled from "styled-components";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const changeButton = () => {
    email.includes("@") && password.length >= 8
      ? setIsActive(true)
      : setIsActive(false);
  };

  return (
    <Container>
      <AuthLogo isLogin={isLogin}>
        <button type='button' onClick={() => setIsLogin(true)}>
          로그인
        </button>
        <button type='button' onClick={() => setIsLogin(false)}>
          회원가입
        </button>
      </AuthLogo>

      <AuthForm>
        <InputInfo>
          <Input
            type='email'
            id='id'
            placeholder='
            EMAIL'
            required
            value={email}
            onKeyUp={changeButton}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Input>

          <Input
            type='password'
            id='password'
            placeholder='PASSWORD'
            required
            value={password}
            onKeyUp={changeButton}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
const AuthLogo = styled.div<{ isLogin: boolean }>`
  width: 300px;
  display: flex;

  button {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid gray;
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
  border: 1px solid gray;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 10px 0px;
    background-color: transparent;
    border: 1px solid gray;
    padding: 10px;
    width: 88%;
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
`;
