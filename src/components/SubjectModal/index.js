import React, { useState, useEffect } from "react";
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

const ModalExample = ({
  modal,
  toggle,
  modalMessage,
  modalName,
  action,
  cards,
  setCards,
  index,
  setIndex,
}) => {
  const [data, setData] = useState({
    name: "",
    time: "00:00",
    index: index,
    setIndex: setIndex,
  });

  useEffect(() => {
    setData({ name: "", time: "00:00", index: index, setIndex: setIndex });
  }, [cards]);

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
              <TextInput
                value={data.name}
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledLabel>Description</StyledLabel>
              <TextInput />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledLabel>Difficulty</StyledLabel>
              <TextInput />
            </StyledFormGroup>
            <StyledButton
              onClick={() => {
                toggle();
                setCards([...cards, data]);
              }}
            >
              <img src={save} /> SAVE
            </StyledButton>
          </Body>
        </Container>
      </Modal>
    </div>
  );
};

export default ModalExample;
