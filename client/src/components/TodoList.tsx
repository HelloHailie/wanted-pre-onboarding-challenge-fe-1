import React from "react";
import styled from "styled-components";
import { TodoMD } from "../types/model";
import SingleTodo from "./SingleTodo";
import useGetToDo from "../hooks/todos/useGetTodo";
import LoadingBar from "../components/LodingBar";

const TodoList = () => {
  const { data, isLoading } = useGetToDo();

  return (
    <Container>
      <LoadingBar isLoading={isLoading} />
      {data?.map((todo: TodoMD) => (
        <SingleTodo key={todo.id} {...todo} />
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  margin-top: 20px;
  width: 400px;
`;
