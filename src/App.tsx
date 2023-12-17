import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import InputTag from "./components/InputTag";

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

  const onClickSuccessHandler = (content: string) => {
    const updateList = contentList.filter(
      (updateListContent: string) => updateListContent !== content
    );
    setContentList(updateList);
    setSuccessList([...successList, content]);
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
        <h2>오늘 할일</h2>
        {/* input태그에서 갖고온 사항들 리스트로 처리 */}
        {contentList.map((content, index) => (
          <ContentContainer key={index}>
            <div>{content}</div>
            <button
              onClick={() => {
                deleteButtonHandler(contentList, content, setContentList);
              }}
            >
              삭제하기
            </button>
            <button
              onClick={() => {
                onClickSuccessHandler(content);
              }}
            >
              완료하기
            </button>
          </ContentContainer>
        ))}
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
