<?php

namespace App\Http\Controllers;

use App\Models\NotificationModel;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    function notificationData(){
        $result= NotificationModel::get();
        return $result;
    }
}
