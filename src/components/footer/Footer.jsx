import React from 'react'
import '../footer/style.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

export const Footer = () => {
    return (
        <Container className="footer" fluid={true}>
            <Row >
                <Col xl={12}>
                    Copyright © 2020-{(new Date().getFullYear())} <strong>Ricardo Rosiles</strong>, <small>V 1.0</small>
                </Col>
            </Row>
        </Container>
    )
}
