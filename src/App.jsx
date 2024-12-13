import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import MusicSection from "./components/MusicSection";
import Player from "./components/Player";

const App = () => {
  return (
    <Container fluid className="my-0 px-0 bg-black">
      <Row>
        <Col xs={3} md={3} lg={3}>
          <Sidebar />
        </Col>
        <Col xs={9} md={9} lg={9}>
          <MusicSection />
          <Player />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
