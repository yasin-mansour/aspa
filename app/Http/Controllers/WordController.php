<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Word;

class WordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $words = Word::all();

        return $words->toArray();
    }

    public function updateWords(Request $request){
        $words = $request->input('data');
        $newWordsId = array();
        if(!empty($words)){
            foreach ($words as $word) {
                if(!array_key_exists('id', $word) || $word['id'] == 0){
                    $newWord = Word::create($word);
                    $newWord->languages()->sync($word['languages']);
                    $newWordsId[] = $newWord->id;
                }else{
                    $oldWord = Word::find($word['id']);
                    $oldWord->key = $word['key'];
                    $oldWord->save();
                    $oldWord->languages()->sync($word['languages']);
                }

            }
        }
        return $newWordsId;
    }

    public function deleteWords(Request $request){
        $words = $request->input('data');
        Word::destroy($words);
        return array();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
