import React from 'react';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import { particles } from '../../const/particle';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'; import './style.css'
import { Helmet } from 'react-helmet';
import { HomeRigth } from '../../components/home_rigth/HomeRigth';
import { HomeLeft } from '../../components/home_left/HomeLeft';
import { Footer } from '../../components/footer/Footer';


export const HomePage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ricardo Rosiles</title>
            </Helmet>
            <Animate to="1" from="0" attributeName="opacity">
                <Particles
                    params={particles}
                    className="particle"
                />
                <Container className="App-header" fluid={true}>
                    <Row className="App-main">
                        <Col xl={7} className="App-left">
                            <HomeLeft />
                        </Col>
                        <Col xl={5} className="App-right">
                            <HomeRigth />
                        </Col>
                    </Row>
                    <Row className="App-footer">
                        <Footer />
                    </Row>
                </Container>
            </Animate>
        </div >
    )
}
