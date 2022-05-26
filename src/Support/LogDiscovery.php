<?php

namespace Mojtabaahn\LaravelWebLogs\Support;

use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Mojtabaahn\LaravelWebLogs\Exceptions\LogNotFoundException;

class LogDiscovery
{
    protected int $chunk_size;
    protected string $search_path;

    public function __construct(int $chunk_size, string $search_path)
    {
        $this->chunk_size = $chunk_size;
        $this->search_path = $search_path;
    }

    public function index(): array
    {
        return collect(File::files($this->path()))
            ->map(fn($file) => LogInfo::fromSplFileInfo($file))
            ->toArray();
    }

    public function logException(Exception $exception): void
    {
        report($exception);
    }

    public function logMessage(string $message, string $level = 'debug'): void
    {
        Log::log($level, $message);
    }

    /**
     * @return LogRecord[]
     * @throws LogNotFoundException
     */
    public function read(string $filename, ?int $offset = null): array
    {
        if (File::missing($this->path($filename))) {
            throw new LogNotFoundException();
        }

        return (new ReadLog($this->path($filename), $this->chunk_size, $offset))->handle();
    }

    public function path(string $filename = ''): string
    {
        return rtrim($this->search_path, '/') . '/' . $filename;
    }

}