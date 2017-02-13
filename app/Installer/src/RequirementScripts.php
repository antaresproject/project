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

class RequirementScripts
{

    /**
     * messages container
     *
     * @var array 
     */
    protected static $messages = [];

    /**
     * Handle the pre-update or pre-install Composer event.
     *
     * @param  \Composer\Script\Event  $event
     *
     * @return void
     */
    public static function preUpdate(Event $event)
    {
        print "\nChecking installation requirements\n";
        $isValid = self::validateNode() && self::validateBower() && self::validateGrunt();
        if ($isValid) {
            return;
        }
        foreach (self::$messages as $message) {
            print "\n" . $message . "\n";
        }
    }

    /**
     * validates node 
     * 
     * @return boolean
     * @throws Exception
     */
    protected static function validateNode()
    {
        try {
            print "\nChecking node requirement, ";
            $npmVersion = null;
            exec('npm -v ', $npmVersion);
            if (!isset($npmVersion[0])) {
                throw new Exception('Unable to find Node. Npm command not found.');
            }

            if (strlen($npmVersion[0]) <= 0) {
                throw new Exception('Invalid node version.');
            }
            print sprintf("found %s node version.", $npmVersion[0]);
        } catch (Exception $ex) {
            array_push(self::$messages, $ex->getMessage());
            return false;
        }
        return true;
    }

    /**
     * validates grunt 
     * 
     * @return boolean
     * @throws Exception
     */
    protected static function validateGrunt()
    {
        try {
            print "\nChecking grunt requirements, ";
            $gruntVersion = null;
            exec('grunt -v ', $gruntVersion);
            if (!isset($gruntVersion[0])) {
                throw new Exception('Unable to find grunt. Grunt command not found.');
            }

            if (strlen($gruntVersion[0]) <= 0) {
                throw new Exception('Invalid grunt version.');
            }
            print sprintf("found %s grunt version.\n", $gruntVersion[0]);
        } catch (Exception $ex) {
            array_push(self::$messages, $ex->getMessage());
            return false;
        }
        return true;
    }

    /**
     * validates bower 
     * 
     * @return boolean
     * @throws Exception
     */
    protected static function validateBower()
    {
        try {
            print "\nChecking bower requirements, ";
            $bowerVersion = null;
            exec('bower -v ', $bowerVersion);
            if (!isset($bowerVersion[0])) {
                throw new Exception('Unable to find bower. Bower command not found.');
            }

            if (strlen($bowerVersion[0]) <= 0) {
                throw new Exception('Invalid bower version.');
            }
            print sprintf("found %s bower version.", $bowerVersion[0]);
        } catch (Exception $ex) {
            array_push(self::$messages, $ex->getMessage());
            return false;
        }
        return true;
    }

}
