import Axios from 'axios';
import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row, Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
import ApiURL from '../../api/ApiURL';
import {toast, ToastContainer} from "react-toastify";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import DescriptionPlaceholder from '../placeholder/DescriptionPlaceholder';

class About extends Component {

constructor(){
    super();
    this.state={
        about:"",
        loaderDiv:"",
        mainDiv:"d-none"
    }
}


componentDidMount(){
    let SiteInfoAbout=sessionStorage.getItem("SiteInfoAbout");
    if(SiteInfoAbout==null){

        Axios.get(ApiURL.SendSiteInfo).then(response=>{
            let statusCode=response.status;
            if(statusCode==200){
                let jsonData=response.data[0]['about'];
                this.setState({about:jsonData,loaderDiv:"d-none",mainDiv:""});
                sessionStorage.setItem("SiteInfoAbout",jsonData)
            }else{
                toast.error("Something Went Wrong ! Try Again",{
                    position:"bottom-center"
                });
            }
        }).catch(error=>{
            toast.error("Something Went Wrong ! Try Again",{
                position:"bottom-center"
            });
        })

    }else{

        this.setState({about:SiteInfoAbout, loaderDiv:"d-none", mainDiv:""})

    }

}








    render() {
        return (
            <Fragment>
                
                <Container className="TopSection" style={{ marginTop: '4rem'}}>
                <Breadcrumb>
                    <Breadcrumb.Item href="#"><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item href="#"><Link to="/about">About</Link></Breadcrumb.Item>

                    </Breadcrumb>

                    <DescriptionPlaceholder isLoading={this.state.loaderDiv}/>
                    <Row>
                        <Col className="mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Card className={this.state.mainDiv}>
                                <Card.Body>
                                <h3 className="text-center mb-3">About US</h3>
                                { ReactHtmlParser(this.state.about)}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <ToastContainer />
            </Fragment>
        );
    }
}

export default About;