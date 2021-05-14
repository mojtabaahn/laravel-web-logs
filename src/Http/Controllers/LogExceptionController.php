<?php


namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;


use Illuminate\Http\Request;
use Mojtabaahn\LaravelWebLogs\Exceptions\DebugException;

class LogExceptionController
{
    public function __invoke(Request $request)
    {
        report(new DebugException($request->input('message')));
    }
}
