<?php

namespace App\Http\Controllers;

use App\Models\categoryLevel1Model;
use App\Models\categoryLevel2Model;
use Illuminate\Http\Request;

class categoryDetailsController extends Controller
{
    function categoryGetData(){
       $parentCategory= categoryLevel1Model::all();
        $categoryDetailsArray=[];

       foreach ($parentCategory as $value){
           $subCategory=categoryLevel2Model::where('cat1_name', $value['cat1_name'])->get();
           $item=[
               'parentCategoryName'=>$value['cat1_name'],
               'parentCategoryImage'=>$value['cat1_image'],
               'subCategory'=>$subCategory
           ];
           array_push($categoryDetailsArray, $item);
       }
       return $categoryDetailsArray;
    }
}
