import React, { Component, Fragment } from 'react'
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Notification from "../components/Notifications/Notification";

export default class NotificationPage extends Component {

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

               <Notification/>

             <FooterDesktop/>
        </Fragment>
        )
    }
}
