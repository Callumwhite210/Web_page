//Imports
import React from "react";
import Carousel from "./components/carousel/carousel";
import Header from "./components/Navbar/Navbar";
import About from "./components/About/About";

//Css
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className='outline'>
        <About />
      <Row>  
        <Col>         
          <div className='Carousel'>  
            <Carousel/>
          </div>         
        </Col>
      </Row>
        <h1>Contact Me!</h1>
      </Container>
    <h2> Footer </h2>
    </div>
  );
}

export default App;
