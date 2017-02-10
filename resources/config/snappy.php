<?php

return array(
    'pdf'   => array(
        'enabled' => true,
        'binary'  => (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') ? 'wkhtmltopdf' : base_path('vendor/h4cc/wkhtmltopdf-amd64/bin/wkhtmltopdf-amd64'),
        'timeout' => false,
        'options' => array('ignore-load-errors' => false),
    ),
    'image' => array(
        'enabled' => true,
        'binary'  => (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') ? 'wkhtmltoimage' : base_path('vendor/h4cc/wkhtmltoimage-amd64/bin/wkhtmltoimage-amd64'),
        'timeout' => false,
        'options' => array('ignore-load-errors' => false),
    ),
);
