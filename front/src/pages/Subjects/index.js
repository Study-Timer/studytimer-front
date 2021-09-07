import React from 'react';
import { Container, CardsContainer, Header } from "./style";
import SubjectCard from '../../components/SubjectCard';
import plusIcon from "../../assets/plus-circle.svg";

function Subjects() {
  return (
    <Container>
      <div style={{}}>
        <Header>
        <h1>Subjects</h1>
        <img 
        src={plusIcon} 
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