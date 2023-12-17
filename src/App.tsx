import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const [inputContent, setInputContent] = useState<string>("");
  const [contentList, setContentList] = useState<string[]>([]);
  const [successList, setSuccessList] = useState<string[]>([]);

  //input안 내용 적용
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
  //완료하기 버튼을 작용시, 마무리한일로 내려갑니다.

  const onClickSuccessHandler = (content: string) => {
    setSuccessList([...successList, content]);
  };

  return (
    <>
      <div>
        <input onChange={inputTextHandler} value={inputContent}></input>
        <InputBtn
          onClick={() => {
            onClickHandler();
          }}
        >
          확인하기
        </InputBtn>
      </div>

      <div>
        <h2>오늘 할일</h2>
        {/* input태그에서 갖고온 사항들 리스트로 처리 */}
        {contentList.map((content, index) => (
          <ContentContainer key={index}>
            <div>{content}</div>
            <button>삭제하기</button>
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
        {successList.map((successcontent) => (
          <div>
            <div>{successcontent}</div>
            <button>삭제하기</button>
          </div>
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
