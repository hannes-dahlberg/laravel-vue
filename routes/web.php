<?php

//Catch all request except under the API prefix and render index view
Route::get('/', function() {
    return redirect('/home');
});

Route::any('/{catchall}', function($url) {
    return view('index');
})->where('catchall', '^((?!api).)*');

