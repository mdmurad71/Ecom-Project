import React, { Component, Fragment } from 'react'
import {Card, Row, Container, Col, Button, Form} from "react-bootstrap";

export default class CartList extends Component {
    render() {
        return (
            <Fragment>
                <Container className="TopSection" style={{ marginTop: '6rem'}}>
                    <Row className="mb-2" style={{ marginBottom: '2rem'}}>
                        <Col className="p-1 mb-2" lg={12} md={12} sm={12} xsm={12}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col lg={3} md={3} sm={6} xsm={6} style={{ marginBottom: '1rem'}}>
                                            <img className="w-100" src="Images/p2.jpg" />
                                        
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xsm={6}>
                                        <h5 className="product-Name">ASUS TUF A15 T-SHIRT</h5>
                                        <h6 className="">quantity = 05</h6>
                                        <h6 className="">Price = 05 * 100 =500tk</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={12} xsm={12}>
                                        <input value="" className="form-control text-center" type="number" />
                                        <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={3} md={3} sm={6} xsm={6} style={{ marginBottom: '1rem'}}>
                                            <img className="w-100" src="Images/p2.jpg" />
                                        
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xsm={6}>
                                        <h5 className="product-Name">ASUS TUF A15 T-SHIRT</h5>
                                        <h6 className="">quantity = 05</h6>
                                        <h6 className="">Price = 05 * 100 =500tk</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={12} xsm={12}>
                                        <input value="4" className="form-control text-center" type="number" />
                                        <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={3} md={3} sm={6} xsm={6} style={{ marginBottom: '1rem'}}>
                                            <img className="w-100" src="Images/p2.jpg" />
                                        
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xsm={6}>
                                        <h5 className="product-Name">ASUS TUF A15 T-SHIRT</h5>
                                        <h6 className="">quantity = 05</h6>
                                        <h6 className="">Price = 05 * 100 =500tk</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={12} xsm={12}>
                                        <input value="4" className="form-control text-center" type="number" />
                                        <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={3} md={3} sm={6} xsm={6} style={{ marginBottom: '1rem'}}>
                                            <img className="w-100" src="Images/p2.jpg" />
                                        
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xsm={6}>
                                        <h5 className="product-Name">ASUS TUF A15 T-SHIRT</h5>
                                        <h6 className="">quantity = 05</h6>
                                        <h6 className="">Price = 05 * 100 =500tk</h6>
                                        </Col>
                                        <Col lg={3} md={3} sm={12} xsm={12}>
                                        <input value="4" className="form-control text-center" type="number" />
                                        <Button className="btn btn-block mt-3 site-btn"><i className="fa fa-trash-alt"></i>Remove</Button>
                                        </Col>
                                    </Row>

                                </Card.Body>

                            </Card>
                        
                        </Col>

                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
