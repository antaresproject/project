<?php

function recurse_copy($src, $dst)
{
    $dir  = opendir($src);
    @mkdir($dst);
    while (false !== ( $file = readdir($dir))) {
        if (( $file != '.' ) && ( $file != '..' )) {
            if (is_dir($src . '/' . $file)) {
                recurse_copy($src . '/' . $file, $dst . '/' . $file);
            } else {
                copy($src . '/' . $file, $dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}

$build  = (isset($_GET['sandbox']) && !empty($_GET['sandbox'])) ? str_replace([',', '.'], '_', $_GET['sandbox']) : null;
$target = __DIR__ . '/../builds/build_' . $build . '/storage/framework/sessions';
if (!is_null($build) && is_dir($target)) {
    recurse_copy(__DIR__ . '/../storage/framework/sessions', $target);
}