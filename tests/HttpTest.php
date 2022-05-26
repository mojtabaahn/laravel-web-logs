<?php

namespace Mojtabaahn\LaravelWebLogs\Tests;


use Illuminate\Support\Facades\Log;

class HttpTest extends TestCase
{
    public function test_index_logs()
    {
        Log::info('hi');
        $response = $this->get('/web-logs/api/file');
        $response->assertOk();
        $response->assertJsonFragment(['name' => 'laravel.log']);
    }

    public function test_read_log()
    {
        config(['web-logs.search_path' => __DIR__]);
        $response = $this->get('/web-logs/api/file/sample.log');
        $response->assertOk();
    }
}
