<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ContactController;

Route::get('/test', function () {
    return response()->json([
        'status' => true,
        'message' => 'Portfolio API Working'
    ]);
});


Route::apiResource('skills', SkillController::class);
Route::apiResource('projects', ProjectController::class);
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/admin/login', [AdminAuthController::class, 'login']);

Route::middleware(['auth:admin'])->group(function () {
    Route::apiResource('skills', SkillController::class);
    Route::apiResource('projects', ProjectController::class);
});
