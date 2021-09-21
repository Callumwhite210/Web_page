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
        <Col>
          <Row>
          <div className='Carousel'>  
            <Carousel/>
          </div>
          </Row>
        </Col>        
      </Container>
    </div>
  );
}

export default App;
