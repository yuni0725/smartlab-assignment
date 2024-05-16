import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navigationbar from "./navibar";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 16fr;
  height: 100vh;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Navigationbar></Navigationbar>
      <Outlet />
    </Wrapper>
  );
}
