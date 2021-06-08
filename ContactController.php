<?php

namespace App\Http\Controllers;

use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function postContactDetails(Request $request){
        date_default_timezone_set('Asia/Dhaka');
        $contact_time=date('h:i:sa');
        $contact_date=date('d-m-y');
       $name= $request->input('name');
       $mobile= $request->input('mobile');
       $message= $request->input('message');

        $result=ContactModel::insert([
            'name'=>$name,
            'mobile'=>$mobile,
            'message'=>$message,
            'contact_time'=>$contact_time,
            'contact_date'=>$contact_date
        ]);
        return $result;
    }
}
