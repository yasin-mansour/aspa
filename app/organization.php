<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class organization extends Model
{
    //
    protected $fillable = [
        'name', 'type', 'position', 'address', 'phone', 'fax'
    ];

    public function user(){
        return $this->hasMany('App\User');
    }
}
