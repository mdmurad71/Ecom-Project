import Axios from 'axios';
import React, { Component, Fragment } from 'react'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import validation from '../../validation/validation';
import ApiURL from '../../api/ApiURL';
import axiox from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


export default class Contact extends Component {


constructor(){
    super();
    this.state={
        name:"",
        mobile:"",
        message:""
    };
}


nameOnchange=(event)=>{
    let name=event.target.value;
    this.setState({name:name})
}

mobileOnchange=(event)=>{
    let mobile=event.target.value;
    this.setState({mobile:mobile})
}

messageOnchange=(event)=>{
    let message=event.target.value;
    this.setState({message:message})
}

onFormSubmit=(event)=>{
    let name= this.state.name;
    let mobile= this.state.mobile;
    let message= this.state.message;
    let sendBtn= document.getElementById('sendBtn');
    let contactForm= document.getElementById('contactForm');
    if(name.length==0){
        toast.error('Name is required');
    }
    else if(mobile.length==0){
        toast.error('Mobile number can not be empty');
    }
    else if(!(validation.NameRegex).test(name)){
        toast.error('Invalid Name');
    }

    else if(!(validation.MobileRegex).test(mobile)){
        toast.error('Invalid Mobile Number');
    }
    else if(message.length==0){
        toast.error('Message can not be empty');
    }else{
        sendBtn.innerHTML="processing";
        let MyFormData= new FormData();
        MyFormData.append("name", name);
        MyFormData.append("mobile", mobile);
        MyFormData.append("message", message);

        axiox.post(ApiURL.postContactDetails, MyFormData).then(function(response){
            if(response.status==200 && response.data==1){
                toast.success("send successfully");
                sendBtn.innerHTML="send";
                contactForm.reset();
            }else{
                toast.error("sending error");
                sendBtn.innerHTML="send";

            }
        })
        .catch(function(error){
            toast.error('error');
            sendBtn.innerHTML="send";

        });

    }

    event.preventDefault();

}





    render() {
        return (
            <Fragment>
                <Container className="TopSEction" style={{marginTop:'4rem'}}>
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xsm={12}>
                            <Row className="text-center">
                                <Col className="d-flex justify content center" lg={6} md={6} sm={12} xsm={12}>
                                <Form id="contactForm" onSubmit={this.onFormSubmit} className=" onboardForm" style={{width:"500px", marginTop:"4rem"}}>
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.nameOnchange} className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input onChange={this.mobileOnchange} className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input onChange={this.messageOnchange} className="form-control m-2" type="text" placeholder="Message"/>
                                        <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn">SEND</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" lg={6} md={6} sm={12} xsm={12}>
                                <iframe className="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14759.395637971747!2d91.82789777154245!3d22.359333159198748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8824f17fe9fd9668!2sGulzar%20Tower!5e0!3m2!1sen!2sbd!4v1604729156425!5m2!1sen!2sbd"></iframe>
                             </Col>
                            </Row>
                        </Col>
                    </Row>
                    <ToastContainer />
                </Container>
                
            </Fragment>
        )
    }
}
