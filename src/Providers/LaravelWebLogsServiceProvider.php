<?php

namespace Mojtabaahn\LaravelWebLogs\Providers;

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Mojtabaahn\LaravelWebLogs\Http\Controllers\AssetController;
use Mojtabaahn\LaravelWebLogs\Http\Middlewares\Authorize;

class LaravelWebLogsServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/../../config/web-logs.php' => base_path('config/web-logs.php'),
        ], 'config');

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../../public' => base_path('public/vendor/web-logs'),
            ], 'web-logs-assets');
        }
    }

    public function register()
    {

        $this->mergeConfigFrom(__DIR__ . '/../../config/web-logs.php', 'web-logs');

        /** @var Router $router */
        $router = $this->app->router;

        $router->group(config('web-logs.route_group_attributes'), function () use (&$router) {
            return include __DIR__ . "/../../routes/api.php";
        });

        if (app() instanceof \Illuminate\Foundation\Application) {
            $router->get('web-logs/assets/{filename}', AssetController::class)->where('filename', '.*');
        } else {
            $router->get('web-logs/assets/{filename:.+}', AssetController::class);
        }

        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'web-logs');

        Gate::define('viewWebLogs', function ($user = null) {
            return true;
        });

    }
}
