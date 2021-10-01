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
            <h1>Edit your {modalName}</h1>
          </Header>
          <Body>
            <StyledFormGroup>
              <StyledLabel>{modalName}</StyledLabel>
              <TextInput />
            </StyledFormGroup>
            <StyledButton onClick={toggle}>
              <img src={save} alt="img" /> SAVE
            </StyledButton>
          </Body>
        </Container>
      </Modal>
    </div>
  );
};

export default ModalExample;
