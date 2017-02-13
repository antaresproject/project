<?php

/**
 * Part of the Antares Project package.
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
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 */

namespace Installer;

use Composer\Script\Event;
use Exception;

class EnvironmentScripts
{

    /**
     * Handle the pre-install Composer event.
     * @todo Add application stability
     *
     * @param  \Composer\Script\Event  $event
     * @return void
     */
    public static function preInstall(Event $event)
    {
        self::checkEnvironmentFile();
//        try {
//            $assetDir = getcwd() . DIRECTORY_SEPARATOR . 'storage' . DIRECTORY_SEPARATOR . 'temp' . DIRECTORY_SEPARATOR . 'antares';
//
//            if (is_dir($assetDir)) {
//                echo "\nClearing assets dir...\n";
//                self::deleteDirectory($assetDir);
//            }            
//        } catch (Exception $ex) {
//            echo "\n" . $ex->getMessage() . "\n";
//        }
    }

    /**
     * Handle the pre-update Composer event.
     * @todo Add application stability
     *
     * @param  \Composer\Script\Event  $event
     * @return void
     */
    public static function preUpdate(Event $event)
    {
        self::checkEnvironmentFile();

//        try {
//            $assetDir = getcwd() . DIRECTORY_SEPARATOR . 'storage' . DIRECTORY_SEPARATOR . 'temp' . DIRECTORY_SEPARATOR . 'antares';
//            if (is_dir($assetDir)) {
//                echo "\nClearing assets dir...\n";
//                self::deleteDirectory($assetDir);
//            }
//        } catch (Exception $ex) {
//            echo "\n" . $ex->getMessage() . "\n";
//        }
    }

    /**
     * Checks environment file
     * 
     * @return void
     * @throws Exception
     */
    protected static function checkEnvironmentFile()
    {
        try {
            $source = getcwd() . DIRECTORY_SEPARATOR . '.env.example';
            $target = getcwd() . DIRECTORY_SEPARATOR . '.env';
            if (file_exists($target)) {
                return;
            }
            if (!file_exists($source)) {
                throw new Exception('Environment file not found. Installation cannot proceed.');
            }

            $copy = self::isWin() ? "copy " . $source . ' ' . $target : "cp " . $source . ' ' . $target;
            echo "\Copying environment file...\n";
            shell_exec($copy);
        } catch (Exception $ex) {
            echo "\n" . $ex->getMessage() . "\n";
        }

        return;
    }

    /**
     * checks whether we need to use windows commands
     *
     * @return boolean
     */
    protected static function isWin()
    {
        return strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
    }

    /**
     * Deletes directory
     * 
     * @param type $dirPath
     */
    protected static function deleteDirectory($dirPath)
    {
        if (is_dir($dirPath)) {
            $objects = scandir($dirPath);
            foreach ($objects as $object) {
                if ($object != "." && $object != "..") {
                    if (filetype($dirPath . DIRECTORY_SEPARATOR . $object) == "dir") {
                        self::deleteDirectory($dirPath . DIRECTORY_SEPARATOR . $object);
                    } else {
                        unlink($dirPath . DIRECTORY_SEPARATOR . $object);
                    }
                }
            }
            reset($objects);
            rmdir($dirPath);
        }
    }

}
