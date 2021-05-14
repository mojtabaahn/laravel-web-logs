<?php


namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AddLogController
{
    public function __invoke(Request $request)
    {
        // Log::debug($request->input('message'));
        Log::debug(json_encode([
            'message' => 'تست'
        ], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_LINE_TERMINATORS | JSON_UNESCAPED_UNICODE));
    }
}
