<?php

namespace App\Http\Controllers;

use App\Breed;
use Illuminate\Http\Request;
use Validator;

class BreedsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $breeds = Breed::all();
        return response()->json($breeds);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'text' => 'required'
        ]);

        if($validator->fails()) {
            $response = array('response' => $validator->messages(), 'success' => false);
            return $response;
        }else{
            // create item
            $item = new Breed;
            $item->text = $request->input('text');
            $item->save();
            return request()->json($item);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Breed::find($id);
        return response()->json($item);
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
        $validator = Validator::make($request->all(), ['text' => 'required']);

        if($validator->fails()) {
            $response = array('response' => $validator->messages(), 'success' => false);

            return $response;
        }else{
            // find item to update
            $item = Breed::find($id);
            $item->text = $request->input('text');
            $item->save();

            return response()->json($item);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Find an item
        $item = Breed::find($id);
        $item->delete();
        $response = array('response' => 'Item removed.', 'success' => true);

        return $response;
    }

    /**
     * Get a breed by name (returns similar results)
     * @param $term
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBreedByName($term)
    {
        // Find an Breed by name
        $matchedTerm = Breed::where('text', 'LIKE', '%' . $term . '%')->get();
        return response()->json($matchedTerm);
    }
}
