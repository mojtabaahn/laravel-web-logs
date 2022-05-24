<?php

namespace Mojtabaahn\LaravelWebLogs\Support;

use Exception;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Contracts\Support\Arrayable;

class LogRecord implements Arrayable
{
    public string $filename;
    public int $start_line;
    public int $end_line;
    public int $created_at;
    public string $level;
    public string $environment;
    public string $message;
    public array $trace;

    public function __construct(
        string $filename,
        int $start_line,
        int $end_line,
        Carbon $created_at,
        string $level,
        string $environment,
        string $message,
        array $trace
    ) {
        $this->filename = $filename;
        $this->start_line = $start_line;
        $this->end_line = $end_line;
        $this->created_at = $created_at->timestamp;
        $this->level = $level;
        $this->environment = $environment;
        $this->message = $message;
        $this->trace = $trace;
    }

    public static function createFromText(string $file_name, int $start_line, array $lines): self
    {
        $text = implode("\n", $lines);
        $trace = Str::after($text, '[stacktrace]');
        $text = Str::before($text, '[stacktrace]');

        $result = preg_match("/^\s*\[(?<created_at>\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2})]\s+(?<environment>\w+)\.(?<level>\w+):\s(?<message>.*)$/ms", $text, $matches);

        if ($result !== 1) {
            throw new Exception('Pattern mismatch: ' . $file_name . '#' . $start_line . '-' . ($start_line + count($lines)));
        }

        return new self(
            $file_name,
            $start_line,
            $start_line + count($lines),
            Carbon::make($matches['created_at']),
            $matches['level'],
            $matches['environment'],
            $matches['message'],
            array_filter(explode("\n", $trace))
        );
    }


    public function toArray()
    {
        return (array) $this;
    }
}