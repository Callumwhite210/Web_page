import React from "react";
import { Row, Col } from 'react-bootstrap';

function About() {
    return (
            <div>
                <Row>
                <h1> About </h1>
                  <Col sm={2}>
                    <p> Picture </p>
                  </Col>
                  <Col>
                    <p> Text </p>
                  </Col>
                </Row>
            </div>
    )
}

export default About;