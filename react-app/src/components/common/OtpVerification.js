import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import LocalStorageHelper from "../../LocalStorageHelper/LocalStorageHelper";
import {Redirect} from "react-router";
import cogoToast from "cogo-toast";
class OtpVerification extends Component {
    constructor() {
        super();
        this.state={
            btn:"Login",
            OtpNo:"",
            UserRedirect:false,
            mobileNo:"",
        }
        this.OtpOnChange=this.OtpOnChange.bind(this);
        this.onNextClick=this.onNextClick.bind(this);
        this.onUserRedirect=this.onUserRedirect.bind(this);
    }
    OtpOnChange(event){
      let OtpValue=  event.target.value;
      this.setState({OtpNo:OtpValue})
    }
    onNextClick(){
        let OtpValue=  this.state.OtpNo;
        let mobileNo=  this.state.mobileNo;
        if(OtpValue.length!==6){
            cogoToast.error("Invalid Verification Code",{position:'bottom-center'});
        }
        else{
            let URL=ApiURL.OtpVerification;
            let MyFormData=new FormData();
            MyFormData.append('OTP',OtpValue);
            MyFormData.append('mobileNo',mobileNo);

            axios.post(URL,MyFormData).then((response)=>{
                if( response.data===1){
                    LocalStorageHelper.setUserMobile(mobileNo)
                    cogoToast.success("Verification Success",{position:'bottom-center'});
                    this.setState({UserRedirect:true})
                }
               else if(response.data===0){
                    cogoToast.error("Invalid Verification Code",{position:'bottom-center'});
               }
               else{
                    cogoToast.error("Request Fail ! Try Again",{position:'bottom-center'});
                }

            }).catch((error)=>{
                cogoToast.error("Request Fail ! Try Again",{position:'bottom-center'});
            });

        }
    }


    onUserRedirect(){
        if(this.state.UserRedirect===true){
            let winPath=LocalStorageHelper.GetRedirectFromDetails()
            if(winPath===null){
                return(<Redirect to="/"/>)
            }
            else {
                return(<Redirect to={winPath}/>)
            }

     }
    }



    componentDidMount() {
       let mobileNo= this.props.mobileNo;
       this.setState({mobileNo:mobileNo})
    }
    render() {
        return (
            <div>
                <Fragment>
                    <Container className="TopSection animated slideInDown">
                        <Row className="d-flex justify-content-center">
                            <Col className="shadow-sm bg-white mt-2" md={8} lg={8} sm={12} xs={12}>
                                <Row className="text-center ">
                                    <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                        <div className="onboardForm">
                                            <h4 className="section-title">Verification Code</h4>
                                            <h6 className="section-sub-title">Please Enter 6 Digit Verification Code</h6>
                                            <input onChange={this.OtpOnChange} className="form-control m-2" type="text" placeholder="xxxxxx"/>
                                            <button onClick={this.onNextClick} className="btn btn-block m-2 site-btn">{this.state.btn}</button>
                                        </div>
                                    </Col>
                                    <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                        <img className="onboardBanner" src="/Images/otppagebanner.png" alt="login banner"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    {this.onUserRedirect()}
                </Fragment>
            </div>
        );
    }
}
export default OtpVerification;