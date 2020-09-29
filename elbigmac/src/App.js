import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


import "./App.css";



const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">McCurrency</h1>
      <h3>How many Big Mac's can you get?</h3>
    </Jumbotron>
    <h1>Please enter an amount of money in your local currency 😃 </h1>
    <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  


  </Container>
);

export default App;
