import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr;
  height: 100vh;
`;

const Navibar = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NaviText = styled.span`
  font-size: 28px;
  font-weight: 600;
  margin-left: 10px;
`;

const FormContent = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(#2d2d2d, #000000);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 50vw;
  height: 500px;
  background-color: black;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
`;

const TitleText = styled.span`
  font-size: 36px;
  color: white;
  font-weight: 600;
  margin-top: 20px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;

  border-radius: 5px;
  border: 1px solid #8c8c8c;
  background-color: black;

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

const Label = styled.label`
  color: white;
  width: 100%;
  font-size: 18px;
  margin-bottom: 5px;
`;

const LabelText = styled.span`
  text-align: left;
  font-weight: 500;
`;

const SubmitBtn = styled.input`
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
  font-weight: 500;
`;

const Switcher = styled.span`
  font-size: 10px;
`;

const Error = styled.span`
  font-size: 10px;
  color: tomato;
  margin-top: 5px;
`;

const StyledLink = styled(Link)`
  color: var(--highlight-color);
  text-decoration: none;
`;

type FormFields = {
  name: string;
  email: string;
  password: string;
  passwordForCheck: string;
};

function isValueTypeOfEmail(valueShouldBeCheck: string): boolean {
  if (valueShouldBeCheck.includes("@")) {
    return true;
  }
  return false;
}

export default function CreateAccount() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(credentials.user, { displayName: data.name });
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError("root", { message: error.message });
      }
    }
  };

  return (
    <Wrapper>
      <Navibar>
        <NaviText>Smartlab</NaviText>
      </Navibar>
      <FormContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TitleText>Create Account</TitleText>
          <InputBox>
            <Label>
              <LabelText>Name</LabelText>
            </Label>
            <Input
              {...register("name", { required: "Name is required!" })}
              placeholder="Name"
              autoComplete="off"
            ></Input>
            {errors.name && <Error>{errors.name.message}</Error>}
          </InputBox>
          <InputBox>
            <Label>
              <LabelText>Email</LabelText>
            </Label>
            <Input
              {...register("email", {
                required: "Email is required!",
                validate: (value) => {
                  if (isValueTypeOfEmail(value)) {
                    return true;
                  }
                  return "Email must include '@'";
                },
              })}
              placeholder="Email"
              autoComplete="off"
            ></Input>
            {errors.email && <Error>{errors.email.message}</Error>}
          </InputBox>
          <InputBox>
            <Label>
              <LabelText>Password</LabelText>
            </Label>
            <Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register("password", { required: "Password is required!" })}
            ></Input>
            {errors.password && <Error>{errors.password.message}</Error>}
          </InputBox>
          <SubmitBtn
            type="submit"
            value={isSubmitting ? "Loading..." : "Create Account"}
          ></SubmitBtn>
          {errors.root && <Error>{errors.root.message}</Error>}
          <Switcher>
            Already have an account?{" "}
            <StyledLink to="login">Log in &rarr;</StyledLink>
          </Switcher>
        </Form>
      </FormContent>
    </Wrapper>
  );
}
