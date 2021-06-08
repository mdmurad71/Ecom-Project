import React, {Component, Fragment} from 'react';
import Axios from "axios";
import ApiURL from "../api/ApiURL";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
// import ProductListLoader from "../components/placeholder/ProductListLoader";
import SliderLoader from '../components/placeholder/SliderLoader';
// import ListByCategory from "../components/ProductDetails/ListByCategory";
import FooterDesktop from "../components/common/FooterDesktop";
// import FooterMobile from "../components/common/FooterMobile";
import SearchList from "../components/ProductDetails/SearchList";

export default class SearchPage extends Component {

constructor({match}){
    super();
    this.state={
        searchKey:match.params.searchKey,
        productData:[],
        isLoading:"",
        mainDiv:"d-none"
    }
}

componentDidMount(){
    window.scroll(0,0)
    Axios.get(ApiURL.productBySearch(this.state.searchKey)).then(response=>{
        this.setState({productData:response.data,isLoading:"d-none",maindiv:""})
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



                <SliderLoader isLoading={this.state.isLoading}/>
                <div className={this.state.MainDiv}>
                    <SearchList searchKey={this.state.searchKey}  productData={this.state.productData} />
                </div>



                <div className="Desktop">
                    <FooterDesktop/>
                </div>
                {/* <div className="Mobile">
                    <FooterMobile/>
                </div> */}

            </Fragment>
        );
    }
}

