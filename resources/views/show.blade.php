<!doctype html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="icon" href="/web-logs/assets/favicon-32x32.png">
    <title>Laravel Web Logs</title>
    <script>
        window.BASE_API_URL = '{{url(config('web-logs.route_group_attributes.prefix'))}}/api'
    </script>
    <link rel="stylesheet" href="{{asset(mix('css/app.css','vendor/web-logs'))}}">
</head>
<body>
<noscript><strong>We're sorry but app doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
<div id="app"></div>
<script src="{{asset(mix('js/app.js','vendor/web-logs'))}}"></script>
</body>
</html>
