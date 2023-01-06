import React from "react";
import { TodoMD } from "../components/model";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const SingleTodo = ({ id, title, content, createdAt, updatedAt }: TodoMD) => {
  return (
    <Container>
      <ContentContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <CreatedAt>{createdAt}</CreatedAt>
      </ContentContainer>
      <ButtonContainer>
        <ButtonSpan>
          <AiFillEdit />
        </ButtonSpan>
        <ButtonSpan>
          <AiFillDelete />
        </ButtonSpan>
      </ButtonContainer>
    </Container>
  );
};

export default SingleTodo;

const Container = styled.div`
  /* border: 1px solid black; */

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
const Content = styled.div`
  padding-bottom: 10px;
`;
const CreatedAt = styled.div``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ButtonSpan = styled.span`
  margin: 10px;
`;
