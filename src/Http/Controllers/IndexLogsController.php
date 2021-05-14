<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;

use Illuminate\Support\Facades\File;
use SplFileInfo;

class IndexLogsController
{
    public function __invoke()
    {
        return collect(File::files(base_path('storage/logs')))->map(fn(SplFileInfo $fileInfo) => [
            'name' => $fileInfo->getFilename(),
            'size' => $fileInfo->getSize(),
            'modified_at' => $fileInfo->getMTime(),
            'created_at' => $fileInfo->getCTime(),
        ])->toArray();
    }

}
