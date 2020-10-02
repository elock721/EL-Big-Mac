import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card"

import "./App.css";



const App = () => {
  const [country, setCountry] = useState("");
  const [input, setInput] = useState("20");
  function handleChange(event) {
    setInput(event.target.value)
  };
  function handleSubmit() {
    console.log("submitted form")
  };
  useEffect(()=> {
    fetch("https://cors-anywhere.herokuapp.com/https://ipvigilante.com/json")
    .then(res => res.json())
    .then(data => setCountry(data.data.country_name))
    .catch(err => console.error(err))
  },[]) 
  return (
  <Container className="p-3">
    <Jumbotron>
      {/* <h1 className="header">McCurrency</h1>
      <h3>How many Big Mac's can you get?</h3> */}
    </Jumbotron>
  
  <h1 className="header">McCurrency</h1>
  <h1>You are in: {country}</h1>

    <h1>Please enter an amount of money in your local currency</h1>
    <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl value={input} onChange={handleChange} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
    <button onClick={handleSubmit}>Submit</button>
  </InputGroup>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <h1>Big Macs in your country:</h1>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title><h1>20 Big Macs</h1></Card.Title>
    <Card.Title><h1>(example)</h1></Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <Card.Link href="https://github.com/zelima/big-mac-index/blob/master/data/big-mac-index.csv" target="_blank">Big Mac Purchasing Parity Index</Card.Link>
  </Card.Body>
</Card>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <h1>Random Country: Argentina</h1>
  <Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Title><h1>20 Big Macs</h1></Card.Title>
    <Card.Title><h1>(example)</h1></Card.Title>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

  </Container>
)};

export default App;
