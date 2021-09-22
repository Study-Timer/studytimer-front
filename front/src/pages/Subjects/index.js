import React, { useState } from "react";
import { Container, CardsContainer, Header } from "./style";
import SubjectCard from '../../components/SubjectCard';
import plusIcon from "../../assets/plus-circle.svg";
import SubjectModal from "../../components/SubjectModal";

function Subjects() {
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
      <SubjectModal
        toggle={toggle}
        modal={modal}
        modalMessage={modalMessage}
        modalName={modalName}
        action={modalAction}
      />
      <div style={{}}>
        <Header>
        <h1>Subjects</h1>
        <img 
        src={plusIcon} 
        onClick={() => toggle("name", "Name")}
        style={{ width: "28px", height: "28px", cursor: "pointer" }}/>
        </Header>
      </div>
      <CardsContainer>
        <SubjectCard name="Matemática" time="600"/>
        <SubjectCard name="História" time="600"/>
      </CardsContainer>
    </Container>
  );
}

export default Subjects;