import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TodoMD } from "../components/model";
import axios from "axios";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
  const [getData, setGetData] = useState<TodoMD[]>([]);
  const URL = "http://localhost:8080";
  const token = sessionStorage.getItem("token");
  console.log(getData);
  useEffect(() => {
    axios
      .get(`${URL}/todos`, { headers: { Authorization: token } })
      .then((res) => setGetData(res.data.data));
  }, []);

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
