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
        <UserImage src="data:image/jpeg;base64,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"></UserImage>
        <h6 style={{ margin: "5px" }}>User Name</h6>
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
