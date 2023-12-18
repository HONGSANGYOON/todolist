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
  );
};

export default Working;

const ContentContainer = styled.div`
  width: 10vw;
  height: 10vh;
`;
