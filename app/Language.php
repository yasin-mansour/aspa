<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $fillable = ['name', 'direction'];

    public function worlds(){
        return $this->belongsToMany('App\Word');
    }
}
