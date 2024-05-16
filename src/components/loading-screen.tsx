import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Text>Loading...</Text>
    </Wrapper>
  );
}
