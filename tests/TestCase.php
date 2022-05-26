<?php

namespace Mojtabaahn\LaravelWebLogs\Tests;

use Illuminate\Support\Facades\File;
use Mojtabaahn\LaravelWebLogs\WebLogsProvider;
use Mojtabaahn\LaravelWebLogs\Support\LogDiscovery;

abstract class TestCase extends \Orchestra\Testbench\TestCase
{
    protected function discovery(): LogDiscovery
    {
        return $this->app->make(LogDiscovery::class);
    }

    protected function log_path(): string
    {
        return $this->discovery()->path('laravel.log');
    }

    protected function log_contents(): string
    {
        return File::get($this->log_path());
    }

    protected function getPackageProviders($app)
    {
        return [WebLogsProvider::class];
    }

}