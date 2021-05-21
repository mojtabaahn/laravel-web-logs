<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Dashboard Enabled
    |--------------------------------------------------------------------------
    |
    | Here you may specify either dashboard is enabled or not
    |
    */

    'enabled' => env('WEB_LOGS_ENABLED', true),

    /*
    |--------------------------------------------------------------------------
    | Dashboard Path
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

    /*
    |--------------------------------------------------------------------------
    | Lines Per Page
    |--------------------------------------------------------------------------
    |
    | On each request from dashboard to it's back-end how many lines should
    | it read of specified log file. Setting this option to a big number
    | may reduce dashboard performance!
    |
    */

    'lines_per_page' => env('WEB_LOGS_LINES_PER_PAGE', 1000)
];
