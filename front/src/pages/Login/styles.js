import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: white;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: black;
  color: #ffffff;
  text-align: center;
`;

export const StyledInput = styled(Input)`
  border-radius: 50px;
  color: #ccc;
  border: 1px solid #ccc;
  width: 100%;
  padding: 11px;
  margin-top: 8px;
`;

export const StyledLabel = styled(Label)`
  color: black;
  font-weight: bold;
  padding: 0;
  font-size: 15px;
`;

export const StyledFormGroup = styled(FormGroup)`
  width: 100%;
  height: 50px;
  margin-top: 30px;
`;

export const StyledButton = styled(Button)`
  margin-top: 15px;
  border-radius: 50px;
  color: #fff;
  border: none;
  text-align: center;
  background-color: black;
  width: 100%;
  padding: 12px;
`;

export const NotRegisteredYet = styled.div`
margin-top: 15px;
  text-align: center;
  font-size: 15px;
  color: black;
`;