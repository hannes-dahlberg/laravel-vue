<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel-Vue</title>
        <link rel="stylesheet" type="text/css" href="/css/app.css" />
        <script src="/js/tinymce/tinymce.min.js"></script>
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
