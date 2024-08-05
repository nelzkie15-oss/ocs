<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\tbl_room;
use App\Models\tbl_tenant;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function Dashboard(){

        $currentMonth = Carbon::now()->month; //current month

        $paidRecords = DB::table('tbl_tenants')
        ->whereMonth('updated_at', $currentMonth)
        ->where('payment_status', 'Paid')
        ->count();

        $unpaidRecords = DB::table('tbl_tenants')
         ->whereMonth('updated_at', $currentMonth)
         ->where('payment_status', 'UnPaid')
         ->count();

        $rooms = tbl_room::all()->count();
        $tenants = tbl_tenant::all()->count();
        return Inertia::render('Dashboard', [
            'rooms' => $rooms,
            'tenants' => $tenants,
            'paidRecords' => $paidRecords,
            'unpaidRecords' => $unpaidRecords
        ]);
    }

    public function data(){

        $data = DB::table('tbl_tenants')
                        ->select('tbl_rooms.room_number',
                        'tbl_rooms.id as rid',
                        'tbl_tenants.id',
                        'tbl_tenants.tenant_name',
                        'tbl_tenants.tenant_cnumber',
                        'tbl_tenants.tenant_email',
                        'tbl_tenants.room_id',
                        'tbl_tenants.start_date',
                        'tbl_tenants.updated_at',
                        'tbl_tenants.end_date',
                        'tbl_tenants.status',
                        'tbl_tenants.amount',
                        'tbl_tenants.payment_status',
                        DB::raw('count(tbl_tenants.payment_status) as count_data'),
                        // DB::raw('count(tbl_service_items.sub_service_id) as total_sub3')
                    )
        ->whereMonth('updated_at', $currentMonth)
        ->groupBy('payment_status')
        ->get();

        return Inertia::render('Chart', [
            'data' => $data
        ]);
        //return response()->json($data);
    }
}
