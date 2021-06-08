<?php

namespace App\Http\Controllers;

use App\Models\ProductCartModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductOrderController extends Controller
{
//    function AddToCart(Request $request){
//        $color=$request->input('color');
//        $size=$request->input('size');
//        $quantity=$request->input('quantity');
//        $mobileNo=$request->input('mobileNo');
//        $product_code=$request->input('product_code');
//
////        $ProductDetails= ProductListModel::Where('product_code',$product_code)->get();
//        $ProductDetails= ProductListModel::Where('product_code',$product_code)->get([
//           'image', 'title', 'product_code', 'price', 'product_code', 'special_price', 'shop_name', 'shop',
//        ]);
//
//
//
////        return $ProductDetails;
////        $price=$ProductDetails[0]['price'];
////        $special_price=$ProductDetails[0]['special_price'];
//        if('special_price'=="NA"){
//            $total_price=$ProductDetails['price']*$quantity;
//            $unit_price=$ProductDetails['price'];
//        }
//        else{
//            $total_price=$ProductDetails['special_price']*$quantity;
//            $unit_price= $ProductDetails['special_price'];
//        }
//        $result=ProductCartModel::insert([
//            'img'=>$ProductDetails['image'],
//            'product_name'=>$ProductDetails['title'],
//            'product_code'=>$product_code,
//            'shop_name'=>$ProductDetails['shop_name'],
//            'shop_code'=>$ProductDetails['shop'],
//            'product_info'=>"Color: ".$color."Size: ".$size,
//            'product_quantity'=>$quantity,
//            'unit_price'=>$unit_price,
//            'total_price'=>$total_price,
//            'mobile'=>$mobileNo,
//        ]);
//        return $result;
//    }

function AddToCart(Request $request){

        $color=$request->input('color');
        $size=$request->input('size');
        $quantity=$request->input('quantity');
        $mobileNo=$request->input('mobileNo');
        $product_code=$request->input('product_code');

    $datas =DB::table('product_list')->Where('product_code', '=', $product_code)->get();

    foreach($datas as $data){
        $total = $data->price * $quantity;
     $result= DB::table('product_cart')->Where('product_code', $data->product_code)->insert([
            'img' => $data->image,
            'product_name'=>$data->title,
            'product_code'=>$data->product_code,
            'shop_name'=>$data->shop_name,
            'shop_code'=>$data->shop,
            'product_info'=>"Color: ".$color."Size: ".$size,
            'product_quantity'=>$quantity,
            'mobile'=>$mobileNo,
            'unit_price'=>$data->price,
            'total_price'=>$total,

            ]);
     return $result;
}

}




}
