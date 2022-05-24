<?php

namespace Mojtabaahn\LaravelWebLogs\Support;

use SplFileObject;

class ReadLog
{
    protected string $file;
    protected SplFileObject $file_object;
    protected int $offset;
    protected int $chunk_size;

    public function __construct(string $file, int $chunk_size, ?int $offset = null)
    {
        $this->file = $file;
        $this->chunk_size = $chunk_size;
        $this->file_object = new SplFileObject($this->file, 'r');
        $this->offset = $offset ?? $this->totalLines();
    }

    /**
     * @return LogRecord[]
     */
    public function handle(): array
    {
        $records = [];
        $offset = $this->offset;
        $working_lines = [];

        while (true) {
            if ($offset < 1) {
                break;
            }

            $line = $this->readLine($offset);

            // print('working on offset ' . $offset . " " . $line . "\n");

            $working_lines[] = $line;

            if (count($working_lines) > 1 and $this->startsWithDateTime($line)) {
                $records[] = $this->castToRecord($offset, $working_lines);
                $working_lines = [];
            }

            $offset--;

            if (count($records) >= $this->chunk_size) {
                break;
            }
        }

        return $records;
    }

    protected function readLine(int $offset): string
    {
        // https://stackoverflow.com/a/35638489/5211299
        $this->file_object->seek($offset - 1);
        return $this->file_object->current();
    }

    protected function startsWithDateTime(string $line): bool
    {
        return preg_match("/\[\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}]/", $line) === 1;
    }

    protected function castToRecord(int $offset, array $working_lines): LogRecord
    {
        return LogRecord::createFromText(
            $this->file_object->getFilename(),
            $offset,
            array_reverse($working_lines)
        );
    }

    protected function totalLines(): ?int
    {
        $this->file_object->seek(PHP_INT_MAX);
        return $this->file_object->key();
    }

}