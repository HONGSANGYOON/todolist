import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import InputTag from "./components/InputTag";
import Working from "./components/Working";
import Done from "./components/Done";

function App() {
  const [inputContent, setInputContent] = useState<string>("");
  const [contentList, setContentList] = useState<string[]>([]);
  const [successList, setSuccessList] = useState<string[]>([]);

  return (
    <>
      <Todolist>
        <h1>TODO LIST</h1>
        <InputTag
          inputContent={inputContent}
          setInputContent={setInputContent}
          contentList={contentList}
          setContentList={setContentList}
        />

        <Working
          contentList={contentList}
          setContentList={setContentList}
          successList={successList}
          setSuccessList={setSuccessList}
        />

        <Done successList={successList} setSuccessList={setSuccessList} />
      </Todolist>
    </>
  );
}

export default App;

const Todolist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
