<?php
/** @var \Laravel\Lumen\Routing\Router $router */

use Illuminate\Support\Facades\Log;

$router->get('/', \Mojtabaahn\LaravelWebLogs\Http\Controllers\IndexLogsController::class);
$router->get('debug',\Mojtabaahn\LaravelWebLogs\Http\Controllers\AddLogController::class);
$router->get('exception',\Mojtabaahn\LaravelWebLogs\Http\Controllers\AddExceptionController::class);
$router->get('/{filename}', \Mojtabaahn\LaravelWebLogs\Http\Controllers\ReadLogController::class);
