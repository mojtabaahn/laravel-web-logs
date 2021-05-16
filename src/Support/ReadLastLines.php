<?php

namespace Mojtabaahn\LaravelWebLogs\Support;

use LimitIterator;
use OutOfBoundsException;
use SplFileObject;

class ReadLastLines
{
    # https://stackoverflow.com/a/34981383/5211299
    # https://stackoverflow.com/a/55634720/5211299
    public function __invoke($filename, $length, $offset = null)
    {
        $file = new SplFileObject($filename, 'r');

        if ($offset === null) {
            $file->seek(PHP_INT_MAX);
            $end = $file->key();
        } else {
            $end = $offset;
        }
        $start = max($end - $length, 0);

        try {
            $lines = new LimitIterator($file, $start, $length);
            $arr = iterator_to_array($lines);
        } catch (OutOfBoundsException) {
            $arr = [];
        }

        // if ($reverse) $arr = array_reverse($arr);
        return [
            'lines' => implode('', $arr),
            'start' => $start,
            'end' => $end
        ];
    }
}
