<?php

use Illuminate\Routing\Router;

$router->group(['middleware' => ['antares']], function (Router $router) {
    $router->get('/', 'WelcomeController@index');
    $router->match(['GET', 'POST'], 'test', 'WelcomeController@test');
});





