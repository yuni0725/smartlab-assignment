import styled from "styled-components";
import { TaskType } from "../routes/task";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 180px;
  height: 250px;

  flex-shrink: 0;

  border-radius: 10px;

  margin: 20px 40px 20px 0px;
  padding: 10px;

  background-color: #424242;

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
`;

const Header = styled.div``;

const Main = styled.div`
  background-color: gray;
`;

const Footer = styled.div``;

const ContentTitle = styled.h1``;

const Difficulty = styled.h1``;

const StyledLink = styled(Link)``;

function getStarWithDifficulty(difficulty: number) {
  return "";
}

export default function TaskMenuTableContent({
  fileID,
  fileName,
  difficulty,
  readOnly,
}: TaskType) {
  return (
    <Wrapper>
      <Header>
        <ContentTitle>
          <h1>{fileName}</h1>
        </ContentTitle>
        <Difficulty>
          <h1>{difficulty}</h1>
        </Difficulty>
      </Header>
      <Main></Main>
      <Footer>
        <StyledLink>
          <h1>{fileID}</h1>
        </StyledLink>
      </Footer>
    </Wrapper>
  );
}
