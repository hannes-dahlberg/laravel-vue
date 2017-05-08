<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>DWIK</title>
        <link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css') }}" />
        <script src="{{ env('SOCKET_IO_URL') }}:6001/socket.io/socket.io.js"></script>
        <script src="/js/tinymce/tinymce.min.js"></script>
        <script src="https://use.typekit.net/dqf8ykv.js"></script>
        <script>try{Typekit.load({ async: true });}catch(e){}</script>
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
