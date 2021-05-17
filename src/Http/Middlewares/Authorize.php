<?php

namespace Mojtabaahn\LaravelWebLogs\Http\Middlewares;

use Illuminate\Support\Facades\Gate;

class Authorize
{
    public function handle($request, $next)
    {
        return $this->allowedToUseLogs()
            ? $next($request)
            : abort(403);
    }

    protected function allowedToUseLogs(): bool
    {
        if (! config('web-logs.enabled')) {
            return false;
        }

        return Gate::check('viewWebLogs');
    }
}
