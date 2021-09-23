import React, { useState, useEffect } from "react";
import { Container } from "./style";
import SideBar from "../../components/SideBar";
import { LayoutSwitcher } from "../../utils/layoutswitcher";

function Layout() {
  const [index, setIndex] = useState(1);
  const [component, setComponent] = useState("home");

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
