import styled from "styled-components";
import { CgAttachment, CgHome, CgProfile } from "react-icons/cg";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 8vh;
`;

const TitleBox = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
`;

const Title = styled.span`
  font-size: 28px;
  font-weight: 600;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const HomeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
`;

const TaskBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
`;

const BarText = styled.span`
  margin-left: 5px;
  font-size: 16px;
`;

const FooterBox = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

const LogOutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;

const LogOutBtn = styled.button`
  width: 80%;
  height: 100%;
  background-color: var(--highlight-color);
  font-size: 12px;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogOutSpan = styled.span`
  background-color: transparent;
  color: #121212;
  font-weight: 600;
`;

const Profile = styled.div`
  color: white;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const LinkNoDecoration = styled(Link)`
  color: var(--highlight-color);
  text-decoration: none;
`;

export default function Navigationbar() {
  const navigate = useNavigate();
  const handleLogOutEvent = async () => {
    const ok = confirm("Are you sure you want to log out?");
    if (ok) {
      auth.signOut();
      navigate("/login");
    }
    return;
  };

  const handleProfileClickEvent = () => {
    alert(auth.currentUser?.displayName);
  };

  return (
    <Wrapper>
      <TitleBox>
        <Title>SmartLab</Title>
      </TitleBox>
      <ContentBox>
        <HomeBox>
          <LinkNoDecoration to="">
            <CgHome />
            <BarText>Home</BarText>
          </LinkNoDecoration>
        </HomeBox>
        <TaskBox>
          <LinkNoDecoration to="/task">
            <CgAttachment />
            <BarText>Task</BarText>
          </LinkNoDecoration>
        </TaskBox>
      </ContentBox>
      <FooterBox>
        <LogOutBox onClick={handleLogOutEvent}>
          <LogOutBtn>
            <LogOutSpan>Logout</LogOutSpan>
          </LogOutBtn>
        </LogOutBox>
        <Profile onClick={handleProfileClickEvent}>
          <CgProfile />
        </Profile>
      </FooterBox>
    </Wrapper>
  );
}
