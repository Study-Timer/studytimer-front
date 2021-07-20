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
            flexDirection:"column"
          }}
        >
          <StyledFormGroup>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            ></StyledInput>
          </StyledFormGroup>
          <StyledFormGroup>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              name="password"
              id="password"
              placeholder="**********"
            ></StyledInput>
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
