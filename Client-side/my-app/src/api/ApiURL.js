class ApiURL{

    static BaseURL="http://127.0.0.1:8000/api/";
    static VisitorDetails= this.BaseURL+"getVisitorDetails";
    static postContactDetails= this.BaseURL+"postContactDetails";
    static loginByMobile= this.BaseURL+"loginByMobile";

    static categoryGetData= this.BaseURL+"categoryGetData";
    static SendSiteInfo= this.BaseURL+"SendSiteInfo";
    static addToCart= this.BaseURL+"addToCart";


    static productListByRemark(remark){
        return this.BaseURL+"productListByRemark/"+remark;
    }

    static productListByCategory(category){
        return this.BaseURL+"productListByCategory/"+category;
    }

    static productListBySubcategory(category, subcategory){
        return this.BaseURL+"productListBySubcategory/"+category+"/"+subcategory;
    }

    static sliderInfo= this.BaseURL+"sliderInfo";


    static productDetails(productCode){
        return this.BaseURL+"productDetails/"+productCode;
    }

    static notification= this.BaseURL+"notification";

    static  productBySearch(searchKey){
        return this.BaseURL+"productBySearch/"+searchKey;
    }

    static  similarProduct(subcategory){
        return this.BaseURL+"similarProduct/"+subcategory;
    }

    static  reviewList(code){
        return this.BaseURL+"reviewList/"+code;
    }

    static  AddFav(mobile,code){
        return this.BaseURL+"addFav/"+code+"/"+mobile;
    }
   


}
export default ApiURL;