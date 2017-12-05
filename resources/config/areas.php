<?php

return [
    'areas'   => [
        'admin' => 'Admin',
        'users' => 'User',
    ],
    'default' => 'admin',
    /**
     * Configuration of route files which should be used by user area
     */
    'routes'  => [
        'frontend' => [
            'users',
        ],
        'backend'  => [
            'admin'
        ]
    ],
];
