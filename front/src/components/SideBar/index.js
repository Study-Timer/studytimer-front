import React, { useEffect } from "react";
import logo from "../../assets/logo-app.svg";
import home from "../../assets/home.svg";
import book from "../../assets/book.svg";
import user from "../../assets/user.svg";
import stats from "../../assets/bar-chart-2.svg";
import {
  Container,
  UserImage,
  UserImageContainer,
  UserOptionsContainer,
  UserOption,
  LogoContainer,
} from "./style";

function SideBar({ component, setComponent, setIndex }) {
  function changeComponent(n) {
    if (n === 1) {
      setComponent("home");
      setIndex(1);
    } else if (n === 2) {
      setComponent("subjects");
      setIndex(2);
    } else if (n === 3) {
      setComponent("stats");
      setIndex(3);
    } else if (n === 4) {
      setComponent("user");
      setIndex(4);
    }
  }

  return (
    <Container>
      <UserImageContainer>
        <UserImage src="https://www.vagalume.com.br/billie-eilish/images/billie-eilish.jpg"></UserImage>
        <h6 style={{ margin: "5px" }}>User Name</h6>
      </UserImageContainer>
      <UserOptionsContainer>
        <UserOption
          active={component === "home"}
          onClick={() => changeComponent(1)}
        >
          <img
            src={home}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Home
        </UserOption>
      </UserOptionsContainer>
      <UserOptionsContainer>
        <UserOption
          active={component === "subjects"}
          onClick={() => changeComponent(2)}
        >
          <img
            src={book}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Subjects
        </UserOption>
      </UserOptionsContainer>
      <UserOptionsContainer>
        <UserOption
          active={component === "stats"}
          onClick={() => changeComponent(3)}
        >
          <img
            src={stats}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Stats
        </UserOption>
      </UserOptionsContainer>
      <UserOptionsContainer>
        <UserOption
          active={component === "user"}
          onClick={() => changeComponent(4)}
        >
          <img
            src={user}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Profile
        </UserOption>
      </UserOptionsContainer>

      <LogoContainer>
        <img src={logo} style={{ width: "60%", height: "60px" }}></img>
      </LogoContainer>
    </Container>
  );
}

export default SideBar;
