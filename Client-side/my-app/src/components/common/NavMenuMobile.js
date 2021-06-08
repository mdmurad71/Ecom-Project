import React, { Component, Fragment } from 'react'
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import MegaMenu from '../home/MegaMenu';
import MegaMenuMobile from '../home/MegaMenuMobile';
import {Link} from "react-router-dom";
export default class NavMenuMobile extends Component {

constructor(){
    super();
    this.state={
        sideNavState:"sideNavClose",
        contentOverState:"contentOverlayClose"
    }
}


menubarClickHandler=()=>{
    this.sideNavClickHandler();
}

contentOverlayClickHandler=()=>{
  this.sideNavClickHandler();
}

sideNavClickHandler=()=>{
   
    let sideNavState= this.state.sideNavState;
    let ContentOverState= this.state.ContentOverState;
    if(sideNavState === "sideNavOpen"){
        this.setState({sideNavState:"sideNavClose",contentOverState:"contentOverlayClose" })
    }else{
        this.setState({sideNavState:"sideNavOpen",contentOverState:"contentOverlayOpen" })
    }
}



    render() {
        return (
            <Fragment>
                <Navbar fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                <a onClick={this.menubarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"></i></a>
                <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>
                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                <Link to="/" className="btn"><i className="fa h4 fa-home"></i>Home</Link>

                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                <Link className="btn"><i className="fa h4 fa-search"></i>  </Link> 
                <Link to="/onboard" className="h4 btn">LOGIN</Link>
            </Navbar>

                <div className={this.state.sideNavState}>
                    <MegaMenuMobile/>
                </div>

                
                <div onClick={this.contentOverlayClickHandler} className={this.state.contentOverState}>

                </div>



            </Fragment>
        )
    }
}
