import React, { Component, Fragment } from 'react'
import {Container, Card, Row, Col} from "react-bootstrap";
import ApiURL from '../../api/ApiURL';
import Axios from 'axios';

export default class Collection extends Component {

    constructor(){
        super();
        this.state={
            productData: []
        }
    }
    
    componentDidMount(){
        Axios.get(ApiURL.productListByRemark("COLLECTION")).then(response=>{
            this.setState({productData:response.data})
        }).catch(error=>{
    
        });
    }










    render() {

        let myList= this.state.productData;
        let myView= myList.map((productList,i)=>{

            if(productList.special_price=="NA"){
                return  <Col className="p-0 m-0 "  lg={3} md={3} sm={12}>
                <Card className="h-100 w-100 text-center">
                     <Card.Img variant="top" src={productList.image} />
                     <Card.Body>
                     <Card.Text className=" text-center" style={{ color: 'red', fontWeight:'bold'}}><strike>Price:{productList.price}</strike></Card.Text>
                     <Card.Text className=" text-center" style={{ color: 'blue', fontWeight:'bold'}}>special Price:{productList.special_price}</Card.Text>
                         
                         
                        
                     </Card.Body>
                     </Card> 
                 </Col>
            }else{
                return <Col className="p-0 m-0 "  lg={3} md={3} sm={12}>
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
    
        });











        return (
            <Fragment className="card_size">
                <Container className="text-center pt-3  BetweenTwoSection" fluid={true}>
                <h3 className=" mt-5 text-center" style={{ color: 'red'}}>COLLECTIONS</h3>
                <p className="m-2 text-center">Some Of Our Exclusive Collection, You May Like</p>
                <Row className="card_size">
                
                    {myView}
                    
                    </Row>
                    </Container>   
            </Fragment>
        )
    }
}
