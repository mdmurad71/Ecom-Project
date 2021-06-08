<?php

namespace App\Http\Controllers;

use App\Models\siteInfoModel;
use Illuminate\Http\Request;

class siteInfoController extends Controller
{
    function SendSiteInfo(){
        $result=siteInfoModel::all();
        return $result;
    }
}
