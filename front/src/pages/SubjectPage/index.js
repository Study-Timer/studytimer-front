import React from "react";
import { Container, Header, CardsContainer } from "./style";
import ActivityCard from "../../components/ActivityCard";

function SubjectPage() {
  return (
    <Container>
      <Header>
        <div>
          <h1 style={{ width: "500px" }}>Nome da Matéria</h1>
        </div>
      </Header>

      <CardsContainer>
        <ActivityCard text={"Start"} time={"00:00:00"} name={"Nova atividade"}></ActivityCard>
      </CardsContainer>

      <Header>
        <div>
          <h2 style={{ width: "100%" }}>Atividades realizadas anteriormente</h2>
        </div>
      </Header>

      <CardsContainer>
        <ActivityCard text={"Done"} time={"01:35:00"} name={"Revisão da prova"}></ActivityCard>
        <ActivityCard text={"Done"} time={"00:50:00"} name={"Análise de provas"}></ActivityCard>
        <ActivityCard text={"Done"} time={"00:53:00"} name={"Estudo capítulo 1"}></ActivityCard>
      </CardsContainer>
    </Container>
  );
}

export default SubjectPage;
