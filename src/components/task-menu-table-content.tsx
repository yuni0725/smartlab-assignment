import styled from "styled-components";
import { TaskType } from "../routes/task-menu";
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

const Header = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: transparent;
`;

const Main = styled.div`
  background-color: transparent;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  font-size: 18px;
  font-weight: 600;
`;

const Difficulty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  font-size: 16px;
  font-weight: 300;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: var(--highlight-color);

  font-weight: 500;

  background-color: transparent;

  &:hover {
    opacity: 0.9;
  }

  cursor: pointer;
`;

function getStarWithDifficulty(difficulty: number) {
  if (difficulty == 0) {
    return "☆☆☆";
  } else if (difficulty == 1) {
    return "★☆☆";
  } else if (difficulty == 2) {
    return "★★☆";
  } else if (difficulty == 3) {
    return "★★★";
  }
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
        <ContentTitle>{fileName}</ContentTitle>
        <Difficulty>{getStarWithDifficulty(difficulty)}</Difficulty>
      </Header>
      <Main></Main>
      <Footer>
        <StyledLink to={fileID} state={{ readOnly: readOnly }}>
          {"Link ->"}
        </StyledLink>
      </Footer>
    </Wrapper>
  );
}
