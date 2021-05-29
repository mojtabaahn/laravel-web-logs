<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class AssetController
{
    public function __invoke(string $filename)
    {
        $path = __DIR__ . '/../../../public/' . $filename;


        if (File::missing($path)) {
            return new JsonResponse(['message' => 'asset not found'], 404);
        }

        $contentType = $this->getMime($filename);

        return new Response(File::get($path), 200, ['Content-Type' => $contentType]);
    }

    /**
     * @param string $filename
     * @return string
     */
    protected function getMime(string $filename): string
    {
        if (Str::endsWith($filename, '.js')) {
            return 'application/javascript';
        }
        if (Str::endsWith($filename, '.css')) {
            return 'text/css';
        }
        if (Str::endsWith($filename, '.svg')) {
            return 'image/svg+xml';
        }

        return 'text/plain';
    }

}
