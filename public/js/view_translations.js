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
 *  * @package    Files
 *  * @version    0.9.1
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 759);
/******/ })
/************************************************************************/
/******/ ({

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = './../../../';

var path = './../../../';

// EXTERNAL DEPS:
__webpack_require__(360);

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var translationsTable = {

        init: function init() {
            this.initTable();
        },
        bindEvents: function bindEvents() {
            $('.translation-new-row__icon, .translations-new-row__mobile #translations-new-row__add').on('click', this.addNewRow.bind(this));
            $('.translations-table').on('click', '.table-key__delete-row ', this.deleteRow.bind(this));
        },
        initTable: function initTable() {
            var firstRow = $('.translations-table tbody tr:first').remove()[0];
            var self = this;
            $.fn.dataTable.ext.errMode = 'none';
            this.translationsTable = $('.translations-table').DataTable({
                'bFilter': true,
                'iDisplayLength': 25,
                'bLengthChange': true,
                'bInfo': false,
                'order': [[1, 'asc']],
                'columnDefs': [{
                    responsivePriority: 0,
                    targets: -1
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
                'ajax': function ajax(data, callback, settings) {
                    var dtInstance = $(settings.oInstance),
                        loadingAvailable = self.loadingOverlayAvailable(),
                        instance = dtInstance.closest('.grid-stack-item-content').length > 0 ? dtInstance.closest('.grid-stack-item-content') : dtInstance.closest('.tbl-c');
                    if (instance.length > 0 && loadingAvailable) {
                        instance.LoadingOverlay('show');
                    }

                    settings.jqXHR = $.ajax({
                        "dataType": 'json',
                        "timeout": 20000,
                        "type": "POST",
                        "url": dtInstance.data('url'),
                        "data": data,
                        "success": callback
                    }).always(function (data) {
                        if (instance.length > 0 && loadingAvailable) {
                            instance.LoadingOverlay('hide');
                        }
                        $(document).trigger("datatablesLoaded", [dtInstance]);
                        self.zeroData(dtInstance);
                    });
                },
                "initComplete": function initComplete(settings, json) {
                    self.editCell();
                    self.initFirstRow(this.api());
                    $('.ps-container').perfectScrollbar('update');
                    self.initTableSearch(settings, this.api());
                    self.bindEvents();
                    self.mobileRow();
                    self.clearInputs();
                    self.searchBox();
                    self.countryFlags();
                    self.autosize();
                },
                "createdRow": function createdRow(row, data, index) {
                    $(row).addClass('translation-row');
                    $('td', row).eq(0).addClass('translation-row__counter');
                    $('td', row).eq(1).addClass('table-key table-key--key table-key--editable"');
                    $('td', row).eq(2).addClass('table-key table-key--editable table-key--translate').attr('data-cell-name', 'Translate');
                    $('td', row).eq(3).addClass('table-key table-key--compare').attr('data-cell-name', 'compare');
                    $('.ps-container').perfectScrollbar('update');
                },
                "drawCallback": function drawCallback() {
                    $('.translations-table tbody tr:first').before(firstRow);
                    autosize($('.table-key__input , .translation-new-row textarea'));
                },
                'fnRowCallback': function fnRowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {

                    if ($(nRow).find('.dt-actions').length <= 0) {
                        $(nRow).addClass('no-actions');
                    }
                },
                'columns': [{
                    'data': 'id',
                    'name': 'id',
                    'title': 'Id',
                    'searchable': false,
                    'orderable': false,
                    'class': 'no-sort',
                    'exportable': true,
                    'printable': true,
                    'footer': ''
                }, {
                    'data': 'key',
                    'name': 'key',
                    'title': 'Key',
                    'orderable': true,
                    'searchable': true,
                    'exportable': true,
                    'printable': true,
                    'footer': ''
                }, {
                    'data': 'value',
                    'name': 'value',
                    'title': 'Translation',
                    'orderable': true,
                    'searchable': true,
                    'exportable': true,
                    'printable': true,
                    'footer': ''
                }, {
                    'defaultContent': '',
                    'data': 'action',
                    'name': 'edit',
                    'title': '',
                    'render': null,
                    'orderable': false,
                    'searchable': false,
                    'exportable': false,
                    'printable': true,
                    'footer': '',
                    'class': 'inline'
                }]
            });
        },
        loadingOverlayAvailable: function loadingOverlayAvailable() {

            try {
                LoadingOverlay;
            } catch (e) {
                return false;
            }
            return true;
        },
        initTableSearch: function initTableSearch(settings, api) {
            var dtInstance = $(settings.oInstance);
            var input = dtInstance.closest('.grid-col--container').find('.header-translations .mdl-textfield__input');
            input.closest('form').submit(function (e) {
                api.search($(this).find('input:text').val()).draw();
                return false;
            });
        },

        clearInputs: function clearInputs() {

            $('#translations-new-row__cancel').on('click', function () {
                $('.translation-new-row #translation').val('');
                $('.translation-new-row #new-key').val('');
                $('.translation-new-row #translation, .translation-new-row #new-key ').removeClass('error');
            });
        },
        addNewRow: function addNewRow() {
            $('.translation-new-row #translation, .translation-new-row #new-key ').removeClass('error');
            var key = $('.translation-new-row #new-key').val();
            var keyHtml = ['<div class="table-key__mobile-open">', '<i class="zmdi zmdi-chevron-down"></i>', '</div>', '<div class="table-key__inner">', '<div class="table-key__text">' + key + '</div>', '<textarea name="nowrap" rows="1" name="text" class="table-key__input">', key, '</textarea>', '<div class="table-key__actions">', '<div class="table-key__remove"><i class="zmdi zmdi-close"></i></div>', '<div class="table-key__add"><i class="zmdi zmdi-check"></i></div>', '</div>', '<div class="table-key__init-edit">', '<i class="zmdi zmdi-edit"></i>', '</div>', '</div>'].join("\n");

            var translation = $('.translation-new-row #translation').val();

            var translateHtml = ['<div class="table-key__inner">', '<div class="table-key__text">' + translation + '</div>', '<textarea name="nowrap" rows="1" name="text" class="table-key__input">', translation, '</textarea>', '<div class="table-key__actions">', '<div class="table-key__remove"><i class="zmdi zmdi-close"></i></div>', '<div class="table-key__add"><i class="zmdi zmdi-check"></i></div>', '</div>', '<div class="table-key__init-edit">', '<i class="zmdi zmdi-edit"></i>', '</div>', '</div>'].join("\n");

            var compareHtml = ['<div class="table-key__inner">' + translation, '<div class="table-key__delete-row">', '<i class="zmdi zmdi-delete"></i>', '</div>', '</div>'].join("\n");

            if (translation.length == 0) {
                $('.translation-new-row #translation').addClass('error');
            }
            if (key.length == 0) {
                $('.translation-new-row #new-key').addClass('error');
            }
            if (translation.length == 0 || key.length == 0) {
                return;
            }
            this.translationsTable.row.add([1, keyHtml, translateHtml, compareHtml]).draw();
            this.translationsTable.push('Fini');

            $('.translation-new-row #new-key').val('');
            $('.translation-new-row #translation').val('');

            var container = $('.translations-container');
            $.ajax({
                url: container.attr('action'),
                method: 'POST',
                data: {
                    key: key,
                    translation: translation,
                    group: $('.translations-component').val()
                },
                success: function success(response) {
                    noty($.extend({}, APP.noti.successFM("xs", "glow"), { text: $(response.message).text() }));
                },
                error: function error(_error) {
                    noty($.extend({}, APP.noti.errorFM("xs", "glow"), { text: $(_error.message).text() }));
                }
            });
        },
        deleteRow: function deleteRow(event) {
            var current = $(event.currentTarget);
            this.translationsTable.row(current.closest('tr')).remove().draw();
            $('.ps-container').perfectScrollbar('update');

            $.ajax({
                url: current.data('url'),
                method: 'POST',
                data: { id: current.data('id') },
                success: function success(response) {
                    noty($.extend({}, APP.noti.successFM("xs", "glow"), { text: $(response.message).text() }));
                },
                error: function error(_error2) {
                    noty($.extend({}, APP.noti.errorFM("xs", "glow"), { text: $(_error2.message).text() }));
                }
            });
        },
        initFirstRow: function initFirstRow(api) {
            var template = $('template#new-row-template').html();
            $(template).appendTo($(api.columns().header()).parent().parent());
        },
        editCell: function editCell() {
            $('.translations-table').on('click', '.table-key .table-key__init-edit, .table-key .table-key__text', function (event) {
                var $parent = $(this).closest('.table-key'),
                    value = $parent.find('.table-key__text').text();
                $parent.toggleClass('table-key--edit');
                $parent.find('.table-key__input').val(value).change();
            });

            $('.translations-table').on('click', ' .table-key .table-key__remove', function (event) {
                var $parent = $(this).closest('.table-key');
                $parent.find('textarea').prop('type', 'hidden').val('');
                $parent.removeClass('table-key--edit');
            });

            $('.translations-table').on('click', '.table-key .table-key__add', function (event) {
                var $parent = $(this).closest('.table-key'),
                    $input = $parent.find('textarea'),
                    inputVal = $input.val();
                $parent.find('.table-key__text').text(inputVal);
                $parent.removeClass('table-key--edit');

                $.ajax({
                    url: $input.data('url'),
                    method: 'POST',
                    data: { id: $input.data('id'), value: inputVal },
                    success: function success(response) {
                        noty($.extend({}, APP.noti.successFM("xs", "glow"), { text: $(response.message).text() }));
                    },
                    error: function error(_error3) {
                        noty($.extend({}, APP.noti.errorFM("xs", "glow"), { text: $(_error3.message).text() }));
                    }
                });
            });
            $('.translations-table').on('change', '.table-key .table-key__input', function (event) {
                autosize.update($(this));
            });
        },
        mobileRow: function mobileRow() {
            $('.translations-table').on('click', '.table-key__mobile-open', function () {
                $(this).toggleClass('table-key__mobile-open--open');
                $(this).find('i').toggleClass('zmdi-chevron-up zmdi-chevron-down');
                $(this).closest('.translation-row').toggleClass('translation-row__mobile-open');
            });

            $('.translations-table').on('focus', '.translation-new-row__key #new-key', function () {
                $(this).closest('.translation-new-row').addClass('translation-new-row--mobile-active');
            });
        },
        autosize: function (_autosize) {
            function autosize() {
                return _autosize.apply(this, arguments);
            }

            autosize.toString = function () {
                return _autosize.toString();
            };

            return autosize;
        }(function () {
            autosize($('.table-key__input ,#translation-new-row #new-key, #translation-new-row #translation'));
            $(".table-key__input , #new-key").keydown(function (e) {
                if (e.keyCode == 13 && !e.shiftKey) {
                    e.preventDefault();
                }
            });
            $('.translations-table').on('focus', '.table-key__input', function () {
                autosize.update(this);
            });
        }),
        searchBox: function searchBox() {
            $('.search-box').find('.search-box__open').on('click', function () {
                $(this).closest('.search-box').addClass('search-box--open');
            });
            $('.search-box').find('.search-box__close').on('click', function () {
                $(this).closest('.search-box').removeClass('search-box--open');
            });
        },
        countryFlags: function countryFlags() {
            $('[data-flag-select-translations]').on('change', function () {
                var flag = $(this).find('option:selected').data('country');
                if ($(this).hasClass('header-translation__compare-select')) {
                    $(this).closest('.header-translation__compare').find('.ddown__init .flag-compare').attr('class', 'flag-icon flag-compare ' + 'flag-icon-' + flag);
                } else if ($(this).hasClass('header-translation__translate-select')) {
                    $(this).closest('.header-translation__compare').find('.ddown__init .flag-translate').attr('class', 'flag-icon flag-translate ' + 'flag-icon-' + flag);
                }
            });
        },
        zeroData: function zeroData(bTable) {
            this.loadingOverlayAvailable() ? bTable.closest('.tbl-c').LoadingOverlay('hide') : null;
            var cell = bTable.find('tbody td');
            var zeroElement = bTable.find('tbody .dataTables_empty');
            if (cell.length === 1 && zeroElement.length) {
                bTable.closest('.tbl-c').addClass('tbl-c--zd');
            }
        }
    };
    translationsTable.init();
})(undefined);

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

/******/ });