import React, { useState } from "react";
import { Container, CardsContainer, Header } from "./style";
import SubjectCard from "../../components/SubjectCard";
import plusIcon from "../../assets/plus-circle.svg";
import SubjectModal from "../../components/SubjectModal";
import SubjectPage from "../SubjectPage";

function Subjects() {
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalName, setModalName] = useState();
  const [modalAction, setModalAction] = useState({});
  const [index, setIndex] = useState(false);

  function toggle(message, name) {
    setModalMessage(message);
    setModalName(name);
    setModal(!modal);
  }

  const pageSubjects = () => {
    return (
      <Container>
        <SubjectModal
          toggle={toggle}
          modal={modal}
          modalMessage={modalMessage}
          modalName={modalName}
          action={modalAction}
        />
        <div>
          <Header>
            <h1>Subjects</h1>
            <img
              alt="oi"
              src={plusIcon}
              onClick={() => toggle("name", "Name")}
              style={{ width: "28px", height: "28px", cursor: "pointer" }}
            />
          </Header>
        </div>
        <CardsContainer>
          <SubjectCard
            name="Matemática"
            time="600"
            index={index}
            setIndex={setIndex}
          />
          <SubjectCard
            name="História"
            time="600"
            index={index}
            setIndex={setIndex}
          />
        </CardsContainer>
      </Container>
    );
  };

  const pageSubject = () => (
    <Container>
      <SubjectPage />
    </Container>
  );

  return <>{index == false ? pageSubjects() : pageSubject()}</>;
}

export default Subjects;
