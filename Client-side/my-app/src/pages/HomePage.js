import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Catagories from '../components/home/Catagories';
import Collection from "../components/home/Collection";
import FeturedProducts from '../components/home/FeturedProducts';
import HomeTop from '../components/home/HomeTop';
import HomeTopMobile from '../components/home/HomeTopMobile';
import NewArrival from '../components/home/NewArrival';
import axiox from 'axios';
import ApiURL from '../api/ApiURL';

export default class HomePage extends Component {

    componentDidMount(){
        window.scroll(0,0)
        this.getVisitorDetails();
    }



    getVisitorDetails=()=>{
        axiox.get(ApiURL.VisitorDetails).then().catch();
    }
    
    render() {
        return (
            <Fragment>
                <div className="Desktop">
                <NavMenuDesktop/> 
                <HomeTop/>
                </div>
                 
                 <div className="Mobile">
                    <NavMenuMobile/>
                    <HomeTopMobile/>
                 </div>
                
                
                
                <FeturedProducts/>
                <NewArrival/>
                <Collection/>
                <Catagories/>
                <FooterDesktop/>
            </Fragment>
        )
    }
}
