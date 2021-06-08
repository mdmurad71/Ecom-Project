<?php

namespace App\Http\Controllers;

use App\Models\sliderTableModel;
use Illuminate\Http\Request;

class sliderController extends Controller
{
  function sliderInfo(){
      $result= sliderTableModel::all();
      return $result;
  }
}
