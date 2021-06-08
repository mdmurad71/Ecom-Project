<?php

namespace App\Http\Controllers;

use App\Models\ProductListModel;
use Illuminate\Http\Request;

class productListController extends Controller
{
    function productListByRemark(Request $request){
       $remark= $request->remark;
       $productList= ProductListModel::Where('remark', $remark)->get();
       return $productList;
    }

    function productListBySubcategory(Request $request){
        $category= $request->category;
        $subcategory= $request->subcategory;
        $categoryList=ProductListMOdel::where('category', $category)->where('subcategory', $subcategory)->get();
        return $categoryList;

    }


    function productListByCategory(Request $request){
        $category= $request->category;
        $categoryList=ProductListMOdel::where('category', $category)->get();
        return $categoryList;

    }

    function productBySearch(Request $request){
        $key= $request->key;
        $productList=ProductListMOdel::where('title', 'LIKE', "%{$key}%")->get();
        return $productList;
    }

    function similarProduct(Request $request){
        $subcategory= $request->subcategory;
        $result= ProductListMOdel::where('subcategory', $subcategory)->orderBy('id', 'desc')->get();
        return $result;

    }


}
