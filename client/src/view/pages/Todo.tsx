import React, { useState } from "react";
import styled from "styled-components";
import TodoList from "../../components/TodoList";
import InputField from "../../components/InputField";
import axios from "axios";

const Todo = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const URL = "http://localhost:8080";
  const token = localStorage.getItem("token");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && content) {
      axios
        .post(
          `${URL}/todos`,
          {
            title,
            content,
          },
          { headers: { Authorization: token } }
        )
        .then((response) => {
          console.log(response);
          setTitle("");
          setContent("");
        })
        .catch((err) => {
          alert(err.response.data.details);
        });
    }
  };

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
