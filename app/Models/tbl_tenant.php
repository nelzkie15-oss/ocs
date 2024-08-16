<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_tenant extends Model
{
    use HasFactory;

    protected $table = 'tbl_tenants';
    protected $fillable = [
        'tenant_name',
        'tenant_cnumber',
        'tenant_email',
        'room_id',
        'start_date',
        'end_date',
        'status',
        'amount',
        'payment_status',
        'month_name',
        'years'
    ];

    public function room()
    {
        return $this->belongsTo(tbl_room::class);
    }
}
