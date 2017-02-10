<?php

/*
 * Set specific configuration variables here
 */
return [
    // Whether all characters supplied must be replaced with their closest ASCII counterparts
    'ascii'       => false,
    // Image shape: circle or square
    'shape'       => 'circle',
    // Image width, in pixel
    'width'       => 40,
    // Image height, in pixel
    'height'      => 40,
    // Number of characters used as initials. If name consists of single word, the first N character will be used
    'chars'       => 2,
    // font size
    'fontSize'    => 20,
    // Fonts used to render text.
    // If contains more than one fonts, randomly selected based on name supplied
    // You can provide absolute path, path relative to folder resources/laravolt/avatar/fonts/, or mixed.
    'fonts'       => ['OpenSans-Bold.ttf', 'rockwell.ttf'],
    // List of foreground colors to be used, randomly selected based on name supplied
    'foregrounds' => [
        '#FFFFFF',
    ],
    // List of background colors to be used, randomly selected based on name supplied
    'backgrounds' => [
        '#2bb565',
    ],
    'border'      => [
        'size'  => 1,
        // border color, available value are:
        // 'foreground' (same as foreground color)
        // 'background' (same as background color)
        // or any valid hex ('#aabbcc')
        'color' => 'foreground',
    ],
];
