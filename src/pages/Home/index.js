import React from "react";

import { Container, Card, CardItem, CardItens } from "./style";
import Modal from "../../components/Modal";

function Home() {
  return (
    <Container>
      <div style={{}}>
        <h1 style={{ width: "260px" }}>Hello Julliete</h1>
        <h4 style={{ color: "#B1AAAA" }}>Welcome Back!</h4>
      </div>
      <Card>
        <h1>Overview</h1>
        <CardItens>
          <CardItem>
            <p>Per day</p>
            <h2>600</h2>
            <p>minutes</p>
          </CardItem>
          <CardItem>
            <p>Per month</p>
            <h2>600</h2>
            <p>minutes</p>
          </CardItem>
          <CardItem>
            <p>Per semester</p>
            <h2>600</h2>
            <p>minutes</p>
          </CardItem>
        </CardItens>
      </Card>
    </Container>
  );
}

export default Home;
