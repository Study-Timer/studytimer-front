import React, { useState } from "react";
import TextInputProfile from "../../components/TextInputProfile";
import pencil from "../../assets/edit-3.svg";
import Modal from "../../components/Modal";
import {
  Container,
  SubsectionContent,
  SubsectionTitle,
  Main,
  SubsectionContainer,
  SubsectionItem,
} from "./style";

function Profile() {
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalName, setModalName] = useState();
  const [modalAction, setModalAction] = useState({});

  function toggle(message, name) {
    setModalMessage(message);
    setModalName(name);
    setModal(!modal);
  }
  return (
    <Container>
      <Modal
        toggle={toggle}
        modal={modal}
        modalMessage={modalMessage}
        modalName={modalName}
        action={modalAction}
      />
      <h1 style={{ margin: "30px 0px" }}>Profile</h1>
      <Main>
        <SubsectionContainer>
          <SubsectionItem>
            <SubsectionTitle>Username</SubsectionTitle>
          </SubsectionItem>
          <SubsectionItem>
            <SubsectionContent>Nome</SubsectionContent>
            <img
              src={pencil}
              onClick={() => toggle("name", "name")}
              style={{ width: "17px", height: "17px" }}
            ></img>
          </SubsectionItem>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionItem>
            <SubsectionTitle>Email</SubsectionTitle>
          </SubsectionItem>
          <SubsectionItem>
            <SubsectionContent>email@email.com </SubsectionContent>
            <img
              src={pencil}
              onClick={() => toggle("email", "email")}
              style={{ width: "17px", height: "17px" }}
            ></img>
          </SubsectionItem>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionItem>
            <SubsectionTitle>Subjects</SubsectionTitle>
          </SubsectionItem>
          <SubsectionItem>
            <SubsectionContent>n° de materias</SubsectionContent>
          </SubsectionItem>
        </SubsectionContainer>
      </Main>
    </Container>
  );
}

export default Profile;
