<?php

namespace Mojtabaahn\LaravelWebLogs\Support;

class ReadLastLines
{
    # https://stackoverflow.com/a/34981383/5211299
    # https://stackoverflow.com/a/55634720/5211299
    public function __invoke($filename, $num, $reverse = false)
    {
        $file = new \SplFileObject($filename, 'r');
        $file->seek(PHP_INT_MAX);
        $last_line = $file->key();
        $lines = new \LimitIterator($file, max($last_line - $num, 0), $last_line);
        $arr = iterator_to_array($lines);
        if ($reverse) $arr = array_reverse($arr);
        return implode('', $arr);
    }
}
