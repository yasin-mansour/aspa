<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

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
