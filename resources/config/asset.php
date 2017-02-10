<?php

use Assetic\FilterManager;
use Assetic\AssetManager;

return array(
    /*
      |--------------------------------------------------------------------------
      | Assetic Options
      |--------------------------------------------------------------------------
      |
      | Note: CacheBusting doesn't seem to work with seperate files yet.
      | It works fine when debug is false.
      |
     */
    'cachebusting'   => true,
    'options'        => array(
        'debug'              => \Config::get('app.debug'),
        'formulae_cache_dir' => storage_path() . '/cache/assetic',
        'auto_dump_assets'   => \Config::get('app.debug')
    ),
    /*
      |--------------------------------------------------------------------------
      | Filter Manager
      |--------------------------------------------------------------------------
      |
      | A filter manager is also provided for organizing filters.
      |
     */
    'filter_manager' => function(FilterManager $fm) {
// $fm->set('sass', new SassFilter('/path/to/parser/sass'));
// $fm->set('yui_css', new Yui\CssCompressorFilter('/path/to/yuicompressor.jar'));
},
    /*
      |--------------------------------------------------------------------------
      | Asset Manager
      |--------------------------------------------------------------------------
      |
      | An asset manager is provided for organizing assets.
      |
     */
    'asset_manager' => function(AssetManager $am) {
// $am->set('jquery', new FileAsset('/path/to/jquery.js'));
// $am->set('base_css', new GlobAsset('/path/to/css/*'));
},
    'path_to_web' => public_path(),
        //'path_to_source' => public_path(),  // When path_to_source is not set, it is the same as path_to_web
);
