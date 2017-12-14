<?php

namespace App\Http\Controllers;

class WelcomeController extends Controller
{

    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        //$this->middleware('guest');
    }

    /**
     * Show the application welcome screen to the user.
     *
     * @return mixed
     */
    public function index()
    {
        if (($redirection = $this->redirectWhenAuthenticated()) !== false) {
            return $redirection;
        }
        if (!app('antares.installed')) {
            return redirect(handles('antares::install'));
        }
        return $this->redirect(handles(area() . '/login'));
    }

    /**
     * Show the application welcome screen to the user.
     *
     * @return mixed
     */
    public function demo()
    {
        if (($redirection = $this->redirectWhenAuthenticated()) !== false) {
            return $redirection;
        }
        return view('demo');
    }

    /**
     * reidrects when user is authenticated
     * 
     * @return boolean|\Illuminate\Http\RedirectResponse
     */
    protected function redirectWhenAuthenticated()
    {

        if (auth()->guest()) {
            return false;
        }

        if (can('antares.show-dashboard')) {
            return redirect(handles('antares::/'))->send();
        }
    }

}
