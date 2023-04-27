import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import validation from "../../validation/validation";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import { Redirect } from "react-router";
import cogoToast from "cogo-toast";
import LocalStorageHelper from '../../LocalStorageHelper/LocalStorageHelper';
class UserOnboard extends Component {
    constructor() {
        super();
        this.state = {
            btn: "Next",
            MobileNo: "",
            UserRedirect: false
        }
        this.MobileOnChange = this.MobileOnChange.bind(this);
        // this.mobileNoSubmit = this.mobileNoSubmit.bind(this);
        // this.onUserRedirect = this.onUserRedirect.bind(this);
    }
    MobileOnChange(event) {
        let mobile = event.target.value;
        this.setState({ MobileNo: mobile });
    }
    // onUserRedirect() {
    //     if (this.state.UserRedirect === true) {
    //         return <Redirect to={"/OtpVerification/" + this.state.MobileNo} />
    //     }
    // }
    // onNextClick(){
    //     let mobile= this.state.MobileNo;
    //     if(mobile.length===0){
    //         cogoToast.error("Mobile Number Required",{position:'bottom-center'});
    //     }
    //     else if(!(validation.MobileRegx).test(mobile)){
    //         cogoToast.error("Invalid Mobile Number",{position:'bottom-center'});
    //     }
    //     else {
    //         this.setState({btn:"Processing.."});
    //         axios.get(ApiURL.CreateOtp(mobile)).then((response)=>{
    //             this.setState({btn:"Next"});
    //             if(response.status===200 && response.data===1){
    //                 cogoToast.success("Verification code has been sent",{position:'bottom-center'});
    //                 this.setState({UserRedirect:true});
    //             }
    //             else {
    //                 cogoToast.error("Request Fail ! Try Again",{position:'bottom-center'});
    //             }
    //         }).catch((error)=>{
    //             this.setState({btn:"Next"});
    //             cogoToast.error("Request Fail ! Try Again",{position:'bottom-center'});
    //         })
    //     }
    // }


    onUserRedirect = () => {
        if (this.state.UserRedirect === true) {
            let winPath = LocalStorageHelper.GetRedirectFromDetails()
            if (winPath === null) {
                return (<Redirect to="/" />)
            }
            else {
                return (<Redirect to={winPath} />)
            }

        }
    }


    mobileNoSubmit = (event) => {
        event.preventDefault();
        let mobileNo = this.state.MobileNo;
        if (mobileNo.length == 0) {
            cogoToast.error('Mobile number can not be empty');
        }
        // else if (!(validation.MobileRegex).test(mobileNo)) {
        //     cogoToast.error('Invalid Mobile Number');
        // }
        else {
            this.setState({ btn: "Processing.." })
            let MyFormData = new FormData();
            MyFormData.append("mobile", mobileNo);
            axios.post(ApiURL.loginByMobile, MyFormData).then((response) => {

                if (response.data == 1) {
                    LocalStorageHelper.setUserMobile(mobileNo)
                    cogoToast.success("you are login successfully");

                    this.setState({ UserRedirect: true });

                } else {
                    cogoToast.error("login error1");

                }
            }).catch((error) => {
                this.setState({ btn: "Login" })
                cogoToast.error("login error2");
            })
        }
    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection animated slideInDown">
                    <Row className="d-flex p-1 justify-content-center">
                        <Col className="shadow-sm bg-white mt-2" md={8} lg={8} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <div className="onboardForm">
                                        <h4 className="section-title">USER SIGN IN</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.MobileOnChange} className="form-control m-2" type="text" placeholder="Mobile Number" />
                                        <button onClick={this.mobileNoSubmit} className="btn btn-block m-2 site-btn">{this.state.btn}</button>
                                    </div>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src="/Images/otppagebanner.png" alt="login banner" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                {this.onUserRedirect()}
            </Fragment>
        );
    }
}
export default UserOnboard;