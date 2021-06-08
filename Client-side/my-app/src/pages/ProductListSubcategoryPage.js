import React, { Component, Fragment } from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import ProductListBySubcategory from "../components/ProductDetails/ProductListBySubcategory";
import axios from "axios";
import ApiURL from "../api/ApiURL";

export default class ProductListSubcategoryPage extends Component {

    constructor({match}) {
        super();
        this.state={
            subcategory:match.params.subcategory,
            category:match.params.category,
            productData:[],
            isLoading:"",
            MainDiv:"d-none"
        }

    }


    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiURL.productListBySubcategory(this.state.category,this.state.subcategory)).then(response=> {
            this.setState({productData:response.data,isLoading:"d-none",MainDiv:" "})
        }).catch(error=> {

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

            <ProductListBySubcategory category={this.state.category} subcategory={this.state.subcategory}  productData={this.state.productData} />

             <FooterDesktop/>
                
            </Fragment>
        )
    }
}
