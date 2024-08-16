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
        date_default_timezone_set("asia/manila");
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


        // bar chart sales monthly/anual
        date_default_timezone_set("asia/manila");
        $currentYear = date('Y');
        $salesByMonth = DB::table('tbl_tenants')
        ->select(
            'month_name',
            DB::raw('SUM(amount) as total_sales')
        )
        ->where('payment_status', 'Paid')
        ->groupBy('month_name')
        ->get();

        $data = [
            'labels' => [],
            'data' => []
        ];

        foreach ($salesByMonth as $sales) {
            $data['labels'][] = $sales->month_name;
            $data['data'][] = $sales->total_sales;
        }

        //end bar chart sales monthly/anual
        return Inertia::render('Dashboard', [
            'rooms' => $rooms,
            'tenants' => $tenants,
            'paidRecords' => $paidRecords,
            'unpaidRecords' => $unpaidRecords,
            'salesData' => $data,
        ]);
    }


}
