<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TblRoomController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TblTenantController;
use App\Http\Controllers\TblAccountController;
use App\Http\Controllers\TblSalesReportController;
use App\Http\Controllers\TblTenantStatusController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', 'login');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::controller(DashboardController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', 'Dashboard')->name('dashboard');
    Route::get('/chart-data', 'data')->name('chart');
});



Route::controller(TblRoomController::class)->middleware(['auth', 'web'])->group(function () {

    Route::get('/rooms', 'index')->name('rooms');
    Route::post('/addrooms', 'store')->name('add-rooms');
    Route::get('/getrooms', 'index')->name('data');
    Route::delete('/delete/rooms/{id}', 'destroy')->name('delete');
    Route::put('/update-room/{room}', 'update')->name('update-room');
});

Route::controller(TblTenantController::class)->middleware(['auth', 'web'])->group(function () {
    // Route::get('/search-salesreport', 'SearchReports')->name('searchSalesreport');
    Route::get('/tenants', 'index')->name('tenants');
    Route::post('/add-tenants', 'store')->name('tenants.store');
    Route::delete('/delete/tenants/{id}', 'destroy')->name('tenants.destroy');
    Route::put('/tenants/{tenant}', 'update')->name('tenants.update');
});


Route::controller(TblSalesReportController::class)->middleware(['auth', 'web'])->group(function () {
    Route::get('/salereports', 'index')->name('salereports');
});

Route::controller(TblAccountController::class)->middleware(['auth', 'web'])->group(function () {
    Route::get('/account', 'index')->name('account');
    Route::post('/addaccount', 'store')->name('add-account');
    Route::put('/update-account/{id}', 'update')->name('update-account');
    Route::delete('/delete/account/{id}', 'destroy')->name('account.destroy');
});

Route::controller(TblTenantStatusController::class)->middleware(['auth', 'web'])->group(function () {
    Route::get('/tenantstatus', 'index')->name('tenantstatus');
    Route::get('/tenantstatus2', 'index2')->name('tenantstatus2');
});


require __DIR__.'/auth.php';
