import React, { Component, Fragment } from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import ProductListByCategory from "../components/ProductDetails/ProductListByCategory";
import Axios from "axios";
import ApiURL from "../api/ApiURL"

export default class ProductListCategoryPage extends Component {

constructor({match}){
    super();
    this.state={
        category:match.params.category,
        productData:[]
    }
}



    componentDidMount(){
        window.scroll(0,0)

        Axios.get(ApiURL.productListByCategory(this.state.category)).then(response=>{
            this.setState({productData:response.data})
        }).catch(error=>{
    
        });
       
    }


    render() {
        return (
            <Fragment>
                            
            <div className="Desktop">
            <NavMenuDesktop/> 
         
            </div>
             
             <div className="Mobile">
                <NavMenuMobile/>
               
             </div> 

            <ProductListByCategory category={this.state.category} productData={this.state.productData}/>

             <FooterDesktop/>
                
            </Fragment>
        )
    }
}
