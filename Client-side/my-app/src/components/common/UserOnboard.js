import axios from 'axios';
import React, { Component, Fragment } from 'react'
import {Card, Row, Container, Col, Button, Form} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import ApiURL from '../../api/ApiURL';
import validation from '../../validation/validation';
import {Redirect} from "react-router";
import LocalStorageHelper from "../../LocalStorageHelper/LocalStorageHelper";




export default class UserOnboard extends Component {

    constructor(){
        super();
        this.state={
            btn:"Login",
            mobileNo:"",
            userRedirect:false,
        }
    }

    mobileNoOnchange=(event)=>{
        let mobileNo=event.target.value;
        this.setState({mobileNo:mobileNo})
    }


   onUserRedirect=()=>{
    if(this.state.userRedirect===true){
        let winPath=LocalStorageHelper.GetRedirectFromDetails()
        if(winPath===null){
            return(<Redirect to="/"/>)
        }
        else {
            return(<Redirect to={winPath}/>)
        }

 }
   }

  



    mobileNoSubmit=(event)=>{
        let mobileNo= this.state.mobileNo;
         if(mobileNo.length==0){
            toast.error('Mobile number can not be empty');
        }
        else if(!(validation.MobileRegex).test(mobileNo)){
            toast.error('Invalid Mobile Number');
        }
        else{
            this.setState({btn:"Processing.."})
            let MyFormData= new FormData();
            MyFormData.append("mobile", mobileNo);
            axios.post(ApiURL.loginByMobile, MyFormData).then((response)=>{
                
                if(response.data==1){     
                    LocalStorageHelper.setUserMobile(mobileNo)              
                    toast.success("you are login successfully");
                    
                    this.setState({userRedirect:true});
                    
                }else{
                    toast.error("login error1");
                    
                }
            }).catch((error)=>{
                this.setState({btn:"Login"})
                toast.error("login error2");
            })
        }
    }


    render() {
        return (
            <Fragment>
                        <Container className="mt-5 TopSection bg-white"  style={{ height: '400px' }}>
                            <Row className="p-2 text-center">

                            <Card.Body className="bg-secondary mt-5"  style={{ height: '300px' }}>
                            <Col className="d-flex justify-content-center" lg={12} md={12} sm={12} xsm={12}>
                            <div className="onboardForm">
                                        <h4 className="section-title text-white">USER SING IN</h4>
                                        <h6 className="section-sub-title text-white mb-2">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.mobileNoOnchange} className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                       <Button id="loginBtn" onClick={this.mobileNoSubmit}  className="btn btn-block m-3 site-btn">{this.state.btn}</Button>
                                       </div>
                        
                        </Col>

                        </Card.Body>
                  
                      
                         </Row>
                         <ToastContainer />
                  </Container>
                  {this.onUserRedirect()}
            </Fragment>
        )
    }
}
