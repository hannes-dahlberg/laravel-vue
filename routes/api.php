<?php

use Illuminate\Http\Request;

Route::group(['namespace' => 'API', 'middleware' => 'auth_check'], function() {
    Route::group(['middleware' => 'auth:api'], function() {
        Route::resource('text', TextController::class, ['only' => ['update']]);
        Route::get('auth/user', ['name' => 'auth.user', 'uses' => 'AuthController@getUser']);
        Route::post('event/private', ['name' => 'event.pirate', 'uses' => 'EventController@privateEvent']);
    });
    Route::group(['prefix' => 'auth'], function() {
        Route::post('/', ['name' => 'auth', 'uses' => 'AuthController@Auth']);

        Route::group(['prefix' => '{driver}', 'middleware' => 'social.driver'], function() {
            Route::get('/', 'AuthController@social');
            Route::get('callback', 'AuthController@socialCallback');
        });
    });
    Route::post('event/public', ['name' => 'event.public', 'uses' => 'EventController@publicEvent']);
    Route::resource('text', TextController::class, ['only' => ['index', 'show']]);
});
