<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    protected $fillable = [
        'name', 'privilege', 'path', 'size', 'extension', 'profile', 'category_id', 'display_name'
    ];

    public function ClassRoom()
    {
        return $this->belongsToMany('App\ClassRoom');
    }

    public function courses()
    {
        return $this->belongsToMany('App\Course');
    }
}
