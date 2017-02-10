<?php

return [
    'models'     => [
        'users'        => \Antares\Model\User::class,
        'logs'         => \Antares\Logger\Model\LogsTranslations::class,
        'customfields' => \Antares\Customfields\Model\Field::class,
        'module'       => Antares\Module\Model\ModuleRow::class
    ],
    'datatables' => [
        'users'        => \Antares\Users\Http\Datatables\Users::class,
        'logs'         => \Antares\Logger\Http\Datatables\ActivityLogs::class,
        'customfields' => \Antares\Customfields\Http\Datatables\Customfields::class,
        'module'       => \Antares\Module\Http\Datatables\ModuleDatatable::class
    ]
];
