<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\tbl_room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\tbl_tenant;

class TblSalesReportController extends Controller
{
    public function index(Request $request): Response
    {

         $query = tbl_tenant::query()
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
                );

            if ($request->has('date_from') && $request->has('date_to')) {
                $query->whereBetween('start_date', [$request->date_from, $request->date_to]);
            }

            if ($request->has('payment_status')) {
                $query->where('payment_status', $request->payment_status);
            }

        $results = $query->get();

        return Inertia::render('Salesreports/Salesreport', [
            'results' => $results,
        ]);
    }
}
