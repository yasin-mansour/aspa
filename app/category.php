<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    protected $fillable = [
        'name'
    ];

    public function courses()
    {
        return $this->hasMany('App\course');
    }

    public function materials()
    {
        return $this->hasMany('App\material');
    }
}
