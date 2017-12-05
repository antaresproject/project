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
/******/ 	return __webpack_require__(__webpack_require__.s = 687);
/******/ })
/************************************************************************/
/******/ ({

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(688);


/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


ready('.datatable-disable-selected-filter', function (element) {
    $(element).click(function (e) {
        e.preventDefault();
        var overlayed = $(this).closest('.tbl-c');
        if (!overlayed.length) {
            overlayed = $(this).closest('.card');
        }

        var element = $(this),
            handler = element.parent(),
            table = element.parents('.tbl-c').find('[data-table-init]'),
            container = element.closest('.ddown--filter-edit');
        var url = $(this).data('url') !== undefined && $(this).data('url').length > 0 ? $(this).data('url') : $('input.datatables-filter-destroy').val();

        $.ajax({
            url: url,
            data: {
                route: handler.attr('route'),
                params: {
                    column: handler.attr('column'),
                    value: handler.attr('value')
                }
            },
            type: 'GET',
            success: function success(response) {
                var logs = handler.closest('.card--logs');
                container.remove();
                table.dataTable().api().draw();
                $('.filter-container select').removeAttr('disabled');

                if (logs.length) {
                    var url = logs.find('.card-ctrls').data('url');
                    $.ajax({
                        url: url,
                        success: function success(response) {
                            var childrens = $(response).closest('.widget-ajax-response').children().length;
                            if (childrens > 1) {
                                logs.closest('.grid-stack-item-content').find('.card__content').html($(response).closest('.widget-ajax-response').html());
                            } else {
                                var classname = $(response).attr('class').split(' ')[0],
                                    container = logs.closest('.' + classname);
                                if (container.length > 0) {
                                    container.html($(response).html());
                                }
                            }
                            $('.filter-container select[name=' + handler.attr('column') + ']').select2();
                        }
                    });
                }
            }
        });
        window.antaresEvents.emit('filters.delete', this);
        return false;
    });
});

$(document).ready(function () {
    ready('.add-select-filter-button', function (element) {
        bindButton(element);
    });
    ready('.card-filter select', function (element) {
        var column = $(element).closest('.card-filter').find('div[column]').attr('column');
        $(element).on("change", function (evt) {
            $('.filter-container select[name=' + column + ']').val($(this).val()).trigger("change");
        });

        bindSelect($(element));
    });
    function bindButton(button) {
        $(button).on('click', function (e) {
            var container = $(button).closest('.filter-container');
            if (container.length > 0) {
                var column = container.find('.filter-config').attr('column');

                if ($(button).closest('.grid-stack-item-content').find('.swiper-container .dropjs-target[column="' + column + '"]').length > 0) {
                    return false;
                }
            }

            var element = $(this);
            e.preventDefault();
            var overlay = $(this).closest('.grid-stack-item-content'),
                table = null;

            if (overlay.length <= 0) {
                overlay = $(this).closest('.tbl-c');
            }
            table = overlay.find('[data-table-init]');

            var handler = $(this),
                filterContainer = null,
                classname = null,
                column = null,
                select = $(this).closest('.filter-content').find('select');

            var values = select.val();
            if ($(this).closest('.filter-config').length > 0) {
                classname = handler.closest('.filter-config').data('classname');
                column = handler.closest('.filter-config').attr('column');
            } else {
                filterContainer = element.last().closest('.filter-container');
                classname = filterContainer.find('input.classname').attr('value');
                column = filterContainer.find('.filter-group-column').val();
            }
            if (!$('#filter-save-url').length) {
                return false;
            }

            $.ajax({
                url: 'api/filter_status.html', //$('#filter-save-url').data('url'),
                type: 'GET',
                data: {
                    classname: classname,
                    params: {
                        column: column,
                        value: values
                    }
                },
                success: function success(response) {

                    if (handler.closest('.drop-content').length) {
                        window.antaresEvents.emit('filters.update', element, table, response);
                    } else {
                        window.antaresEvents.emit('filters.append', element, table, response);
                    }

                    //                    var logs = element.closest('.card--logs');
                    //
                    //                    $('.card-filter div[column=' + column + ']').parent().remove();
                    //                    $('.card-filter').append(response);
                    //                    
                    //
                    //                    console.log($('.card-filter'));
                    //                    return false;
                    //
                    //                    bindSelect($('.card-filter div[column=' + column + ']').parent().find('select'));
                    //                    if ($('div[column=' + column + '] span').text().length <= 0) {
                    //                        $('div[column=' + column + '] i').trigger('click');
                    //                    }
                    //                    if (table !== null) {
                    //                        table.dataTable().api().draw();
                    //                    }

                    //                    if (logs.length) {
                    //
                    //                        var url = logs.find('.card-ctrls').data('url');
                    //                        $.ajax({
                    //                            url: url,
                    //                            success: function (response) {
                    //                                var childrens = $(response).closest('.widget-ajax-response').children().length;
                    //                                if (childrens > 1) {
                    //                                    element.closest('.grid-stack-item-content').find('.card__content').html($(response).closest('.widget-ajax-response').html());
                    //                                } else {
                    //                                    var classname = $(response).attr('class').split(' ')[0], container = logs.closest('.' + classname);
                    //                                    if (container.length > 0) {
                    //                                        container.html($(response).html());
                    //                                    }
                    //                                }
                    //
                    //                                bindSelect($('.filter-container select[name=' + column + ']'));
                    //                            }
                    //                        })
                    //                    }
                }
            });

            return false;
        });
    }

    function bindSelect(element) {
        if (element.length > 0) {
            element.select2();
        }
    }
});
ready('.filter-multiple-select', function (element) {
    $(element).select2();
});

/***/ })

/******/ });