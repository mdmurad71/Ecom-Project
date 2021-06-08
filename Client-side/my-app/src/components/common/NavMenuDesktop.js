import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";
import LocalStorageHelper from "../../LocalStorageHelper/LocalStorageHelper";


export default class NavMenuDesktop extends Component {

constructor(){
    super();
    this.state={
        searchKey:"",
        searchRedirectStatus:"false",
        redirectHome:false,
    }

    this.searchOnChange=this.searchOnChange.bind(this);
    this.searchOnClick=this.searchOnClick.bind(this);
    this.searchRedirect=this.searchRedirect.bind(this);
}

searchOnChange(event){
    let searchKey= event.target.value;
    this.setState({searchKey:searchKey});

}

searchOnClick(){
    if(this.state.searchKey.length>=2){
        this.setState({searchRedirectStatus:true})
    }
}

searchRedirect(){
    if(this.state.searchRedirectStatus==true){
        return <Redirect to={"/productBySearch/"+this.state.searchKey} />
    }
}

signOut=()=>{
LocalStorageHelper.removeUserMobile();
this.setState({redirectHome:true});
}

onRedirectHome=()=>{
    if(this.state.redirectHome===true){
        return(<Redirect to="/"/>)
    }
}


    render() {

        let UserMobile= LocalStorageHelper.getUserMobile();
        if(UserMobile===null){
                  return (
            
                <Container fluid={true} className="fixed-top shadow-sm p-2 mb-2 bg-white">

                <Row>
                    <Col lg={4} md={4} sm={12} xsm={12}>
                    <a href="" className="btn"> <img className="nav-logo"  src="/images/BigExpress.jpg"/></a>
                                <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>
                    </Col>

                    <Col lg={4} md={4} sm={12} xsm={12}>
                    <div className="input-group w-100">
                                    <input onChange={this.searchOnChange} name="example" list="exampleList" type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>

                                    <button onClick={this.searchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                                </div>
                    </Col> 

                    <Col lg={4} md={4} sm={12} xsm={12}>
                    <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                                <a className="btn"><i className="fa h4 fa-mobile-alt"></i> </a>
                                <Link to="/onboard" className="btn danger btn">LOGIN</Link>
                    </Col>
                </Row>
                {this.searchRedirect()}
                {this.onRedirectHome()}
                </Container>
                
            
        ); 
        }

        else{

            return (
                <Fragment>
                    <Container fluid={true} className="fixed-top shadow-sm p-2 mb-2 bg-white">
    
                    <Row>
                        <Col lg={4} md={4} sm={12} xsm={12}>
                        <a href="" className="btn"> <img className="nav-logo"  src="/images/BigExpress.jpg"/></a>
                                    <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 4 items </Link>
                        </Col>
    
                        <Col lg={4} md={4} sm={12} xsm={12}>
                        <div className="input-group w-100">
                                        <input onChange={this.searchOnChange} name="example" list="exampleList" type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
    
                                        <button onClick={this.searchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                                    </div>
                        </Col> 
    
                        <Col lg={4} md={4} sm={12} xsm={12}>
                        <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                                    <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger">4</span></sup></Link>
                                    <a className="btn"><i className="fa h4 fa-mobile-alt"></i> </a>
                                    <button onClick={this.signOut} className="btn btn-success ">SIGN OUT</button>
                        </Col>
                    </Row>
                    {this.searchRedirect()}
                    {this.onRedirectHome()}

                    </Container>
                    
                </Fragment>
            )

        }



 
    }
}
