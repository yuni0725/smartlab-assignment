import { signInWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";
import isValueTypeOfEmail, {
  Error,
  Form,
  FormContent,
  Input,
  InputBox,
  Label,
  LabelText,
  NaviText,
  Navibar,
  StyledLink,
  SubmitBtn,
  Switcher,
  TitleText,
  Wrapper,
} from "../components/auth-component";

type FormFields = {
  email: string;
  password: string;
  passwordForCheck: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
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
          <TitleText>Login</TitleText>
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
            value={isSubmitting ? "Loading..." : "Login"}
          ></SubmitBtn>
          {errors.root && <Error>{errors.root.message}</Error>}
          <Switcher>
            Don't you have an account?{" "}
            <StyledLink to="/create-account">Click Here! &rarr;</StyledLink>
          </Switcher>
        </Form>
      </FormContent>
    </Wrapper>
  );
}
