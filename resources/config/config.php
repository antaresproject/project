<?php

return [
    'memory'    => [
        'model' => '\Antares\Tester\Model\MemoryTests'
    ],
    'view'      => 'antares/tester::admin.partials._button',
    'container' => 'antares/foundation::scripts',
    'inputId'   => 'tester-button',
    'codes'     => require_once('codes.php')
];
