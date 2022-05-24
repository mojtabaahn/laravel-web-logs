<?php

namespace Mojtabaahn\LaravelWebLogs\Tests;

use DateTime;
use Carbon\Carbon;
use Mojtabaahn\LaravelWebLogs\Support\ReadLog;
use Mojtabaahn\LaravelWebLogs\Support\LogRecord;

class LogRecordTest extends TestCase
{
    public function test_read_log_service()
    {
        $records = (new ReadLog(__DIR__ . '/sample.log', 2))->handle();

        $this->assertCount(2, $records);

        $this->assertStringContainsString("Class 'Illuminate\Support\Facades\Input' not found", $records[0]->message);
        $this->assertEquals(181, $records[0]->start_line);
        $this->assertEquals(231, $records[0]->end_line);
        $this->assertEquals('sample.log', $records[0]->filename);
        $this->assertEquals('2021-01-04 12:19:25', Carbon::createFromTimestamp($records[0]->created_at)->toDateTimeString());
        $this->assertEquals('local', $records[0]->environment);
        $this->assertEquals('ERROR', $records[0]->level);
        $this->assertCount(48, $records[0]->trace);

        $this->assertStringContainsString("Call to undefined method App\Http\Controllers\Api\V2\SearchController::category@index", $records[1]->message);
        $this->assertEquals(145, $records[1]->start_line);
        $this->assertEquals(181, $records[1]->end_line);
        $this->assertEquals('sample.log', $records[1]->filename);
        $this->assertEquals('2021-01-04 11:46:59', Carbon::createFromTimestamp($records[1]->created_at)->toDateTimeString());
        $this->assertEquals('local', $records[1]->environment);
        $this->assertEquals('ERROR', $records[1]->level);
        $this->assertCount(34, $records[1]->trace);

        $records = (new ReadLog(__DIR__ . '/sample.log', 2, $records[1]->start_line - 1))->handle();

        $this->assertCount(2, $records);

        $this->assertStringContainsString("Call to undefined method App\Http\Controllers\Api\V2\SearchController::taxonomy@index", $records[0]->message);
        $this->assertEquals(109, $records[0]->start_line);
        $this->assertEquals(145, $records[0]->end_line);
        $this->assertEquals('sample.log', $records[0]->filename);
        $this->assertEquals('2021-01-04 11:46:58', Carbon::createFromTimestamp($records[0]->created_at)->toDateTimeString());
        $this->assertEquals('local', $records[0]->environment);
        $this->assertEquals('ERROR', $records[0]->level);
        $this->assertCount(34, $records[0]->trace);

        $this->assertStringContainsString("Call to undefined method App\Http\Controllers\Api\V2\SearchController::post@index", $records[1]->message);
        $this->assertEquals(73, $records[1]->start_line);
        $this->assertEquals(109, $records[1]->end_line);
        $this->assertEquals('sample.log', $records[1]->filename);
        $this->assertEquals('2021-01-04 11:46:14', Carbon::createFromTimestamp($records[1]->created_at)->toDateTimeString());
        $this->assertEquals('local', $records[1]->environment);
        $this->assertEquals('ERROR', $records[1]->level);
        $this->assertCount(34, $records[1]->trace);
    }

    public function test_creates_record_from_string()
    {
        $string = <<<END
        [2022-02-18 17:00:53] local.ERROR: The Mix manifest does not exist. {"view":{"view":"/home/momento/Passion/Self/laravel-web-logs/resources/views/show.blade.php","data":[]},"exception":"[object] (Spatie\\LaravelIgnition\\Exceptions\\ViewException(code: 0): The Mix manifest does not exist. at /home/momento/Passion/Self/laravel-web-logs-test-case/vendor/laravel/framework/src/Illuminate/Foundation/Mix.php:52)
        [stacktrace]
        #0 /home/momento/Passion/Self/laravel-web-logs-test-case/vendor/laravel/framework/src/Illuminate/Foundation/helpers.php(537): Illuminate\\Foundation\\Mix->__invoke()
        #1 /home/momento/Passion/Self/laravel-web-logs/src/Providers/../../resources/views/show.blade.php(1): mix()
        #2 /home/momento/Passion/Self/laravel-web-logs-test-case/venvironmentendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php(107): require('...')
        #3 /home/momento/Passion/Self/laravel-web-logs-test-case/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php(108): Illuminate\\Filesystem\\Filesystem::Illuminate\\Filesystem\\{closure}()
        #4 /home/momento/Passion/Self/laravel-web-logs-test-case/vendor/laravel/framework/src/Illuminate/View/Engines/PhpEngine.php(58): Illuminate\\Filesystem\\Filesystem->getRequire()
        END;

        $record = LogRecord::createFromText('sample.log', 0, explode("\n", $string));

        $this->assertEquals("sample.log", $record->filename);
        $this->assertEquals(0, $record->start_line);
        $this->assertEquals(7, $record->end_line);
        $this->assertEquals("2022-02-18 17:00:53", Carbon::createFromTimestamp($record->created_at)->toDateTimeString());
        $this->assertEquals('ERROR', $record->level);
        $this->assertEquals('local', $record->environment);
        $this->assertStringContainsString("The Mix manifest does not exist", $record->message);
        $this->assertCount(5, $record->trace);
    }

}