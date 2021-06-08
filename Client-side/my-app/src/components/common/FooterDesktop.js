import React, { Component } from 'react';
import { Fragment } from 'react';
import {Card, Row, Container, Col} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class FooterDesktop extends Component {
    render() {
        return (
            <div className="m-0 bg-white mt-5 pt-3 shadow rounded">
                
                <Container>
                    
                    <Row className="mx-0 my-5" >
                        <Col className="p-2" lg={3} md={3} sm={12} xsm={12}>
                       <h5>ABOUT COMPANY</h5>
                       <p>BigExpress is considered to be the ‘game-changer’ in Bangladesh’s industry. Carefully-chosen raw material, environment-friendly business practice and customer-centric approach is what made BigExpress a beloved brand at home and abroad.</p>
                       <h5>SOCIAL LINK</h5>
                       <a href=""><i className="fab m-1 h3 fa-facebook"></i></a>
                       <a href=""><i className="fab m-1 h3 fa-instagram"></i></a>
                       <a href=""><i className="fab m-1 h3 fa-twitter"></i></a>                           
                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={12} xsm={12}>
                        <h5 >THE COMPANY</h5>
                        <Link to="/about" className="footer-link">About Us</Link><br/>
                        <Link to="/contact" className="footer-link">Contact Us</Link><br/>
                        <a className="footer-link">Our Team</a><br/>
                        <h5 className="mt-2">OFFICE ADDRESS</h5>
                        <p>RF police plaza, Nandon kanon, 532(4th floor), Chattagram-400, 01726158671 (Help-Line), mdmurad1685@gmail.com</p>
                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={12} xsm={12}>
                        <h5>MORE INFO</h5>
                        <Link to="/purchase" className="footer-link">How to Purchase</Link><br/>
                        <Link to="/policy" className="footer-link">Privacy Policy</Link><br/>
                        <Link to="/refund" className="footer-link">Refund Policy</Link><br/>

                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={12} xsm={12}>
                        <h5>DOWNLOAD APP</h5>
                        <a><img className="" src="/images/Android.png" alt="Android.png" /></a><br/>
                        <a><img className="mt-2" src="/images/Apple.png" alt="Apple.png" /></a><br/>

                        </Col>
                    </Row>
                   
                </Container>

                <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                        <Container className="">
                            <Row className="px-0">
                                <h6 className=" text-center text-white">WE DELIVER IN</h6>
                                <p className="footer-text text-white">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            </Row>
                        </Container>
                    </Container>
                 
                
            </div>
        )
    }
}
