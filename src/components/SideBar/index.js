import React from "react";
import logo from "../../assets/logo-app.svg";
import home from "../../assets/home.svg";
import book from "../../assets/book.svg";
import user from "../../assets/user.svg";
import logout from "../../assets/log-out.svg";
import { useHistory } from "react-router-dom";

import {
  Container,
  UserImage,
  UserImageContainer,
  UserOptionsContainer,
  UserOption,
  LogoContainer,
} from "./style";

function SideBar({ component, setComponent, setIndex }) {
  const history = useHistory();

  function changeComponent(n) {
    if (n === 1) {
      history.push("/home");
      setComponent("home");
      setIndex(1);
    } else if (n === 2) {
      history.push("/subjects");
      setComponent("subjects");
      setIndex(2);
    } else if (n === 3) {
      setComponent("subjectPage");
      setIndex(3);
    } else if (n === 4) {
      history.push("/profile");
      setComponent("user");
      setIndex(4);
    }
  }

  return (
    <Container>
      <UserImageContainer>
        <UserImage src="https://pbs.twimg.com/media/ExxK2ztWUAEDkeR?format=jpg&name=900x900"></UserImage>
        <h6 style={{ margin: "5px" }}>Juliette</h6>
      </UserImageContainer>
      <UserOptionsContainer>
        <UserOption
          active={component === "home"}
          onClick={() => changeComponent(1)}
        >
          <img
            alt="imagem"
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
            alt="aaaaa"
            src={book}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Subjects
        </UserOption>
      </UserOptionsContainer>

      <UserOptionsContainer>
        <UserOption
          active={component === "user"}
          onClick={() => changeComponent(4)}
        >
          <img
            alt="aaaaa"
            src={user}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Profile
        </UserOption>
      </UserOptionsContainer>

      <UserOptionsContainer>
        <UserOption
          onClick={() => history.replace("/login")}
        >
          <img
            alt="aaaaa"
            src={logout}
            style={{ width: "27px", height: "33px", marginRight: "15px" }}
          ></img>
          Logout
        </UserOption>
      </UserOptionsContainer>

      <LogoContainer>
        <img
          src={logo}
          alt="aaaaa"
          style={{ width: "60%", height: "60px" }}
        ></img>
      </LogoContainer>
    </Container>
  );
}

export default SideBar;
