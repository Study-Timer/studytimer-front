import React from "react";
import { Container, Header, CardsContainer } from "./style";
import ActivityCard from "../../components/ActivityCard";

function SubjectPage() {
  return (
    <Container>
      <Header>
        <div style={{}}>
          <h1 style={{ width: "500px" }}>Nome da Matéria</h1>
        </div>
      </Header>

      <CardsContainer>
        <ActivityCard></ActivityCard>
      </CardsContainer>

      <Header>
        <div style={{}}>
          <h2 style={{ width: "100%" }}>Atividades realizadas anteriormente</h2>
        </div>
      </Header>

      <CardsContainer>
        <ActivityCard></ActivityCard>
        <ActivityCard></ActivityCard>
      </CardsContainer>
    </Container>
  );
}

export default SubjectPage;
