import { FormGroup } from "reactstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Poppins;
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
    line-height: 46, 87px;
  }
`;

export const TextInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 30px;
`;

export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #000000;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 30px;
  width: 30%;
  color: #ffff;
  margin: 20px;
`;
