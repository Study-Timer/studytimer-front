import React from "react";
import {useHistory} from "react-router-dom";

import {
  Container,
  Left,
  Right,
  StyledInput,
  StyledLabel,
  StyledFormGroup,
  StyledButton,
  Clicable,
  AlreadyHaveAccount,
} from "./styles";

import TextInput from "../../components/TextInput";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

import register_image from "../../assets/register-side-image.svg";

import { Form, FormText } from "reactstrap";

function Register() {

  let history = useHistory();

  function handleRegister() {
    console.log("clicou");
    history.replace("/login");
  }

  return (
    <Container>
      <Left>
        <img src={register_image} alt="Register image" />
      </Left>
      <Right>
        <div>
          <Logo></Logo>
        </div>

        <div>
          <Form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <StyledFormGroup>
              <StyledLabel>Username</StyledLabel>
              <TextInput
                type="username"
                name="username"
                id="username"
                placeholder="example"
              />
            </StyledFormGroup>
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
              <Button width="100%">Register</Button>
            </StyledFormGroup>
          </Form>
        </div>
        <div>
          <AlreadyHaveAccount>
            <p>
              Already have an account?
              <Clicable>
                <span onClick={handleRegister}> Sign in</span>
              </Clicable>
              .
            </p>
          </AlreadyHaveAccount>
        </div>
      </Right>
    </Container>
  );
}

export default Register;
