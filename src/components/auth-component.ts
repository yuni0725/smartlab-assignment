import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr;
  height: 100vh;
`;

export const Navibar = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const NaviText = styled.span`
  font-size: 28px;
  font-weight: 600;
  margin-left: 10px;
`;

export const FormContent = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(18, 18, 18);
  background: linear-gradient(
    0deg,
    rgba(18, 18, 18, 1) 0%,
    rgba(32, 32, 32, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 50vw;
  height: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
`;

export const TitleText = styled.span`
  font-size: 36px;
  color: white;
  font-weight: 600;
  margin-top: 20px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;

  border-radius: 5px;
  border: 1px solid #8c8c8c;

  padding-left: 10px;

  font-size: 18px;

  box-sizing: border-box;

  &::placeholder {
    font-size: 18px;
    text-align: left;
    padding-left: 3px;
  }

  &:focus {
    box-shadow: 0 0 0 1.5px white;
  }
`;

export const Label = styled.label`
  color: white;
  width: 100%;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const LabelText = styled.span`
  text-align: left;
  font-weight: 500;
`;

export const SubmitBtn = styled.input`
  background-color: var(--highlight-color);
  width: 300px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;

  cursor: pointer;

  border: none;

  &:hover {
    opacity: 0.8;
  }

  font-size: 16px;
  font-weight: 600;
  color: #121212;
`;

export const Switcher = styled.span`
  font-size: 14px;
`;

export const Error = styled.span`
  font-size: 14px;
  color: tomato;
  margin-top: 5px;
`;

export const StyledLink = styled(Link)`
  color: var(--highlight-color);
  text-decoration: none;
`;

export default function isValueTypeOfEmail(
  valueShouldBeCheck: string
): boolean {
  if (valueShouldBeCheck.includes("@")) {
    return true;
  }
  return false;
}
