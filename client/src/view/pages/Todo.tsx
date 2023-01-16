import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoList from "../../components/TodoList";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Todo = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && content) {
      axiosInstance
        .post("/todos", { title, content })
        .then(() => {
          setTitle("");
          setContent("");
        })
        .catch((err) => {
          alert(err.response.data.details);
        });
    }
  };

  useEffect(() => {
    if (!token) {
      alert("토큰이 유효하지 않습니다. ");
      navigate(`/auth`);
    }
  }, []);

  return (
    <Container>
      <Header>Todo List</Header>
      <InputField
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        submitHandler={submitHandler}
      ></InputField>
      <TodoList submitHandler={submitHandler}></TodoList>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const Header = styled.header`
  text-transform: uppercase;
  font-size: 40px;
  margin: 30px 0;
  text-align: center;
`;
