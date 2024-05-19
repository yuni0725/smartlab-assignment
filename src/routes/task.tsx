import { useLocation } from "react-router-dom";
import TaskMarkdownRender from "../components/task-markdown-render";
import styled from "styled-components";
import TaskReadWrite from "../components/task-readWrite";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Task() {
  const readOnly = useLocation().state.readOnly;

  return (
    <>
      {readOnly ? (
        <Wrapper>
          <TaskMarkdownRender></TaskMarkdownRender>
        </Wrapper>
      ) : (
        <TaskReadWrite></TaskReadWrite>
      )}
    </>
  );
}
