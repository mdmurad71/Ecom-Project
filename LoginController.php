<?php

namespace App\Http\Controllers;

use App\Models\OtpModel;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    function loginByMobile(Request $request){
        $created_timestamp=time();
        $created_time=date('h:i:sa');
        $created_date=date('d-m-y');
        $mobileNo=$request->input('mobile');
        $result=OtpModel::insert([
            'mobile'=>$mobileNo,
            'created_timestamp'=>$created_timestamp,
            'created_time'=>$created_time,
            'created_date'=>$created_date,
        ]);
        return $result;
    }
}
