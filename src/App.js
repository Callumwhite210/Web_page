//Imports
import React from "react";
import Carousel from "./components/carousel/carousel";
import { Container, Row, Col } from 'react-bootstrap';

//Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <Container className='outline'>
        <Col>
          <Row>
          <Carousel />
          </Row>
        </Col>        
      </Container>
    </div>
  );
}

export default App;
