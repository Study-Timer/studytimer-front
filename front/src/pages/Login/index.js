import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Left,
  Right,
  StyledLabel,
  StyledFormGroup,
  StyledButton,
  NotRegisteredYet,
  Clicable,
} from "./styles";

import TextInput from "../../components/TextInput";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

import login_image from "../../assets/login-side-image.svg";

import { Form, FormText } from "reactstrap";

function Login() {
  let history = useHistory();

  function handleRegister() {
    console.log("clicou");
    history.replace("/register");
  }

  return (
    <Container>
      <Left>
        <Logo></Logo>

        <Form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <StyledFormGroup>
            <StyledLabel>Email</StyledLabel>
            <TextInput
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <StyledLabel>Password</StyledLabel>
            <TextInput
              type="password"
              name="password"
              id="password"
              placeholder="**********"
            />
          </StyledFormGroup>
          <StyledFormGroup>
            <Button width="100%">Login</Button>
          </StyledFormGroup>
        </Form>
        <NotRegisteredYet>
          <p>
            Not registered yet?{" "}
            <Clicable>
              <span onClick={handleRegister}>Create an Account</span>
            </Clicable>
            .
          </p>
        </NotRegisteredYet>
      </Left>
      <Right>
        <img src={login_image} alt="Login Image" />
      </Right>
    </Container>
  );
}

export default Login;
