<?php

namespace App\Console\Commands;

use DB;
use Mail;
use App\Models\tbl_tenant;
use Carbon\Carbon;
use App\Mail\GmailNotification;
use Illuminate\Console\Command;

class ScheduleDate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'message:monthly';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'I remind you that you have to pay your rent this month';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        date_default_timezone_set("asia/manila");
        //$currentMonth = Carbon::now()->toDateString();
        $currentMonth = Carbon::now()->month;
        $userMail = tbl_tenant::select('tenant_email')->whereMonth('start_date', '>=', $currentMonth)->get();
        $emails = [];
        foreach ($userMail as $mail){
            $emails[] = $mail['tenant_email'];
        }
        Mail::send('emails.mail', [], function($message) use ($emails){
           $message->to($emails)->subject('Monthly Rental');
        });

    }
}
