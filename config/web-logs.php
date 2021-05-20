<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Laravel Web Logs
    |--------------------------------------------------------------------------
    |
    | This is the URI path where Laravel Web Logs will be accessible from.
    | Feel free to change this path to anything you like.
    |
    | Note that the URI will not affect the paths of its internal API that
    | aren't exposed to users.
    |
    */
    'path' => 'web-logs',
    'enabled' => env('APP_DEBUG', true),
    'lines_per_page' => env('WEB_LOGS_LINES_PER_PAGE', 1000)
];
