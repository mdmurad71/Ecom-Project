import React, {Component,Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
// import MegaMenu from "./MegaMenu";
// import SliderHome from "./SliderHome";

export default class HomeTopMobile extends Component {
    render() {
        return (
            <Fragment>
            <Container className="p-0 TopSection  overflow-hidden" style={{ marginTop: ''}} fluid={true}>
                <Row className="p-0 m-0 overflow-hidden">

                 
                    <Col className="p-0 m-0 overflow-hidden" lg={12} md={12} sm={12}>
                            {/* <SliderHome/> */}
                    </Col>
                </Row>
            </Container>
            
        </Fragment>
        )
    }
}
