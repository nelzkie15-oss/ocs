<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class tbl_room extends Model
{
    use Searchable;
    use HasFactory;

    protected $fillable = [
        'room_number',
    ];

    public function tenants()
    {
        return $this->hasMany(tbl_tenant::class, 'room_id');
    }

    public function toSearchableArray(): array
    {
        return [
            'room_number' => $this->room_number,

        ];
    }

}
