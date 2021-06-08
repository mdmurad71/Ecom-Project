import Axios from 'axios';
import React, { Component, Fragment } from 'react'
import {Container, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import ApiURL from '../../api/ApiURL';
import FeaturedProductLoader from '../placeholder/FeaturedProductLoader';

export default class FeturedProducts extends Component {


constructor(){
    super();
    this.state={
        productData: [],
        isLoading:"",
        maindiv:"d-none"
    }
}

componentDidMount(){
    Axios.get(ApiURL.productListByRemark("TOP")).then(response=>{
        this.setState({productData:response.data,isLoading:"d-none",maindiv:""})
    }).catch(error=>{

    });
}





    render() {

        let myList= this.state.productData;
        let myView= myList.map((productList,i)=>{

            if(productList.special_price=="NA"){
                return <Col className="p-0" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to={"productDetails/"+productList.product_code}>
                <Card className= "h-100 w-100 text-center">
                <Card.Img variant="top" src={productList.image} />
                <Card.Body>
                <Card.Title className="text-center">{productList.title}</Card.Title>
            <Card.Text className=" text-center" style={{ color: 'red', fontWeight:'bold'}}>Price:{productList.price}</Card.Text>
            <Card.Text className=" text-center" style={{ color: 'blue', fontWeight:'bold'}}>special Price:{productList.special_price}</Card.Text>

            </Card.Body>
            </Card> 
            </Link>
        </Col>
            }else{
                return <Col className="p-0" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to={"productDetails/"+productList.product_code}>
                <Card className= "h-100 w-100 text-center">
                <Card.Img variant="top" src={productList.image} />
                <Card.Body>
                <Card.Title className="text-center">{productList.title}</Card.Title>
            <Card.Text className=" text-center" style={{ color: 'red', fontWeight:'bold'}}><strike>Price:{productList.price}</strike></Card.Text>
            <Card.Text className=" text-center" style={{ color: 'blue', fontWeight:'bold'}}>special Price:{productList.special_price}</Card.Text>
    
            </Card.Body>
            </Card> 
            </Link>
        </Col>
            }





    
        });
        

        // "card w-100" style={{ width: '20rem', height:'21rem'}}




        return (
            <Fragment>
                <FeaturedProductLoader isLoading={this.state.isLoading}/>
                <div maindiv={this.state.maindiv}>
                <Container className="text-center" fluid={true}>
                <h3 className=" mt-5 text-center" style={{ color: 'red'}}>FETURED PRODUCTS</h3>
                <p className="m-2 text-center">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>

                        {myView}

                    </Row>
                </Container>
                </div>
            </Fragment>
        )
    }
}

