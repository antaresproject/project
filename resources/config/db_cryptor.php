<?php

/**
 * database cryptor configuration
 */
return
        [
            /**
             * whether cryptor is enabled or disabled
             */
            'enabled'      => false,
            /**
             * name of cast column to cryptor method
             */
            'cast_name'    => 'aes',
            /**
             * which type of columns can be casted
             */
            'column_types' => [
                'string'
            ],
            /**
             * cryptor configuration
             */
            'config'       => [
                'method'     => "AES-256-CBC",
                'secret_key' => 'This is my secret key',
                'secret_iv'  => 'This is my secret iv'
            ]
];
