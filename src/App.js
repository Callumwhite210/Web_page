//Imports
import React from "react";
import Carousel from "./components/carousel/carousel";
import Header from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/footer";

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
      </Container> 
      <Container className='outline'> 
      <Row>  
        <Col>         
          <div className='Carousel'>  
            <Carousel/>
          </div>         
        </Col>
      </Row>
      </Container>
      <Container className='outline'>
        <h1>Contact Me!</h1>
      </Container>
    <Footer />
    </div>
  );
}

export default App;
