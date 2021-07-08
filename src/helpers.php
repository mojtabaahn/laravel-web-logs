<?php

if (!function_exists('web_logs_asset')) {
    function web_logs_asset($asset)
    {
        return url('web-logs/assets/' . $asset);
    }
}
