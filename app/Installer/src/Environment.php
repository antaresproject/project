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

class Environment
{

    /**
     * Check if current OS is the Windows
     *
     * @return boolean
     */
    public function isWinOS()
    {
        return strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
    }

}
