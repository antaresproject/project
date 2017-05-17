<?php

return [
    /*
     * List of available components and their branches. It is the main repository.
     */
    'branches' => [
        'antaresproject/component-notifications' => '0.9.2.2-dev',
        'antaresproject/component-logger'        => '0.9.2.2-dev',
        'antaresproject/component-translations'  => 'dev-master',
        'antaresproject/component-updater'       => '0.9.2.2-dev',
        'antaresproject/component-control'       => '0.9.2.x-dev',
        'antaresproject/component-automation'    => '0.9.2.x-dev',
        'antaresproject/component-customfields'  => '0.9.2.x-dev',
        'antaresproject/component-tester'        => '0.9.2.2-dev',
        'antaresproject/module-search'           => '0.9.2.x-dev',
        'antaresproject/module-sample_module'    => '0.9.2.2-dev',
        'antaresproject/module-api'              => '0.9.2.x-dev',
        'antaresproject/module-ban-management'   => '0.9.2.x-dev',
        'antaresproject/module-two-factor-auth'  => 'dev-master'
    ],
    /**
     * Extensions required on installation.
     */
    'required' => [
        'antaresproject/component-notifications',
        'antaresproject/component-logger',
        'antaresproject/component-translations',
        'antaresproject/component-updater',
        'antaresproject/component-control',
        'antaresproject/component-automation',
        'antaresproject/component-customfields',
        'antaresproject/component-tester',
    ],
    /**
     * List of optional extensions with selected by default.
     */
    'optional' => [
        'antaresproject/module-sample_module',
        'antaresproject/module-search',
        'antaresproject/module-api',
        'antaresproject/module-ban-management',
        'antaresproject/module-two-factor-auth',
    ],
];

