<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassRoom extends Model
{
    protected $fillable = [
        'name', 'start_date', 'end_date', 'date_exact', 'price', 'unit'
    ];

    protected $appends = ['trainers'];

    public function users()
    {
        return $this->belongsToMany('App\user')->withPivot('type');
    }

    public function course()
    {
        return $this->belongsTo('App\Course');
    }

    public function getTrainersAttribute()
    {
        $users = $this->users()->select(['user_id','first_name','last_name'])->Where('type','=',true)->get();

        return $users;
    }
}
