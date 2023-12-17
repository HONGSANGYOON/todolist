import React from "react";
import styled from "styled-components";

interface DoneProps {
  successList: string[];
  setSuccessList: React.Dispatch<React.SetStateAction<string[]>>;
}
const Done: React.FC<DoneProps> = ({ successList, setSuccessList }) => {
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
    <div>
      <h2>마무리한 일</h2>
      {successList.map((successcontent, index) => (
        <ContentContainer key={index}>
          <div>{successcontent}</div>
          <button
            onClick={() => {
              deleteButtonHandler(successList, successcontent, setSuccessList);
            }}
          >
            삭제하기
          </button>
        </ContentContainer>
      ))}
    </div>
  );
};

export default Done;

const ContentContainer = styled.div`
  width: 10vw;
  height: 10vh;
`;
