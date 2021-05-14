<?php


namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Concerns\ValidatesAttributes;

class LogMessageController
{
    public function __invoke(Request $request)
    {
        # TODO Validate
        Log::log(
            $request->input('level') ?? 'debug',
            $request->input('message'),
            $request->input('context', [])
        );
    }
}
