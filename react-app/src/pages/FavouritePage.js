import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import Favourite from "../components/Favourite/Favourite";
import {Redirect} from "react-router";
import LocalStorageHelper from "../LocalStorageHelper/LocalStorageHelper";

class FavouritePage extends Component {
    constructor() {
        super();
        this.state={
            RedirectStatus:false,
        }
    }

    pageRedirect=()=>{
        if(this.state.RedirectStatus===true){
            return(
                <Redirect to="/onboard"/>
            )
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        let mobile= LocalStorageHelper.getUserMobile();
        if(mobile===null){
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

                <Favourite/>

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

export default FavouritePage;