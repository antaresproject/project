<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Antares\Routing\Controller as BaseController;
use Antares\Routing\Traits\ControllerResponseTrait;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

abstract class Controller extends BaseController
{

    use AuthorizesRequests,
        ControllerResponseTrait,
        DispatchesJobs,
        ValidatesRequests;
}
