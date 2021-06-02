![Banner](https://github.com/mojtabaahn/laravel-web-logs/blob/main/banner.jpeg?raw=true)

# View Laravel/Lumen logs in browser.

![Packagist License](https://img.shields.io/packagist/l/mojtabaahn/laravel-web-logs?style=for-the-badge)
![Packagist Version](https://img.shields.io/packagist/v/mojtabaahn/laravel-web-logs?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/mojtabaahn/laravel-web-logs?style=for-the-badge)
![Packagist Downloads](https://img.shields.io/packagist/dt/mojtabaahn/laravel-web-logs?style=for-the-badge)

## Disclaimer
This package is simply a lightweight web interface for Laravel and Lumen file-based logs.
If you need an advanced debugging tool consider trying [Telescope](https://laravel.com/docs/8.x/telescope), [Debugbar](https://github.com/barryvdh/laravel-debugbar), [Clockwork](https://github.com/itsgoingd/clockwork) or [Ray](https://myray.app/)
And if you need an error tracking software consider tring [Sentry](https://sentry.io/) and [Bugsnag](https://www.bugsnag.com/).

## Live Preview
Visit [Here](https://web-logs.snowthen.ir/web-logs) to preview online playground.

## Installation

You can install the package via composer:

```bash
composer require mojtabaahn/laravel-web-logs
```

And it's done.
You can optionally publish the config file with:

```bash
php artisan vendor:publish --provider="Mojtabaahn\LaravelWebLogs\Providers\LaravelWebLogsServiceProvider" --tag="config"
```

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

## Screen Shot
![screen shot](https://github.com/mojtabaahn/laravel-web-logs/blob/main/screenshot-light.png?raw=true)
![screen shot](https://github.com/mojtabaahn/laravel-web-logs/blob/main/screenshot-dark.png?raw=true)

## Future Plans
- [x] Add option to auto-append new logs (like `tail -f`)
- [x] Lazy-load/Infinite-scroll for big files
- [x] Add guard for accessing routes
- [x] Move stores to [Pinia](https://pinia.esm.dev/)
- [ ] Add tests
- [ ] Support nested logs (logs in subdirectories)
- [ ] Add [Day.js](https://day.js.org/) and time-zone support
- [ ] Add global search option using grep or other fast search methods

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Credits

- [Mojtabaa H.N.](https://github.com/mojtabaahn)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
