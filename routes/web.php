<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/about', [\App\Http\Controllers\AboutController::class, 'index']);
Route::get('/contact', [\App\Http\Controllers\ContactController::class, 'index'])->name('contact.index');
Route::get('/contact/{contact}', [\App\Http\Controllers\ContactController::class, 'show'])->name('contact.show');
Route::put('/contact/{contact}', [\App\Http\Controllers\ContactController::class, 'update'])->name('contact.update');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
