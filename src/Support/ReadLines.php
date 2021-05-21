<?php

namespace Mojtabaahn\LaravelWebLogs\Support;

use Exception;
use LimitIterator;
use OutOfBoundsException;
use SplFileObject;

# https://stackoverflow.com/a/34981383/5211299 & https://stackoverflow.com/a/55634720/5211299
class ReadLines
{
    protected string $filename;
    protected int $length;
    protected ?int $offset;
    protected ?bool $backward;

    protected ?int $totalLines;
    protected ?SplFileObject $file;
    protected ?int $start;
    protected ?int $end;

    public function __construct(string $filename, int $length, ?int $offset = null, ?bool $backward = true)
    {
        $this->filename = $filename;
        $this->length = $length;
        $this->offset = $offset;
        $this->backward = $backward;

        $this->file = new SplFileObject($this->filename, 'r');
        $this->file->seek(PHP_INT_MAX);
        $this->totalLines = $this->file->key();
        $this->setBoundaries();
    }

    public function handle()
    {
        return [
            'start' => $this->start,
            'end' => $this->end,
            'length' => $this->length,
            'offset' => $this->offset,
            'backward' => $this->backward,
            'lines' => implode("\n", $this->read())
        ];
    }

    protected function read()
    {

        if ($this->start === $this->end) {
            return [];
        }

        try {
            $lines = new LimitIterator($this->file, $this->start, $this->length);
            return iterator_to_array($lines);
        } catch (OutOfBoundsException $exception) {
            return [];
        }
    }

    protected function setBoundaries()
    {
        if ($this->offset === null && $this->backward) {
            $this->end = $this->totalLines;
            $this->start = max($this->end - $this->length, 0);
            return;
        }

        if ($this->offset !== null && $this->backward) {
            $this->end = $this->offset;
            $this->start = max($this->end - $this->length, 0);
            return;
        }

        if ($this->offset === null && !$this->backward) {
            throw new Exception("Can't read lines without offset in forward mode");
        }

        if ($this->offset !== null && !$this->backward) {
            $this->start = $this->offset;
            $this->end = min($this->start + $this->length, $this->totalLines);
            return;
        }

    }
}
