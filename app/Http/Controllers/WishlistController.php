<?php

namespace App\Http\Controllers;

use App\Wishlist;
use Illuminate\Http\Request;
use Validator;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Respond with All Wishlists
        $wishLists = Wishlist::all();
        return response()->json($wishLists);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'text' => 'required'
        ]);

        if ($validator->fails()) {
            $response = array('response' => $validator->messages(), 'success' => false);
            return $response;
        } else {
            // create item
            $item = new Wishlist;
            $item->text = $request->input('text');
            $item->data = $request->input('data');
            $item->user_id = $request->input('user_id');
            $item->save();
            return request()->json($item);
        }
    }

    public function create($user_id)
    {
        // create item
        $item = new Wishlist;
        $item->text = '';
        $item->data = '';
        $item->user_id = $user_id;
        $item->save();
        return request()->json($item);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Get WishList by ID
        $wishList = Wishlist::where('user_id', $id)->first();
        return response()->json($wishList);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), ['text' => 'required']);

        if ($validator->fails()) {
            $response = array('response' => $validator->messages(), 'success' => false);
            return $response;
        } else {
            // find item to update
            $wishList = Wishlist::where('user_id', $id)->first();
            $wishList->text = $request->input('text');
            $wishList->save();

            return response()->json($wishList);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Find an item
        $item = Wishlist::find($id);
        $item->delete();
        $response = array('response' => 'Wishlist removed.', 'success' => true);

        return $response;
    }

    /**
     * Get lists by user ID
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getWishlistsByUserId($id)
    {
        // Find an Breed by name
        $wishLists = Wishlist::where('user_id', $id)->get();
        return response()->json($wishLists);
    }
}
