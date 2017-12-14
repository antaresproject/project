<?php

namespace App\Providers;

use Antares\Foundation\Support\Providers\ExtensionServiceProvider as ServiceProvider;

class ExtensionServiceProvider extends ServiceProvider
{

    /**
     * Available extensions.
     *
     * @var array
     */
    protected $extensions = [
        'base::workbench/*/*',
    ];

}
