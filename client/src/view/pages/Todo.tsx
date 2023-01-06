import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoList from "../../components/TodoList";
import InputField from "../../components/InputField";
import { TodoMD } from "../../components/model";
import axios from "axios";

const Todo = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const URL = "http://localhost:8080";
    const token = sessionStorage.getItem("token");
    console.log(token);

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
      <TodoList></TodoList>
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
