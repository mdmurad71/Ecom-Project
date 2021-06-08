import React, { Component, Fragment } from 'react'
import {Container, Card, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Favorite extends Component {
    render() {
        return (
            <Fragment>

<Container className="text-center" style={{ marginTop: '6rem'}} fluid={true}>
                <h3 className=" mt-5 text-center" style={{ color: 'red'}}>Favourite Items</h3>
                <p className="m-2 text-center">Some Of Our Exclusive Collection, You May Like</p>
                    <Row>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Link to="/productDetails">
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                    <Card.Img variant="top" src="/images/pic8.jpg" alt="pic8.jpg" />
                    <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                    
                    </Link>
                        </Col>
                        

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic9.jpg" alt="pic9.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic10.jpg" alt="pic10.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                    </Col>
                       
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic11.jpg" alt="pic11.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                        
                 </Col>
                 <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic12.jpg" alt="pic12.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                        
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic13.jpg" alt="pic13.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                        
                 </Col>

                    </Row>

                    <Row>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                    <Card.Img variant="top" src="/images/pic14.jpg" alt="pic14.jpg" />
                    <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                        </Col>
                        

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic15.jpg" alt="pic15.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic16.jpg" alt="pic16.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                    </Col>
                       
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic17.jpg" alt="pic17.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                        
                 </Col>
                 <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic18.jpg" alt="pic18.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                        
                </Col>

                <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="card w-100" style={{ width: '20rem', height:'21rem'}}>
                        <Card.Img variant="top" src="/images/pic19.jpg" alt="pic19.jpg" />
                        <Card.Body>
                        <Card.Title className="text-center">Card Title</Card.Title>
                        <Card.Text className=" text-center">
                        Some quick example text to 
                        
                        </Card.Text>
                       
                    </Card.Body>
                    </Card> 
                        
                 </Col>

                    </Row>
                </Container>
                
            </Fragment>
        )
    }
}
