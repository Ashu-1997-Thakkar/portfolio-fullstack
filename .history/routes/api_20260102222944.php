<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SkillController;
use App\Http\Controllers\Api\ProjectController;
Route::get('/test', function () {
    return response()->json([
        'status' => true,
        'message' => 'Portfolio API Working'
    ]);
});
