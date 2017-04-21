<?php

return [
    /*
     * List of available components and their branches. It is the main repository.
     */
    'branches' => [
        'antaresproject/component-widgets'         => '0.9.2.x-dev',
        'antaresproject/component-logger'          => '0.9.2.x-dev',
        'antaresproject/component-translations'    => 'dev-master',
        'antaresproject/component-updater'         => '0.9.2.x-dev',
        'antaresproject/component-control'         => '0.9.2.x-dev',
        'antaresproject/component-notifications'   => '0.9.2.x-dev',
        'antaresproject/component-automation'      => '0.9.2.x-dev',
        'antaresproject/component-customfields'    => '0.9.2.x-dev',
        'antaresproject/component-tester'          => '0.9.2.x-dev',
        'antaresproject/component-search'          => '0.9.2.x-dev',
        'antaresproject/component-module'          => 'dev-master',
        'antaresproject/component-api'             => '0.9.2.x-dev',
        'antaresproject/component-ban-management'  => '0.9.2.x-dev',
        'antaresproject/component-two-factor-auth' => 'dev-master',
    ],
    /**
     * Extensions required on installation.
     */
    'required' => [
        'antaresproject/component-widgets',
        'antaresproject/component-logger',
        'antaresproject/component-translations',
        'antaresproject/component-updater',
        'antaresproject/component-control',
        'antaresproject/component-notifications',
        'antaresproject/component-automation',
        'antaresproject/component-customfields',
        'antaresproject/component-tester',
    ],
    /**
     * List of optional extensions with selected by default.
     */
    'optional' => [
        'antaresproject/component-search',
        'antaresproject/component-module',
        'antaresproject/component-api',
        'antaresproject/component-ban-management',
        'antaresproject/component-two-factor-auth',
    ],
];
