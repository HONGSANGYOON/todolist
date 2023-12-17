import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import InputTag from "./components/InputTag";
import Working from "./components/Working";

function App() {
  const [inputContent, setInputContent] = useState<string>("");
  const [contentList, setContentList] = useState<string[]>([]);
  const [successList, setSuccessList] = useState<string[]>([]);

  //삭제하기버튼
  const deleteButtonHandler = (
    list: string[],
    originContent: string,
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    const updatedSuccessList = list.filter(
      (content) => content !== originContent
    );
    setList(updatedSuccessList);
  };

  return (
    <>
      <div>
        <InputTag
          inputContent={inputContent}
          setInputContent={setInputContent}
          contentList={contentList}
          setContentList={setContentList}
        />
      </div>

      <div>
        <Working
          contentList={contentList}
          setContentList={setContentList}
          successList={successList}
          setSuccessList={setSuccessList}
        />
      </div>
      <div>
        <h2>마무리한 일</h2>
        {successList.map((successcontent, index) => (
          <ContentContainer key={index}>
            <div>{successcontent}</div>
            <button
              onClick={() => {
                deleteButtonHandler(
                  successList,
                  successcontent,
                  setSuccessList
                );
              }}
            >
              삭제하기
            </button>
          </ContentContainer>
        ))}
      </div>
    </>
  );
}

const InputBtn = styled.button`
  width: 5vw;
  height: 2.5vh;
`;

const ContentContainer = styled.div`
  width: 10vw;
  height: 10vh;
`;
export default App;
