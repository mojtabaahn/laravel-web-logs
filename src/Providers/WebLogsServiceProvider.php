<?php

namespace Mojtabaahn\LaravelWebLogs\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Lumen\Routing\Router;

class WebLogsServiceProvider extends ServiceProvider
{
    public function boot()
    {

    }

    public function register()
    {
        /** @var Router $router */
        $router = $this->app->router;

        $router->group(['prefix' => 'web-logs'], function () use (&$router) {
            return include __DIR__ . "/../../routes/api.php";
        });
    }
}
