<!doctype html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="icon" href="/vendor/web-logs/favicon.ico">
    <title>Laravel Web Logs</title>
    <script>
        window.backend_base_url = '{{url(config('web-logs.route_group_attributes.prefix'))}}'
    </script>
    <script defer="defer" src="{{web_logs_asset('js/chunk-vendors.js')}}" type="module"></script>
    <script defer="defer" src="{{web_logs_asset('js/app.js')}}" type="module"></script>
    <link href="{{web_logs_asset('css/chunk-vendors.css')}}" rel="stylesheet">
    <link href="{{web_logs_asset('css/app.css')}}" rel="stylesheet">
    <script defer="defer" src="{{web_logs_asset('js/chunk-vendors-legacy.js')}}" nomodule></script>
    <script defer="defer" src="{{web_logs_asset('js/app-legacy.js')}}" nomodule></script>
</head>
<body>
<noscript><strong>We're sorry but app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
<div id="app"></div>
</body>
</html>
