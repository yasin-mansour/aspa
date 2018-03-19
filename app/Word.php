<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    protected $fillable = ['key'];

    public function languages(){
        return $this->belongsToMany('App\Language');
    }
}
