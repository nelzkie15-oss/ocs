<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\tbl_room;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class TblRoomController extends Controller
{

    public function index(Request $request): Response
    {
        $rooms = tbl_room::where([
            ['room_number', '!=', Null],
            [function ($query) use ($request) {
                if (($s = request('search'))) {
                    $query->orWhere('room_number', 'LIKE', '%' . $s . '%')
                        ->get();
                }
            }]
        ])->paginate($request->perpage ?? 5);
        return Inertia::render('Rooms/Rooms', [
            'rooms' => $rooms,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // sleep(2);

        tbl_room::create($request->validate([
            'room_number' => ['required', 'max:50'],
          ]));

        return to_route('rooms')->with(['success' => 'Room Added successfully.']);
        // if ($room) {
        //     return to_route('rooms')->with('messag', 'Room Added');
        // }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

       tbl_room::findOrFail($id)

        ->update(['room_number'=>$request->room_number]);
         return to_route('rooms')->with(['success' => 'Room Updated successfully.']);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
            tbl_room::findOrFail($id)->delete();
            return to_route('rooms')->with(['success' => 'Room Updated successfully.']);

    }
}
