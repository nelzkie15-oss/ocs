<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\tbl_room;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class TblAccountController extends Controller
{
    public function index(Request $request): Response
    {
        $account = User::latest()->paginate();
        return Inertia::render('Account/Account', [
            'accounts' => $account,
        ]);
    }

    public function store(Request $request)
    {
        // sleep(2);
          Validator::make($request->all(), [
            'uname' => 'required',
            'email' => 'required',
            'password' => 'required',
            'status' => '',

        ]);

          $user = new User;
          $user->uname = $request->uname;
          $user->email = $request->email;
          $user->password = Hash::make($request->password);
          $user->status = 'active';
          $user->save();

        return to_route('account')->with(['success' => 'Account Added successfully.']);
    }


    public function update(Request $request)
        {
            User::findOrFail($request->id)
            ->update([
                'uname'=>$request->uname,
                'email'=>$request->email,
                'status'=>$request->status
          ]);
          return to_route('account')->with(['success' => 'Account updated successfully.']);

        }

     public function destroy($id)
        {
            User::findOrFail($id)->delete();
            return to_route('account')->with(['success' => 'Account deleted successfully.']);
        }




 }



