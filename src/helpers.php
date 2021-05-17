<?php

// This function exists because we're using vue-cli,
// yet lumen doesn't have Laravel Mix included
if (!function_exists('web_logs_asset')) {
    function web_logs_asset($asset)
    {
        $versions = collect(json_decode(file_get_contents(__DIR__ . "/../public/manifest.json"), true))
            ->map(function ($item) {
                return \Illuminate\Support\Str::afterLast($item, '/');
            })->toArray();
        return $versions[$asset] ?? $asset;
    }
}
