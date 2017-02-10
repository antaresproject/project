<?php

namespace Installer;

use Installer\Composer\PostUpdate;
use Composer\Script\Event;

class Factory {

    public static function postUpdate(Event $event) {
        $composer = new PostUpdate(new Environment(), getcwd());
        return $composer->run($event);
    }

}