<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    protected $fillable = ['name', 'direction'];

    public function words(){
        return $this->belongsToMany('App\Word');
    }
}
