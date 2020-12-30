import React from 'react'
import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap'; import photo from '../../assets/ricardorosiles.png';
import './style.css'
export const HomeRigth = () => {
    return (
        <Container className="home-right">
            <Row className="home-right-main">
                <Col xl={10}>
                    <Image src={photo} className="home-right-main-img" alt="Image of Ricardo Rosiles" />
                </Col>
            </Row>
        </Container>
    )
}
