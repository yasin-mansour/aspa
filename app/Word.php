<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\language;

class Word extends Model
{
    protected $fillable = ['key'];
    protected $appends = ['languages'];
    //protected $visible = ['languages','key','id'];

    public function languages(){
        return $this->belongsToMany('App\Language')->withPivot(['translation']);
    }

   public function getLanguagesAttribute()
    {
        $languages = $this->languages()->select('name')->get();
       $a = Array();
        foreach ($languages as $language) {
            $a[$language->pivot->language_id] = $language->pivot;
        }
        return $a;
    }
}
