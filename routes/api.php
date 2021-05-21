<?php
/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', \Mojtabaahn\LaravelWebLogs\Http\Controllers\ShowController::class);
$router->get('index', \Mojtabaahn\LaravelWebLogs\Http\Controllers\IndexLogsController::class);
$router->post('/log-message',\Mojtabaahn\LaravelWebLogs\Http\Controllers\LogMessageController::class);
$router->post('/log-exception',\Mojtabaahn\LaravelWebLogs\Http\Controllers\LogExceptionController::class);
$router->get('{filename}/after', \Mojtabaahn\LaravelWebLogs\Http\Controllers\ReadLogController::class);
$router->get('/{filename}', \Mojtabaahn\LaravelWebLogs\Http\Controllers\ReadLogController::class);
