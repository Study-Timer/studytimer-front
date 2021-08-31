import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { Container, TextInput, StyledFormGroup, StyledButton } from "./styles";
import { StyledLabel } from "../../pages/Login/styles";

const ModalExample = ({ modal, toggle, modalMessage, modalName, action }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <Container>
          <h1>Edit your {modalName}</h1>
          <ModalBody>
            <StyledFormGroup>
              <StyledLabel>{modalName}</StyledLabel>
              <TextInput />
            </StyledFormGroup>
          </ModalBody>
          <StyledButton onClick={toggle}>Save</StyledButton>
        </Container>
      </Modal>
    </div>
  );
};

export default ModalExample;
