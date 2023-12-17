import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const [contentList, setContentList] = useState<string>("");

  const inputTextHandler = (e) => {
    setContentList(e.target.value);
  };

  return (
    <>
      <div>
        <input></input>
        <InputBtn>확인하기</InputBtn>
      </div>
      {/* 할일부분 */}
      <div>
        <h2>오늘 할일</h2>
        {/* input태그에서 갖고온 사항들 리스트로 처리 */}
      </div>
      {/* 마무리한일 부분 */}
    </>
  );
}

const InputBtn = styled.button`
  width: 5vw;
  height: 2.5vh;
`;
export default App;
