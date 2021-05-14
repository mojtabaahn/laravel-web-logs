<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;

class ShowController
{
    public function __invoke()
    {
        return view('web-logs::show');
    }
}
