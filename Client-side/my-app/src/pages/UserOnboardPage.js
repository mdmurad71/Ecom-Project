import React, { Component, Fragment } from 'react'
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import UserOnboard from "../components/common/UserOnboard";

export default class UserOnboardPage extends Component {

    componentDidMount(){
        window.scroll(0,0)
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

                 <FooterDesktop/>
            </Fragment>
        )
    }
}
