//Imports
import React from "react";
import Carousel from "./components/carousel/carousel";
import Header from "./components/Navbar/Navbar";
import { Container, Row, Col } from 'react-bootstrap';

//Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className='outline'>
        
          <Row>
          <h1> About </h1>
            <Col>
              <p> Picture </p>
            </Col>
            <Col>
              <p> Text </p>
            </Col>
          </Row>
      <Row>  
        <Col>         
          <div className='Carousel'>  
            <Carousel/>
          </div>         
        </Col>
      </Row>      
      </Container>
    </div>
  );
}

export default App;
