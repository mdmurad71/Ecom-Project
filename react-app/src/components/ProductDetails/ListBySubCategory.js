import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ListBySubCategory extends Component {
    render() {

        const MyList=this.props.ProductData;
        const SubCategory=this.props.SubCategory;
        const Category=this.props.Category;
        const MyView=MyList.map((ProductList,i)=>{
            if(ProductList.special_price==="NA"){
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link to={"/productDetails/"+ProductList.product_code}>
                    <Card className="card h-100 w-100  image-box ">
                        <img src={ProductList.image} alt=""/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                            <p className="product-price-on-card">Price: { ProductList.price}TK</p>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
            }
            else{

                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link to={"/productDetails/"+ProductList.product_code}>
                    <Card className="card h-100 w-100  image-box ">
                        <img src={ProductList.image} alt=""/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{(ProductList.title).substring(0,50) }</h5>
                            <p className="product-price-on-card">
                                Price: <strike class="text-secondary">{ ProductList.price}TK</strike>  { ProductList.special_price}TK
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
                    <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to={"/ProductListBySubCategory/"+Category+"/"+SubCategory}>{SubCategory}</Link>    </Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        {MyView}
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ListBySubCategory;