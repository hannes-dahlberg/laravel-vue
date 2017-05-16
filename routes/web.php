<?php

//Catch all request except under the API prefix and render index view
Route::any('{catchall}', function() {
    return view('index');
})->where('catchall', '(?:(?!api).)*');

