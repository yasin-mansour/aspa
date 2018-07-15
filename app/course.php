<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class course extends Model
{
    protected $fillable = [
        'name', 'description',
    ];

    public function ClassRoom()
    {
        return $this->hasMany('App\ClassRoom');
    }
}
