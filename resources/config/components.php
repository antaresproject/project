<?php

return [
    /*
     * List of available components and their branches. It is the main repository.
     */
    'branches' => [
        'antaresproject/component-widgets' => '0.9.2.1-dev',
        'antaresproject/component-logger' => '0.9.2.1-dev',
        'antaresproject/component-translations' => '0.9.2.1-dev',
        'antaresproject/component-updater' => '0.9.2.1-dev',
        'antaresproject/component-control' => '0.9.2.1-dev',
        'antaresproject/component-notifications' => '0.9.2.1-dev',
        'antaresproject/component-automation' => '0.9.2.1-dev',
        'antaresproject/component-customfields' => '0.9.2.1-dev',
        'antaresproject/component-tester' => '0.9.2.1-dev',
        'antaresproject/component-search' => '0.9.2.1-dev',
        'antaresproject/component-module' => '0.9.2.1-dev',
        'antaresproject/component-api' => '0.9.2.1-dev',
        'antaresproject/component-ban-management' => '0.9.2.1-dev',
        'antaresproject/component-two-factor-auth' => '0.9.2.1-dev',
        //'marcinkozak/component-abrakadabra' => 'dev-master',
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
        //'marcinkozak/component-abrakadabra',
    ],

];
