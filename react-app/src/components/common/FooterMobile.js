import React, {Component} from 'react';
import {Container, Col, Row} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import ApiURL from "../../api/ApiURL";
import LocalStorageHelper from "../../LocalStorageHelper/LocalStorageHelper";
class FooterMobile extends Component {
    constructor() {
        super();
        this.state= {
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
        LocalStorageHelper.GetSiteInfoFooter((SiteInfoFooter)=>{
            if(SiteInfoFooter==null){
                axios.get(ApiURL.SendSiteInfo).then(response=> {
                    let  JSONData=(response.data)[0];
                    this.setState({
                        androidLink:JSONData['android_app_link'],
                        iosLink:JSONData['ios_app_link'],
                        facebookLink:JSONData['facebook_link'],
                        twitterLink:JSONData['twitter_link'],
                        instagramLink:JSONData['instagram_link'],
                        address:JSONData['address'],
                        aboutCompany:JSONData['about_company'],
                        deliveryNotice:JSONData['delivery_notice'],
                        loaderDiv:"d-none",
                        mainDiv:""
                    })
                    LocalStorageHelper.SetSiteInfoFooter(JSONData)
                })
            }
            else{
                let FooterDataJSON=SiteInfoFooter;
                this.setState({
                    androidLink:FooterDataJSON['android_app_link'],
                    iosLink:FooterDataJSON['ios_app_link'],
                    facebookLink:FooterDataJSON['facebook_link'],
                    twitterLink:FooterDataJSON['twitter_link'],
                    instagramLink:FooterDataJSON['instagram_link'],
                    address:FooterDataJSON['address'],
                    aboutCompany:FooterDataJSON['about_company'],
                    deliveryNotice:FooterDataJSON['delivery_notice'],
                    loaderDiv:"d-none",
                    mainDiv:""
                })
            }
        })
    }
    render() {
        return (
                <div className="m-0 bg-white pt-4 shadow-sm">
                    <Container>
                        <Row>
                           <Col xs={12} sm={12} xm={12}>
                               <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                               <p>{ ReactHtmlParser(this.state.address) }</p>
                               <a target="_blank" href={this.state.facebookLink}><i className="fab h4 fa-facebook"/> </a>
                               <a target="_blank" href={this.state.instagramLink}><i className="fab mx-1 h4 fa-instagram"/> </a>
                               <a target="_blank" href={this.state.twitterLink}><i className="fab  h4 fa-twitter"/></a>
                           </Col>
                        </Row>
                    </Container>
                </div>
        );
    }
}
export default FooterMobile;