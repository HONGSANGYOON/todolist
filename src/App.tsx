import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const [inputContent, setInputContent] = useState<string>("");
  const [contentList, setContentList] = useState<string[]>([]);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  const onClickHandler = () => {
    setContentList([...contentList, inputContent]);
    setInputContent("");
  };
  return (
    <>
      <div>
        <input onChange={inputTextHandler} value={inputContent}></input>
        <InputBtn onClick={onClickHandler}>확인하기</InputBtn>
      </div>

      <div>
        <h2>오늘 할일</h2>
        {/* input태그에서 갖고온 사항들 리스트로 처리 */}
        {contentList.map((content, index) => (
          <ContentContainer key={index}>
            <div>{content}</div>
            <button>삭제하기</button>
            <button>완료하기</button>
          </ContentContainer>
        ))}
      </div>
      {/* 마무리한일 부분 */}
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
