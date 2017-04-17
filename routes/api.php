<?php

use Illuminate\Http\Request;

Route::group(['namespace' => 'API'], function() {
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('auth/user', ['name' => 'auth.user', 'uses' => 'AuthController@getUser']);
    });
    Route::post('auth', ['name' => 'auth', 'uses' => 'AuthController@Auth']);
});
