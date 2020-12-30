import React from 'react';
import '../home_left/style.css';
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
    Link
} from "react-router-dom";

export const HomeLeft = () => {
    return (
        <Container className="home-left" >
            <Row className="home-left-main">
                <Col xl={12} className="home-left-main-col">
                    <h1 className="first-line">
                        Hello!
                        </h1>
                    <h2 className="second_line">
                        I am <strong>Ricardo Rosiles</strong>
                    </h2>
                    <h3>
                        <ReactTypingEffect
                            text="Student & Javascript Developer || Backend & Frontend"
                            className="typical"
                            speed="100"
                            eraseDelay="500000"
                        />
                    </h3>

                    <br />
                    <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Contact Me</Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
