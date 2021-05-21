<?php


namespace Mojtabaahn\LaravelWebLogs\Support;


class TokenizeLines
{
    public function __invoke(array $chunk)
    {
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

        return array_merge($chunk, [
            'new_offset' => $newOffset,
            'data' => $matches
        ]);
    }

}
