<?php

use Antares\Model\User;

return [
    'actions' => [
        User::class => [
            'status' => function($model) {
                $description = $model->status ? 'deactivate_description' : 'activate_description';
                $title       = $model->status ? 'deactivate_title' : 'activate_title';
                return [
                    'title'      => trans('antares/users::messages.dependable.' . $title),
                    'url'        => handles('antares/foundation::users/' . $model->id . '/status'),
                    'attributes' => [
                        'data-icon'        => $model->status ? 'minus' : 'check',
                        'data-title'       => trans("antares/users::messages.dependable.user_change_status_question"),
                        'data-description' => trans('antares/users::messages.dependable.' . $description, ['fullname' => $model->fullname])]
                ];
            }]
    ],
    'mass_actions' => [
        User::class => [
            'status' => function() {
                return [
                    'title'      => trans('antares/users::messages.dependable.mass_actions.change_status_title'),
                    'url'        => handles('antares/foundation::users/status'),
                    'attributes' => [
                        'class'            => 'triggerable confirm',
                        'data-icon'        => 'star',
                        'data-title'       => trans("antares/users::messages.dependable.mass_actions.change_status_question"),
                        'data-description' => trans('antares/users::messages.dependable.mass_actions.change_status_description')]
                ];
            }]]
];


