import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class SearchList extends Component {
    render() {

        const myList=this.props.productData;
        const searchKey= this.props.searchKey;

        const myView= myList.map((productList,i)=>{
            if(productList.special_price=="NA"){
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link to={"/productDetails/"+productList.product_code}>
                        <Card className="card h-100 w-100  image-box ">
                            <img src={productList.image}/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{productList.title }</h5>
                                <p className="product-price-on-card">Price: { productList.price}TK</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }
            else{

                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link to={"/productDetails/"+productList.product_code}>
                        <Card className="card h-100 w-100  image-box ">
                            <img src={productList.image}/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{productList.title }</h5>
                                <p className="product-price-on-card">
                                    Price: <strike class="text-secondary">{ productList.price}TK</strike>  { productList.special_price}TK
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }

        })



        return (
            <Fragment>
            <Container className="text-center TopSection" fluid={true}>
                <Breadcrumb>
                    <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                    <Breadcrumb.Item> <Link to={"/productBySearch/"+searchKey}>Search Result For: {searchKey}</Link>    </Breadcrumb.Item>

                </Breadcrumb>
                <Row>
                    {myView}
                </Row>
            </Container>

        </Fragment>
        )
    }
}
