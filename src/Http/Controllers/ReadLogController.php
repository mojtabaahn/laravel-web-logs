<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Mojtabaahn\LaravelWebLogs\Support\ReadLines;
use Mojtabaahn\LaravelWebLogs\Support\TokenizeLines;

class ReadLogController
{
    public function __invoke(string $filename, Request $request)
    {
        $offset = $request->exists('offset') ? (int)$request->input('offset') : null;
        $backward = $request->boolean('backward', true);
        $path = base_path('storage/logs/' . $filename);
        $length = config('web-logs.lines_per_page');

        if (File::missing($path)) {
            return response()->json(['message' => 'File not found'], 404);
        }

        $chunk = (new ReadLines($path, $length, $offset, $backward))->handle();

        return (new TokenizeLines)($chunk);
    }

}
