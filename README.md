![Banner](https://github.com/mojtabaahn/laravel-web-logs/blob/main/banner.jpeg?raw=true)

# View Laravel/Lumen logs in browser.

![Packagist License](https://img.shields.io/packagist/l/mojtabaahn/laravel-web-logs?style=for-the-badge)
![Packagist Version](https://img.shields.io/packagist/v/mojtabaahn/laravel-web-logs?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/mojtabaahn/laravel-web-logs?style=for-the-badge)
![Packagist Downloads](https://img.shields.io/packagist/dt/mojtabaahn/laravel-web-logs?style=for-the-badge)

## Disclaimer
This package is simply a lightweight web interface for Laravel and Lumen file-based logs.
If you need an advanced debugging tool consider trying [Telescope](https://laravel.com/docs/8.x/telescope), [Debugbar](https://github.com/barryvdh/laravel-debugbar), [Clockwork](https://github.com/itsgoingd/clockwork) or [Ray](https://myray.app/)
And if you need an error tracking software consider trying [Sentry](https://sentry.io/) and [Bugsnag](https://www.bugsnag.com/).

## Screen Shot
![screen shot](https://raw.githubusercontent.com/mojtabaahn/laravel-web-logs/main/screenshot.png?raw=true)

## Installation

You can install the package via composer:

```bash
composer require mojtabaahn/laravel-web-logs
```

Now publish package assets using this command:

```bash
php artisan vendor:publish --tag="web-logs-assets"
```

Optionally, you can publish the config file of the package.
```bash
php artisan vendor:publish --provider="Mojtabaahn\LaravelWebLogs\Providers\LaravelWebLogsServiceProvider" --tag="config"
```

## Usage
Visit the `web-logs/` route use the package. You can change this in the config file.

## Configuration
This is the contents of the published config file:

```php
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

    'route_group_attributes' => [
        'prefix' => env('WEB_LOGS_PATH', 'web-logs'),
        'middleware' => [
            // 'web',
            Authorize::class,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Chunk Size
    |--------------------------------------------------------------------------
    |
    | On each request from dashboard to it's back-end how many logs should
    | it read of specified log file. Setting this option to a big number
    | may reduce dashboard performance!
    |
    */

    'chunk_size' => env('WEB_LOGS_CHUNK_SIZE', 10),

    /*
    |--------------------------------------------------------------------------
    | Search Path
    |--------------------------------------------------------------------------
    |
    | Use this property to customize logs directory where package should
    | look for log files.
    |
    */

    'search_path' => storage_path('logs'),
];
```

## Authorization

Web Logs is enabled by default for all users and guests. In case you want to authorize users before accessing it you must register a `viewWebLogs` ability. A good place to do this is in the `AuthServiceProvider` that ships with Laravel.

```php
public function boot()
{
    $this->registerPolicies();

    Gate::define('viewWebLogs', function ($user = null) {
        // return true if access to web logs is allowed
    });
}
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
