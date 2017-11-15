<?php

return [
    'areas'   => [
        'admin' => 'Admin',
        'user'  => 'User',
    ],
    'default' => 'admin',
    /**
     * Configuration of route files which should be used by user area
     */
    'routes'  => [
        'frontend' => [
            'user',
        ],
        'backend'  => [
            'admin'
        ]
    ],
];
