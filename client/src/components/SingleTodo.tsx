import React from "react";
import styled from "styled-components";
import { TodoMD } from "../types/model";
import { Link } from "react-router-dom";

const SingleTodo = ({ id, title, content, createdAt, updatedAt }: TodoMD) => {
  return (
    <Container>
      <ContentContainer>
        <Link
          to={`/todo/${id}`}
          state={{
            id,
            title,
            content,
            createdAt: createdAt.split("T", 1),
            updatedAt: updatedAt.split("T", 1),
          }}
        >
          <Title>{title}</Title>
        </Link>

        {createdAt !== updatedAt ? (
          <>
            <CreatedAt>발행일 : {createdAt.split("T", 1)}</CreatedAt>
            <CreatedAt>수정일 : {updatedAt.split("T", 1)}</CreatedAt>
          </>
        ) : (
          <CreatedAt>발행일 : {createdAt.split("T", 1)}</CreatedAt>
        )}
      </ContentContainer>
    </Container>
  );
};

export default SingleTodo;

const Container = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 1px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) -1px 1px 3px -1px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  padding-right: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 5px;
`;

const CreatedAt = styled.div`
  font-size: 14px;
`;
