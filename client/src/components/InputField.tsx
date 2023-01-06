import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({
  title,
  setTitle,
  content,
  setContent,
  submitHandler,
}: Props) => {
  return (
    <Container>
      <InputContainer onSubmit={(e) => submitHandler(e)}>
        <IContainer>
          <InputLabel htmlFor='title'>title</InputLabel>
          <Input
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></Input>
        </IContainer>
        <IContainer>
          <InputLabel htmlFor='content'>content</InputLabel>
          <Input
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></Input>
        </IContainer>
        <InputButton>등록하기</InputButton>
      </InputContainer>
    </Container>
  );
};

export default InputField;

const Container = styled.div`
  /* border: 1px solid black; */
  box-shadow: rgba(50, 50, 93, 0.25) 1px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) -1px 1px 3px -1px;
  /* padding: 50px; */
`;
const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const IContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const InputLabel = styled.label``;

const Input = styled.input`
  height: 30px;
  width: 270px;
  font-size: 15px;
  color: #6f6f6f;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #757575;

  :focus {
    outline: none;
  }
`;

const InputButton = styled.button`
  border: 0;
  background-color: #81a4ea;
  height: 30px;
  border-radius: 20px;
`;
