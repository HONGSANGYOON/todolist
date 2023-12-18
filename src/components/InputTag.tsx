import React from "react";
import { useState } from "react";
import styled from "styled-components";

interface InputTagProps {
  inputContent: string;
  setInputContent: React.Dispatch<React.SetStateAction<string>>;
  contentList: string[];
  setContentList: React.Dispatch<React.SetStateAction<string[]>>;
}
const InputTag: React.FC<InputTagProps> = ({
  inputContent,
  setInputContent,
  contentList,
  setContentList,
}) => {
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  //확인하기 버튼 작용시, 오늘할일로 내려갑니다.
  const onClickHandler = () => {
    if (inputContent === "") {
      alert("내용을 적어주세요");
    } else {
      setContentList([...contentList, inputContent]);
      setInputContent("");
    }
  };

  return (
    <>
      <Container>
        <input
          placeholder="내용을 적어주세요"
          onChange={inputTextHandler}
          value={inputContent}
        ></input>
        <InputBtn
          onClick={() => {
            onClickHandler();
          }}
        >
          확인하기
        </InputBtn>
      </Container>
    </>
  );
};

export default InputTag;

const InputBtn = styled.button`
  width: 5vw;
  height: 2.5vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin-top: 20px;
`;
