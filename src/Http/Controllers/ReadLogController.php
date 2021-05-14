<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\File;

class ReadLogController
{
    public function __invoke(string $filename)
    {
        try {
            $contents = File::get(base_path('storage/logs/' . $filename));
            $matches = preg_split("/\[([0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2})\]/s", $contents, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);
            $temp = null;
            $matches = collect($matches)->reduce(function ($carry, $item) use (&$temp) {
                if ($temp === null) {
                    $temp = $item;
                } else {
                    preg_match("/([a-zA-Z0-9]+\.[a-zA-Z0-9]+)\:\s(.*)/s", $item, $matches);
                    $body = explode("[stacktrace]\n", $matches[2]);
                    $carry[] = [
                        'level' => $matches[1],
                        'time' => $temp,
                        'content' => trim($body[0]),
                        'trace' => $body[1] ?? ''
                    ];
                    $temp = null;
                }
                return $carry;
            }, []);
            return $matches;
        } catch (FileNotFoundException) {
            return response()->json(['message' => 'File not found'], 404);
        }
    }

}
