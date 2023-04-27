import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import LocalStorageHelper from "../../LocalStorageHelper/LocalStorageHelper";
import notification from "../../assets/images/notification.svg"
import love from "../../assets/images/love.svg"
import user from "../../assets/images/user.svg"
import axios from "axios";
import ApiURL from "../../api/ApiURL";
class NavMenuDesktop extends Component {
    constructor() {
        super();
        this.state = {
            SearchKey: "",
            SearchRedirectStatus: false,
            afterLoginDiv: "d-none",
            RedirectHome: false,
            cartCount: 0
        }
        this.SearchOnChange = this.SearchOnChange.bind(this);
        this.SearchOnClick = this.SearchOnClick.bind(this);
        this.searchRedirect = this.searchRedirect.bind(this);

    }


    componentDidMount() {
        axios.get(ApiURL.CartCount(LocalStorageHelper.getUserMobile())).then((res) => {
            this.setState({ cartCount: res.data })
        })
    }


    SearchOnChange(event) {
        let SearchKey = event.target.value;
        this.setState({ SearchKey: SearchKey });
    }



    SearchOnClick() {
        if (this.state.SearchKey.length >= 2) {
            this.setState({ SearchRedirectStatus: true })
        }
    }
    signOut = () => {
        LocalStorageHelper.removeUserMobile();
        this.setState({ RedirectHome: true });
    }
    searchRedirect() {
        if (this.state.SearchRedirectStatus === true) {
            return <Redirect to={"/ProductListBySearch/" + this.state.SearchKey} />
        }
    }
    RedirectHome = () => {
        if (this.state.RedirectHome === true) {
            return <Redirect to="/" />
        }
    }

    handleOnSelect = (item) => {
        console.log(item)
    }



    render() {
        const items = [
            {
                id: 0,
                name: 'Cobol'
            },
            {
                id: 1,
                name: 'JavaScript'
            },
            {
                id: 2,
                name: 'Basic'
            },
            {
                id: 3,
                name: 'PHP'
            },
            {
                id: 4,
                name: 'Java'
            }
        ]


        let UserMobile = LocalStorageHelper.getUserMobile();
        if (UserMobile === null) {
            return (
                <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                            <Link to="/" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png" alt="" /></Link>
                            <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart" /> {this.state.cartCount} items </Link>
                        </Col>
                        <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input onChange={this.SearchOnChange} name="example" list="exampleList" type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                <button onClick={this.SearchOnClick} type="button" className="btn  site-btn"><i className="fa fa-search" /></button>
                            </div>
                        </Col>
                        <Col className="p-1" lg={2} md={2} sm={12} xs={12}>
                            <Link to="/notification" className="btn mx-1 nav-round-btn"><img src={notification} alt="notification" /></Link>
                            <Link to="/onboard" className=" btn-light btn">LOGIN</Link>
                        </Col>
                    </Row>
                    {this.searchRedirect()}
                    {this.RedirectHome()}
                </Container>
            );
        }
        else {
            return (
                <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                    <Row>
                        <Col className="p-1" lg={3} md={3} sm={12} xs={12}>
                            <Link to="/" className="btn"> <img className="nav-logo" src="http://demo.ecom.rabbil.com/static/media/BigExpress.432afd37.png" alt="" /></Link>
                            <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart" /> {this.state.cartCount} items </Link>
                        </Col>
                        <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input onChange={this.SearchOnChange} name="example" list="exampleList" type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                                <button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search" /></button>
                            </div>

                        </Col>
                        <Col className="p-1" lg={3} md={3} sm={12} xs={12}>
                            <Link to="/favourite" className="btn  nav-round-btn"><img src={love} alt="love" /> </Link>
                            <Link to="/notification" className="btn mx-1 nav-round-btn"><img src={notification} alt="notification" /></Link>
                            <Link to="/orderlist" className="btn nav-round-btn"><img src={user} alt="user" /></Link>
                            <button onClick={this.signOut} className="btn btn-light ">SIGN OUT</button>
                        </Col>
                    </Row>
                    {this.searchRedirect()}
                    {this.RedirectHome()}
                </Container>
            );
        }
    }
}
export default NavMenuDesktop;