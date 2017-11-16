<?php

return [
    /*
     * List of available components and their branches. It is the main repository.
     */
    'branches' => [
        'antaresproject/component-notifications' => '0.9.2.x-dev',
        'antaresproject/component-logger'        => '0.9.2.x-dev',
        'antaresproject/component-translations'  => '0.9.2.x-dev',
        'antaresproject/component-acl'           => '0.9.2.x-dev',
        'antaresproject/component-automation'    => '0.9.2.x-dev',
        'antaresproject/component-customfields'  => '0.9.2.x-dev',
        'antaresproject/component-tester'        => '0.9.2.x-dev',
        'antaresproject/component-installer'     => '0.9.2.x-dev',
        'antaresproject/component-brands'        => '0.9.2.x-dev',
        'antaresproject/component-users'         => '0.9.2.x-dev',
        'antaresproject/module-search'           => '0.9.2.x-dev',
        'antaresproject/module-sample_module'    => '0.9.2.x-dev',
        'antaresproject/module-api'              => '0.9.2.x-dev',
        'antaresproject/module-ban_management'   => '0.9.2.x-dev',
        'antaresproject/module-two_factor_auth'  => '0.9.2.x-dev',
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

