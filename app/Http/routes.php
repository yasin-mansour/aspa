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
use App\Course;
use App\Category;
use App\Material;
use App\ClassRoom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

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

Route::post('api/course/create', 'CourseController@store');
Route::get('api/course/{id}', 'CourseController@index');
Route::post('api/category/create', 'CategoryController@store');

Route::post('/api/user/auto_complete', function (Request $request) {

    $freeText = $request->input('free_text');

    $users = App\user::select('id', 'first_name', 'last_name')
        ->Where('role_id', '=', 2)// 2 => admin
        ->where('first_name', 'LIKE', '%' . $freeText . '%')
        ->orWhere('last_name', 'LIKE', '%' . $freeText . '%')
        ->get();

    return $users;
});


Route::post('/api/upload', function (Request $request) {
    //$request->file('file')
    //$request->request->get()

    $file = $request->file('file');
    $profile = $request->file('profile');

    $originFileName = $file->getClientOriginalName();
    $size = $file->getClientSize();
    $extension = $file->getClientOriginalExtension();
    $privilege = $request->request->get('privilege');
    $displayName = $request->request->get('display_name');

    $time = time();

    $savFilename = 'material-' . $time . '.' . $extension;
    $savProfileName = null;

    if ($profile) {
        $profileExtension = $profile->getClientOriginalExtension();
        $savProfileName = 'profile-' . $time . '.' . $profileExtension;
        $profile->move('material', $savProfileName);
    }


    $file->move('material', $savFilename);
    $material = Material::create([
        'display_name' => $displayName,
        'name' => $originFileName,
        'size' => $size,
        'extension' => $extension,
        'privilege' => $privilege,
        'path' => $savFilename,
        'profile' => $savProfileName,
    ]);

    $courseId = $request->request->get('course');
    if ($courseId) {
        $course = Course::find($courseId);
        $course->materials()->save($material);
        $course->save();
    }

    $categoryId = $request->request->get('category_id');

    if($categoryId){
        $category = Category::find($categoryId);
        $category->materials()->save($material);
        $category->save();
    }

    switch ($privilege) {
        case 'private':
            $classId = $request->request->get('class');
            $class = ClassRoom::find($classId);
            $class->materials()->save($material);
            $class->save();
            break;
    };

    return $material;

});


Route::get('api/admin/resource', function (Request $request) {
    $category = Category::all();

    return array('courses' => Course::with('classrooms')->get(), 'categories' => $category);
});

Route::get('api/resource', function (Request $request) {

    $course = Course::with(array('classrooms' => function($query)
    {
        $query->where('date_exact','=', false)->orWhere('end_date', '>=',Carbon::now())->orWhere('end_date','=',null);
    }))->get();
    return array('courses' => $course) ;//Course::with('classrooms')->where('date_exact','=', false)->orWhere('end_date', '>=',Carbon::now())->orWhere('end_date','=',null)->get());
});