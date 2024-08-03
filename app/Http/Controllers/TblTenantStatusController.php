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
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class TblTenantStatusController extends Controller
{
    public function index(Request $request): Response
    {
        $currentMonth = Carbon::now()->month; //current month

        $paidRecords = DB::table('tbl_tenants')
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
                     'tbl_tenants.updated_at',
                    )
        ->whereMonth('tbl_tenants.updated_at', $currentMonth)
        ->where('tbl_tenants.payment_status', 'Paid')
        ->get();

        return Inertia::render('Tenantstatus/Tenantstatus', [
            'paidRecords' => $paidRecords,
        ]);
    }

    public function index2(Request $request): Response
    {
        $currentMonth = Carbon::now()->month; //current month

        $unpaidpaidRecords = DB::table('tbl_tenants')
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
                     'tbl_tenants.updated_at',
                    )
        ->whereMonth('tbl_tenants.updated_at', $currentMonth)
        ->where('tbl_tenants.payment_status', 'UnPaid')
        ->get();

        return Inertia::render('Tenantstatus/Tenantstatus2', [
            'paidRecords' => $unpaidpaidRecords,
        ]);
    }

}
