<?php

return [
    /*
     * List of available components and their branches. It is the main repository.
     */
    'branches' => [
        'antaresproject/component-notifications' => 'dev-master',
        'antaresproject/component-logger'        => 'dev-master',
        'antaresproject/component-translations'  => 'dev-master',
        'antaresproject/component-acl'           => 'dev-master',
        'antaresproject/component-automation'    => 'dev-master',
        'antaresproject/component-customfields'  => 'dev-master',
        'antaresproject/component-tester'        => 'dev-master',
        'antaresproject/component-installer'     => 'dev-master',
        'antaresproject/component-brands'        => 'dev-master',
        'antaresproject/component-users'         => 'dev-master',
        'antaresproject/module-search'           => 'dev-master',
        'antaresproject/module-sample_module'    => 'dev-master',
        'antaresproject/module-api'              => 'dev-master',
        'antaresproject/module-ban-management'   => 'dev-master',
        'antaresproject/module-two-factor-auth'  => 'dev-master',
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

