<?php

namespace Installer;

use Composer\Script\Event;
use FilesystemIterator;

class ComposerScripts
{

    /**
     * Handle the pre-update or pre-install Composer event.
     *
     * @param  \Composer\Script\Event  $event
     *
     * @return void
     */
    public static function postUpdate(Event $event)
    {
        $base             = getcwd();
        $target           = $base . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . '_dist';
        $from             = $base . DIRECTORY_SEPARATOR . 'storage' . DIRECTORY_SEPARATOR . 'temp' . DIRECTORY_SEPARATOR . 'antares' . DIRECTORY_SEPARATOR;
        $targetAssets     = $base . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'assets';
        $gzipTargetAssets = $base . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'gzip_assets';

        if (!file_exists($from)) {
            return;
        }
        if (!self::isEmpty($from) and ! self::isEmpty($from . '_dist') and ! self::isEmpty($from . 'assets') and ! self::isEmpty($from . 'gzip_assets')) {
            if (is_dir($target)) {
                self::clearTargetDirectory($target);
            }
            if (is_dir($targetAssets)) {
                self::clearTargetDirectory($targetAssets);
            }
            if (is_dir($gzipTargetAssets)) {
                self::clearTargetDirectory($gzipTargetAssets);
            }
            chdir($base);
            print "\nMigrating script files...\n\n";
            self::moveDistDirectory($from, $target);
            self::moveAssetsDirectory($from, $targetAssets);
            self::moveGzipAssetsDirectory($from, $gzipTargetAssets);
        }
    }

    /**
     * whether directory is empty
     * 
     * @param String $dir
     * @return boolean
     */
    public static function isEmpty($dir)
    {
        return !(new FilesystemIterator($dir))->valid();
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
     * clearing target [_dist,assets] directory
     * 
     * @param String $target
     */
    protected static function clearTargetDirectory($target)
    {
        $clear = self::isWin() ? 'rmdir ' . $target . ' /s /q' : 'rm -rf ' . $target . '/*';

        print "\nClearing destination scripts directories...\n\n";
        system($clear);
    }

    /**
     * move _dist directory depends on operating system
     * 
     * @param String $from
     * @param String $target
     */
    protected static function moveDistDirectory($from, $target)
    {
        $move = self::isWin() ? "move " . $from . DIRECTORY_SEPARATOR . '_dist ' . $target : "mv " . $from . DIRECTORY_SEPARATOR . '_dist' . DIRECTORY_SEPARATOR . '* ' . $target;
        print "\nMoving files of the _dist directory...\n\n";
        system($move);
    }

    /**
     * moving assets directory depends on operating system
     * 
     * @param String $from
     * @param String $target
     */
    protected static function moveAssetsDirectory($from, $target)
    {
        return self::move($from, $target, 'assets');
    }

    /**
     * Moving gzip assets directory depends on operating system
     * 
     * @param String $from
     * @param String $target
     */
    protected static function moveGzipAssetsDirectory($from, $target)
    {
        return self::move($from, $target, 'gzip_assets');
    }

    /**
     * Moves assets directories
     * 
     * @param String $from
     * @param String $target
     * @param String $dirname
     */
    private static function move($from, $target, $dirname)
    {
        $move          = self::isWin() ? "move " . $from . DIRECTORY_SEPARATOR . $dirname . $target : "mv " . $from . $dirname . DIRECTORY_SEPARATOR . '* ' . $target . DIRECTORY_SEPARATOR;
        $isDirNotEmpty = (new FilesystemIterator($from . $dirname))->valid();
        if ($isDirNotEmpty) {
            sprintf("\nMoving files of the %s directory...\n\n", $dirname);
            system($move);
        } else {
            sprintf("\nSkipping moving files of the %s directory due that destination directory is empty...\n\n", $dirname);
        }
    }

}
