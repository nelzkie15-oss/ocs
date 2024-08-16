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
                    )
        ->whereMonth('tbl_tenants.updated_at', $currentMonth)
        ->groupBy('tbl_tenants.payment_status')
        ->get();

        return Inertia::render('Chart', [
            'data' => $data
        ]);
    }
}
