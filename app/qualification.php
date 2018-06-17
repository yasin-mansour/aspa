<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class qualification extends Model
{
    //
    protected $fillable = [
        'name', 'major', 'issue-date'
    ];

    public function user(){
        return $this->hasMany('App\User');
    }
}
