<?php

namespace App;

use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Antares\Model\User as Eloquent;

class User extends Eloquent implements AuthorizableContract
{

    use Authorizable;
}
