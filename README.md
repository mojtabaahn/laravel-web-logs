![screen shot](https://github.com/mojtabaahn/laravel-web-logs/blob/main/splash.jpg?raw=true)

# View Laravel/Lumen logs in browser.

![Packagist License](https://img.shields.io/packagist/l/mojtabaahn/laravel-web-logs?style=for-the-badge)
![Packagist Version](https://img.shields.io/packagist/v/mojtabaahn/laravel-web-logs?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/mojtabaahn/laravel-web-logs?style=for-the-badge)
![Packagist Downloads](https://img.shields.io/packagist/dt/mojtabaahn/laravel-web-logs?style=for-the-badge)

## Live Preview
Visit [Here](https://web-logs.snowthen.ir/web-logs) to preview online playground.

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
    'enabled' => env('APP_DEBUG', true),
    'lines_per_page' => env('WEB_LOGS_LINES_PER_PAGE', 1000)
];
```

## Screen Shot
![screen shot](https://github.com/mojtabaahn/laravel-web-logs/blob/main/screenshot.jpg?raw=true)

## Future Plans
- [ ] Add option to auto-append new logs (like `tail -f`)
- [x] Lazy-load/Infinite-scroll for big files
- [x] Add guard for accessing routes


## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## Credits

- [Mojtabaa H.N.](https://github.com/mojtabaahn)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
