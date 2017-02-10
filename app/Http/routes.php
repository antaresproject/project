<?php

use Illuminate\Routing\Router;

$router->group(['middleware' => ['antares']], function (Router $router) {
    $router->get('/', 'WelcomeController@index');
});





