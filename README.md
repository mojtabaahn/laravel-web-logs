![screen shot](https://github.com/mojtabaahn/laravel-web-logs/blob/main/splash.jpg?raw=true)

# View Laravel/Lumen logs in browser.

![Packagist License](https://img.shields.io/packagist/l/mojtabaahn/laravel-web-logs?style=for-the-badge)
![Packagist Version](https://img.shields.io/packagist/v/mojtabaahn/laravel-web-logs?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/mojtabaahn/laravel-web-logs?style=for-the-badge)
![Packagist Downloads](https://img.shields.io/packagist/dt/mojtabaahn/laravel-web-logs?style=for-the-badge)

## Installation

You can install the package via composer:

```bash
composer require mojtabaahn/laravel-web-logs
```

publish the assets with:
```bash
php artisan vendor:publish --provider="Mojtabaahn\LaravelWebLogs\Providers\LaravelWebLogsServiceProvider" --tag="web-logs-assets"
```


You can optianally publish the config file with:
```bash
php artisan vendor:publish --provider="Mojtabaahn\LaravelWebLogs\Providers\LaravelWebLogsServiceProvider" --tag="config"
```

This is the contents of the published config file:

```php
return [
    'max_read_lines' => env('WEB_LOGS_MAX_READ_LINES', 10000)
];
```

## Screen Shot
![screen shot](https://github.com/mojtabaahn/laravel-web-logs/blob/main/screenshot.jpg?raw=true)


## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Credits

- [Mojtabaa H.N.](https://github.com/mojtabaahn)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
