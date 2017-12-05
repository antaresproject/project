/*!
 * 
 *  * Part of the Antares Project package.
 *  *
 *  * NOTICE OF LICENSE
 *  *
 *  * Licensed under the 3-clause BSD License.
 *  *
 *  * This source file is subject to the 3-clause BSD License that is
 *  * bundled with this package in the LICENSE file.
 *  *
 *  * @package    Global
 *  * @version    0.9.2
 *  * @author     Antares Team
 *  * @license    BSD License (3-clause)
 *  * @copyright  (c) 2017, Antares Project
 *  * @link       http://antaresproject.io
 *  * 
 * 
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 693);
/******/ })
/************************************************************************/
/******/ ({

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(694);


/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
    var $params = {
        'options': {
            'bFilter': true,
            'iDisplayLength': 25,
            'bLengthChange': true,
            'bInfo': false,
            'rowReorder': false,
            'columnDefs': [{
                'width': '20%',
                'targets': 0
            }],
            'serverSide': true,
            'dom': '<\"dt-area-top\"i>rt<\"dt-area-bottom pagination pagination--type2\" fpL><\"clear\">',
            'responsive': true,
            'bProcessing': false,
            'processing': false,
            'oLanguage': {
                'oPaginate': {
                    'sPrevious': '<i class=\'zmdi zmdi-long-arrow-left dt-pag-left\'><\/i>',
                    'sNext': '<i class=\'zmdi zmdi-long-arrow-right dt-pag-right\'><\/i>'
                },
                'sLengthMenu': '_MENU_'
            },
            'lengthMenu': [[10, 25, 50], [10, 25, 50]],
            'deferLoading': 0,
            'order': [[0, 'desc']],
            'aoColumnDefs': [{
                'width': '5%',
                'targets': 0
            }, {
                'width': '10%',
                'targets': 6
            }],
            'sEmptyTable': '<div class=\"zd zd--lg\">\n    <div class=\"zd__header\">\n        <i class=\"zmdi zmdi-block  mdc-text-red\"><\/i>\n    <\/div>\n    <div class=\"zd__content\">\n        <div class=\"zd__title\">No data available.<\/div>\n        <div class=\"zd__description\">\n            There are no records to show right now. <br />There may be no entries or your filters may be too tightly defined.\n        <\/div>            \n    <\/div>\n    <div class=\"zd__footer\">\n        <a href=\"/\" class=\"btn btn--primary btn--zd mdl-js-button mdl-js-ripple-effect\">Dashboard<\/a>\n    <\/div>\n<\/div>',
            'ajax': function ajax(data, callback, settings) {
                if (data.draw === 1) {
                    data.columns = [{
                        'data': 'id',
                        'name': 'id',
                        'searchable': true,
                        'orderable': true,
                        'search': {
                            'value': '',
                            'regex': false
                        }
                    }, {
                        'data': 'firstname',
                        'name': 'firstname',
                        'searchable': true,
                        'orderable': true,
                        'search': {
                            'value': '',
                            'regex': false
                        }
                    }, {
                        'data': 'lastname',
                        'name': 'lastname',
                        'searchable': true,
                        'orderable': true,
                        'search': {
                            'value': '',
                            'regex': false
                        }
                    }, {
                        'data': 'email',
                        'name': 'email',
                        'searchable': true,
                        'orderable': true,
                        'search': {
                            'value': '',
                            'regex': false
                        }
                    }, {
                        'data': 'created_at',
                        'name': 'created_at',
                        'searchable': true,
                        'orderable': true,
                        'search': {
                            'value': '',
                            'regex': false
                        }
                    }, {
                        'data': 'status',
                        'name': 'status',
                        'searchable': true,
                        'orderable': true,
                        'search': {
                            'value': 1,
                            'regex': true
                        }
                    }, {
                        'data': 'sample_module',
                        'name': 'sample_module',
                        'searchable': true,
                        'orderable': true,
                        'search': {
                            'value': '',
                            'regex': false
                        }
                    }, {
                        'data': 'action',
                        'name': 'action',
                        'searchable': false,
                        'orderable': false,
                        'search': {
                            'value': '',
                            'regex': false
                        }
                    }];
                }

                var dtInstance = $(settings.oInstance);
                var instance = dtInstance.closest('.grid-stack-item-content').length > 0 ? dtInstance.closest('.grid-stack-item-content') : dtInstance.closest('.tbl-c');

                settings.jqXHR = $.ajax({
                    "dataType": 'json',
                    "timeout": 20000,
                    "type": "GET",
                    "url": "api/users.json",
                    "data": data,
                    "success": callback
                }).always(function (data) {

                    window.antaresEvents.emit('dt_data_loaded', dtInstance);
                    $(document).trigger("datatablesLoaded", [dtInstance]);
                });
            },
            'columns': [{
                'data': 'id',
                'name': 'id',
                'title': '#ID',
                'orderable': true,
                'searchable': true,
                'exportable': true,
                'printable': true,
                'footer': ''
            }, {
                'data': 'firstname',
                'name': 'firstname',
                'title': 'Firstname',
                'className': 'bolded',
                'orderable': true,
                'searchable': true,
                'exportable': true,
                'printable': true,
                'footer': ''
            }, {
                'data': 'lastname',
                'name': 'lastname',
                'title': 'Lastname',
                'className': 'bolded',
                'orderable': true,
                'searchable': true,
                'exportable': true,
                'printable': true,
                'footer': ''
            }, {
                'data': 'email',
                'name': 'email',
                'title': 'E-mail Address',
                'className': 'bolded',
                'orderable': true,
                'searchable': true,
                'exportable': true,
                'printable': true,
                'footer': ''
            }, {
                'data': 'created_at',
                'name': 'created_at',
                'title': 'Created At',
                'orderable': true,
                'searchable': true,
                'exportable': true,
                'printable': true,
                'footer': ''
            }, {
                'data': 'status',
                'name': 'status',
                'title': 'Status',
                'orderable': true,
                'searchable': true,
                'exportable': true,
                'printable': true,
                'footer': ''
            }, {
                'data': 'sample_module',
                'name': 'sample_module',
                'title': 'Sample Module Items',
                'orderable': true,
                'searchable': true,
                'exportable': true,
                'printable': true,
                'footer': ''
            }, {
                'defaultContent': '',
                'data': 'action',
                'name': 'action',
                'title': '',
                'render': null,
                'orderable': false,
                'searchable': false,
                'exportable': false,
                'printable': true,
                'footer': '',
                'class': 'mass-actions dt-actions',
                'filterable': false
            }]
        }
    };

    $(document).ready(function () {

        $('.grid-stack-item-content').each(function (index, item) {
            ++index;
            $.ajax({
                method: 'GET',
                url: $(item).data('url'),
                success: function success(response) {
                    $(item).html(response);
                    window.antaresEvents.emit('dt_reinit', $('#dataTableBuilder' + index), $params.options);
                }
            });
        });
    });
});

/***/ })

/******/ });