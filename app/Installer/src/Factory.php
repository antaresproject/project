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

namespace Installer;

use Installer\Composer\PostUpdate;
use Composer\Script\Event;

class Factory
{

    public static function postUpdate(Event $event)
    {
        $composer = new PostUpdate(new Environment(), getcwd());
        return $composer->run($event);
    }

}
