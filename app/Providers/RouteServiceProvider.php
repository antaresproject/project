<?php

namespace App\Providers;

use Antares\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Routing\Router;

class RouteServiceProvider extends ServiceProvider
{

    /**
     * This namespace is applied to the controller routes in your routes file.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define the routes for the application.
     *
     * @param  \Illuminate\Routing\Router  $router
     *
     * @return void
     */
    public function map(Router $router)
    {

//        $this->loadFrontendRoutesFrom(app_path('Http/routes.php'));
//        $this->loadBackendRoutesFrom(app_path('Http/routes.php'));
    }

}
