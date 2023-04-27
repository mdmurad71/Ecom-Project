import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import ApiURL from "../../api/ApiURL";
import DescriptionPlaceholder from "../placeholder/DescriptionPlaceholder";
import {Link} from "react-router-dom";
class Policy extends Component {
    constructor() {
        super();
        this.state={
            policy:"",
            loaderDiv:"",
            mainDiv:"d-none",
        }
    }
    componentDidMount() {
        axios.get(ApiURL.SendSiteInfo).then(response=> {
            let  StatusCode =response.status;
            if(StatusCode===200){
                let  JSONData =(response.data)[0]['ploicy'];
                this.setState({policy:JSONData,loaderDiv:"d-none",mainDiv:""})
            }
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Breadcrumb className="shadow-sm mt-2 bg-white">
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/policy">Policy</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <Row>
                        <Col className="mt-1" md={12} lg={12} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <DescriptionPlaceholder isLoading={this.state.loaderDiv}/>
                                    <div className={this.state.mainDiv}>
                                        <div className="animated zoomIn">
                                        { ReactHtmlParser(this.state.policy) }
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

}
export default Policy;