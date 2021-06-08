<?php

namespace App\Http\Controllers;

use App\Models\FavouriteModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;

class FavouriteController extends Controller
{
    function addFav(Request $request){
        $code= $request->code;
        $mobile= $request->mobile;
        $ProductDetails= ProductListModel::Where('product_code', $code)->first();
        $result= FavouriteModel::insert([
            'title'=>$ProductDetails[0]['title'],
            'image'=>$ProductDetails[0]['image'],
            'product_code'=>$code,
            'mobile'=>$mobile,
        ]);
        dd($result) ;
    }
}
