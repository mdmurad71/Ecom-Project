import React, { Component, Fragment } from 'react'
import {Card, Row, Container,Breadcrumb, Col, Button, Form, Img} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import ReactDom from 'react-dom';
import {Link} from "react-router-dom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import SuggestedProduct from "./SuggestedProduct";
import ReviewList from './ReviewList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import ApiURL from '../../api/ApiURL';
import LocalStorageHelper from '../../LocalStorageHelper/LocalStorageHelper';



export default class ProductDetails extends Component {


    constructor(){
        super();
        this.state={
            previewImg:"0",
            isColor:null,
            isSize:null,
            color:"",
            size:"",
            quantity:"",
            productCode:"null",
            addToCart:"Add to card",
            addToFav:"Favourite",

            

        }
    }


imgOnclick=(event)=>{
let imgSrc= event.target.getAttribute('src');
this.setState({previewImg:imgSrc})
}

priceOption(special_price,price){
if(special_price=="Na"){
    return(
        <p className="product-price-on-card">Price: { price}TK</p>
    )
}else{
    return(
        <p className="product-price-on-card">
        Price: <strike class="text-secondary">{ price}TK</strike>  { special_price} TK
    </p>
    )
}
}

addToCart=()=>{
    if(LocalStorageHelper.getUserMobile()!==null){

        let isSize= this.state.isSize;
        let isColor= this.state.isColor;
        let productCode=this.state.productCode;
        let color=this.state.color;
        let size=this.state.size;
        let quantity=this.state.quantity;
        let Mobile=LocalStorageHelper.getUserMobile();

        if(isColor==="YES" && color.length===0){
            alert("Please Select Color");
        }
        else if(isSize==="YES" && size.length===0){
            alert("Please Select Size");
        }
        else if(quantity.length===0){
            alert("Please Select Quantity");
        }
        else {
            this.setState({addToCart:"Adding.."})
            let MyFormData=new FormData();
            MyFormData.append("color",color);
            MyFormData.append("size",size);
            MyFormData.append("quantity",quantity);
            MyFormData.append("mobileNo",Mobile);
            MyFormData.append("product_code",productCode);

            axios.post(ApiURL.addToCart, MyFormData).then((response)=>{
                if(response.data===1){
                    toast.success("Item Added");
                    this.setState({addToCart:"Add To Cart"})
                }
                else {
                    toast.error("Request Fail ! Try Again 11");
                    this.setState({addToCart:"Add To Cart"})
                }
            }).catch((err)=>{
                toast.error("Request Fail ! Try Again 22")
                this.setState({addToCart:"Add To Cart"})
            })
        }


    }else{

    }
}


// add to fovourite function

addFavourite=()=>{
    if(LocalStorageHelper.getUserMobile()!==null){
        this.setState({addToFav:"Adding..."})
        let productCode=this.state.productCode;
        let Mobile=LocalStorageHelper.getUserMobile();
        axios.get(ApiURL.AddFav(Mobile,productCode)).then((res)=>{
            if(res.data===1){
                toast.success("Item Added");
                this.setState({addToFav:"Favourite"})
            }
            else {
                toast.error("Request Fail ! Try Again")
                this.setState({addToFav:"Favourite"})
            }

        }).catch((err)=> {
            toast.error("Request Fail ! Try Again")
            this.setState({addToFav:"Favourite"})
        })
    }
    else {
       
    }

}


 
   



colorOnChange=(e)=>{
let color= e.target.value;
this.setState({color:color});
}

sizeOnChange=(e)=>{
    let size= e.target.value;
    this.setState({size:size});
}

quantityONChange=(e)=>{
    let quantity= e.target.value;
    this.setState({quantity:quantity});
}




    render() {
        let productData=this.props.productData;
        let title=productData['productList'][0]['title'];
        let price=productData['productList'][0]['price'];
        let special_price=productData['productList'][0]['special_price'];
        let image=productData['productList'][0]['image'];
        let category=productData['productList'][0]['category'];
        let subcategory=productData['productList'][0]['subcategory'];
        let remark=productData['productList'][0]['remark'];
        let brand=productData['productList'][0]['brand'];
        let star=productData['productList'][0]['star'];
        let product_code=productData['productList'][0]['product_code'];


        let image1=productData['productDetails'][0]['img1'];
        if(this.state.previewImg==="0"){
            this.setState({previewImg:image1})
        }
        let image2=productData['productDetails'][0]['img2'];
        let image3=productData['productDetails'][0]['img3'];
        let image4=productData['productDetails'][0]['img4'];
        let des =productData['productDetails'][0]['des'];
        let color =productData['productDetails'][0]['color'];
        let size =productData['productDetails'][0]['size'];
        let details =productData['productDetails'][0]['details'];

        let colorDiv="d-none"
        if(color!="NA"){
        var colorArray=color.split(',');
        var colorOption=colorArray.map((colorList,i)=>{
            return(
                <option value={colorList}>{colorList}</option>
            )
        });
        colorDiv="";
        }
        
        else{
            colorDiv="d-none";
        }

let sizeDiv="d-none";
if(size!=="NA"){
    var sizeArray=size.split(',');
    var sizeOption= sizeArray.map((sizeList,i)=>{
        return(
            <option value={sizeList}>{sizeList}</option>
        )
    });
    sizeDiv="";
}else{
    sizeDiv="d-none"
}

// if(this.state.isSize===null){
//     if(size!=="NA"){
//         this.setState({isSize:"YES"})
//     }
//     else{
//         this.setState({isSize:"NO"})
//     }
// }

// if(this.state.isColor===null){
//     if(color!=="NA"){
//         this.setState({isColor:"YES"})
//     }
//     else{
//         this.setState({isColor:"NO"})
//     }
// }

if(this.state.productCode===null){
    this.setState({productCode:product_code})
}





            return (
                <Fragment>
                  <Container fluid={true} className="BetweenTwoSection">

                  <Row>
                        <Breadcrumb className="shadow-sm w-100 bg-white">
                            <Breadcrumb.Item> <Link to="/">Home</Link>    </Breadcrumb.Item>
                            <Breadcrumb.Item> <Link to={"/productDetails/"+product_code}>Details</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>

                    <Row className="p-2">
                        
                    <Col className="shadow-sm bg-white pb-3 mt-4"  lg={12} md={12} sm={12} xsm={12}>
                         <Row>
                           
                            <Col className="p-3" lg={6} md={6} sm={12} xsm={12}>
                            {/* <img id="previewImg" className="w-100 mb-3" src={image1}/> */}
                            <InnerImageZoom id="previewImg" className="w-100 mb-3"
                             src={this.state.previewImg}
                             zoomType={"hover"}
                              zoomScale={1.8}
                              zoomSrc={this.state.previewImg} />  
                            <Container  className="my-2">
                                            <Row>
                                                <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                                                    <img onClick={this.imgOnclick} className="w-100" src={image2}/>
                                                </Col>
                                                <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                    <img onClick={this.imgOnclick} className="w-100" src={image3}/>
                                                </Col>
                                                <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                    <img onClick={this.imgOnclick} className="w-100" src={image2}/>
                                                </Col>
                                                <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                    <img onClick={this.imgOnclick} className="w-100" src={image4}/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                           
                            <Col className="p-3" lg={6} md={6} sm={12} xsm={12}>
                            <h4>{title}</h4>
                            <h6>{des}</h6>
                            <div className="input-group">
                                <div className="product-price-card d-inline">Regular price 200</div>
                                <div className="product-price-card d-inline">50% Discount</div>
                                <div className="product-price-card d-inline">New price 100</div>
                            </div>
                            {this.priceOption(special_price,price)}
    
                        <div className={colorDiv}>
                            <h6 className="mt-2">Choose Color</h6>
                            <select onChange={this.colorOnChange} className="form-control form-select">
                                             <option value="color">Choose Color</option>
                                            {colorOption}
                                        </select>
                        </div>

                        <div className={sizeDiv}>
                            <h6 className="mt-2">Choose Size</h6>
                            <select className="form-control form-select">
                                            <option value="size">Choose Size</option>
                                            {sizeOption}
                                        </select>
                        </div>
                           
                        <div className="">
                                            <h6 className="mt-2">Choose Quantity</h6>
                                            <select onChange={this.quantityONChange} className="form-control form-select">
                                                <option value="">Choose Quantity</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>

                            <div className="input-group mt-3">
                                <button onClick={this.addToCart} className="btn btn-primary m-2"><i className="fa fa-shopping-cart"></i>{this.state.addToCart}</button>
                                <button className="btn btn-success m-2"><i className="fa fa-car"></i>Order Now</button>
                                <button onClick={this.addFavourite} className="btn btn-danger m-2"><i className="fa fa-heart">Favorite</i></button>
                            </div>                      
                            </Col>        
                        </Row>
    
                        <Row className="mt-3">
                            <Col className="" lg={6} md={6} sm={12} xsm={12}>
                            <h4>Details</h4>
    
                            { ReactHtmlParser(details) }
                            
                            </Col>
    
                            <Col className="" lg={6} md={6} sm={12} xsm={12}>
                                <ReviewList code={product_code}/>
                            </Col>
                        </Row>
                        
                        </Col>
                        
                        </Row>
                        <ToastContainer />
                    </Container>
                    <SuggestedProduct subcategory={subcategory}/>
                    
                </Fragment>
            )
        


  
    }
}
