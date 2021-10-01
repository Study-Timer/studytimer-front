import React, { useState, useEffect } from "react";
import { Container, CardsContainer, Header } from "./style";
import plusIcon from "../../assets/plus-circle.svg";
import SubjectModal from "../../components/SubjectModal";
import SubjectPage from "../SubjectPage";
import { Card, CardItem, CardItens, CardHeader, HeaderButtons } from "./style";
import { LayoutSwitcher } from "../../utils/layoutswitcher";
import edit from "../../assets/edit-icon.svg";
import trash from "../../assets/trash.svg";
import arrow from "../../assets/arrow-up.svg";

function Subjects() {
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalName, setModalName] = useState();
  const [modalAction, setModalAction] = useState({});
  const [index, setIndex] = useState(false);

  const [cards, setCards] = useState([
    { name: "Matemática", time: "600", index: index, setIndex: setIndex },
    {
      name: "História",
      time: "50",
      index: index,
      setIndex: setIndex,
    },
    { name: "Biologia", time: "301", index: index, setIndex: setIndex },
    { name: "Sociologia", time: "230", index: index, setIndex: setIndex },
    { name: "Física", time: "125", index: index, setIndex: setIndex },
    { name: "Português", time: "450", index: index, setIndex: setIndex },
  ]);

  function toggle(message, name) {
    setModalMessage(message);
    setModalName(name);
    setModal(!modal);
  }

  function removeElement(i) {
    setCards(
      cards.filter((e) => {
        return e.name !== i;
      })
    );
  }

  const pageSubjects = () => {
    const returnCards = (cards) =>
      cards.map((element, i) => {
        return (
          <SubjectCard
            name={element.name}
            time={element.time}
            index={element.index}
            setIndex={element.setIndex}
            i={i}
          />
        );
      });

    return (
      <Container>
        <SubjectModal
          toggle={toggle}
          modal={modal}
          modalMessage={modalMessage}
          modalName={modalName}
          action={modalAction}
          cards={cards}
          setCards={setCards}
          index={index}
          setIndex={setIndex}
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
        <CardsContainer>{returnCards(cards)}</CardsContainer>
      </Container>
    );
  };

  function SubjectCard({ name, time, index, setIndex, i }) {
    return (
      <Card>
        <CardHeader>
          <h1>{name}</h1>
          <HeaderButtons>
            <img
              alt="hoje"
              onClick={(() => LayoutSwitcher(3), () => setIndex(!index))}
              src={arrow}
              style={{ width: "17px", height: "17px", cursor: "pointer" }}
            ></img>
            <img
              alt="hoje"
              src={edit}
              style={{ width: "17px", height: "17px", cursor: "pointer" }}
            ></img>
            <img
              onClick={() => {
                removeElement(name);
              }}
              alt="hoje"
              src={trash}
              style={{ width: "17px", height: "17px", cursor: "pointer" }}
            ></img>
          </HeaderButtons>
        </CardHeader>
        <CardItens>
          <CardItem>
            <p>Per day</p>
            <h2>{time}</h2>
            <p>minutes</p>
          </CardItem>
        </CardItens>
      </Card>
    );
  }

  const pageSubject = () => (
    <Container>
      <SubjectPage />
    </Container>
  );

  return <>{index == false ? pageSubjects() : pageSubject()}</>;
}

export default Subjects;
