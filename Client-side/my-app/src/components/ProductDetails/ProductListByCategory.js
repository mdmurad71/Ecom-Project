import React, { Component, Fragment } from 'react'
import {Container, Card, Row, Col} from "react-bootstrap";

export default class ProductListByCategory extends Component {
    render() {

        const myList= this.props.productData;
        const category= this.props.category;
        let myView= myList.map((productList,i)=>{

            if(productList.special_price=="NA"){
                return <Col className="p-0" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Card className= "h-100 w-100 text-center">
                <Card.Img variant="top" src={productList.image} />
                <Card.Body>
                <Card.Title className="text-center">{productList.title}</Card.Title>
            <Card.Text className=" text-center" style={{ color: 'red', fontWeight:'bold'}}>Price:{productList.price}</Card.Text>
            <Card.Text className=" text-center" style={{ color: 'blue', fontWeight:'bold'}}>special Price:{productList.special_price}</Card.Text>

            </Card.Body>
            </Card> 
        </Col>
            }else{
                return <Col className="p-0" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Card className= "h-100 w-100 text-center">
                <Card.Img variant="top" src={productList.image} />
                <Card.Body>
                <Card.Title className="text-center">{productList.title}</Card.Title>
            <Card.Text className=" text-center" style={{ color: 'red', fontWeight:'bold'}}><strike>Price:{productList.price}</strike></Card.Text>
            <Card.Text className=" text-center" style={{ color: 'blue', fontWeight:'bold'}}>special Price:{productList.special_price}</Card.Text>
    
            </Card.Body>
            </Card> 
        </Col>
            }
        })


        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                <h3 className=" mt-5 text-center" style={{ color: 'red'}}>{category}</h3>
                    <Row>
                        {myView}
                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
