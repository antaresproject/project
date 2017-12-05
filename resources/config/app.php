<?php

return [
    /*
      |--------------------------------------------------------------------------
      | Application Environment
      |--------------------------------------------------------------------------
      |
      | This value determines the "environment" your application is currently
      | running in. This may determine how you prefer to configure various
      | services your application utilizes. Set this in your ".env" file.
      |
     */

    'env'             => env('APP_ENV', 'production'),
    /*
      |--------------------------------------------------------------------------
      | Application Debug Mode
      |--------------------------------------------------------------------------
      |
      | When your application is in debug mode, detailed error messages with
      | stack traces will be shown on every error that occurs within your
      | application. If disabled, a simple generic error page is shown.
      |
     */
    'debug'           => env('APP_DEBUG', true),
    /*
      |--------------------------------------------------------------------------
      | Application URL
      |--------------------------------------------------------------------------
      |
      | This URL is used by the console to properly generate URLs when using
      | the Artisan command line tool. You should set this to the root of
      | your application so that it is used when running Artisan tasks.
      |
     */
    'url'             => env('APP_URL', 'http://localhost'),
    /*
      |--------------------------------------------------------------------------
      | Application Timezone
      |--------------------------------------------------------------------------
      |
      | Here you may specify the default timezone for your application, which
      | will be used by the PHP date and date-time functions. We have gone
      | ahead and set this to a sensible default for you out of the box.
      |
     */
    'timezone'        => 'UTC',
    /*
      |--------------------------------------------------------------------------
      | Application Locale Configuration
      |--------------------------------------------------------------------------
      |
      | The application locale determines the default locale that will be used
      | by the translation service provider. You are free to set this value
      | to any of the locales which will be supported by the application.
      |
     */
    'locale'          => 'en',
    /*
      |--------------------------------------------------------------------------
      | Application Fallback Locale
      |--------------------------------------------------------------------------
      |
      | The fallback locale determines the locale to use when the current one
      | is not available. You may change the value to correspond to any of
      | the language folders that are provided through your application.
      |
     */
    'fallback_locale' => 'en',
    /*
      |--------------------------------------------------------------------------
      | Encryption Key
      |--------------------------------------------------------------------------
      |
      | This key is used by the Illuminate encrypter service and should be set
      | to a random, 32 character string, otherwise these encrypted strings
      | will not be safe. Please do this before deploying an application!
      |
     */
    'key'             => env('APP_KEY'),
    'cipher'          => "AES-256-CBC",
    /*
      |--------------------------------------------------------------------------
      | Logging Configuration
      |--------------------------------------------------------------------------
      |
      | Here you may configure the log settings for your application. Out of
      | the box, Laravel uses the Monolog PHP logging library. This gives
      | you a variety of powerful log handlers / formatters to utilize.
      |
      | Available Settings: "single", "daily", "syslog", "errorlog"
      |
     */
    'log'             => 'daily',
    /*
      |--------------------------------------------------------------------------
      | Autoloaded Service Providers
      |--------------------------------------------------------------------------
      |
      | The service providers listed here will be automatically loaded on the
      | request to your application. Feel free to add your own services to
      | this array to grant expanded functionality to your applications.
      |
     */
    'providers'       => [
        /*
         * Laravel Framework Service Providers...
         */
        Illuminate\Broadcasting\BroadcastServiceProvider::class,
        Illuminate\Bus\BusServiceProvider::class,
        Illuminate\Cache\CacheServiceProvider::class,
        Illuminate\Cookie\CookieServiceProvider::class,
        Illuminate\Database\DatabaseServiceProvider::class,
        Illuminate\Log\LogServiceProvider::class,
        Illuminate\Encryption\EncryptionServiceProvider::class,
        Illuminate\Filesystem\FilesystemServiceProvider::class,
        Illuminate\Foundation\Providers\FoundationServiceProvider::class,
        Illuminate\Hashing\HashServiceProvider::class,
        Illuminate\Pagination\PaginationServiceProvider::class,
        Illuminate\Pipeline\PipelineServiceProvider::class,
        Illuminate\Queue\QueueServiceProvider::class,
        Illuminate\Redis\RedisServiceProvider::class,
        Illuminate\Session\SessionServiceProvider::class,
        Illuminate\Validation\ValidationServiceProvider::class,
        TwigBridge\ServiceProvider::class,
        /*
         * Antares Platform Service Providers...
         */
        Antares\Asset\AssetServiceProvider::class,
        Antares\Auth\AuthServiceProvider::class,
        Antares\Authorization\AuthorizationServiceProvider::class,
        Antares\View\DecoratorServiceProvider::class,
        Antares\Extension\ExtensionServiceProvider::class,
        Antares\Html\HtmlServiceProvider::class,
        Antares\Memory\MemoryServiceProvider::class,
        Antares\Messages\MessagesServiceProvider::class,
        Antares\Notifier\NotifierServiceProvider::class,
        Antares\Auth\Passwords\PasswordResetServiceProvider::class,
        Antares\Publisher\PublisherServiceProvider::class,
        Antares\Foundation\Providers\SupportServiceProvider::class,
        Antares\Translation\TranslationServiceProvider::class,
        Antares\View\ViewServiceProvider::class,
        Antares\Foundation\Providers\ConsoleSupportServiceProvider::class,
        Antares\Foundation\Providers\FoundationServiceProvider::class,
        Antares\Foundation\Providers\RouteServiceProvider::class,
        Antares\Area\AreaServiceProvider::class,
        Antares\UI\UIServiceProvider::class,
        Antares\GeoIP\GeoIPServiceProvider::class,
        Antares\Users\UsersServiceProvider::class,
        Antares\Brands\BrandsServiceProvider::class,
        \Antares\Foundation\Providers\DependableActionsServiceProvider::class,
        Antares\UI\UIComponents\UiComponentsServiceProvider::class,
        Illuminate\Notifications\NotificationServiceProvider::class,
        /*
         * Antares Platform Optional Service Providers...
         */
        Antares\Installation\InstallerServiceProvider::class,
        /*
         * Application Service Providers...
         */
        App\Providers\AppServiceProvider::class,
        App\Providers\EventServiceProvider::class,
        App\Providers\ExtensionServiceProvider::class,
        App\Providers\RouteServiceProvider::class,
        Antares\Datatables\DatatablesServiceProvider::class,
        Baum\Providers\BaumServiceProvider::class,
        Arcanedev\LogViewer\LogViewerServiceProvider::class,
        //Barryvdh\Snappy\ServiceProvider::class,
        Antares\Breadcrumb\ServiceProvider::class,
        Intervention\Image\ImageServiceProvider::class,
        Laravolt\Avatar\ServiceProvider::class,
        Thomaswelton\LaravelGravatar\LaravelGravatarServiceProvider::class,
        Dingo\Api\Provider\LaravelServiceProvider::class,
        Tymon\JWTAuth\Providers\LaravelServiceProvider::class,
        Barryvdh\Cors\ServiceProvider::class,
    //Barryvdh\Debugbar\ServiceProvider::class
    ],
    /*
      |--------------------------------------------------------------------------
      | Class Aliases
      |--------------------------------------------------------------------------
      |
      | This array of class aliases will be registered when this application
      | is started. However, feel free to register as many as you wish as
      | the aliases are "lazy" loaded so they don't hinder performance.
      |
     */
    'aliases'         => [
        'App'         => Illuminate\Support\Facades\App::class,
        'ACL'         => Antares\Support\Facades\ACL::class,
        'Artisan'     => Illuminate\Support\Facades\Artisan::class,
        'Asset'       => Antares\Support\Facades\Asset::class,
        'Auth'        => Illuminate\Support\Facades\Auth::class,
        'Bus'         => Illuminate\Support\Facades\Bus::class,
        'Cache'       => Illuminate\Support\Facades\Cache::class,
        'Config'      => Illuminate\Support\Facades\Config::class,
        'Cookie'      => Illuminate\Support\Facades\Cookie::class,
        'Crypt'       => Illuminate\Support\Facades\Crypt::class,
        'DB'          => Illuminate\Support\Facades\DB::class,
        'Eloquent'    => Illuminate\Database\Eloquent\Model::class,
        'Event'       => Illuminate\Support\Facades\Event::class,
        'File'        => Illuminate\Support\Facades\File::class,
        'Form'        => Antares\Support\Facades\Form::class,
        'Foundation'  => Antares\Support\Facades\Foundation::class,
        'Gate'        => Illuminate\Support\Facades\Gate::class,
        'Hash'        => Illuminate\Support\Facades\Hash::class,
        'HTML'        => Antares\Support\Facades\HTML::class,
        'Input'       => Illuminate\Support\Facades\Input::class,
        'Lang'        => Illuminate\Support\Facades\Lang::class,
        'Log'         => Illuminate\Support\Facades\Log::class,
        'Mail'        => Illuminate\Support\Facades\Mail::class,
        'Memory'      => Antares\Support\Facades\Memory::class,
        'Messages'    => Antares\Support\Facades\Messages::class,
        'Meta'        => Antares\Support\Facades\Meta::class,
        'Notifier'    => Antares\Support\Facades\Notifier::class,
        'Password'    => Illuminate\Support\Facades\Password::class,
        'Queue'       => Illuminate\Support\Facades\Queue::class,
        'Redirect'    => Illuminate\Support\Facades\Redirect::class,
        'Request'     => Illuminate\Support\Facades\Request::class,
        'Response'    => Illuminate\Support\Facades\Response::class,
        'Route'       => Illuminate\Support\Facades\Route::class,
        'Schema'      => Illuminate\Support\Facades\Schema::class,
        'Session'     => Illuminate\Support\Facades\Session::class,
        'Storage'     => Illuminate\Support\Facades\Storage::class,
        'Table'       => Antares\Support\Facades\Table::class,
        'Theme'       => Antares\Support\Facades\Theme::class,
        'URL'         => Illuminate\Support\Facades\URL::class,
        'Validator'   => Illuminate\Support\Facades\Validator::class,
        'View'        => Illuminate\Support\Facades\View::class,
        'Datatables'  => Antares\Datatables\Facade\Datatables::class,
        'Setting'     => anlutro\LaravelSettings\Facade::class,
        'Menu'        => Menu\Menu::class,
        'Activity'    => Regulus\ActivityLog\Models\Activity::class,
        'Breadcrumbs' => DaveJamesMiller\Breadcrumbs\Facade::class,
        'Gravatar'    => Thomaswelton\LaravelGravatar\Facades\Gravatar::class,
        'BrainSocket' => BrainSocket\BrainSocketFacade::class
    ],
];
