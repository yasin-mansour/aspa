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

        $user = User::create(['name'=>'yasin','email'=>'yasin@mansour.com','password'=>'123456']);
        $role = Role::create(['name'=>'admin']);
        $user->role_id = $role->id;
        $user->save();
        $language1 = Language::create(['name'=>'en']);
        $language2 = Language::create(['name'=>'ar']);
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
