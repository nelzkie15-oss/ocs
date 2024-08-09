<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Mail;
use App\Models\tbl_tenant;
use App\Mail\GmailNotification;
use DB;
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

        $userMail = tbl_tenant::select('tenant_email')->get();
        $emails = [];
        foreach ($userMail as $mail){
            $emails[] = $mail['tenant_email'];
        }
        Mail::send('emails.mail', [], function($message) use ($emails){
           $message->to($emails)->subject('I remind you to pay this Month');
        });

    }
}
