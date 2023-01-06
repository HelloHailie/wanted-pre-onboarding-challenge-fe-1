import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete, AiOutlineEnter } from "react-icons/ai";
import { TodoMD } from "../components/model";
import axios from "axios";

const SingleTodo = ({ id, title, content, createdAt, updatedAt }: TodoMD) => {
  const URL = "http://localhost:8080";
  const token = localStorage.getItem("token");
  const [edit, setEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editContent, setEditContent] = useState<string>(content);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault();

    axios
      .put(
        `${URL}/todos/${id}`,
        {
          title: editTitle,
          content: editContent,
        },
        { headers: { Authorization: token } }
      )
      .then((response) => {
        console.log("hi");
        console.log(response);

        setEdit(false);
      })
      .catch((err) => {
        alert(err.response.data.details);
      });
  };

  const handleDelete = (id: string) => {
    alert("선택하신 글이 삭제됩니다. ");
    axios
      .delete(`${URL}/todos/${id}`, { headers: { Authorization: token } })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        alert(err.response.data.details);
      });
  };

  return (
    <Container>
      <ContentContainer>
        {edit ? (
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
            <ButtonSpan onClick={(e) => handleEdit(e, id)}>
              <AiOutlineEnter size='20px' />
            </ButtonSpan>
          </EditContainer>
        ) : (
          <>
            <Title>{title}</Title> <Content>{content}</Content>
          </>
        )}

        <CreatedAt>{createdAt}</CreatedAt>
        <CreatedAt>{updatedAt}</CreatedAt>
      </ContentContainer>
      <ButtonContainer>
        <ButtonSpan
          onClick={() => {
            if (!edit) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit size='20px' />
        </ButtonSpan>
        <ButtonSpan onClick={() => handleDelete(id)}>
          <AiFillDelete size='20px' />
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
  cursor: pointer;
`;
