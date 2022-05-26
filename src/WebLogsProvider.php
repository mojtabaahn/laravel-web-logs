<?php

namespace Mojtabaahn\LaravelWebLogs;

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Mojtabaahn\LaravelWebLogs\Support\LogDiscovery;
use Mojtabaahn\LaravelWebLogs\Http\Controllers\ShowController;
use Mojtabaahn\LaravelWebLogs\Http\Controllers\AssetController;
use Mojtabaahn\LaravelWebLogs\Http\Middlewares\Authorize;
use Mojtabaahn\LaravelWebLogs\Http\Controllers\ReadLogController;
use Mojtabaahn\LaravelWebLogs\Http\Controllers\WebLogsController;
use Mojtabaahn\LaravelWebLogs\Http\Controllers\IndexLogsController;
use Mojtabaahn\LaravelWebLogs\Http\Controllers\LogMessageController;
use Mojtabaahn\LaravelWebLogs\Http\Controllers\LogExceptionController;

class WebLogsProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/web-logs.php' => base_path('config/web-logs.php'),
            ], 'config');

            $this->publishes([
                __DIR__ . '/../resources/views' => base_path('resources/views/vendor/web-logs'),
            ], 'views');

            $this->publishes([
                __DIR__ . '/../public' => base_path('public/vendor/web-logs'),
            ], 'web-logs-assets');
        }

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'web-logs');

        /** @var Router $router */
        $router = $this->app->router;

        $router->group(config('web-logs.route_group_attributes'), function () use (&$router) {
            $router->get('/', [WebLogsController::class, 'view']);
            $router->get('api/file', [WebLogsController::class, 'index']);
            $router->get('api/file/{filename}', [WebLogsController::class, 'show']);
        });
    }

    public function register()
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/web-logs.php', 'web-logs');

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'web-logs');

        Gate::define('viewWebLogs', function ($user = null) {
            return true;
        });


        $this->app->bind(LogDiscovery::class, fn() => new LogDiscovery(
            config('web-logs.chunk_size'),
            config('web-logs.search_path')
        ));
    }
}
