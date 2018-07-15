<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\ClassRoom;
use App\User;
use Carbon\Carbon;

class ClassRoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        return ClassRoom::find($id);
    }

    public function paginator(Request $request){
        $freeText = $request->get('free_text');
        $all = $request->get('all');

        if ($freeText && $all) {
            $allCourses = ClassRoom::where('name', 'LIKE', '%' . $freeText . '%')->paginate(15);
        } else if ($freeText && !$all) {
            $allCourses = ClassRoom::where('name', 'LIKE', '%' . $freeText . '%')
                ->whereDate('start_date', '>=', Carbon::today())->paginate(15);
        } else if (!$all) {
            $allCourses = ClassRoom::whereDate('start_date', '>=', Carbon::today())->paginate(15);
        } else {
            $allCourses = ClassRoom::paginate(15);
        }

        return $allCourses;
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
        //return $request;
        $class = ClassRoom::create([
            'name' => $request['name'],
            'start_date' => $request['start_date'],
            'end_date' => $request['end_date'],
            'date_exact' => $request['data_exact'] || false,
            'price' => $request['price']
        ]);
        $trainers = $request->input('trainers');

        foreach ($trainers as $trainer) {
            $user = User::find($trainer['id']);
            $user->ClassRoom()->attach($class, ['type' => true]);
        }

        return $class;
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
