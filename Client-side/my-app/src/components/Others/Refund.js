import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';
import DescriptionPlaceholder from '../placeholder/DescriptionPlaceholder';
import {toast, ToastContainer} from "react-toastify";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class Refund extends Component {

    constructor(){
        super();
        this.state={
            refund:[],
            loaderDiv:"",
            mainDiv:"d-none"
        }
    }
    
    componentDidMount(){
        let SiteInfoRefund=sessionStorage.getItem("SiteInfoRefund");
        if(SiteInfoRefund==null){
    
            Axios.get(ApiURL.SendSiteInfo).then(response=>{
                let statusCode= response.status;
                if(statusCode==200){
                    let JsonData=response.data[0]['about_company'];
                    this.setState({refund:JsonData,loaderDiv:"d-none",mainDiv:""})  
                
                }else{
                    toast.error("Something Went Wrong ! Try Again",{
                        position:"bottom-center"
                    });
                    
                }
        
            }).catch(error=>{
                toast.error("Something Went Wrong ! Try Again",{
                    position:"bottom-center"
                });
                
            });
    
        }else{
    
            this.setState({refund:SiteInfoRefund, loaderDiv:"d-none", mainDiv:""})
    
        }
        
       
    }
    




    render() {
        return (
            <Fragment>
             <DescriptionPlaceholder isLoading={this.state.loaderDiv}/>
                <Container className="TopSection" style={{marginTop: '4rem'}}>
                    <Row>
                        <Col className="mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Card className={this.state.mainDiv}>
                                <Card.Body>
                                <h3 className="text-center mb-3">Refund Policy</h3>
                                {ReactHtmlParser(this.state.refund)}

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Refund;