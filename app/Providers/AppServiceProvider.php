<?php

namespace App\Providers;

use Antares\Extension\Traits\DomainAwareTrait;
use Illuminate\Support\ServiceProvider;
use App\Console\Commands\Reset;

class AppServiceProvider extends ServiceProvider
{

    use DomainAwareTrait;

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        //
    }

    /**
     * Register any application services.
     *
     * This service provider is a great spot to register your various container
     * bindings with the application. As you can see, we are registering our
     * "Registrar" implementation here. You can add your own bindings too!
     *
     * @return void
     */
    public function register()
    {
        $this->commands([Reset::class]);
    }

}
