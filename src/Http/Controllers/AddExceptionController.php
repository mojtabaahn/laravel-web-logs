<?php


namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;


use Exception;
use Illuminate\Http\Request;

class AddExceptionController
{
    public function __invoke(Request $request)
    {
        throw new Exception('Sample Log');
    }
}
