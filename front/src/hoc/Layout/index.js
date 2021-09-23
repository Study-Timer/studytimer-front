import React, { useState, useEffect } from "react";
import { Container } from "./style";
import SideBar from "../../components/SideBar";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Subjects from "../../pages/Subjects";


function Layout() {
  const [index, setIndex] = useState(1);
  const [component, setComponent] = useState("home");

  const LayoutSwitcher = (index) => {
    switch (index) {
      case 1:
        return <Home />;
      case 2: 
        return <Subjects />;
      case 4:
        return <Profile />;
    }
  };

  return (
    <Container>
      <SideBar
        component={component}
        setComponent={setComponent}
        index={index}
        setIndex={setIndex}
      ></SideBar>
      {LayoutSwitcher(index)}
    </Container>
  );
}

export default Layout;
