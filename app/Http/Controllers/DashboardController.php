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
}
