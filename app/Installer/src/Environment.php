<?php

namespace Installer;

class Environment {

    /**
     * Check if current OS is the Windows
     *
     * @return boolean
     */
    public function isWinOS() {
        return strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
    }

}
