import React, { Component, Fragment } from 'react'
import {Container, Card, Row, Col} from "react-bootstrap";
import ApiURL from '../../api/ApiURL';
import Axios from 'axios';
import {Link} from "react-router-dom";


export default class Catagories extends Component {


    constructor(){
        super();
        this.state={
             MenuData: []
            }
    }
    
    componentDidMount(){
        Axios.get(ApiURL.categoryGetData).then(response=>{
            this.setState({MenuData:response.data})
        }).catch(error=>{
    
        });
    }













    render() {

        let myList= this.state.MenuData;
        let myView= myList.map((myList,i)=>{
            
            return  <Col key={i, toString()} className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"ProductListByCategory/"+myList.parentCategoryName}>
                   <Card className="h-100 w-100 text-center" >
                    <Card.Body>
                    <Card.Img variant="top" className="w-75" src={myList.parentCategoryImage} alt="pic14.jpg" />
                        <Card.Title className="text-center">{myList.parentCategoryName}</Card.Title>
                        <Card.Text className=" text-center">
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                    </Link>
                </Col>
                
     
            
        });



        // style={{ width: '20rem', height:'16rem', marginBottom:'1rem'}}






        return (
            <Fragment>
                 <Container className="text-center pt-3 mt-2 BetweenTwoSection" fluid={true}>
                    <h4 className="section-title  mt-5" style={{ color: 'red'}}>CATEGORIES</h4>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                    <Row className="m-0 p-0">
                        
                     {myView}

                </Row>
                    </Container>
                </Fragment>
            )
    }
}




