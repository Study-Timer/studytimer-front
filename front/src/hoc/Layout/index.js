import React, { useState, useEffect } from "react";
import { Container } from "./style";
import SideBar from "../../components/SideBar";

function Layout() {
  const [index, setIndex] = useState(1);
  const [component, setComponent] = useState("home");

  const LayoutSwitcher = (index) => {
    switch (index) {
      case 1:
        return <h1>Numero 1</h1>;
      case 2: 
        return <h1>Subjects Page</h1>;
      case 3:
        return <h1>Stats Page</h1>;
      case 4:
        return <h1>User Page</h1>;
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
