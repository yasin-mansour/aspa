<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/token', function () {
    return  array('token' => csrf_token(), 'guest'=>Auth::guest());
});

Route::auth();

Route::get('/test', function(){

});

Route::get('/home', 'HomeController@index');
