<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'gender', 'country', 'city', 'nationality', 'phone', 'english_level', 'experience', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['role_type'];


    public function role()
    {
        return $this->belongsTo('App\Role');
    }

    public function language()
    {
        return $this->belongsTo('App\Language');
    }

    public function qualifications()
    {
        return $this->hasMany('App\qualification');
    }

    public function organizations()
    {
        return $this->hasMany('App\organization');
    }

    public function courses()
    {
        return $this->belongsToMany('App\course')->withPivot('type');
    }

    public function getRoleTypeAttribute()
    {
        return $this->role ? $this->role->name : 'user';

    }

}
