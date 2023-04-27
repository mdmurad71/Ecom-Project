import React, { Component } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import LocalStorageHelper from "../../LocalStorageHelper/LocalStorageHelper";
class FooterDesktop extends Component {
    constructor() {
        super();
        this.state = {
            footerData: "",
            androidLink: "",
            iosLink: "",
            facebookLink: "",
            twitterLink: "",
            instagramLink: "",
            address: "",
            aboutCompany: "",
            deliveryNotice: "",
            loaderDiv: "",
            mainDiv: "d-none",
        }
    }
    componentDidMount() {
        LocalStorageHelper.GetSiteInfoFooter((SiteInfoFooter) => {
            if (SiteInfoFooter == null) {
                axios.get(ApiURL.SendSiteInfo).then(response => {
                    let JSONData = (response.data)[0];
                    this.setState({
                        androidLink: JSONData['android_app_link'],
                        iosLink: JSONData['ios_app_link'],
                        facebookLink: JSONData['facebook_link'],
                        twitterLink: JSONData['twitter_link'],
                        instagramLink: JSONData['instagram_link'],
                        address: JSONData['address'],
                        aboutCompany: JSONData['about_company'],
                        deliveryNotice: JSONData['delivery_notice'],
                        loaderDiv: "d-none",
                        mainDiv: ""
                    })
                    LocalStorageHelper.SetSiteInfoFooter(JSONData)
                })
            }
            else {
                let FooterDataJSON = SiteInfoFooter;
                this.setState({
                    androidLink: FooterDataJSON['android_app_link'],
                    iosLink: FooterDataJSON['ios_app_link'],
                    facebookLink: FooterDataJSON['facebook_link'],
                    twitterLink: FooterDataJSON['twitter_link'],
                    instagramLink: FooterDataJSON['instagram_link'],
                    address: FooterDataJSON['address'],
                    aboutCompany: FooterDataJSON['about_company'],
                    deliveryNotice: FooterDataJSON['delivery_notice'],
                    loaderDiv: "d-none",
                    mainDiv: ""
                })
            }
        })
    }
    render() {
        return (
            <div className="m-0 bg-white mt-5 pt-3 shadow-sm">
                <div className={this.state.loaderDiv}>
                    <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-row">
                                <div className="ph-col-12" />
                                <div className="ph-col-12" />
                                <div className="ph-col-12" />
                                <div className="ph-col-12" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.mainDiv} style={{ background: "#f7f7f7" }}>
                    <Container>
                        <Row className="px-0 my-5">
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">ABOUT COMPANY</h5>
                                <p> {ReactHtmlParser(this.state.aboutCompany)}</p>
                                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a target="_blank" href={this.state.facebookLink}><i className="fab m-1 h4 fa-facebook" /></a>
                                <a target="_blank" href={this.state.instagramLink}><i className="fab m-1 h4 fa-instagram" /></a>
                                <a target="_blank" href={this.state.twitterLink}><i className="fab m-1 h4 fa-twitter" /></a>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">THE COMPANY</h5>
                                <Link to="/about" className="footer-link">About Us</Link><br />
                                <Link to="/contact" className="footer-link">Contact Us</Link><br />
                                <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                                <p>{ReactHtmlParser(this.state.address)}</p>
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">MORE INFO</h5>
                                <Link to="/purchase" className="footer-link">How To Purchase</Link><br />
                                <Link to="/policy" className="footer-link">Privacy Policy</Link><br />
                                <Link to="/refund" className="footer-link">Refund Policy</Link><br />
                            </Col>
                            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                                <h5 className="footer-menu-title">DOWNLOAD APP</h5>
                                <a target="_blank" href={this.state.iosLink}><img className="" src={this.state.iosLink} alt="ios logo" /></a><br />
                                <a target="_blank" href={this.state.androidLink}><img className="mt-2" src={this.state.androidLink} alt="android logo" /></a>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                        <Container className="">
                            <Row className="px-0 text-white">
                                <p>{ReactHtmlParser(this.state.deliveryNotice)}</p>
                            </Row>
                        </Container>
                    </Container>
                </div>
            </div>
        );
    }
}
export default FooterDesktop;