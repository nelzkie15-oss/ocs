<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\tbl_room;
use App\Models\tbl_tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class TblTenantController extends Controller
{
    public function index(Request $request): Response
    {
        $rooms = tbl_room::all();
        $tenants = DB::table('tbl_tenants')
           ->leftjoin('tbl_rooms', 'tbl_rooms.id', '=', 'tbl_tenants.room_id')
            ->select('tbl_rooms.room_number',
                     'tbl_rooms.id as rid',
                     'tbl_tenants.id',
                     'tbl_tenants.tenant_name',
                     'tbl_tenants.tenant_cnumber',
                     'tbl_tenants.tenant_email',
                     'tbl_tenants.room_id',
                     'tbl_tenants.start_date',
                     'tbl_tenants.end_date',
                     'tbl_tenants.status',
                     'tbl_tenants.amount',
                     'tbl_tenants.payment_status',
                    )
            ->where([
                ['tenant_name', '!=', Null],
                [function ($query) use ($request) {
                    if (($s = request('search'))) {
                        $query->orWhere('tenant_name', 'LIKE', '%' . $s . '%')
                            ->get();
                    }
                }]
             ])->paginate($request->perpage ?? 5);

        return Inertia::render('Tenants/Tenants', [
            'rooms' => $rooms,
            'tenants' => $tenants
            // 'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            // 'status' => session('status'),
        ]);
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'tenant_name' => 'required',
            'tenant_cnumber' => 'required',
            'tenant_email' => 'required',
            'room_id' => '',
            'start_date' => '',
            'status' => '',
            'payment_status' => ''
        ]);

          $tenants = new tbl_tenant;
          $tenants->tenant_name = $request->tenant_name;
          $tenants->tenant_cnumber = $request->tenant_cnumber;
          $tenants->tenant_email = $request->tenant_email;
          $tenants->room_id = $request->room_id;
          $tenants->start_date = $request->start_date;
          $tenants->end_date = null;
          $tenants->status = 'active';
          $tenants->payment_status = 'UnPaid';
          $tenants->save();

        return to_route('tenants')->with(['success' => 'Tenant Added successfully.']);

    }

    public function destroy($id)
    {
        tbl_tenant::findOrFail($id)->delete();
        return to_route('tenants')->with(['success' => 'Tenant deleted successfully.']);
    }

    public function update(Request $request, tbl_tenant $tenant)
    {
        // $validatedData = $request->validate([
        //     'tenant_name' => 'required|string|max:255',
        //     'tenant_cnumber' => 'required|string|max:255',
        //     'tenant_email' => 'required|email|max:255',
        //     // 'room_id' => 'nullable|exists:rooms,id',
        //     'start_date' => 'required|date',
        //     'end_date' => 'nullable|date',
        //     'status' => 'required|string|in:active,inactive',
        //     'amount' => 'required',
        //     'payment_status' => 'required',
        // ]);
        // $tenant->update($validatedData);

        date_default_timezone_set("asia/manila");
        $month = date('F');
        $year = date('Y');
        $data = [
            'tenant_name' => $request->tenant_name,
            'tenant_cnumber'=> $request->tenant_cnumber,
            'tenant_email' =>  $request->tenant_email,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'status' => $request->status,
            'amount' => $request->amount,
            'payment_status' => $request->payment_status,
            'month_name'=>$month,
            'years'=>$year,
         ];
        $tenant->update($data);

        return to_route('tenants')->with(['success' => 'Tenant updated successfully.']);

    }
}
