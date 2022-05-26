<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;

use Illuminate\Http\Request;
use Mojtabaahn\LaravelWebLogs\Support\LogDiscovery;
use Mojtabaahn\LaravelWebLogs\Exceptions\DebugException;
use Mojtabaahn\LaravelWebLogs\Exceptions\LogNotFoundException;

class WebLogsController
{
    public function view()
    {
        return view('web-logs::show');
    }

    public function index(LogDiscovery $discovery)
    {
        return $discovery->index();
    }

    public function show(string $filename, Request $request, LogDiscovery $discovery)
    {
        $validated = $request->validate(['offset' => 'numeric']);

        try {
            return $discovery->read($filename, $validated['offset'] ?? null);
        } catch (LogNotFoundException $exception) {
            return response()->json(['message' => 'File not found'], 404);
        }
    }

}