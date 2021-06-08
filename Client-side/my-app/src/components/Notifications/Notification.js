import React, { Component, Fragment } from 'react'
import {Card, Row, Container, Col, Button, Modal} from "react-bootstrap";
import ApiURL from '../../api/ApiURL';
import Axios from 'axios';
import SliderLoader from '../placeholder/SliderLoader';


export default class Notification extends Component {

constructor(){
    super();
    this.state={
        // show:false,
        notificationModal:false,
        notificationData:[],
        notificationTitle:"",
        notificationMsg:"",
        notificationDate:"",
        isLoading:"",
        maindiv:"d-none",

    }
    this.handleClose=this.handleClose.bind(this);
    this.handleOpen=this.handleOpen.bind(this);

}

handleClose=()=>{
    this.setState({notificationModal:false})
}

handleOpen=(event)=>{
    this.setState({notificationModal:true});
    let title= event.target.getAttribute('title');
    let msg= event.target.getAttribute('msg');
    let date= event.target.getAttribute('date');
    this.setState({notificationTitle:title, notificationMsg:msg, notificationDate:date});
    this.setState({show:true})
}


componentDidMount(){
    Axios.get(ApiURL.notification).then(response=>{
        this.setState({notificationData:response.data,isLoading:"d-none",maindiv:""})
    }).catch(error=>{

    });
}



    render() {

        let notificationData=this.state.notificationData;
        let myView=notificationData.map((notificationList,i)=>{
           return(
                <Col className="p-1" lg={6} md={6} sm={12} xsm={12} >
            <Card className="notification-card" onClick={this.handleOpen}>
                <Card.Body>
                <h6> {notificationList.title}</h6>
                            <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>{notificationList.date}</p>
                            <button msg={notificationList.msg} date={notificationList.date} title={notificationList.title}onClick={this.handleOpen} className="btn site-btn btn-sm">Details</button>
                </Card.Body>

            </Card>
            
            </Col>
            )
        });



        return (
            <Fragment>
                <Container className="TopSection" style={{ marginTop: '6rem'}}>
                    <Row>
                   

                        {myView}                

                    </Row>

                </Container>

                <Modal show={this.state.notificationModal} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <h6><i className="fa  fa-bell"></i>  {this.state.notificationDate} </h6>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>{this.state.notificationTitle}</h6>
                            <p> {this.state.notificationMsg}</p>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                
            </Fragment>
        )
    }
}
