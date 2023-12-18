import React from "react";
import styled from "styled-components";

interface WorkingProps {
  contentList: string[];
  setContentList: React.Dispatch<React.SetStateAction<string[]>>;

  successList: string[];
  setSuccessList: React.Dispatch<React.SetStateAction<string[]>>;
}
const Working: React.FC<WorkingProps> = ({
  contentList,
  setContentList,

  successList,
  setSuccessList,
}) => {
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
    <div>
      <h2>오늘 할일</h2>
      {/* input태그에서 갖고온 사항들 리스트로 처리 */}
      {contentList.map((content, index) => (
        <ContentContainer key={index}>
          <div>{content}</div>

          <ButtonContainer>
            <Btn
              onClick={() => {
                deleteButtonHandler(contentList, content, setContentList);
              }}
            >
              삭제하기
            </Btn>
            <Btn
              onClick={() => {
                onClickSuccessHandler(content);
              }}
            >
              완료하기
            </Btn>
          </ButtonContainer>
        </ContentContainer>
      ))}
    </div>
  );
};

export default Working;

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
