import React from "react";
import TextInputProfile from "../../components/TextInputProfile";

import {
  Container,
  SubsectionContent,
  SubsectionTitle,
  Main,
  SubsectionContainer,
  SubsectionItem,
} from "./style";

function Profile() {
  return (
    <Container>
      <div>
        <h1>Profile</h1>
      </div>
      <Main>
        <SubsectionContainer>
          <SubsectionItem>
            <SubsectionTitle>Username</SubsectionTitle>
          </SubsectionItem>
          <SubsectionItem>
            <SubsectionContent>Nome</SubsectionContent>
          </SubsectionItem>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionItem>
            <SubsectionTitle>Email</SubsectionTitle>
          </SubsectionItem>
          <SubsectionItem>
            <SubsectionContent>email@email.com</SubsectionContent>
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
