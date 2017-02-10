<?php

namespace Installer;

use Composer\Script\Event;

abstract class System {

    /**
     * @var Environment
     */
    protected $environment;

    /**
     * @var string
     */
    private $basePath;

    /**
     * System constructor.
     * @param Environment $environment
     */
    public function __construct(Environment $environment, $basePath) {
        $this->environment  = $environment;
        $this->basePath     = $this->getPath(rtrim($basePath, '/'));
    }

    /**
     * Print a text.
     *
     * @param $msg
     */
    public function text($msg) {
        print "\n\n$msg\n\n";
    }

    /**
     * @return string
     */
    public function getBasePath() {
        return $this->basePath;
    }

    /**
     * @param string $path
     * @return string
     */
    public function getFullPath($path) {
        $fullPath = $this->getBasePath() . '/' . ltrim($path, '/');

        return $this->getPath($fullPath);
    }

    /**
     * @param string $path
     * @return string
     */
    public function getPath($path) {
        return str_replace('/', DIRECTORY_SEPARATOR, $path);
    }

    public function runCommand($command, $message = null) {
        $this->text($message ?: sprintf('Running %s ...', $command));
        system($command);
    }

    /**
     * @param Event $event
     * @return void
     */
    public abstract function run(Event $event);

}
