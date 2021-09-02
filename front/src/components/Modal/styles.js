import { FormGroup, Label } from "reactstrap";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: Poppins;
    font-weight: 700;
    font-style: normal;
    font-size: 36px;
    line-height: 46, 87px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 250px;
`;

export const TextInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 30px;
  padding: 10px;
  width: 100%;
`;

export const StyledFormGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 50px;
  width: 100%;
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
  margin: 40px;
  width: 60%;

  img {
    width: 25px;
    height: 25px;
    margin-right: 3px;
  }
`;

export const StyledLabel = styled(Label)`
  color: black;
  font-weight: bold;
  padding: 0;
  font-size: 15px;
  display: flex;
  margin: 5px;
`;
