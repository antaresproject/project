<?php

return [
    'antares.started: admin'                     => [
        \Antares\Foundation\Http\Handlers\DashboardMenu::class      => 1000,
        \Antares\Users\Http\Handlers\UserMenu::class                => 1000,
        \Antares\Foundation\Http\Handlers\SettingsMenu::class       => 1000,
        \Antares\Foundation\Http\Handlers\ToolsMenuHandler::class   => 1000,
        \Antares\Foundation\Http\Handlers\StaffMenuHandler::class,
        \Antares\Automation\Http\Handlers\Menu::class,
        \Antares\Brands\Http\Handlers\BrandsMenu::class             => 999,
        \Antares\Customfields\Http\Handlers\FieldsMenu::class       => 998,
        \Antares\Logger\Http\Handlers\Menu::class                   => 997,
        \Antares\Notifications\Http\Handlers\Menu::class            => 999,
        \Antares\Translations\Http\Handlers\TranslationsMenu::class => 990,
        \Antares\Logger\Http\Handlers\SystemMenu::class,
        \Antares\Foundation\Http\Handlers\ComponentsMainMenu::class,
        \Antares\Notifications\Http\Handlers\NotificationLogsMenu::class,
        \Antares\Automation\Http\Handlers\AutomationLogsMenu::class,
        \Antares\Tester\Http\Handlers\TesterMenu::class
    ],
    'antares.ready: menu.after.general-settings' => [
        \Antares\Foundation\src\Http\Handlers\SecurityMenu::class,
        \Antares\Foundation\src\Http\Handlers\MailConfigurationMenu::class,
        \Antares\Api\Http\Handlers\Menu::class,
    ],
    'antares.ready: menu.after.logger'           => [
        \Antares\Logger\Http\Handlers\System::class => 993,
    ]
];
