import styled from "styled-components";
import TaskMarkdownRender from "./task-markdown-render";
import { CodeEditorForCoding } from "./task-code-editor";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  height: 100vh;
`;
export default function TaskReadWrite() {
  return (
    <Wrapper>
      <TaskMarkdownRender></TaskMarkdownRender>
      <CodeEditorForCoding></CodeEditorForCoding>
    </Wrapper>
  );
}
