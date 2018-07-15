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

use App\Word;
use App\Language;
use App\User;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/api/token', function () {
    return array('token' => csrf_token(), 'user' => Auth::user(), 'role' => 'admin', 'languages' => Language::all());
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

Route::post('api/words/update', 'WordController@updateWords');
Route::post('api/words/delete', 'WordController@DeleteWords');
Route::post('api/generateJson', 'LanguageController@generateJson');

Route::resource('api/language', 'LanguageController');
Route::resource('api/word', 'WordController');
Route::post('api/class/create', 'ClassRoomController@store');
Route::get('api/class', 'ClassRoomController@paginator');
Route::get('api/class/{id}', 'ClassRoomController@index');

Route::post('/api/user/auto_complete', function (Request $request) {

    $freeText = $request->input('free_text');

    $users = App\user::select('id', 'first_name', 'last_name')
        ->Where('role_id','=',2) // 2 => admin
        ->where('first_name', 'LIKE', '%' . $freeText . '%')
        ->orWhere('last_name', 'LIKE', '%' . $freeText . '%')
        ->get();

    return $users;
});