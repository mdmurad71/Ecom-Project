import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import UserOnboard from "../components/common/UserOnboard";
import {Redirect} from "react-router";
import LocalStorageHelper from "../LocalStorageHelper/LocalStorageHelper";

class UserOnboardPage extends Component {


    constructor() {
        super();
        this.state={
            RedirectStatus:false,
        }
    }

    pageRedirect=()=>{
        if(this.state.RedirectStatus===true){
            return(
                <Redirect to="/"/>
            )
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        let mobile= LocalStorageHelper.getUserMobile();
        if(mobile!==null){
            this.setState({RedirectStatus:true})
        }
    }


    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop/>
                </div>
                <div className="Mobile">
                    <NavMenuMobile/>
                </div>
                <UserOnboard/>
                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                <div className="Mobile">
                    <FooterMobile/>
                </div>
                {this.pageRedirect()}
            </Fragment>
        );
    }
}

export default UserOnboardPage;