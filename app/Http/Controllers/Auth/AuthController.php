<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Organization;
use App\Qualification;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
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
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {
        if (Auth::user()) {
           /* $user = User::find(Auth::user()->id);
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
        } else {
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

            $user->qualifications()->save($qualification);
            $user->organizations()->save($organization);

            return $user;
        }

    }

    protected function login(Request $request)
    {
        $this->validateLogin($request);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        $throttles = $this->isUsingThrottlesLoginsTrait();

        if ($throttles && $lockedOut = $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        $credentials = $this->getCredentials($request);

        if (Auth::guard($this->getGuard())->attempt($credentials, $request->has('remember'))) {
            return $this->handleUserWasAuthenticated($request, $throttles);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        if ($throttles && !$lockedOut) {
            $this->incrementLoginAttempts($request);
        }

        return array('error' => [
            $this->loginUsername() => $this->getFailedLoginMessage(),
        ]);
    }

    protected function handleUserWasAuthenticated(Request $request, $throttles)
    {
        if ($throttles) {
            $this->clearLoginAttempts($request);
        }

        if (method_exists($this, 'authenticated')) {
            return $this->authenticated($request, Auth::guard($this->getGuard())->user());
        }

        return array('user' => Auth::user());
    }
}
