import React, { Component, Fragment } from 'react'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import Axios from 'axios';
import ApiURL from '../api/ApiURL';
import SliderLoader from '../components/placeholder/SliderLoader';

export default class ProductDetailsPage extends Component {


    constructor({match}){
        super();
        this.state={
            code:match.params.code,
            productData:[],
            isLoading:"",
            maindiv:"d-none"
        }
    }

    componentDidMount(){
        window.scroll(0,0)
        Axios.get(ApiURL.productDetails(this.state.code)).then(response=>{
            this.setState({productData:response.data,isLoading:"d-none",maindiv:""})
        }).catch(error=>{

        });
    }
    
    render() {


        if(this.state.maindiv=="d-none"){
            return (
                <Fragment>
                <div className="Desktop">
                <NavMenuDesktop/> 
             
                </div>
                 
                 <div className="Mobile">
                    <NavMenuMobile/>
                   
                 </div> 
                <SliderLoader isLoading={this.state.isLoading}/>
    
                 <FooterDesktop/>
            </Fragment>
            );
        }else{
            return (
                <Fragment>
                <div className="Desktop">
                <NavMenuDesktop/> 
             
                </div>
                 
                 <div className="Mobile">
                    <NavMenuMobile/>
                   
                 </div> 
                    <ProductDetails productData={this.state.productData}/>
    
                 <FooterDesktop/>
            </Fragment>
            );
        }
       
    }
}
