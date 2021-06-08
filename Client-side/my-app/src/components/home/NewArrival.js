import React, { Component, Fragment } from 'react'
import Slider from "react-slick";
import {Card, Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from 'axios';
import ApiURL from '../../api/ApiURL';

export default class NewArrival extends Component {

    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);
        this.state={
            productData:[]
        }

    }

next(){
    this.slider.slickNext();
}

previous(){
    this.slider.slickPrev();
}

componentDidMount(){
    Axios.get(ApiURL.productListByRemark("NEW")).then(response=>{
        this.setState({productData:response.data});
    }).catch(error=>{

    });
}


    render() {
        var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      let myList= this.state.productData;
      let myView= myList.map((productList,i)=>{

          if(productList.special_price=="NEW"){
              return  <div className="p-1">
              <Card className="card w-100" style={{ width: '18rem', height:'27rem'}}>
              <Card.Img variant="top" src={productList.image} />
                  <Card.Body>
                      <h5 className="product-name-on-card">{productList.title}</h5>
                      <p className="product-price-on-card">{productList.price}</p>
                  </Card.Body>
              </Card>
          </div>
          }else{
              return    <div className="p-1">
              <Card className="card w-100" style={{ width: '18rem', height:'27rem'}}>
              <Card.Img variant="top" src={productList.image} />
                  <Card.Body>
                      <h5 className="product-name-on-card">{productList.title}</h5>
                      <p className="product-price-on-card"><strike>Price:{productList.price}</strike></p>
                      <Card.Text className=" text-center" style={{ color: 'blue', fontWeight:'bold'}}>special Price:{productList.special_price}</Card.Text>

                  </Card.Body>
              </Card>
          </div>
          }
  
      });












      return (
        <Container className="text-center pt-5 mt-5 BetweenTwoSection" fluid={true}>
        <h4 className="section-title px-0 mx-0 " style={{ color: 'red'}}>NEW ARRIVAL
            <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} >
                <i className="fa fa-angle-left"></i>
            </a>
            <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
            </a>
        </h4>
        <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
            <Slider  ref={c=>(this.slider=c)}   {...settings}>
                
               {myView}
            </Slider>


    </Container>
      );
    }
 }

