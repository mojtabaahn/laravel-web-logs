<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;

use Illuminate\Support\Facades\File;
use SplFileInfo;

class IndexLogsController
{
    public function __invoke()
    {
        return collect(File::files(base_path('storage/logs')))->map(function (SplFileInfo $fileInfo) {
            return [
                'name' => $fileInfo->getFilename(),
                'size' => $fileInfo->getSize(),
                'modified_at' => $fileInfo->getMTime()
            ];
        })->toArray();
    }

}
