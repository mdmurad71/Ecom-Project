import Axios from 'axios';
import React, {Component,Fragment} from 'react';
import {Link} from "react-router-dom";


import {Card, Row, Container, Col, Button, Form, Img} from "react-bootstrap";
import ApiURL from '../../api/ApiURL';

export default class SuggestedProduct extends Component {

constructor(){
    super();
    this.state={
        productData:[]
    }
}

componentDidMount(){
    let subcategory= this.props.subcategory;
    Axios.get(ApiURL.similarProduct(subcategory)).then(response=>{
        this.setState({productData:response.data})
    }).catch(error=>{

    })
}





    render() {

        let myList= this .state.productData;
        if(myList.length>0){
            let myView= myList.map((productList, i)=>{
                if(productList.special_price=="NA"){
                    return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link to={"/productDetails/"+productList.product_code}>
                        <Card className="card h-100 w-100  image-box ">
                            <img src={productList.image} alt=""/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{(productList.title).substring(0,50)}</h5>
                                <p className="product-price-on-card">
                                    Price:{ productList.price}Tk<strike class="text-secondary">
        
                             special Price:800BDT</strike>
                                </p>
                            </Card.Body>
                        </Card>
                     </Link> 
                </Col> 
                }else{
        
                    return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link to={"/productDetails/"+productList.product_code}>
                        <Card className="card h-100 w-100  image-box ">
                            <img src={productList.image} alt=""/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{(productList.title).substring(0,50) }</h5>
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
              <Container fluid={true} className="text-center BetweenTwoSection">
              <h4 className="section-title">YOU MAY LIKE</h4>
              <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like</h6>
                <Row>
                {myView}
                </Row>
            </Container>    
            </Fragment>
        )
        
        }  else {
            return (
                <Fragment>
                </Fragment>
            );
        }





    
    }
}
