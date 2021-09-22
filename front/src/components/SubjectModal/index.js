import React from "react";
import { Modal } from "reactstrap";
import {
  Container,
  TextInput,
  StyledFormGroup,
  StyledButton,
  Header,
  StyledLabel,
  Body,
} from "./styles";
import save from "../../assets/save.svg";

const ModalExample = ({ modal, toggle, modalMessage, modalName, action }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <Container>
          <Header>
            <h1>Subjects</h1>
          </Header>
          <Body>
            <StyledFormGroup>
              <StyledLabel>Name</StyledLabel>
              <TextInput />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledLabel>Description</StyledLabel>
              <TextInput />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledLabel>Difficulty</StyledLabel>
              <TextInput />
            </StyledFormGroup>
            <StyledButton onClick={toggle}>
              <img src={save} /> SAVE
            </StyledButton>
          </Body>
        </Container>
      </Modal>
    </div>
  );
};

export default ModalExample;