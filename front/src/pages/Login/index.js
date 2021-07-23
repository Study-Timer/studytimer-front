import React from "react";

import {
  Container,
  Left,
  Right,
  StyledInput,
  StyledLabel,
  StyledFormGroup,
  StyledButton,
  NotRegisteredYet,
} from "./styles";

import TextInput from "../../components/TextInput";
import { Form, FormText } from "reactstrap";

function Login() {
  return (
    <Container>
      <Left>
        <h1>StudyTimer</h1>

        <Form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
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
            <StyledButton>Login</StyledButton>
          </StyledFormGroup>
        </Form>
        <NotRegisteredYet>
          <p>Not registered yet? Create an Account.</p>
        </NotRegisteredYet>
      </Left>
      <Right>
        <h2>
          Count your<br></br> Study hours
        </h2>
      </Right>
    </Container>
  );
}

export default Login;
