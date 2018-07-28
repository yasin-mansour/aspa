<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class course extends Model
{
    protected $fillable = [
        'name', 'description',
    ];

    public function ClassRooms()
    {
        return $this->hasMany('App\ClassRoom');
    }

    public function materials()
    {
        return $this->belongsToMany('App\material');
    }
}
