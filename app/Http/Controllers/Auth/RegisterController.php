<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Organization;
use App\Qualification;
use App\Role;
use App\Language;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'gender' => 'required|max:255',
            'country' => 'max:255',
            'city' => 'max:255',
            'phone' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
            'q_name' => 'required|max:255',
            'q_major' => 'required|max:255',
            'q_issue_date' => 'required|max:255',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        /*$user = User::find(Auth::user()->id);
 $user->first_name = $data['first_name'];
 $user->last_name = $data['last_name'];
 $user->gender = $data['gender'];
 $user->country = $data['country'];
 $user->city = $data['city'];
 $user->nationality = $data['nationality'];
 $user->phone = $data['phone'];
 $user->english_level = $data['english_level'];
 $user->experience_year = $data['experience_year'];
 $user->email = $data['email'];
 $user->save();

 $user->qualifications()->whereId($data['q_id'])->update([
     'name' => $data['q_name'],
     'major' => $data['q_major'],
     'issue_date' => $data['q_issue_date']]);*/
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'gender' => $data['gender'],
            'country' => $data['country'],
            'city' => $data['city'],
            'nationality' => $data['nationality'],
            'phone' => $data['phone'],
            'english_level' => $data['english_level'],
            'experience_year' => $data['experience_year'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $qualification = new Qualification([
            'name' => $data['q_name'],
            'major' => $data['q_major'],
            'issue_date' => $data['q_issue_date']]);

        $organization = new Organization([
            'name' => $data['org_name'],
            'type' => $data['org_type'],
            'position' => $data['org_position'],
            'address' => $data['org_address'],
            'phone' => $data['org_phone'],
            'fax' => $data['org_fax']
        ]);
        $role = Role::where('name','user')->first();
        $language = Language::where('name','en')->first();

        $user->role()->associate($role);
        $user->language()->associate($language);
        $user->qualifications()->save($qualification);
        $user->organizations()->save($organization);
        $user->save();

        return $user;
    }

    public function showRegistrationForm()
    {
        return array('logged_in' => false);
    }
}
