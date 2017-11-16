<?php

return [
    /*
     * List of available components and their branches. It is the main repository.
     */
    'branches' => [
        'antaresproject/component-notifications' => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-logger'        => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-translations'  => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-acl'           => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-automation'    => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-customfields'  => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-tester'        => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-installer'     => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-brands'        => 'dev-0.9.2-laravel5.5',
        'antaresproject/component-users'         => 'dev-0.9.2-laravel5.5',
        'antaresproject/module-search'           => 'dev-0.9.2-laravel5.5',
        'antaresproject/module-sample_module'    => 'dev-0.9.2-laravel5.5',
        'antaresproject/module-api'              => 'dev-0.9.2-laravel5.5',
        'antaresproject/module-ban_management'   => 'dev-0.9.2-laravel5.5',
        'antaresproject/module-two_factor_auth'  => 'dev-0.9.2-laravel5.5',
    ],
    /**
     * Extensions required on installation.
     */
    'required' => [
        'antaresproject/component-notifications',
        'antaresproject/component-logger',
        'antaresproject/component-translations',
        'antaresproject/component-acl',
        'antaresproject/component-automation',
        'antaresproject/component-customfields',
        'antaresproject/component-tester',
        'antaresproject/component-installer',
        'antaresproject/component-brands',
        'antaresproject/component-users'
    ],
    /**
     * List of optional extensions with selected by default.
     */
    'optional' => [
        'antaresproject/module-sample_module',
        'antaresproject/module-search',
        'antaresproject/module-api',
        'antaresproject/module-ban_management',
        'antaresproject/module-two_factor_auth',
    ],
];

