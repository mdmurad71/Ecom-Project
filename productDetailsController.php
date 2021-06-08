<?php

namespace App\Http\Controllers;

use App\Models\productDetailsModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;

class productDetailsController extends Controller
{
    function productDetails(Request $request){

        $product_code=$request->code;
        $productDetails=productDetailsModel::where('product_code', $product_code)->get();
        $productList=productListModel::where('product_code', $product_code)->get();


        $item=[
               'productDetails'=> $productDetails,
               'productList'=> $productList,

           ];

           return $item;

}
}
