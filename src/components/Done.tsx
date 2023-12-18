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
          <ButtonContainer>
            <Btn
              onClick={() => {
                deleteButtonHandler(
                  successList,
                  successcontent,
                  setSuccessList
                );
              }}
            >
              삭제하기
            </Btn>
          </ButtonContainer>
        </ContentContainer>
      ))}
    </div>
  );
};

export default Done;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
  margin-top: 20px;
`;

const Btn = styled.button`
  width: 5vw;
  height: 2.5vh;

  margin-top: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
