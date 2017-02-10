<?php

$dir = __DIR__ . '/../../bootstrap/';

require $dir . 'autoload.php';

$app = require_once $dir . 'app.php';


$response = $app->make('Illuminate\Http\JsonResponse');
$response->setContent(json_encode([
    [
        "name"        => "brands",
        "full_name"   => "Brands Manager",
        "description" => "Billevo Brands Manager",
        "author"      => "Łukasz Cirut",
        "url"         => "http://" . $_SERVER['HTTP_HOST'] . "/service/version.php",
        "version"     => "0.9",
        "provides"    => [
            "Antares\\Brands\\BrandsServiceProvider",
            "Antares\\Facile\\FacileServiceProvider"
        ],
        "update"      => "http://" . $_SERVER['HTTP_HOST'] . "/service/brands.zip",
    ],
    [
        "name"        => "tester",
        "full_name"   => "Module Configuration Tester",
        "description" => "BillEvo Module Configuration Tester Component verifies and validates the configuration of modules",
        "author"      => "Łukasz Cirut",
        "url"         => "https://" . $_SERVER['HTTP_HOST'] . "/docs/tester",
        "version"     => "0.9",
        "provides"    => [
            "Antares\\Tester\\TesterServiceProvider"
        ],
        "update"      => "http://" . $_SERVER['HTTP_HOST'] . "/service/tester.zip",
]]));
$response->sendHeaders();
$response->sendContent();
$app->terminate();

