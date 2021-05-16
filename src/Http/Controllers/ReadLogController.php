<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Mojtabaahn\LaravelWebLogs\Support\ReadLastLines;

class ReadLogController
{
    public function __invoke(string $filename, Request $request, ReadLastLines $readLines)
    {
        $offset = $request->exists('offset') ? (int)$request->input('offset') : null;
        $path = base_path('storage/logs/' . $filename);
        $length = config('web-logs.max_read_lines');

        if (File::missing($path)) {
            return response()->json(['message' => 'File not found'], 404);
        }

        $chunk = $readLines($path, $length, $offset);

        $contents = $chunk['lines'];
        $newOffset = $chunk['start'];

        $matches = preg_split("/\[([0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2})\]/s", $contents, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE);

        if (count($matches) && preg_match("/([0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2})/s", $matches[0]) === 0) {
            $newOffset = $newOffset + substr_count($matches[0], "\n");
            array_shift($matches);
        }
        $temp = null;
        $matches = collect($matches)->reduce(function ($carry, $item) use (&$temp) {
            if ($temp === null) {
                $temp = $item;
            } else {
                $match = preg_match("/([a-zA-Z0-9]+)\.([a-zA-Z0-9]+)\:\s(.*)/s", $item, $matches);
                $body = explode("[stacktrace]\n", $matches[3]);
                $carry[] = [
                    'env' => $matches[1],
                    'level' => $matches[2],
                    'time' => $temp,
                    'content' => trim($body[0]),
                    'trace' => $body[1] ?? ''
                ];
                $temp = null;
            }
            return $carry;
        }, []);

        return [
            'data' => $matches,
            'new_offset' => $newOffset,
            'offset' => $offset,
            'length' => $length,
            'start' => $chunk['start'],
            'end' => $chunk['end'],
        ];
    }

}
