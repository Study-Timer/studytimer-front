import React, { useState } from "react";
import TextInputProfile from "../../components/TextInputProfile";
import edit from "../../assets/edit-icon.svg";
import Modal from "../../components/Modal";
import {
  Container,
  Body,
  ProfileSubsection,
  SubsectionTitle,
  SubsectionContent,
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
      <h1 style={{ width: "260px" }}>Profile</h1>
      <Body>
        <ProfileSubsection>
          <SubsectionTitle>
            <h2>Username</h2>
          </SubsectionTitle>
          <SubsectionContent>
            <span>Nome</span>
            <img
              alt="ksdjaskjd"
              src={edit}
              onClick={() => toggle("name", "Name")}
              style={{ width: "17px", height: "17px", cursor: "pointer" }}
            ></img>
          </SubsectionContent>
        </ProfileSubsection>

        <ProfileSubsection>
          <SubsectionTitle>
            <h2>Email</h2>
          </SubsectionTitle>
          <SubsectionContent>
            <span>email@email.com</span>
            <img
              alt="ksdjaskjd"
              src={edit}
              onClick={() => toggle("email", "Email")}
              style={{ width: "17px", height: "17px", cursor: "pointer" }}
            ></img>
          </SubsectionContent>
        </ProfileSubsection>

        <ProfileSubsection>
          <SubsectionTitle>
            <h2>Subjects</h2>
          </SubsectionTitle>
          <SubsectionContent>
            <span>10</span>
          </SubsectionContent>
        </ProfileSubsection>
      </Body>
    </Container>
  );
}

export default Profile;
