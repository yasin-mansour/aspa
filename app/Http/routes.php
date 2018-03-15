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

// Authentication Routes...
Route::get('api/login', 'Auth\AuthController@showLoginForm');
Route::post('api/login', 'Auth\AuthController@login');
Route::get('api/logout', 'Auth\AuthController@logout');

// Registration Routes...
Route::get('api/register', 'Auth\AuthController@showRegistrationForm');
Route::post('api/register', 'Auth\AuthController@register');

// Password Reset Routes...
Route::get('api/password/reset/{token?}', 'Auth\PasswordController@showResetForm');
Route::post('api/password/email', 'Auth\PasswordController@sendResetLinkEmail');
Route::post('api/password/reset', 'Auth\PasswordController@reset');

Route::get('/home', 'HomeController@index');
