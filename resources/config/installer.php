<?php

return [
    /**
     * extensions required on installation
     */
    'required' => [
        'components/brands',
        'components/widgets',
        'components/logger',
        'components/translations',
        'components/updater',
        'components/control',
        'components/notifications',
        'components/automation',
        'components/customfields',
    ],
    /**
     * list of optional extensions with selected by default
     */
    'optional' => [
        'components/search',
        'components/multibrand',
    ],
];

