<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    protected $fillable = [
        'name', 'privilege', 'path', 'size'
    ];

    public function ClassRoom()
    {
        return $this->belongsToMany('App\ClassRoom');
    }
}
