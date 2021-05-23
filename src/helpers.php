<?php

if (!function_exists('web_logs_asset')) {
    function web_logs_asset($asset)
    {
        return url(config('web-logs.route_group_attributes.prefix') . '/assets/' . $asset);
    }
}
