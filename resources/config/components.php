<?php

return [
    /*
     * List of available components and their branches. It is the main repository.
     */
    'branches' => [
        'antaresproject/component-notifications' => '0.9.2.x-dev',
        'antaresproject/component-logger'        => '0.9.2.x-dev',
        'antaresproject/component-translations'  => 'dev-master',
        'antaresproject/component-control'       => '0.9.2.x-dev',
        'antaresproject/component-automation'    => '0.9.2.x-dev',
        'antaresproject/component-customfields'  => '0.9.2.x-dev',
        'antaresproject/component-tester'        => '0.9.2.x-dev',
        'antaresproject/module-search'           => 'dev-master',
        'antaresproject/module-sample_module'    => 'dev-master',
        'antaresproject/module-api'              => 'dev-master',
        'antaresproject/module-ban-management'   => 'dev-master',
        'antaresproject/module-two-factor-auth'  => 'dev-master'
    ],
    /**
     * Extensions required on installation.
     */
    'required' => [
        'antaresproject/component-notifications',
        'antaresproject/component-logger',
        'antaresproject/component-translations',
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

