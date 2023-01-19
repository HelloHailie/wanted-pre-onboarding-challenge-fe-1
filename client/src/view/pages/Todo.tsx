import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoList from "../../components/TodoList";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import usePostToDo from "../../hooks/todos/usePostTodo";
import Layout from "../../components/layout/Layout";

const Todo = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();
  const { mutate: postToDoMutate } = usePostToDo(navigate);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && content) {
      postToDoMutate({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <Layout
      children={
        <Container>
          <Header></Header>
          <InputField
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            submitHandler={submitHandler}
          ></InputField>
          <TodoList></TodoList>
        </Container>
      }
    />
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
  margin: 30px 0;
`;
