<?php

namespace Mojtabaahn\LaravelWebLogs\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Lumen\Routing\Router;

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

        $router->group(['prefix' => 'web-logs'], function () use (&$router) {
            return include __DIR__ . "/../../routes/api.php";
        });

        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'web-logs');
    }
}
