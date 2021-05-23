<?php

use Mojtabaahn\LaravelWebLogs\Http\Middlewares\Authorize;

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
    | Route Group Attributes
    |--------------------------------------------------------------------------
    |
    | This is the array configuring package route attributes. feel free
    | to edit route prefixes, middlewares and anything else.
    |
    | In case you want to add authorization using default auth driver,
    | uncomment web middleware.
    |
    */

    'path' => 'logs',

    'route_group_attributes' => [
        'prefix' => env('WEB_LOGS_PATH', 'web-logs'),
        'middleware' => [
            // 'web',
            Authorize::class,
        ],
    ],

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

    'lines_per_page' => env('WEB_LOGS_LINES_PER_PAGE', 1000),
];
