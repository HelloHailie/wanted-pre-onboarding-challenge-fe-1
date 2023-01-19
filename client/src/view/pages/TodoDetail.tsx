import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { AiFillEdit, AiFillDelete, AiOutlineEnter } from "react-icons/ai";
import useUpdateTodo from "../../hooks/todos/useUpdateTodo";
import useDeleteTodo from "../../hooks/todos/useDeleteTodo";
import Layout from "../../components/layout/Layout";

const TodoDetail = () => {
  const location = useLocation();

  const title = location.state.title;
  const content = location.state.content;
  const createdAt = location.state.createdAt;
  const updatedAt = location.state.updatedAt;

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editContent, setEditContent] = useState<string>(content);

  const { id } = useParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { mutate: updateToDoMutate } = useUpdateTodo();
  const { mutate: deleteToDoMutate } = useDeleteTodo(navigate);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  const editHandler = (e: React.FormEvent, id: string) => {
    e.preventDefault();

    const data = { title: editTitle, content: editContent };
    updateToDoMutate({ id, data });
    navigate(-1);
  };

  const deleteHandler = (id: string) => {
    alert("선택하신 글이 삭제됩니다. ");
    deleteToDoMutate(id);
  };

  return (
    <Layout
      children={
        <Container>
          <ContentContainer>
            {isEdit ? (
              <EditContainer>
                <input
                  ref={inputRef}
                  value={editTitle}
                  onChange={(e) => {
                    setEditTitle(e.target.value);
                  }}
                ></input>
                <input
                  value={editContent}
                  onChange={(e) => {
                    setEditContent(e.target.value);
                  }}
                ></input>
                <ButtonSpan onClick={(e) => editHandler(e, `${id}`)}>
                  <AiOutlineEnter size='20px' />
                </ButtonSpan>
              </EditContainer>
            ) : (
              <>
                <Title>{title}</Title>
                <Content>{content}</Content>
              </>
            )}
            <>
              <CreatedAt>발행일 : {createdAt}</CreatedAt>
              <CreatedAt>수정일 : {updatedAt}</CreatedAt>
            </>
          </ContentContainer>
          <ButtonContainer>
            <ButtonSpan
              onClick={() => {
                if (!isEdit) {
                  setIsEdit(!isEdit);
                }
              }}
            >
              <AiFillEdit size='20px' />
            </ButtonSpan>
            <ButtonSpan onClick={() => deleteHandler(`${id}`)}>
              <AiFillDelete size='20px' />
            </ButtonSpan>
          </ButtonContainer>
        </Container>
      }
    />
  );
};

export default TodoDetail;

const Container = styled.div`
  /* border: 1px solid black; */

  box-shadow: rgba(50, 50, 93, 0.25) 1px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) -1px 1px 3px -1px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 50vh; */
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  padding-right: 10px;
`;
const EditContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    width: 250px;
    font-size: 15px;
    color: #6f6f6f;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #757575;

    :focus {
      outline: none;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ButtonSpan = styled.span`
  margin: 10px;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 5px;
`;
const Content = styled.div`
  padding-bottom: 10px;
`;

const CreatedAt = styled.div`
  font-size: 14px;
`;
