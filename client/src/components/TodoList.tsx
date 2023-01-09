import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TodoMD } from "../types/model";
import SingleTodo from "./SingleTodo";
import axiosInstance from "../utils/axiosInstance";

interface Prop {
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoList = ({ submitHandler }: Prop) => {
  const [getData, setGetData] = useState<TodoMD[]>([]);

  useEffect(() => {
    axiosInstance({
      method: "get",
      url: "/todos",
    }).then((res) => setGetData(res.data.data));
  }, [submitHandler]);

  return (
    <Container>
      {getData.map((todo) => (
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
