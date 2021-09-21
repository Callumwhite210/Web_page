import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
    return(
        <footer>
            <Container fluid={true}>
                <Row className="justify-content-between p-3">
                    <Col className="p-0" md={3} sm={6}>
                        Callum White
                    </Col>
                    <Col md ={1} sm={6}>
                        <div>
                            <a href="https://github.com/Callumwhite210">
                             Github
                            </a>
                            <a href="https://www.linkedin.com/in/callum-white-2378631b1/">
                               linkedIn
                            </a>
                        </div>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Copywrite
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;