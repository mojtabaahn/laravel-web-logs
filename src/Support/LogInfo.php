<?php

namespace Mojtabaahn\LaravelWebLogs\Support;

use SplFileInfo;
use Illuminate\Contracts\Support\Arrayable;

class LogInfo implements Arrayable
{
    public string $name;
    public int $size;
    public int $modifiedAt;

    public function __construct(string $name, int $size, int $modifiedAt)
    {
        $this->name = $name;
        $this->size = $size;
        $this->modifiedAt = $modifiedAt;
    }

    public static function fromSplFileInfo(SplFileInfo $file): self
    {
        return new self(
            $file->getFilename(),
            $file->getSize(),
            $file->getMTime()
        );
    }

    public function toArray()
    {
        return (array) $this;
    }

}