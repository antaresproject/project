<?php

/**
 * Part of the Antares package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Widgets
 * @version    0.9.0
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares
 * @link       http://antaresproject.io
 */

namespace Installer\Composer;

use Installer\System;
use FilesystemIterator;
use Composer\Script\Event;

class PostUpdate extends System
{

    protected $sourceAntares;
    protected $sourceDist;
    protected $targetDist;
    protected $sourceAssets;
    protected $targetAssets;

    public function run(Event $event)
    {
        $this->prepareDirectories();
        $this->prepareDist();
        $this->runScripts();
        $this->prepareAssets();
    }

    protected function prepareDirectories()
    {
        $this->sourceAntares = $this->getFullPath('builds/antares');

        $this->sourceDist = $this->getFullPath('builds/antares/_dist');
        $this->targetDist = $this->getFullPath('public/_dist');

        $this->sourceAssets = $this->getFullPath('builds/antares/assets');
        $this->targetAssets = $this->getFullPath('public/assets');
    }

    protected function prepareDist()
    {
        if (is_dir($this->targetDist)) {
            $this->text('Clearing destination dist directories...');
            $command = $this->environment->isWinOS() ? sprintf('rmdir %s /s /q', $this->targetDist) : sprintf('rm -rf %s /*', $this->targetDist);

            system($command);
        }
    }

    protected function runScripts()
    {
        chdir($this->sourceAntares);

        $this->runCommand('npm install --save-dev --allow-root');
        $this->runCommand('bower install --allow-root');
        $this->runCommand('grunt');
    }

    protected function prepareAssets()
    {
        $basePath = $this->getBasePath();
        chdir($basePath);

        if (is_dir($this->targetAssets)) {
            $command = $this->environment->isWinOS() ? sprintf('rmdir %s /s /q', $this->targetAssets) : sprintf('rm -rf %s /*', $this->targetAssets);

            $this->runCommand($command, 'Clearing destination assets directories...');
        }

        $this->text('Migrating script files...');

        $this->moveDist();
        $this->moveAssets();
    }

    protected function moveDist()
    {
        $command = $this->environment->isWinOS() ? sprintf('move %s %s', $this->sourceDist, $this->targetDist) : sprintf('mv %s/* %s', $this->sourceDist, $this->targetDist);

        $this->runCommand($command, 'Moving files of the _dist directory...');
    }

    protected function moveAssets()
    {
        $command = $this->environment->isWinOS() ? sprintf('move %s %s', $this->sourceAssets, $this->targetAssets) : sprintf('mv %s/* %s/', $this->sourceAssets, $this->targetAssets);

        $isNotEmpty = (new FilesystemIterator($this->sourceAssets))->valid();

        if ($isNotEmpty) {
            $this->runCommand($command, 'Moving files of the assets directory...');
        } else {
            $this->text('Skipping moving files of the assets directory due that destination directory is empty...');
        }
    }

}
