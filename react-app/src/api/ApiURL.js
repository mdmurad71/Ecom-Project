class ApiURL {
    static BaseURL = "http://127.0.0.1:8000/api/";
    static VisitorDetails = this.BaseURL + "SendVisitorDetails";
    static SendContactDetails = this.BaseURL + "SendContactDetails";
    static SendSiteInfo = this.BaseURL + "SendSiteInfo";
    static SendCategoryDetails = this.BaseURL + "SendCategoryDetails";
    static categoryGetData = this.BaseURL + "categoryGetData";
    static loginByMobile = this.BaseURL + "loginByMobile";

    static ProductListByRemark(Remark) {
        return this.BaseURL + "ProductShortListByRemark/" + Remark;
    };
    static ProductListByCategory(Category) {
        return this.BaseURL + "ProductListByCategory/" + Category;
    };
    static ProductListBySubCategory(Category, SubCategory) {
        return this.BaseURL + "ProductListBySubCategory/" + Category + "/" + SubCategory;
    };
    static SendSliderInfo = this.BaseURL + "SendSliderInfo";
    static ProductDetails(ProductCode) {
        return this.BaseURL + "ProductDetailsByCode/" + ProductCode;
    }
    static NotificationHistory = this.BaseURL + "NotificationShortList";
    static ProductListBySearch(SearchKey) {
        return this.BaseURL + "ProductListBySearch/" + SearchKey;
    }
    // static CreateOtp(Mobile) {
    //     return this.BaseURL + "CreateOTP/" + Mobile;
    // }
    static OtpVerification = this.BaseURL + "OtpVerification";


    static SimilarProduct(subcategory) {
        return this.BaseURL + "SimilarProduct/" + subcategory;
    }

    static ReviewList(code) {
        return this.BaseURL + "reviewList/" + code;
    }

    static CartCount(mobile) {
        return this.BaseURL + "CartCount/" + mobile;
    }

    static AddFav(mobile, code) {
        return this.BaseURL + "addFav/" + code + "/" + mobile;
    }

    static favList(mobile) {
        return this.BaseURL + "favList/" + mobile;
    }

    static removeFavItem(mobile, code) {
        return this.BaseURL + "removeFavItem/" + code + "/" + mobile;
    }

    static addToCart = this.BaseURL + "addToCart";


    static CartList(mobile) {
        return this.BaseURL + "CartDetails/" + mobile;
    }

    static RemoveCartList(id) {
        return this.BaseURL + "RemoveCartList/" + id;
    }

    static CartItemMinus(id, quantity, price) {
        return this.BaseURL + "CartItemMinus/" + id + "/" + quantity + "/" + price;
    }

    static CartItemPlus(id, quantity, price) {
        return this.BaseURL + "CartItemPlus/" + id + "/" + quantity + "/" + price;
    }

    static CartOrder = this.BaseURL + "Order";


    static OrderListByUser(mobile) {
        return this.BaseURL + "OrderListByUser/" + mobile;
    }

    static postReview = this.BaseURL + "postReview";





}
export default ApiURL;
