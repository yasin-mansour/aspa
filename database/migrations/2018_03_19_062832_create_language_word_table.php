<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\User;
use App\Role;
use App\Language;
use App\Word;

class CreateLanguageWordTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('language_word', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('language_id')->unsigned()->nullable()->index();
            $table->integer('word_id')->unsigned()->nullable()->index();
            $table->string('translation');
            $table->timestamps();
        });

        $role = Role::create(['name'=>'user']);
        $role = Role::create(['name'=>'admin']);
        $language1 = Language::create(['name'=>'en', 'direction'=> 1]);
        $language2 = Language::create(['name'=>'ar', 'direction'=> 0]);
        $word1 = Word::create(['key'=>'page']);
        $word2 = Word::create(['key'=>'title']);
        $word1->languages()->attach($language1, ['translation' => 'page']);
        $word1->languages()->attach($language2, ['translation' => 'page']);
        $word2->languages()->attach($language1, ['translation' => 'title']);
        $word2->languages()->attach($language2, ['translation' => 'title']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('language_word');
    }
}
