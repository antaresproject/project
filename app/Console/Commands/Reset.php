<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\Artisan;
use Symfony\Component\Process\Process;
use Illuminate\Console\Command;
use File;

class Reset extends Command
{

    /**
     * human readable command name
     *
     * @var String
     */
    protected $title = 'Sync Automation Job';

    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'reset:app';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset app instance using fresh database instance.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        if (!$this->requirement()) {
            return;
        }
        Artisan::call('down');

        File::cleanDirectory(storage_path('logs'));
        File::cleanDirectory(storage_path('framework/sessions'));
        File::cleanDirectory(storage_path('framework/cache'));
        File::cleanDirectory(storage_path('framework/temp'));


        $command = 'mysql demo < ' . storage_path('db/dump.sql');
        $process = new Process($command);
        $process->run();
        if (!$process->isSuccessful()) {
            $this->error($process->getErrorOutput());
        }

        Artisan::call('up');
    }

    /**
     * Checks mysqldump availability
     * 
     * @return boolean
     */
    protected function requirement()
    {
        $process = new Process('mysqldump --version');
        $process->run();
        if (!$process->isSuccessful()) {
            $this->error($process->getErrorOutput());
            return false;
        }
        return true;
    }

}
