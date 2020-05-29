import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import { Container } from "react-bootstrap";

function App(props) {
  return (
    <Container>
      <Header />
      <Form />
      <Display />
    </Container>
  );
}

export default App;
