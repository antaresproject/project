<?php

$dir = __DIR__ . '/../../bootstrap/';

require $dir . 'autoload.php';

$app = require_once $dir . 'app.php';

$response = $app->make('Illuminate\Http\JsonResponse');
$response->setContent(json_encode([
    'version'     => '0.9',
    'description' => 'Antares 0.9 is a system created on the basis of Laravel framework. It consist of 28 components enabling the support of building internet applications.',
    'path'        => 'http://' . $_SERVER['HTTP_HOST'] . '/service/update-1.0.2.zip',
    'changelog'   => [
        'Unused files cleanup',
        'Numerous UX improvements',
        'Improved stability of the system'
    ],
    'modules'     => 'http://' . $_SERVER['HTTP_HOST'] . '/service/modules.php'
]));
$response->sendHeaders();
$response->sendContent();
$app->terminate();

