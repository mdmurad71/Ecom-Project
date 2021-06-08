import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router';
import CartPage from '../pages/CartPage';
import FavouritePage from '../pages/FavouritePage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import UserOnboardPage from '../pages/UserOnboardPage';
import AboutPage from '../pages/AboutPage';
import PolicyPage from '../pages/PolicyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import ContactPage from '../pages/ContactPage';
import ProductListCategoryPage from '../pages/ProductListCategoryPage';
import ProductListSubcategoryPage from "../pages/ProductListSubcategoryPage";
import SearchPage from "../pages/SearchPage";



export default class Approute extends Component {
    render() {
        return (
            <Fragment>
               <Switch>
               {/* <Route exact path="/" component={HomePage}/> */}
               <Route exact path="/" render={(props)=> <HomePage {...props} key={Date.now()}/>}/>

               <Route exact path="/onboard" render={(props)=> <UserOnboardPage {...props} key={Date.now()}/>}/>

               <Route exact path="/productDetails/:code" render={(props)=> <ProductDetailsPage {...props} key={Date.now()}/>}/>

               <Route exact path="/favourite" render={(props)=> <FavouritePage {...props} key={Date.now()}/>}/>

               <Route exact path="/notification" render={(props)=> <NotificationPage {...props} key={Date.now()}/>}/>

               <Route exact path="/cart" render={(props)=> <CartPage {...props} key={Date.now()}/>}/>

               <Route exact path="/about" render={(props)=> <AboutPage {...props} key={Date.now()}/>}/>

               <Route exact path="/policy" render={(props)=> <PolicyPage {...props} key={Date.now()}/>}/>

               <Route exact path="/purchase" render={(props)=> <PurchasePage {...props} key={Date.now()}/>}/>

               <Route exact path="/refund" render={(props)=> <RefundPage {...props} key={Date.now()}/>}/>

               <Route exact path="/contact" render={(props)=> <ContactPage {...props} key={Date.now()}/>}/>

               <Route exact path="/ProductListByCategory/:category" render={(props)=> <ProductListCategoryPage {...props} key={Date.now()}/>}/>

               <Route exact path="/ProductListBySubCategory/:category/:subCategory" render={(props) => <ProductListSubcategoryPage {...props} key={Date.now()}/>}/>

               <Route exact path="/productBySearch/:searchKey" render={(props) => <SearchPage {...props} key={Date.now()}/>}/>






                   </Switch> 
            </Fragment>
        )
    }
}


