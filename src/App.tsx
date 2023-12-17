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

const A = (b: string) => {
  //변수명
  console.log(b);
};
A("aa");
const a = "@@@";
A(a);
