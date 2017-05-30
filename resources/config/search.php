<?php

return [
    'datatables' => [
        'users'         => \Antares\Users\Http\Datatables\Users::class,
        'customfields'  => Antares\Customfields\Http\Datatables\Customfields::class,
        'sample_module' => \Antares\Modules\SampleModule\Http\Datatables\ModuleDatatable::class
    ]
];
