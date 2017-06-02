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
/******/ 	return __webpack_require__(__webpack_require__.s = 750);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = './../../../';

// EXTERNAL DEPS:
// var $ = require("script-loader!./../../../js/external/jquery.js");
// window.$ = $;
__webpack_require__(275); // css in package
__webpack_require__(278);
// require('script-loader!jquery-validation'); //no css
__webpack_require__(141); // css in package
__webpack_require__(139);
// require('script-loader!php-date-formatter'); //no css
__webpack_require__(276);
__webpack_require__(277);

//CORE ANTARES
__webpack_require__(129);

// require("dialog-polyfill/dialog-polyfill.css");
// require("jquery-modal/jquery.modal.css");
// require('./../../js/external/modified/yii_forms.js');
// require("jquery-datetimepicker/jquery.datetimepicker.css");
// require("select2/dist/css/select2.css");
//wyjeabne by luaksh below - trzeba wywalic z forms

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Part of the Antares Project package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Files
 * @version    0.9.0
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 * 

 */

var AntaresForms = {
    init: function init() {

        var self = this;

        this.helpers();

        (function UiElements() {

            self.elements.select();
            self.elements.readOnly();
            self.elements.spinner();
            self.elements.tooltip();
            self.elements.checkboxesAndRadios();
            self.elements.search();
            self.elements.datePicker();
            self.elements.rangeSlider();
        })();

        // VERIFY IF NEEDED

        //wait, damnit! for the dom!
        setTimeout(function () {

            ready('select', function (element) {
                window.AntaresForms.elements.select();
            });
        }, 7000);

        //MDL reinit
        componentHandler.upgradeAllRegistered();
    },
    helpers: function helpers() {

        $(window).on('resize', function () {
            $('select').select2('close');
        });

        function menuAsideRWD() {

            var mobileMenu = $('.menu-mobile-settings');

            //restrain
            if (!mobileMenu.length) {
                return;
            }

            mobileMenu.find('option').remove();
            var groups = [];

            $('.menu-aside li').each(function (index, el) {

                var link = $(this).find('> a').attr('href');
                var text = $(this).find('> a > span').eq(0).text();

                //validate if not empty 
                if (!$(this).hasClass('menu-aside__title')) {

                    //if has submenu
                    if ($(this).hasClass('has-submenu')) {

                        //  create optgroup if none
                        if (!$('optgroup[label="' + text + '"').length) {

                            mobileMenu.append('<optgroup label="' + text + '"></optgroup>');
                            groups.push(text);
                        }

                        //deal with submenu children  
                    } else if ($(this).parent('.menu-aside__submenu').length) {

                        mobileMenu.find('optgroup[label=' + groups[0] + ']').append('<option value="' + link + '">' + text + '</option>');
                    }

                    //normal options
                    else {

                            groups = [];
                            mobileMenu.append('<option value="' + link + '">' + text + '</option>');
                        }
                }
            });
        }

        menuAsideRWD();
    },


    elements: {
        select: function select() {

            //select close on remove option - fix

            var $element = $('select');

            $element.on('select2:unselect', function (e) {

                var $self = $(this);

                //tmp
                if ($self.closest('.ddown-multi__submenu').length) {

                    e.preventDefault();

                    setTimeout(function () {

                        $self.closest('.ddown-multi__submenu').css('display', 'block');
                    }, 10);
                }

                function cancelAndRemove(event) {
                    event.preventDefault();
                    removeEvents();
                }

                function removeEvents() {
                    $element.off('select2:opening', cancelAndRemove);
                    $element.off('select2:closing', cancelAndRemove);
                }

                $element.on('select2:opening', cancelAndRemove);

                $element.on('select2:closing', cancelAndRemove);
                setTimeout(removeEvents, 0);
            });

            (function select2() {
                //select2 - better, faster, harder, stronger

                var select2Base = {
                    width: '100%',
                    dropdownAutoWidth: true,
                    // placeholder: 'Select an option',
                    theme: "selectAR",
                    allowClear: true,
                    //disable search below
                    minimumResultsForSearch: Infinity
                };

                // $.fn.select2.defaults.set("theme", "AR");

                $('[data-selectAR]').select2(select2Base).on("change", function (e) {

                    //validation if needed
                    if ($(this).closest('.form-validation').length) {
                        // $(this).valid();
                    }
                    $(this).closest('.input-field').removeClass('error');
                });

                //WITH SEARCH
                $('[data-selectAR--search]').select2($.extend({}, select2Base, {
                    minimumResultsForSearch: 1
                })).on("change", function (e) {

                    //validation if needed
                    if ($(this).closest('.form-validation').length) {
                        // $(this).valid();
                    }
                    $(this).closest('.input-field').removeClass('error');
                });

                //MDL
                $('[data-selectAR--mdl]').select2($.extend({}, select2Base, {
                    theme: "mdl"
                })).on("change", function (e) {

                    //validation if needed
                    if ($(this).closest('.form-validation').length) {
                        // $(this).valid();
                    }
                    $(this).closest('.input-field').removeClass('error');
                });

                //MDL big
                $('[data-selectAR--mdl-big]').select2($.extend({}, select2Base, {
                    theme: "mdl-big"
                })).on("change", function (e) {

                    //validation if needed
                    if ($(this).closest('.form-validation').length) {
                        // $(this).valid();
                    }
                    $(this).closest('.input-field').removeClass('error');
                });
                //MDL short (v2)
                $('[data-selectAR--mdl-short]').select2($.extend({}, select2Base, {
                    theme: "mdl-short"
                })).on("change", function (e) {

                    //validation if needed
                    if ($(this).closest('.form-validation').length) {
                        // $(this).valid();
                    }
                    $(this).closest('.input-field').removeClass('error');
                });

                //Select - tags
                $('[data-selectAR--tags]').select2($.extend({}, select2Base, {
                    theme: "tags"
                })).on("change", function (e) {

                    //validation if needed
                    if ($(this).closest('.form-validation').length) {
                        // $(this).valid();
                    }
                    $(this).closest('.input-field').removeClass('error');
                });

                //Select - custom input (tags with 1 option)
                $('[data-selectAR--custom-input]').select2($.extend({}, select2Base, {
                    createTag: function createTag(term, data) {
                        if ($(data).filter(function () {
                            return this.text.localeCompare(term) === 0;
                        }).length === 0) {
                            return {
                                text: term,
                                id: '123'
                            };
                        }
                    },
                    multiple: true,
                    tags: true,
                    theme: "custom-input",
                    maximumSelectionLength: 1
                })).on("change", function (e) {

                    //validation if needed
                    if ($(this).closest('.form-validation').length) {
                        // $(this).valid();
                    }
                    $(this).closest('.input-field').removeClass('error');
                });

                //https://github.com/select2/select2/issues/3901
                // $('[data-selectAR]').select2(select2Base);
                // //https://github.com/select2/select2/issues/3901
                //Flags integration
                //on init

                $('select[data-flag-select]').each(function (index, el) {

                    if ($(this).find('option:selected').length) {

                        var flag = $(this).find('option:selected').data('country');
                    } else {

                        return false;
                    }

                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });

                $('select[data-flag-select], [data-flag-select-translations]').on('change', function () {

                    if ($(this).find('option:selected').length) {

                        var flag = $(this).find('option:selected').data('country');
                    } else {

                        return false;
                    }

                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });

                //on init
                $('[data-flag-select]').select2({
                    minimumResultsForSearch: Infinity,
                    templateResult: function templateResult(data, container) {
                        if (data.element && data.element.attributes["data-country"]) {
                            // console.log(data);
                            var flagCode = data.element.attributes["data-country"].nodeValue;
                            var flagHtml = '';
                            flagHtml += '<span class="flag-icon flag-icon-' + flagCode + '"></span>';
                            var html = $.parseHTML(flagHtml);
                            // console.log($(container));
                            // $(container).append(flagHtml);
                            // $(container).prepend(data.text);
                            var $state = $('<span class="flag-icon flag-icon-' + flagCode + '"></span><span>' + data.text + '</span>');
                            return $state;
                        } else {

                            return data.text;
                        }
                    }

                });

                //on init
                $('[data-flag-select-translations]').select2({

                    theme: 'translations',
                    templateResult: function templateResult(data, container) {
                        if (data.element && data.element.attributes["data-country"]) {
                            // console.log(data);
                            var flagCode = data.element.attributes["data-country"].nodeValue;
                            var flagHtml = '';
                            flagHtml += '<span class="flag-icon flag-icon-' + flagCode + '"></span>';
                            var html = $.parseHTML(flagHtml);
                            // console.log($(container));
                            // $(container).append(flagHtml);
                            // $(container).prepend(data.text);
                            var $state = $('<span class="flag-icon flag-icon-' + flagCode + '"></span><span>' + data.text + '</span>');
                            return $state;
                        } else {

                            return data.text;
                        }
                    }

                });

                //on init
                // Flag integration with search

                $('select[data-flag-select--search]').each(function (index, el) {

                    if ($(this).find('option:selected').length) {
                        var flag = $(this).find('option:selected').data('country');
                    } else {
                        return false;
                    }

                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });

                $('select[data-flag-select-translations]').each(function (index, el) {

                    if ($(this).find('option:selected').length) {
                        var flag = $(this).find('option:selected').data('country');
                    } else {
                        return false;
                    }
                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });

                $('[data-flag-select--search]').select2({
                    minimumResultsForSearch: 1,
                    closeOnSelect: false,
                    templateResult: function templateResult(data, container) {

                        if (data.element && data.element.attributes["data-country"]) {

                            // console.log(data);
                            var flagCode = data.element.attributes["data-country"].nodeValue;
                            var flagHtml = '';
                            flagHtml += '<span class="flag-icon flag-icon-' + flagCode + '"></span>';
                            var html = $.parseHTML(flagHtml);
                            // console.log($(container));
                            // $(container).append(flagHtml);
                            // $(container).prepend(data.text);
                            var $state = $('<span class="flag-icon flag-icon-' + flagCode + '"></span><span>' + data.text + '</span>');
                            return $state;
                        } else {

                            return data.text;
                        }
                    }

                });

                $('select[data-flag-select--search]').on('change', function () {

                    if ($(this).find('option:selected').length) {

                        var flag = $(this).find('option:selected').data('country');
                    } else {

                        return false;
                    }

                    $(this).siblings('.input-field__icon').find('.flag-icon').attr('class', 'flag-icon ' + 'flag-icon-' + flag);
                });
            })();

            // prefix control

            $('select').each(function (index, el) {

                if ($(this).attr('data-prefix')) {

                    if (!$(this).next('.select2').find('.select__prefix').length) {

                        var prefixValue = $(this).data('prefix');
                        // $(this).siblings('.select2').find('.select2-selection__rendered').attr('data-prefix', prefixValue );
                        $(this).next('.select2').find('.select2-selection__rendered').prepend('<span class="select__prefix">' + prefixValue + '</span>');

                        $(this).on('change', function () {
                            $(this).next('.select2').find('.select2-selection__rendered').prepend('<span class="select__prefix">' + prefixValue + '</span>');
                        });
                    }
                }
            });
        },
        rangeSlider: function rangeSlider() {

            var slider = $('[data-slider]'),
                rangeSlider = $('[data-slider-range]');

            slider.slider({
                range: "min",
                slide: function slide(event, ui) {

                    //if validation - must contain sibling input
                    if ($(this).siblings('.slider-val').length) {
                        $(this).siblings('.slider-val').val(ui.value);
                        // $(this).siblings('.slider-val').valid();
                    }
                }

            });

            rangeSlider.slider({
                range: true,
                min: 0,
                max: 3000,
                values: [575, 2000],
                slide: function slide(event, ui) {
                    // $(this).find("#ds1").spinner("value", ui.values[0]);
                    // $(this).find("#ds2").spinner("value", ui.values[1]);
                }
            });
        },
        datePicker: function datePicker() {

            var dateRangeOptionsDashboard = {
                datepickerOptions: {
                    numberOfMonths: 2,
                    mirrorOnCollision: true, //
                    verticalOffset: 0
                }
            };

            //range
            $('[data-daterangepicker]').daterangepicker({
                onOpen: function onOpen() {
                    if ($('button').hasClass('comiseo-daterangepicker-bottom')) {
                        $('.comiseo-daterangepicker').addClass('arrow-bottom').removeClass('arrow-top');
                    } else {
                        $('.comiseo-daterangepicker').addClass('arrow-top').removeClass('arrow-bottom');
                    }
                }
            });

            $('.page-dashboard [data-daterangepicker]').daterangepicker($.extend({}, dateRangeOptionsDashboard, {
                initialText: 'Select time period to analize'
            }));

            //Screen Size <768
            enquire.register("screen and (max-width:768px)", {
                match: function match() {

                    $('.page-dashboard [data-daterangepicker]').daterangepicker('destroy');
                    $('.page-dashboard [data-daterangepicker]').daterangepicker($.extend({}, dateRangeOptionsDashboard, {
                        initialText: 'Select time period to analize'
                    }));
                }
            });

            // class cleanup
            var classesToRemove = ['ui-button', 'ui-widget', 'ui-state-default', 'ui-corner-all', 'ui-button-text-only'];

            var $target = $('.comiseo-daterangepicker-buttonpanel button');
            $.each(classesToRemove, function (i, v) {
                $target.removeClass(v);
            });
            $target.mouseover(function () {
                $(this).removeClass("ui-state-hover");
            });

            // time
            var timepicker = $('[data-timepicker]'),
                datepicker = $('[data-datepicker]'),
                datetimepicker = $('[data-datetimepicker]');

            timepicker.datetimepicker({
                datepicker: false,
                format: 'H:i'
            });
            $(window).scroll(function () {
                $('.xdsoft_datetimepicker').css('display', 'none');
            });
            datepicker.datetimepicker({
                timepicker: false,
                format: 'd.m.Y'
            });

            datetimepicker.datetimepicker({
                datepicker: true
            });

            $.datetimepicker.setLocale('en');

            // alt datepicker

            if ($('[data-alt-datepicker]').length) {

                $('[data-alt-datepicker]').bootstrapMaterialDatePicker({
                    switchOnClick: true,
                    weekStart: 0,
                    time: false
                });
            }

            if ($('[data-alt-timepicker]').length) {

                $('[data-alt-timepicker]').bootstrapMaterialDatePicker({
                    switchOnClick: true,
                    date: false
                });
            }

            if ($('[data-alt-datetimepicker]').length) {

                $('[data-alt-datetimepicker]').bootstrapMaterialDatePicker({
                    switchOnClick: true,
                    format: 'dddd DD MMMM YYYY - HH:mm'
                });
            }
        },
        search: function search() {

            var search = $('.main-head '),
                searchSingle = $('.main-head .search-box'),
                trigger = $('.main-head .search-box > i:first-child'),
                close = $('.main-head .search-box .search-box__close');

            //Screen Size <768
            enquire.register("screen and (max-width:768px)", {
                match: function match() {

                    $(document).on('click', '.main-head .search-box > i:first-child', function (e) {
                        $('.main-head').toggleClass('main-head--mobile--search');
                        searchSingle.addClass('search-box--toggled');

                        $(this).closest('.search-box').find('.search-box__mdl-textfield input').focus();
                    });

                    $(document).on('click', '.main-head .search-box .search-box__close', function (e) {
                        $('.main-head').toggleClass('main-head--mobile--search');
                        $(this).closest('.search-box').removeClass('search-box--toggled');
                    });
                },
                unmatch: function unmatch() {

                    search.show();
                    $('.main-head').removeClass('main-head--mobile--search');
                    // search.toggleClass('search-box--toggled');

                    $(document).on('click', '.main-head .search-box i:first-child', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    });
                }
            });

            //closable modificator action

            $('.search-box--closable').on('click', '.search-box__close', function () {

                $(this).closest('.search-box').find('.search-box__search-field').val('');
                $(this).hide();
            });

            $('.search-box--closable .search-box__search-field').on('input', function () {

                if ($(this).val().length === 0) {

                    $(this).closest('.search-box').find('.search-box__close').hide();
                } else {

                    $(this).closest('.search-box').find('.search-box__close').show();
                }
            });
        },
        checkboxesAndRadios: function checkboxesAndRadios() {

            // init only when needed
            $('[data-icheck="true"]').each(function (index, el) {
                if (!$(this).closest('.icheckbox_billevo').length) {
                    $(this).iCheck({
                        checkboxClass: 'icheckbox_billevo',
                        radioClass: 'iradio_billevo',
                        increaseArea: '30%'
                    });
                }
            });
        },
        tooltip: function tooltip() {

            enquire.register("screen and (min-width:767px)", {

                match: function match() {

                    $('[data-tooltip="true"]').each(function () {
                        // Notice the .each() loop, discussed below
                        $(this).qtip({
                            style: {
                                classes: 'ar',
                                tip: {
                                    width: 9,
                                    height: 5
                                }
                            },
                            content: {
                                text: $(this).next('div.tooltip-content') // Use the "div" element next to this for the content
                            },
                            position: {

                                viewport: $(window),
                                adjust: {
                                    method: 'shift'
                                }

                            },
                            show: {
                                effect: function effect(offset) {
                                    $(this).fadeIn(300); // "this" refers to the tooltip
                                }
                            },
                            hide: {
                                effect: function effect(offset) {
                                    $(this).fadeOut(300); // "this" refers to the tooltip
                                }
                            },
                            events: {
                                show: function show(event, api) {
                                    var $el = $(api.elements.target[0]);
                                    $el.qtip('option', 'position.my', $el.data('tooltip-my-position') == undefined ? 'top center' : $el.data('tooltip-my-position'));
                                    $el.qtip('option', 'position.at', $el.data('tooltip-target-position') == undefined ? 'bottom center' : $el.data('tooltip-target-position'));
                                }
                            }
                        });
                    });

                    //inline implementation

                    $('[data-tooltip-inline!=""]').qtip({
                        style: {
                            classes: 'ar',
                            tip: {
                                width: 9,
                                height: 5
                            }
                        },
                        position: {
                            // my: 'top center', // Position my top left...
                            // at: 'bottom center', // at the bottom right of...
                            // viewport: $('.main-content'),
                            viewport: $(window),
                            adjust: {
                                method: 'shift'
                            }

                        },
                        content: {
                            attr: 'data-tooltip-inline'
                        },
                        show: {
                            effect: function effect(offset) {
                                // console.log('show')  issue #256
                                $(this).fadeIn(300); // "this" refers to the tooltip
                            }
                        },
                        hide: {
                            // event:'click',     issue #256
                            effect: function effect(offset) {
                                // console.log('hide')  issue #256
                                $(this).fadeOut(300); // "this" refers to the tooltipc1
                            }
                        },

                        events: {
                            show: function show(event, api) {
                                var $el = $(api.elements.target[0]);
                                $el.qtip('option', 'position.my', $el.data('tooltip-my-position') == undefined ? 'top center' : $el.data('tooltip-my-position'));
                                $el.qtip('option', 'position.at', $el.data('tooltip-target-position') == undefined ? 'bottom center' : $el.data('tooltip-target-position'));

                                // $(document).one("click", function() { $(".item-grp-single").qtip('hide'); });  issue #256
                            }

                        }

                    });
                },

                unmatch: function unmatch() {
                    $('[data-hasqtip]').each(function (index, el) {
                        $(this).qtip('destroy');
                    });
                }
            });
        },
        spinner: function spinner() {

            $('[data-spinner="true"]').spinner({
                min: 0,
                max: 3000,
                start: 0,
                culture: "en-US",
                step: 1,
                numberFormat: "C"
            });
        },
        readOnly: function readOnly() {

            // readonly state
            //checkbox
            $('.form-block').each(function (index, el) {

                var self = $(this);

                self.find('input[readonly]').on('ifChecked', function (e) {
                    setTimeout(function () {

                        self.find('input[readonly]').iCheck('uncheck');
                    }, 50);
                });
            });

            //swittch
            $('.switch-checkbox[readonly]').on('click', function () {
                return false;
            });
        }
    }

};

$(function () {
    window.AntaresForms = AntaresForms;
    AntaresForms.init();
});

// $(window).on('load', function() {
//     AntaresForms.whenWindowLoadIsNeeded();
// });

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://raw.githubusercontent.com/T00rk/bootstrap-material-datetimepicker/gh-pages/js/bootstrap-material-datetimepicker.js

(function ($, moment) {
    var pluginName = "bootstrapMaterialDatePicker";
    var pluginDataName = "plugin_" + pluginName;

    moment.locale('en');

    function Plugin(element, options) {
        this.currentView = 0;

        this.minDate;
        this.maxDate;

        this._attachedEvents = [];

        this.element = element;
        this.$element = $(element);

        this.params = {
            date: true,
            time: true,
            format: 'YYYY-MM-DD',
            minDate: null,
            maxDate: null,
            currentDate: null,
            lang: 'en',
            weekStart: 0,
            shortTime: false,
            clearButton: false,
            nowButton: false,
            cancelText: 'Cancel',
            okText: 'OK',
            clearText: 'Clear',
            nowText: 'Now',
            switchOnClick: false,
            triggerEvent: 'focus'
        };
        this.params = $.fn.extend(this.params, options);

        this.name = "dtp_" + this.setName();
        this.$element.attr("data-dtp", this.name);

        moment.locale(this.params.lang);

        this.init();
    }

    $.fn[pluginName] = function (options, p) {
        this.each(function () {
            if (!$.data(this, pluginDataName)) {
                $.data(this, pluginDataName, new Plugin(this, options));
            } else {
                if (typeof $.data(this, pluginDataName)[options] === 'function') {
                    $.data(this, pluginDataName)[options](p);
                }
                if (options === 'destroy') {
                    delete $.data(this, pluginDataName);
                }
            }
        });
        return this;
    };

    Plugin.prototype = {
        init: function init() {
            this.initDays();
            this.initDates();

            this.initTemplate();

            this.initButtons();

            this._attachEvent($(window), 'resize', this._centerBox.bind(this));
            this._attachEvent(this.$dtpElement.find('.dtp-content'), 'click', this._onElementClick.bind(this));
            this._attachEvent(this.$dtpElement, 'click', this._onBackgroundClick.bind(this));
            this._attachEvent(this.$dtpElement.find('.dtp-close > a'), 'click', this._onCloseClick.bind(this));
            this._attachEvent(this.$element, this.params.triggerEvent, this._fireCalendar.bind(this));
        },
        initDays: function initDays() {
            this.days = [];
            for (var i = this.params.weekStart; this.days.length < 7; i++) {
                if (i > 6) {
                    i = 0;
                }
                this.days.push(i.toString());
            }
        },
        initDates: function initDates() {
            if (this.$element.val().length > 0) {
                if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                    this.currentDate = moment(this.$element.val(), this.params.format).locale(this.params.lang);
                } else {
                    this.currentDate = moment(this.$element.val()).locale(this.params.lang);
                }
            } else {
                if (typeof this.$element.attr('value') !== 'undefined' && this.$element.attr('value') !== null && this.$element.attr('value') !== "") {
                    if (typeof this.$element.attr('value') === 'string') {
                        if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                            this.currentDate = moment(this.$element.attr('value'), this.params.format).locale(this.params.lang);
                        } else {
                            this.currentDate = moment(this.$element.attr('value')).locale(this.params.lang);
                        }
                    }
                } else {
                    if (typeof this.params.currentDate !== 'undefined' && this.params.currentDate !== null) {
                        if (typeof this.params.currentDate === 'string') {
                            if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                                this.currentDate = moment(this.params.currentDate, this.params.format).locale(this.params.lang);
                            } else {
                                this.currentDate = moment(this.params.currentDate).locale(this.params.lang);
                            }
                        } else {
                            if (typeof this.params.currentDate.isValid === 'undefined' || typeof this.params.currentDate.isValid !== 'function') {
                                var x = this.params.currentDate.getTime();
                                this.currentDate = moment(x, "x").locale(this.params.lang);
                            } else {
                                this.currentDate = this.params.currentDate;
                            }
                        }
                        this.$element.val(this.currentDate.format(this.params.format));
                    } else this.currentDate = moment();
                }
            }

            if (typeof this.params.minDate !== 'undefined' && this.params.minDate !== null) {
                if (typeof this.params.minDate === 'string') {
                    if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                        this.minDate = moment(this.params.minDate, this.params.format).locale(this.params.lang);
                    } else {
                        this.minDate = moment(this.params.minDate).locale(this.params.lang);
                    }
                } else {
                    if (typeof this.params.minDate.isValid === 'undefined' || typeof this.params.minDate.isValid !== 'function') {
                        var x = this.params.minDate.getTime();
                        this.minDate = moment(x, "x").locale(this.params.lang);
                    } else {
                        this.minDate = this.params.minDate;
                    }
                }
            } else if (this.params.minDate === null) {
                this.minDate = null;
            }

            if (typeof this.params.maxDate !== 'undefined' && this.params.maxDate !== null) {
                if (typeof this.params.maxDate === 'string') {
                    if (typeof this.params.format !== 'undefined' && this.params.format !== null) {
                        this.maxDate = moment(this.params.maxDate, this.params.format).locale(this.params.lang);
                    } else {
                        this.maxDate = moment(this.params.maxDate).locale(this.params.lang);
                    }
                } else {
                    if (typeof this.params.maxDate.isValid === 'undefined' || typeof this.params.maxDate.isValid !== 'function') {
                        var x = this.params.maxDate.getTime();
                        this.maxDate = moment(x, "x").locale(this.params.lang);
                    } else {
                        this.maxDate = this.params.maxDate;
                    }
                }
            } else if (this.params.maxDate === null) {
                this.maxDate = null;
            }

            if (!this.isAfterMinDate(this.currentDate)) {
                this.currentDate = moment(this.minDate);
            }
            if (!this.isBeforeMaxDate(this.currentDate)) {
                this.currentDate = moment(this.maxDate);
            }
        },
        initTemplate: function initTemplate() {
            this.template = '<div class="dtp hidden" id="' + this.name + '">' + '<div class="dtp-content">' + '<div class="dtp-date-view">' + '<header class="dtp-header">' + '<div class="dtp-actual-day">Lundi</div>' + '<div class="dtp-close"><a href="javascript:void(0);"><i class="zmdi zmdi-close-circle-o"></i></a></div>' + '</header>' + '<div class="dtp-date hidden">' + '<div>' + '<div class="left center p10">' + '<a href="javascript:void(0);" class="dtp-select-month-before"><i class="zmdi zmdi-chevron-left"></i></a>' + '</div>' + '<div class="dtp-actual-month p80">MAR</div>' + '<div class="right center p10">' + '<a href="javascript:void(0);" class="dtp-select-month-after"><i class="zmdi zmdi-chevron-right"></i></a>' + '</div>' + '<div class="clearfix"></div>' + '</div>' + '<div class="dtp-actual-num">13</div>' + '<div>' + '<div class="left center p10">' + '<a href="javascript:void(0);" class="dtp-select-year-before"><i class="zmdi zmdi-chevron-left"></i></a>' + '</div>' + '<div class="dtp-actual-year p80">2014</div>' + '<div class="right center p10">' + '<a href="javascript:void(0);" class="dtp-select-year-after"><i class="zmdi zmdi-chevron-right"></i></a>' + '</div>' + '<div class="clearfix"></div>' + '</div>' + '</div>' + '<div class="dtp-time hidden">' + '<div class="dtp-actual-maxtime">23:55</div>' + '</div>' + '<div class="dtp-picker">' + '<div class="dtp-picker-calendar"></div>' + '<div class="dtp-picker-datetime hidden">' + '<div class="dtp-actual-meridien">' + '<div class="left p20">' + '<a class="dtp-meridien-am" href="javascript:void(0);">AM</a>' + '</div>' + '<div class="dtp-actual-time p60"></div>' + '<div class="right p20">' + '<a class="dtp-meridien-pm" href="javascript:void(0);">PM</a>' + '</div>' + '<div class="clearfix"></div>' + '</div>' + '<div id="dtp-svg-clock">' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="dtp-buttons">' + '<button class="dtp-btn-now btn btn--md btn--primary mdl-button mdl-js-button mdl-js-ripple-effect mr8 hidden">' + this.params.nowText + '</button>' + '<button class="dtp-btn-clear btn btn--default btn--md mdl-button mdl-js-button mdl-js-ripple-effect mr8 hidden">' + this.params.clearText + '</button>' + '<button class="dtp-btn-cancel btn btn--red btn--md mdl-button mdl-js-button mdl-js-ripple-effect mr8 mr8 btn-flat">' + this.params.cancelText + '</button>' + '<button class="dtp-btn-ok btn btn--md btn--primary mdl-button mdl-js-button mdl-js-ripple-effect">' + this.params.okText + '</button>' + '<div class="clearfix"></div>' + '</div>' + '</div>' + '</div>';

            if ($('body').find("#" + this.name).length <= 0) {
                $('body').append(this.template);

                if (this) this.dtpElement = $('body').find("#" + this.name);
                this.$dtpElement = $(this.dtpElement);
            }
        },
        initButtons: function initButtons() {
            this._attachEvent(this.$dtpElement.find('.dtp-btn-cancel'), 'click', this._onCancelClick.bind(this));
            this._attachEvent(this.$dtpElement.find('.dtp-btn-ok'), 'click', this._onOKClick.bind(this));
            this._attachEvent(this.$dtpElement.find('a.dtp-select-month-before'), 'click', this._onMonthBeforeClick.bind(this));
            this._attachEvent(this.$dtpElement.find('a.dtp-select-month-after'), 'click', this._onMonthAfterClick.bind(this));
            this._attachEvent(this.$dtpElement.find('a.dtp-select-year-before'), 'click', this._onYearBeforeClick.bind(this));
            this._attachEvent(this.$dtpElement.find('a.dtp-select-year-after'), 'click', this._onYearAfterClick.bind(this));

            if (this.params.clearButton === true) {
                this._attachEvent(this.$dtpElement.find('.dtp-btn-clear'), 'click', this._onClearClick.bind(this));
                this.$dtpElement.find('.dtp-btn-clear').removeClass('hidden');
            }

            if (this.params.nowButton === true) {
                this._attachEvent(this.$dtpElement.find('.dtp-btn-now'), 'click', this._onNowClick.bind(this));
                this.$dtpElement.find('.dtp-btn-now').removeClass('hidden');
            }

            if (this.params.nowButton === true && this.params.clearButton === true) {
                this.$dtpElement.find('.dtp-btn-clear, .dtp-btn-now, .dtp-btn-cancel, .dtp-btn-ok').addClass('btn-xs');
            } else if (this.params.nowButton === true || this.params.clearButton === true) {
                this.$dtpElement.find('.dtp-btn-clear, .dtp-btn-now, .dtp-btn-cancel, .dtp-btn-ok').addClass('btn-sm');
            }
        },
        initMeridienButtons: function initMeridienButtons() {
            this.$dtpElement.find('a.dtp-meridien-am').off('click').on('click', this._onSelectAM.bind(this));
            this.$dtpElement.find('a.dtp-meridien-pm').off('click').on('click', this._onSelectPM.bind(this));
        },
        initDate: function initDate(d) {
            this.currentView = 0;

            this.$dtpElement.find('.dtp-picker-calendar').removeClass('hidden');
            this.$dtpElement.find('.dtp-picker-datetime').addClass('hidden');

            var _date = typeof this.currentDate !== 'undefined' && this.currentDate !== null ? this.currentDate : null;
            var _calendar = this.generateCalendar(this.currentDate);

            if (typeof _calendar.week !== 'undefined' && typeof _calendar.days !== 'undefined') {
                var _template = this.constructHTMLCalendar(_date, _calendar);

                this.$dtpElement.find('a.dtp-select-day').off('click');
                this.$dtpElement.find('.dtp-picker-calendar').html(_template);

                this.$dtpElement.find('a.dtp-select-day').on('click', this._onSelectDate.bind(this));

                this.toggleButtons(_date);
            }

            this._centerBox();
            this.showDate(_date);
        },
        initHours: function initHours() {
            this.currentView = 1;

            this.showTime(this.currentDate);
            this.initMeridienButtons();

            if (this.currentDate.hour() < 12) {
                this.$dtpElement.find('a.dtp-meridien-am').click();
            } else {
                this.$dtpElement.find('a.dtp-meridien-pm').click();
            }

            var hFormat = this.params.shortTime ? 'h' : 'H';

            this.$dtpElement.find('.dtp-picker-datetime').removeClass('hidden');
            this.$dtpElement.find('.dtp-picker-calendar').addClass('hidden');

            var svgClockElement = this.createSVGClock(true);

            for (var i = 0; i < 12; i++) {
                var x = -(162 * Math.sin(-Math.PI * 2 * (i / 12)));
                var y = -(162 * Math.cos(-Math.PI * 2 * (i / 12)));

                var fill = this.currentDate.format(hFormat) == i ? "#02A8F3" : 'transparent';
                var color = this.currentDate.format(hFormat) == i ? "#fff" : '#000';

                var svgHourCircle = this.createSVGElement("circle", {
                    'id': 'h-' + i,
                    'class': 'dtp-select-hour',
                    'style': 'cursor:pointer',
                    r: '30',
                    cx: x,
                    cy: y,
                    fill: fill,
                    'data-hour': i
                });

                var svgHourText = this.createSVGElement("text", {
                    'id': 'th-' + i,
                    'class': 'dtp-select-hour-text',
                    'text-anchor': 'middle',
                    'style': 'cursor:pointer',
                    'font-weight': 'bold',
                    'font-size': '20',
                    x: x,
                    y: y + 7,
                    fill: color,
                    'data-hour': i
                });
                svgHourText.textContent = i === 0 ? this.params.shortTime ? 12 : i : i;

                if (!this.toggleTime(i, true)) {
                    svgHourCircle.className += " disabled";
                    svgHourText.className += " disabled";
                    svgHourText.setAttribute('fill', '#bdbdbd');
                } else {
                    svgHourCircle.addEventListener('click', this._onSelectHour.bind(this));
                    svgHourText.addEventListener('click', this._onSelectHour.bind(this));
                }

                svgClockElement.appendChild(svgHourCircle);
                svgClockElement.appendChild(svgHourText);
            }

            if (!this.params.shortTime) {
                for (var i = 0; i < 12; i++) {
                    var x = -(110 * Math.sin(-Math.PI * 2 * (i / 12)));
                    var y = -(110 * Math.cos(-Math.PI * 2 * (i / 12)));

                    var fill = this.currentDate.format(hFormat) == i + 12 ? "#02A8F3" : 'transparent';
                    var color = this.currentDate.format(hFormat) == i + 12 ? "#fff" : '#000';

                    var svgHourCircle = this.createSVGElement("circle", {
                        'id': 'h-' + (i + 12),
                        'class': 'dtp-select-hour',
                        'style': 'cursor:pointer',
                        r: '30',
                        cx: x,
                        cy: y,
                        fill: fill,
                        'data-hour': i + 12
                    });

                    var svgHourText = this.createSVGElement("text", {
                        'id': 'th-' + (i + 12),
                        'class': 'dtp-select-hour-text',
                        'text-anchor': 'middle',
                        'style': 'cursor:pointer',
                        'font-weight': 'bold',
                        'font-size': '22',
                        x: x,
                        y: y + 7,
                        fill: color,
                        'data-hour': i + 12
                    });
                    svgHourText.textContent = i + 12;

                    if (!this.toggleTime(i + 12, true)) {
                        svgHourCircle.className += " disabled";
                        svgHourText.className += " disabled";
                        svgHourText.setAttribute('fill', '#bdbdbd');
                    } else {
                        svgHourCircle.addEventListener('click', this._onSelectHour.bind(this));
                        svgHourText.addEventListener('click', this._onSelectHour.bind(this));
                    }

                    svgClockElement.appendChild(svgHourCircle);
                    svgClockElement.appendChild(svgHourText);
                }

                this.$dtpElement.find('a.dtp-meridien-am').addClass('hidden');
                this.$dtpElement.find('a.dtp-meridien-pm').addClass('hidden');
            }

            this._centerBox();
        },
        initMinutes: function initMinutes() {
            this.currentView = 2;

            this.showTime(this.currentDate);

            this.initMeridienButtons();

            if (this.currentDate.hour() < 12) {
                this.$dtpElement.find('a.dtp-meridien-am').click();
            } else {
                this.$dtpElement.find('a.dtp-meridien-pm').click();
            }

            this.$dtpElement.find('.dtp-picker-calendar').addClass('hidden');
            this.$dtpElement.find('.dtp-picker-datetime').removeClass('hidden');

            var svgClockElement = this.createSVGClock(false);

            for (var i = 0; i < 60; i++) {
                var s = i % 5 === 0 ? 162 : 158;
                var r = i % 5 === 0 ? 30 : 20;

                var x = -(s * Math.sin(-Math.PI * 2 * (i / 60)));
                var y = -(s * Math.cos(-Math.PI * 2 * (i / 60)));

                var color = this.currentDate.format("m") == i ? "#02A8F3" : 'transparent';

                var svgMinuteCircle = this.createSVGElement("circle", {
                    'id': 'm-' + i,
                    'class': 'dtp-select-minute',
                    'style': 'cursor:pointer',
                    r: r,
                    cx: x,
                    cy: y,
                    fill: color,
                    'data-minute': i
                });

                if (!this.toggleTime(i, false)) {
                    svgMinuteCircle.className += " disabled";
                } else {
                    svgMinuteCircle.addEventListener('click', this._onSelectMinute.bind(this));
                }

                svgClockElement.appendChild(svgMinuteCircle);
            }

            for (var i = 0; i < 60; i++) {
                if (i % 5 === 0) {
                    var x = -(162 * Math.sin(-Math.PI * 2 * (i / 60)));
                    var y = -(162 * Math.cos(-Math.PI * 2 * (i / 60)));

                    var color = this.currentDate.format("m") == i ? "#fff" : '#000';

                    var svgMinuteText = this.createSVGElement("text", {
                        'id': 'tm-' + i,
                        'class': 'dtp-select-minute-text',
                        'text-anchor': 'middle',
                        'style': 'cursor:pointer',
                        'font-weight': 'bold',
                        'font-size': '20',
                        x: x,
                        y: y + 7,
                        fill: color,
                        'data-minute': i
                    });
                    svgMinuteText.textContent = i;

                    if (!this.toggleTime(i, false)) {
                        svgMinuteText.className += " disabled";
                        svgMinuteText.setAttribute('fill', '#bdbdbd');
                    } else {
                        svgMinuteText.addEventListener('click', this._onSelectMinute.bind(this));
                    }

                    svgClockElement.appendChild(svgMinuteText);
                }
            }

            this._centerBox();
        },
        animateHands: function animateHands() {
            var H = this.currentDate.hour();
            var M = this.currentDate.minute();

            var hh = this.$dtpElement.find('.hour-hand');
            hh[0].setAttribute('transform', "rotate(" + 360 * H / 12 + ")");

            var mh = this.$dtpElement.find('.minute-hand');
            mh[0].setAttribute('transform', "rotate(" + 360 * M / 60 + ")");
        },
        createSVGClock: function createSVGClock(isHour) {
            var hl = this.params.shortTime ? -120 : -90;

            var svgElement = this.createSVGElement("svg", { class: 'svg-clock', viewBox: '0,0,400,400' });
            var svgGElement = this.createSVGElement("g", { transform: 'translate(200,200) ' });
            var svgClockFace = this.createSVGElement("circle", {
                r: '192',
                fill: '#eee',
                stroke: '#bdbdbd',
                'stroke-width': 2
            });
            var svgClockCenter = this.createSVGElement("circle", { r: '15', fill: '#757575' });

            svgGElement.appendChild(svgClockFace);

            if (isHour) {
                var svgMinuteHand = this.createSVGElement("line", {
                    class: 'minute-hand',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: -150,
                    stroke: '#bdbdbd',
                    'stroke-width': 2
                });
                var svgHourHand = this.createSVGElement("line", {
                    class: 'hour-hand',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: hl,
                    stroke: '#02A8F3',
                    'stroke-width': 8
                });

                svgGElement.appendChild(svgMinuteHand);
                svgGElement.appendChild(svgHourHand);
            } else {
                var svgMinuteHand = this.createSVGElement("line", {
                    class: 'minute-hand',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: -150,
                    stroke: '#02A8F3',
                    'stroke-width': 2
                });
                var svgHourHand = this.createSVGElement("line", {
                    class: 'hour-hand',
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: hl,
                    stroke: '#bdbdbd',
                    'stroke-width': 8
                });

                svgGElement.appendChild(svgHourHand);
                svgGElement.appendChild(svgMinuteHand);
            }

            svgGElement.appendChild(svgClockCenter);

            svgElement.appendChild(svgGElement);

            this.$dtpElement.find("#dtp-svg-clock").empty();
            this.$dtpElement.find("#dtp-svg-clock")[0].appendChild(svgElement);

            this.animateHands();

            return svgGElement;
        },
        createSVGElement: function createSVGElement(tag, attrs) {
            var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
            for (var k in attrs) {
                el.setAttribute(k, attrs[k]);
            }
            return el;
        },
        isAfterMinDate: function isAfterMinDate(date, checkHour, checkMinute) {
            var _return = true;

            if (typeof this.minDate !== 'undefined' && this.minDate !== null) {
                var _minDate = moment(this.minDate);
                var _date = moment(date);

                if (!checkHour && !checkMinute) {
                    _minDate.hour(0);
                    _minDate.minute(0);

                    _date.hour(0);
                    _date.minute(0);
                }

                _minDate.second(0);
                _date.second(0);
                _minDate.millisecond(0);
                _date.millisecond(0);

                if (!checkMinute) {
                    _date.minute(0);
                    _minDate.minute(0);

                    _return = parseInt(_date.format("X")) >= parseInt(_minDate.format("X"));
                } else {
                    _return = parseInt(_date.format("X")) >= parseInt(_minDate.format("X"));
                }
            }

            return _return;
        },
        isBeforeMaxDate: function isBeforeMaxDate(date, checkTime, checkMinute) {
            var _return = true;

            if (typeof this.maxDate !== 'undefined' && this.maxDate !== null) {
                var _maxDate = moment(this.maxDate);
                var _date = moment(date);

                if (!checkTime && !checkMinute) {
                    _maxDate.hour(0);
                    _maxDate.minute(0);

                    _date.hour(0);
                    _date.minute(0);
                }

                _maxDate.second(0);
                _date.second(0);
                _maxDate.millisecond(0);
                _date.millisecond(0);

                if (!checkMinute) {
                    _date.minute(0);
                    _maxDate.minute(0);

                    _return = parseInt(_date.format("X")) <= parseInt(_maxDate.format("X"));
                } else {
                    _return = parseInt(_date.format("X")) <= parseInt(_maxDate.format("X"));
                }
            }

            return _return;
        },
        rotateElement: function rotateElement(el, deg) {
            $(el).css({
                WebkitTransform: 'rotate(' + deg + 'deg)',
                '-moz-transform': 'rotate(' + deg + 'deg)'
            });
        },
        showDate: function showDate(date) {
            if (date) {
                this.$dtpElement.find('.dtp-actual-day').html(date.locale(this.params.lang).format('dddd'));
                this.$dtpElement.find('.dtp-actual-month').html(date.locale(this.params.lang).format('MMM').toUpperCase());
                this.$dtpElement.find('.dtp-actual-num').html(date.locale(this.params.lang).format('DD'));
                this.$dtpElement.find('.dtp-actual-year').html(date.locale(this.params.lang).format('YYYY'));
            }
        },
        showTime: function showTime(date) {
            if (date) {
                var minutes = date.minute();
                var content = (this.params.shortTime ? date.format('hh') : date.format('HH')) + ':' + (minutes.toString().length == 2 ? minutes : '0' + minutes) + (this.params.shortTime ? ' ' + date.format('A') : '');

                if (this.params.date) this.$dtpElement.find('.dtp-actual-time').html(content);else {
                    if (this.params.shortTime) this.$dtpElement.find('.dtp-actual-day').html(date.format('A'));else this.$dtpElement.find('.dtp-actual-day').html('&nbsp;');

                    this.$dtpElement.find('.dtp-actual-maxtime').html(content);
                }
            }
        },
        selectDate: function selectDate(date) {
            if (date) {
                this.currentDate.date(date);

                this.showDate(this.currentDate);
                this.$element.trigger('dateSelected', this.currentDate);
            }
        },
        generateCalendar: function generateCalendar(date) {
            var _calendar = {};

            if (date !== null) {
                var startOfMonth = moment(date).locale(this.params.lang).startOf('month');
                var endOfMonth = moment(date).locale(this.params.lang).endOf('month');

                var iNumDay = startOfMonth.format('d');

                _calendar.week = this.days;
                _calendar.days = [];

                for (var i = startOfMonth.date(); i <= endOfMonth.date(); i++) {
                    if (i === startOfMonth.date()) {
                        var iWeek = _calendar.week.indexOf(iNumDay.toString());
                        if (iWeek > 0) {
                            for (var x = 0; x < iWeek; x++) {
                                _calendar.days.push(0);
                            }
                        }
                    }
                    _calendar.days.push(moment(startOfMonth).locale(this.params.lang).date(i));
                }
            }

            return _calendar;
        },
        constructHTMLCalendar: function constructHTMLCalendar(date, calendar) {
            var _template = "";

            _template += '<div class="dtp-picker-month">' + date.locale(this.params.lang).format('MMMM YYYY') + '</div>';
            _template += '<table class="table dtp-picker-days"><thead>';
            for (var i = 0; i < calendar.week.length; i++) {
                _template += '<th>' + moment(parseInt(calendar.week[i]), "d").locale(this.params.lang).format("dd").substring(0, 1) + '</th>';
            }

            _template += '</thead>';
            _template += '<tbody><tr>';

            for (var i = 0; i < calendar.days.length; i++) {
                if (i % 7 == 0) _template += '</tr><tr>';
                _template += '<td data-date="' + moment(calendar.days[i]).locale(this.params.lang).format("D") + '">';
                if (calendar.days[i] != 0) {
                    if (this.isBeforeMaxDate(moment(calendar.days[i]), false, false) === false || this.isAfterMinDate(moment(calendar.days[i]), false, false) === false) {
                        _template += '<span class="dtp-select-day">' + moment(calendar.days[i]).locale(this.params.lang).format("DD") + '</span>';
                    } else {
                        if (moment(calendar.days[i]).locale(this.params.lang).format("DD") === moment(this.currentDate).locale(this.params.lang).format("DD")) {
                            _template += '<a href="javascript:void(0);" class="dtp-select-day selected">' + moment(calendar.days[i]).locale(this.params.lang).format("DD") + '</a>';
                        } else {
                            _template += '<a href="javascript:void(0);" class="dtp-select-day">' + moment(calendar.days[i]).locale(this.params.lang).format("DD") + '</a>';
                        }
                    }

                    _template += '</td>';
                }
            }
            _template += '</tr></tbody></table>';

            return _template;
        },
        setName: function setName() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
        },
        isPM: function isPM() {
            return this.$dtpElement.find('a.dtp-meridien-pm').hasClass('selected');
        },
        setElementValue: function setElementValue() {
            this.$element.trigger('beforeChange', this.currentDate);
            if (typeof $.material !== 'undefined') {
                this.$element.removeClass('empty');
            }
            this.$element.val(moment(this.currentDate).locale(this.params.lang).format(this.params.format));
            this.$element.trigger('change', this.currentDate);
        },
        toggleButtons: function toggleButtons(date) {
            if (date && date.isValid()) {
                var startOfMonth = moment(date).locale(this.params.lang).startOf('month');
                var endOfMonth = moment(date).locale(this.params.lang).endOf('month');

                if (!this.isAfterMinDate(startOfMonth, false, false)) {
                    this.$dtpElement.find('a.dtp-select-month-before').addClass('invisible');
                } else {
                    this.$dtpElement.find('a.dtp-select-month-before').removeClass('invisible');
                }

                if (!this.isBeforeMaxDate(endOfMonth, false, false)) {
                    this.$dtpElement.find('a.dtp-select-month-after').addClass('invisible');
                } else {
                    this.$dtpElement.find('a.dtp-select-month-after').removeClass('invisible');
                }

                var startOfYear = moment(date).locale(this.params.lang).startOf('year');
                var endOfYear = moment(date).locale(this.params.lang).endOf('year');

                if (!this.isAfterMinDate(startOfYear, false, false)) {
                    this.$dtpElement.find('a.dtp-select-year-before').addClass('invisible');
                } else {
                    this.$dtpElement.find('a.dtp-select-year-before').removeClass('invisible');
                }

                if (!this.isBeforeMaxDate(endOfYear, false, false)) {
                    this.$dtpElement.find('a.dtp-select-year-after').addClass('invisible');
                } else {
                    this.$dtpElement.find('a.dtp-select-year-after').removeClass('invisible');
                }
            }
        },
        toggleTime: function toggleTime(value, isHours) {
            var result = false;

            if (isHours) {
                var _date = moment(this.currentDate);
                _date.hour(this.convertHours(value)).minute(0).second(0);

                result = !(this.isAfterMinDate(_date, true, false) === false || this.isBeforeMaxDate(_date, true, false) === false);
            } else {
                var _date = moment(this.currentDate);
                _date.minute(value).second(0);

                result = !(this.isAfterMinDate(_date, true, true) === false || this.isBeforeMaxDate(_date, true, true) === false);
            }

            return result;
        },
        _attachEvent: function _attachEvent(el, ev, fn) {
            el.on(ev, null, null, fn);
            this._attachedEvents.push([el, ev, fn]);
        },
        _detachEvents: function _detachEvents() {
            for (var i = this._attachedEvents.length - 1; i >= 0; i--) {
                this._attachedEvents[i][0].off(this._attachedEvents[i][1], this._attachedEvents[i][2]);
                this._attachedEvents.splice(i, 1);
            }
        },
        _fireCalendar: function _fireCalendar() {
            this.currentView = 0;
            this.$element.blur();

            this.initDates();

            this.show();

            if (this.params.date) {
                this.$dtpElement.find('.dtp-date').removeClass('hidden');
                this.initDate();
            } else {
                if (this.params.time) {
                    this.$dtpElement.find('.dtp-time').removeClass('hidden');
                    this.initHours();
                }
            }
        },
        _onBackgroundClick: function _onBackgroundClick(e) {
            e.stopPropagation();
            this.hide();
        },
        _onElementClick: function _onElementClick(e) {
            e.stopPropagation();
        },
        _onKeydown: function _onKeydown(e) {
            if (e.which === 27) {
                this.hide();
            }
        },
        _onCloseClick: function _onCloseClick() {
            this.hide();
        },
        _onClearClick: function _onClearClick() {
            this.currentDate = null;
            this.$element.trigger('beforeChange', this.currentDate);
            this.hide();
            if (typeof $.material !== 'undefined') {
                this.$element.addClass('empty');
            }
            this.$element.val('');
            this.$element.trigger('change', this.currentDate);
        },
        _onNowClick: function _onNowClick() {
            this.currentDate = moment();

            if (this.params.date === true) {
                this.showDate(this.currentDate);

                if (this.currentView === 0) {
                    this.initDate();
                }
            }

            if (this.params.time === true) {
                this.showTime(this.currentDate);

                switch (this.currentView) {
                    case 1:
                        this.initHours();
                        break;
                    case 2:
                        this.initMinutes();
                        break;
                }

                this.animateHands();
            }
        },
        _onOKClick: function _onOKClick() {
            switch (this.currentView) {
                case 0:
                    if (this.params.time === true) {
                        this.initHours();
                    } else {
                        this.setElementValue();
                        this.hide();
                    }
                    break;
                case 1:
                    this.initMinutes();
                    break;
                case 2:
                    this.setElementValue();
                    this.hide();
                    break;
            }
        },
        _onCancelClick: function _onCancelClick() {
            if (this.params.time) {
                switch (this.currentView) {
                    case 0:
                        this.hide();
                        break;
                    case 1:
                        if (this.params.date) {
                            this.initDate();
                        } else {
                            this.hide();
                        }
                        break;
                    case 2:
                        this.initHours();
                        break;
                }
            } else {
                this.hide();
            }
        },
        _onMonthBeforeClick: function _onMonthBeforeClick() {
            this.currentDate.subtract(1, 'months');
            this.initDate(this.currentDate);
        },
        _onMonthAfterClick: function _onMonthAfterClick() {
            this.currentDate.add(1, 'months');
            this.initDate(this.currentDate);
        },
        _onYearBeforeClick: function _onYearBeforeClick() {
            this.currentDate.subtract(1, 'years');
            this.initDate(this.currentDate);
        },
        _onYearAfterClick: function _onYearAfterClick() {
            this.currentDate.add(1, 'years');
            this.initDate(this.currentDate);
        },
        _onSelectDate: function _onSelectDate(e) {
            this.$dtpElement.find('a.dtp-select-day').removeClass('selected');
            $(e.currentTarget).addClass('selected');

            this.selectDate($(e.currentTarget).parent().data("date"));

            if (this.params.switchOnClick === true && this.params.time === true) setTimeout(this.initHours.bind(this), 200);

            if (this.params.switchOnClick === true && this.params.time === false) {
                setTimeout(this._onOKClick.bind(this), 200);
            }
        },
        _onSelectHour: function _onSelectHour(e) {
            if (!$(e.target).hasClass('disabled')) {
                var value = $(e.target).data('hour');
                var parent = $(e.target).parent();

                var h = parent.find('.dtp-select-hour');
                for (var i = 0; i < h.length; i++) {
                    $(h[i]).attr('fill', 'transparent');
                }
                var th = parent.find('.dtp-select-hour-text');
                for (var i = 0; i < th.length; i++) {
                    $(th[i]).attr('fill', '#000');
                }

                $(parent.find('#h-' + value)).attr('fill', '#02A8F3');
                $(parent.find('#th-' + value)).attr('fill', '#fff');

                this.currentDate.hour(parseInt(value));

                if (this.params.shortTime === true && this.isPM()) {
                    this.currentDate.add(12, 'hours');
                }

                this.showTime(this.currentDate);

                this.animateHands();

                if (this.params.switchOnClick === true) setTimeout(this.initMinutes.bind(this), 200);
            }
        },
        _onSelectMinute: function _onSelectMinute(e) {
            if (!$(e.target).hasClass('disabled')) {
                var value = $(e.target).data('minute');
                var parent = $(e.target).parent();

                var m = parent.find('.dtp-select-minute');
                for (var i = 0; i < m.length; i++) {
                    $(m[i]).attr('fill', 'transparent');
                }
                var tm = parent.find('.dtp-select-minute-text');
                for (var i = 0; i < tm.length; i++) {
                    $(tm[i]).attr('fill', '#000');
                }

                $(parent.find('#m-' + value)).attr('fill', '#02A8F3');
                $(parent.find('#tm-' + value)).attr('fill', '#fff');

                this.currentDate.minute(parseInt(value));
                this.showTime(this.currentDate);

                this.animateHands();

                if (this.params.switchOnClick === true) setTimeout(function () {
                    this.setElementValue();
                    this.hide();
                }.bind(this), 200);
            }
        },
        _onSelectAM: function _onSelectAM(e) {
            $('.dtp-actual-meridien').find('a').removeClass('selected');
            $(e.currentTarget).addClass('selected');

            if (this.currentDate.hour() >= 12) {
                if (this.currentDate.subtract(12, 'hours')) this.showTime(this.currentDate);
            }
            this.toggleTime(this.currentView === 1);
        },
        _onSelectPM: function _onSelectPM(e) {
            $('.dtp-actual-meridien').find('a').removeClass('selected');
            $(e.currentTarget).addClass('selected');

            if (this.currentDate.hour() < 12) {
                if (this.currentDate.add(12, 'hours')) this.showTime(this.currentDate);
            }
            this.toggleTime(this.currentView === 1);
        },
        convertHours: function convertHours(h) {
            var _return = h;

            if (this.params.shortTime === true) {
                if (h < 12 && this.isPM()) {
                    _return += 12;
                }
            }

            return _return;
        },
        setDate: function setDate(date) {
            this.params.currentDate = date;
            this.initDates();
        },
        setMinDate: function setMinDate(date) {
            this.params.minDate = date;
            this.initDates();
        },
        setMaxDate: function setMaxDate(date) {
            this.params.maxDate = date;
            this.initDates();
        },
        destroy: function destroy() {
            this._detachEvents();
            this.$dtpElement.remove();
        },
        show: function show() {
            this.$dtpElement.removeClass('hidden');
            this._attachEvent($(window), 'keydown', this._onKeydown.bind(this));
            this._centerBox();
        },
        hide: function hide() {
            $(window).off('keydown', null, null, this._onKeydown.bind(this));
            this.$dtpElement.addClass('hidden');
        },
        _centerBox: function _centerBox() {
            var h = (this.$dtpElement.height() - this.$dtpElement.find('.dtp-content').height()) / 2;
            this.$dtpElement.find('.dtp-content').css('marginLeft', -(this.$dtpElement.find('.dtp-content').width() / 2) + 'px');
            this.$dtpElement.find('.dtp-content').css('top', h + 'px');
        },
        enableDays: function enableDays() {
            var enableDays = this.params.enableDays;
            if (enableDays) {
                $(".dtp-picker-days tbody tr td").each(function () {
                    if (!($.inArray($(this).index(), enableDays) >= 0)) {
                        $(this).find('a').css({
                            "background": "#e3e3e3",
                            "cursor": "no-drop",
                            "opacity": "0.5"
                        }).off("click");
                    }
                });
            }
        }

    };
})(jQuery, moment);

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * jQuery UI date range picker widget
 * Copyright (c) 2016 Tamble, Inc.
 * Licensed under MIT (https://github.com/tamble/jquery-ui-daterangepicker/raw/master/LICENSE.txt)
 *
 * Depends:
 *   - jQuery 1.8.3+
 *   - jQuery UI 1.9.0+ (widget factory, position utility, button, menu, datepicker)
 *   - moment.js 2.3.0+
 */

(function ($, window, undefined) {

	var uniqueId = 0; // used for unique ID generation within multiple plugin instances

	$.widget('comiseo.daterangepicker', {
		version: '0.5.0',

		options: {
			// presetRanges: array of objects; each object describes an item in the presets menu
			// and must have the properties: text, dateStart, dateEnd.
			// dateStart, dateEnd are functions returning a moment object
			presetRanges: [{ text: 'Today', dateStart: function dateStart() {
					return moment();
				}, dateEnd: function dateEnd() {
					return moment();
				} }, { text: 'Yesterday', dateStart: function dateStart() {
					return moment().subtract('days', 1);
				}, dateEnd: function dateEnd() {
					return moment().subtract('days', 1);
				} }, { text: 'Last 7 Days', dateStart: function dateStart() {
					return moment().subtract('days', 6);
				}, dateEnd: function dateEnd() {
					return moment();
				} }, { text: 'Last Week (Mo-Su)', dateStart: function dateStart() {
					return moment().subtract('days', 7).isoWeekday(1);
				}, dateEnd: function dateEnd() {
					return moment().subtract('days', 7).isoWeekday(7);
				} }, { text: 'Month to Date', dateStart: function dateStart() {
					return moment().startOf('month');
				}, dateEnd: function dateEnd() {
					return moment();
				} }, { text: 'Previous Month', dateStart: function dateStart() {
					return moment().subtract('month', 1).startOf('month');
				}, dateEnd: function dateEnd() {
					return moment().subtract('month', 1).endOf('month');
				} }, { text: 'Year to Date', dateStart: function dateStart() {
					return moment().startOf('year');
				}, dateEnd: function dateEnd() {
					return moment();
				} }],
			initialText: 'Select date range...', // placeholder text - shown when nothing is selected
			icon: 'ui-icon-triangle-1-s',
			applyButtonText: 'Apply', // use '' to get rid of the button
			clearButtonText: 'Clear', // use '' to get rid of the button
			cancelButtonText: 'Cancel', // use '' to get rid of the button
			rangeSplitter: ' - ', // string to use between dates
			dateFormat: 'M d, yy', // displayed date format. Available formats: http://api.jqueryui.com/datepicker/#utility-formatDate
			altFormat: 'yy-mm-dd', // submitted date format - inside JSON {"start":"...","end":"..."}
			verticalOffset: 0, // offset of the dropdown relative to the closest edge of the trigger button
			mirrorOnCollision: true, // reverse layout when there is not enough space on the right
			autoFitCalendars: true, // override datepicker's numberOfMonths option in order to fit widget width
			applyOnMenuSelect: true, // whether to auto apply menu selections
			open: null, // callback that executes when the dropdown opens
			close: null, // callback that executes when the dropdown closes
			change: null, // callback that executes when the date range changes
			clear: null, // callback that executes when the clear button is used
			cancel: null, // callback that executes when the cancel button is used
			onOpen: null, // @deprecated callback that executes when the dropdown opens
			onClose: null, // @deprecated callback that executes when the dropdown closes
			onChange: null, // @deprecated callback that executes when the date range changes
			onClear: null, // @deprecated callback that executes when the clear button is used
			datepickerOptions: { // object containing datepicker options. See http://api.jqueryui.com/datepicker/#options
				numberOfMonths: 3,
				//				showCurrentAtPos: 1 // bug; use maxDate instead
				maxDate: 0 // the maximum selectable date is today (also current month is displayed on the last position)
			}
		},

		_create: function _create() {
			this._dateRangePicker = buildDateRangePicker(this.element, this, this.options);
		},

		_destroy: function _destroy() {
			this._dateRangePicker.destroy();
		},

		_setOptions: function _setOptions(options) {
			this._super(options);
			this._dateRangePicker.enforceOptions();
		},

		open: function open() {
			this._dateRangePicker.open();
		},

		close: function close() {
			this._dateRangePicker.close();
		},

		setRange: function setRange(range) {
			this._dateRangePicker.setRange(range);
		},

		getRange: function getRange() {
			return this._dateRangePicker.getRange();
		},

		clearRange: function clearRange() {
			this._dateRangePicker.clearRange();
		},

		widget: function widget() {
			return this._dateRangePicker.getContainer();
		}
	});

	/**
  * factory for the trigger button (which visually replaces the original input form element)
  *
  * @param {jQuery} $originalElement jQuery object containing the input form element used to instantiate this widget instance
  * @param {String} classnameContext classname of the parent container
  * @param {Object} options
  */
	function buildTriggerButton($originalElement, classnameContext, options) {
		var $self, id;

		function fixReferences() {
			id = 'drp_autogen' + uniqueId++;
			$('label[for="' + $originalElement.attr('id') + '"]').attr('for', id);
		}

		function init() {
			fixReferences();
			$self = $('<button type="button"></button>').addClass(classnameContext + '-triggerbutton').attr({ 'title': $originalElement.attr('title'), 'tabindex': $originalElement.attr('tabindex'), id: id }).button({
				icons: {
					secondary: options.icon
				},
				label: options.initialText
			});
		}

		function getLabel() {
			return $self.button('option', 'label');
		}

		function setLabel(value) {
			$self.button('option', 'label', value);
		}

		function reset() {
			$originalElement.val('').change();
			setLabel(options.initialText);
		}

		function enforceOptions() {
			$self.button('option', {
				icons: {
					secondary: options.icon
				},
				label: options.initialText
			});
		}

		init();
		return {
			getElement: function getElement() {
				return $self;
			},
			getLabel: getLabel,
			setLabel: setLabel,
			reset: reset,
			enforceOptions: enforceOptions
		};
	}

	/**
  * factory for the presets menu (containing built-in date ranges)
  *
  * @param {String} classnameContext classname of the parent container
  * @param {Object} options
  * @param {Function} onClick callback that executes when a preset is clicked
  */
	function buildPresetsMenu(classnameContext, options, onClick) {
		var $self, $menu;

		function init() {
			$self = $('<div></div>').addClass(classnameContext + '-presets');

			$menu = $('<ul></ul>');

			$.each(options.presetRanges, function () {
				$('<li><a href="#">' + this.text + '</a></li>').data('dateStart', this.dateStart).data('dateEnd', this.dateEnd).click(onClick).appendTo($menu);
			});

			$self.append($menu);

			$menu.menu().data('ui-menu').delay = 0; // disable submenu delays
		}

		init();
		return {
			getElement: function getElement() {
				return $self;
			}
		};
	}

	/**
  * factory for the multiple month date picker
  *
  * @param {String} classnameContext classname of the parent container
  * @param {Object} options
  */
	function buildCalendar(classnameContext, options) {
		var $self,
		    range = { start: null, end: null }; // selected range

		function init() {
			$self = $('<div></div>', { 'class': classnameContext + '-calendar ui-widget-content' });

			$self.datepicker($.extend({}, options.datepickerOptions, { beforeShowDay: beforeShowDay, onSelect: onSelectDay }));
			updateAtMidnight();
		}

		function enforceOptions() {
			$self.datepicker('option', $.extend({}, options.datepickerOptions, { beforeShowDay: beforeShowDay, onSelect: onSelectDay }));
		}

		// called when a day is selected
		function onSelectDay(dateText, instance) {
			var dateFormat = options.datepickerOptions.dateFormat || $.datepicker._defaults.dateFormat,
			    selectedDate = $.datepicker.parseDate(dateFormat, dateText);

			if (!range.start || range.end) {
				// start not set, or both already set
				range.start = selectedDate;
				range.end = null;
			} else if (selectedDate < range.start) {
				// start set, but selected date is earlier
				range.end = range.start;
				range.start = selectedDate;
			} else {
				range.end = selectedDate;
			}
			if (options.datepickerOptions.hasOwnProperty('onSelect')) {
				options.datepickerOptions.onSelect(dateText, instance);
			}
		}

		// called for each day in the datepicker before it is displayed
		function beforeShowDay(date) {
			var result = [true, // selectable
			range.start && (+date === +range.start || range.end && range.start <= date && date <= range.end) ? 'ui-state-highlight' : '' // class to be added
			],
			    userResult = [true, '', ''];

			if (options.datepickerOptions.hasOwnProperty('beforeShowDay')) {
				userResult = options.datepickerOptions.beforeShowDay(date);
			}
			return [result[0] && userResult[0], result[1] + ' ' + userResult[1], userResult[2]];
		}

		function updateAtMidnight() {
			setTimeout(function () {
				refresh();
				updateAtMidnight();
			}, moment().endOf('day') - moment());
		}

		function _scrollToRangeStart() {
			if (range.start) {
				$self.datepicker('setDate', range.start);
			}
		}

		function refresh() {
			$self.datepicker('refresh');
			$self.datepicker('setDate', null); // clear the selected date
		}

		function reset() {
			range = { start: null, end: null };
			refresh();
		}

		init();
		return {
			getElement: function getElement() {
				return $self;
			},
			scrollToRangeStart: function scrollToRangeStart() {
				return _scrollToRangeStart();
			},
			getRange: function getRange() {
				return range;
			},
			setRange: function setRange(value) {
				range = value;refresh();
			},
			refresh: refresh,
			reset: reset,
			enforceOptions: enforceOptions
		};
	}

	/**
  * factory for the button panel
  *
  * @param {String} classnameContext classname of the parent container
  * @param {Object} options
  * @param {Object} handlers contains callbacks for each button
  */
	function buildButtonPanel(classnameContext, options, handlers) {
		var $self, applyButton, clearButton, cancelButton;

		function init() {
			$self = $('<div></div>').addClass(classnameContext + '-buttonpanel');

			if (options.applyButtonText) {
				applyButton = $('<button type="button" class="btn btn--primary btn--md mdl-button mdl-js-button mdl-js-ripple-effect mr8"></button>').text(options.applyButtonText).button();

				$self.append(applyButton);
			}

			if (options.clearButtonText) {
				clearButton = $('<button type="button" class="btn btn--dark btn--md mdl-button mdl-js-button mdl-js-ripple-effect mr8"></button>').text(options.clearButtonText).button();

				$self.append(clearButton);
			}

			if (options.cancelButtonText) {
				cancelButton = $('<button type="button" class="btn btn--red btn--md mdl-button mdl-js-button mdl-js-ripple-effect"></button>').text(options.cancelButtonText).button();

				$self.append(cancelButton);
			}

			bindEvents();
		}

		function enforceOptions() {
			if (applyButton) {
				applyButton.button('option', 'label', options.applyButtonText);
			}

			if (clearButton) {
				clearButton.button('option', 'label', options.clearButtonText);
			}

			if (cancelButton) {
				cancelButton.button('option', 'label', options.cancelButtonText);
			}
		}

		function bindEvents() {
			if (handlers) {
				if (applyButton) {
					applyButton.click(handlers.onApply);
				}

				if (clearButton) {
					clearButton.click(handlers.onClear);
				}

				if (cancelButton) {
					cancelButton.click(handlers.onCancel);
				}
			}
		}

		init();
		return {
			getElement: function getElement() {
				return $self;
			},
			enforceOptions: enforceOptions
		};
	}

	/**
  * factory for the widget
  *
  * @param {jQuery} $originalElement jQuery object containing the input form element used to instantiate this widget instance
  * @param {Object} instance
  * @param {Object} options
  */
	function buildDateRangePicker($originalElement, instance, options) {
		var classname = 'comiseo-daterangepicker',
		    $container,
		    // the dropdown
		$mask,
		    // ui helper (z-index fix)
		triggerButton,
		    presetsMenu,
		    calendar,
		    buttonPanel,
		    isOpen = false,
		    autoFitNeeded = false,
		    LEFT = 0,
		    RIGHT = 1,
		    TOP = 2,
		    BOTTOM = 3,
		    sides = ['left', 'right', 'top', 'bottom'],
		    hSide = RIGHT,
		    // initialized to pick layout styles from CSS
		vSide = null;

		function init() {
			triggerButton = buildTriggerButton($originalElement, classname, options);
			presetsMenu = buildPresetsMenu(classname, options, usePreset);
			calendar = buildCalendar(classname, options);
			autoFit.numberOfMonths = options.datepickerOptions.numberOfMonths; // save initial option!
			if (autoFit.numberOfMonths instanceof Array) {
				// not implemented
				options.autoFitCalendars = false;
			}
			buttonPanel = buildButtonPanel(classname, options, {
				onApply: function onApply(event) {
					close(event);
					setRange(null, event);
				},
				onClear: function onClear(event) {
					close(event);
					clearRange(event);
				},
				onCancel: function onCancel(event) {
					instance._trigger('cancel', event, { instance: instance });
					close(event);
					reset();
				}
			});
			render();
			autoFit();
			reset();
			bindEvents();
		}

		function render() {
			$container = $('<div></div>', { 'class': classname + ' ' + classname + '-' + sides[hSide] + ' ui-widget ui-widget-content ui-corner-all ui-front' }).append($('<div></div>', { 'class': classname + '-main ui-widget-content' }).append(presetsMenu.getElement()).append(calendar.getElement())).append($('<div class="ui-helper-clearfix"></div>').append(buttonPanel.getElement())).hide();
			$originalElement.hide().after(triggerButton.getElement());
			$mask = $('<div></div>', { 'class': 'ui-front ' + classname + '-mask' }).hide();
			$('body').append($mask).append($container);
		}

		// auto adjusts the number of months in the date picker
		function autoFit() {
			if (options.autoFitCalendars) {
				var maxWidth = $(window).width(),
				    initialWidth = $container.outerWidth(true),
				    $calendar = calendar.getElement(),
				    numberOfMonths = $calendar.datepicker('option', 'numberOfMonths'),
				    initialNumberOfMonths = numberOfMonths;

				if (initialWidth > maxWidth) {
					while (numberOfMonths > 1 && $container.outerWidth(true) > maxWidth) {
						$calendar.datepicker('option', 'numberOfMonths', --numberOfMonths);
					}
					if (numberOfMonths !== initialNumberOfMonths) {
						autoFit.monthWidth = (initialWidth - $container.outerWidth(true)) / (initialNumberOfMonths - numberOfMonths);
					}
				} else {
					while (numberOfMonths < autoFit.numberOfMonths && maxWidth - $container.outerWidth(true) >= autoFit.monthWidth) {
						$calendar.datepicker('option', 'numberOfMonths', ++numberOfMonths);
					}
				}
				reposition();
				autoFitNeeded = false;
			}
		}

		function destroy() {
			$container.remove();
			triggerButton.getElement().remove();
			$originalElement.show();
		}

		function bindEvents() {
			triggerButton.getElement().click(toggle);
			triggerButton.getElement().keydown(keyPressTriggerOpenOrClose);
			$mask.click(function (event) {
				close(event);
				reset();
			});
			$(window).resize(function () {
				isOpen ? autoFit() : autoFitNeeded = true;
			});
		}

		function formatRangeForDisplay(range) {
			var dateFormat = options.dateFormat;
			return $.datepicker.formatDate(dateFormat, range.start) + (+range.end !== +range.start ? options.rangeSplitter + $.datepicker.formatDate(dateFormat, range.end) : '');
		}

		// formats a date range as JSON
		function formatRange(range) {
			var dateFormat = options.altFormat,
			    formattedRange = {};
			formattedRange.start = $.datepicker.formatDate(dateFormat, range.start);
			formattedRange.end = $.datepicker.formatDate(dateFormat, range.end);
			return JSON.stringify(formattedRange);
		}

		// parses a date range in JSON format
		function parseRange(text) {
			var dateFormat = options.altFormat,
			    range = null;
			if (text) {
				try {
					range = JSON.parse(text, function (key, value) {
						return key ? $.datepicker.parseDate(dateFormat, value) : value;
					});
				} catch (e) {}
			}
			return range;
		}

		function reset() {
			var range = getRange();
			if (range) {
				triggerButton.setLabel(formatRangeForDisplay(range));
				calendar.setRange(range);
			} else {
				calendar.reset();
			}
		}

		function setRange(value, event) {
			var range = value || calendar.getRange();
			if (!range.start) {
				return;
			}
			if (!range.end) {
				range.end = range.start;
			}
			value && calendar.setRange(range);
			triggerButton.setLabel(formatRangeForDisplay(range));
			$originalElement.val(formatRange(range)).change();
			if (options.onChange) {
				options.onChange();
			}
			instance._trigger('change', event, { instance: instance });
		}

		function getRange() {
			return parseRange($originalElement.val());
		}

		function clearRange(event) {
			triggerButton.reset();
			calendar.reset();
			if (options.onClear) {
				options.onClear();
			}
			instance._trigger('clear', event, { instance: instance });
		}

		// callback - used when the user clicks a preset range
		function usePreset(event) {
			var $this = $(this),
			    start = $this.data('dateStart')().startOf('day').toDate(),
			    end = $this.data('dateEnd')().startOf('day').toDate();
			calendar.setRange({ start: start, end: end });
			if (options.applyOnMenuSelect) {
				close(event);
				setRange(null, event);
			}
			return false;
		}

		// adjusts dropdown's position taking into account the available space
		function reposition() {
			$container.position({
				my: 'left top',
				at: 'left bottom' + (options.verticalOffset < 0 ? options.verticalOffset : '+' + options.verticalOffset),
				of: triggerButton.getElement(),
				collision: 'flipfit flipfit',
				using: function using(coords, feedback) {
					var containerCenterX = feedback.element.left + feedback.element.width / 2,
					    triggerButtonCenterX = feedback.target.left + feedback.target.width / 2,
					    prevHSide = hSide,
					    last,
					    containerCenterY = feedback.element.top + feedback.element.height / 2,
					    triggerButtonCenterY = feedback.target.top + feedback.target.height / 2,
					    prevVSide = vSide,
					    vFit; // is the container fit vertically

					hSide = containerCenterX > triggerButtonCenterX ? RIGHT : LEFT;
					if (hSide !== prevHSide) {
						if (options.mirrorOnCollision) {
							last = hSide === LEFT ? presetsMenu : calendar;
							$container.children().first().append(last.getElement());
						}
						$container.removeClass(classname + '-' + sides[prevHSide]);
						$container.addClass(classname + '-' + sides[hSide]);
					}
					$container.css({
						left: coords.left,
						top: coords.top
					});

					vSide = containerCenterY > triggerButtonCenterY ? BOTTOM : TOP;
					if (vSide !== prevVSide) {
						if (prevVSide !== null) {
							triggerButton.getElement().removeClass(classname + '-' + sides[prevVSide]);
						}
						triggerButton.getElement().addClass(classname + '-' + sides[vSide]);
					}
					vFit = vSide === BOTTOM && feedback.element.top - feedback.target.top !== feedback.target.height + options.verticalOffset || vSide === TOP && feedback.target.top - feedback.element.top !== feedback.element.height + options.verticalOffset;
					triggerButton.getElement().toggleClass(classname + '-vfit', vFit);
				}
			});
		}

		function killEvent(event) {
			event.preventDefault();
			event.stopPropagation();
		}

		function keyPressTriggerOpenOrClose(event) {
			switch (event.which) {
				case $.ui.keyCode.UP:
				case $.ui.keyCode.DOWN:
					killEvent(event);
					open(event);
					return;
				case $.ui.keyCode.ESCAPE:
					killEvent(event);
					close(event);
					reset();
					return;
				case $.ui.keyCode.TAB:
					close(event);
					return;
			}
		}

		function open(event) {
			if (!isOpen) {
				triggerButton.getElement().addClass(classname + '-active');
				$mask.show();
				isOpen = true;
				autoFitNeeded && autoFit();
				calendar.scrollToRangeStart();
				$container.show();
				reposition();
			}
			if (options.onOpen) {
				options.onOpen();
			}
			instance._trigger('open', event, { instance: instance });
		}

		function close(event) {
			if (isOpen) {
				$container.hide();
				$mask.hide();
				triggerButton.getElement().removeClass(classname + '-active');
				isOpen = false;
			}
			if (options.onClose) {
				options.onClose();
			}
			instance._trigger('close', event, { instance: instance });
		}

		function toggle(event) {
			if (isOpen) {
				close(event);
				reset();
			} else {
				open(event);
			}
		}

		function getContainer() {
			return $container;
		}

		function enforceOptions() {
			var oldPresetsMenu = presetsMenu;
			presetsMenu = buildPresetsMenu(classname, options, usePreset);
			oldPresetsMenu.getElement().replaceWith(presetsMenu.getElement());
			calendar.enforceOptions();
			buttonPanel.enforceOptions();
			triggerButton.enforceOptions();
			var range = getRange();
			if (range) {
				triggerButton.setLabel(formatRangeForDisplay(range));
			}
		}

		init();
		return {
			toggle: toggle,
			destroy: destroy,
			open: open,
			close: close,
			setRange: setRange,
			getRange: getRange,
			clearRange: clearRange,
			reset: reset,
			enforceOptions: enforceOptions,
			getContainer: getContainer
		};
	}
})(jQuery, window);

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "/*!\n * iCheck v1.0.2, http://git.io/arlzeA\n * ===================================\n * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization\n *\n * (c) 2013 Damir Sultanov, http://fronteed.com\n * MIT Licensed\n */\n\n(function($) {\n\n  // Cached vars\n  var _iCheck = 'iCheck',\n    _iCheckHelper = _iCheck + '-helper',\n    _checkbox = 'checkbox',\n    _radio = 'radio',\n    _checked = 'checked',\n    _unchecked = 'un' + _checked,\n    _disabled = 'disabled',\n    _determinate = 'determinate',\n    _indeterminate = 'in' + _determinate,\n    _update = 'update',\n    _type = 'type',\n    _click = 'click',\n    _touch = 'touchbegin.i touchend.i',\n    _add = 'addClass',\n    _remove = 'removeClass',\n    _callback = 'trigger',\n    _label = 'label',\n    _cursor = 'cursor',\n    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);\n\n  // Plugin init\n  $.fn[_iCheck] = function(options, fire) {\n\n    // Walker\n    var handle = 'input[type=\"' + _checkbox + '\"], input[type=\"' + _radio + '\"]',\n      stack = $(),\n      walker = function(object) {\n        object.each(function() {\n          var self = $(this);\n\n          if (self.is(handle)) {\n            stack = stack.add(self);\n          } else {\n            stack = stack.add(self.find(handle));\n          }\n        });\n      };\n\n    // Check if we should operate with some method\n    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)) {\n\n      // Normalize method's name\n      options = options.toLowerCase();\n\n      // Find checkboxes and radio buttons\n      walker(this);\n\n      return stack.each(function() {\n        var self = $(this);\n\n        if (options == 'destroy') {\n          tidy(self, 'ifDestroyed');\n        } else {\n          operate(self, true, options);\n        }\n\n        // Fire method's callback\n        if ($.isFunction(fire)) {\n          fire();\n        }\n      });\n\n    // Customization\n    } else if (typeof options == 'object' || !options) {\n\n      // Check if any options were passed\n      var settings = $.extend({\n          checkedClass: _checked,\n          disabledClass: _disabled,\n          indeterminateClass: _indeterminate,\n          labelHover: true\n        }, options),\n\n        selector = settings.handle,\n        hoverClass = settings.hoverClass || 'hover',\n        focusClass = settings.focusClass || 'focus',\n        activeClass = settings.activeClass || 'active',\n        labelHover = !!settings.labelHover,\n        labelHoverClass = settings.labelHoverClass || 'hover',\n\n        // Setup clickable area\n        area = ('' + settings.increaseArea).replace('%', '') | 0;\n\n      // Selector limit\n      if (selector == _checkbox || selector == _radio) {\n        handle = 'input[type=\"' + selector + '\"]';\n      }\n\n      // Clickable area limit\n      if (area < -50) {\n        area = -50;\n      }\n\n      // Walk around the selector\n      walker(this);\n\n      return stack.each(function() {\n        var self = $(this);\n\n        // If already customized\n        tidy(self);\n\n        var node = this,\n          id = node.id,\n\n          // Layer styles\n          offset = -area + '%',\n          size = 100 + (area * 2) + '%',\n          layer = {\n            position: 'absolute',\n            top: offset,\n            left: offset,\n            display: 'block',\n            width: size,\n            height: size,\n            margin: 0,\n            padding: 0,\n            background: '#fff',\n            border: 0,\n            opacity: 0\n          },\n\n          // Choose how to hide input\n          hide = _mobile ? {\n            position: 'absolute',\n            visibility: 'hidden'\n          } : area ? layer : {\n            position: 'absolute',\n            opacity: 0\n          },\n\n          // Get proper class\n          className = node[_type] == _checkbox ? settings.checkboxClass || 'i' + _checkbox : settings.radioClass || 'i' + _radio,\n\n          // Find assigned labels\n          label = $(_label + '[for=\"' + id + '\"]').add(self.closest(_label)),\n\n          // Check ARIA option\n          aria = !!settings.aria,\n\n          // Set ARIA placeholder\n          ariaID = _iCheck + '-' + Math.random().toString(36).substr(2,6),\n\n          // Parent & helper\n          parent = '<div class=\"' + className + '\" ' + (aria ? 'role=\"' + node[_type] + '\" ' : ''),\n          helper;\n\n        // Set ARIA \"labelledby\"\n        if (aria) {\n          label.each(function() {\n            parent += 'aria-labelledby=\"';\n\n            if (this.id) {\n              parent += this.id;\n            } else {\n              this.id = ariaID;\n              parent += ariaID;\n            }\n\n            parent += '\"';\n          });\n        }\n\n        // Wrap input\n        parent = self.wrap(parent + '/>')[_callback]('ifCreated').parent().append(settings.insert);\n\n        // Layer addition\n        helper = $('<ins class=\"' + _iCheckHelper + '\"/>').css(layer).appendTo(parent);\n\n        // Finalize customization\n        self.data(_iCheck, {o: settings, s: self.attr('style')}).css(hide);\n        !!settings.inheritClass && parent[_add](node.className || '');\n        !!settings.inheritID && id && parent.attr('id', _iCheck + '-' + id);\n        parent.css('position') == 'static' && parent.css('position', 'relative');\n        operate(self, true, _update);\n\n        // Label events\n        if (label.length) {\n          label.on(_click + '.i mouseover.i mouseout.i ' + _touch, function(event) {\n            var type = event[_type],\n              item = $(this);\n\n            // Do nothing if input is disabled\n            if (!node[_disabled]) {\n\n              // Click\n              if (type == _click) {\n                if ($(event.target).is('a')) {\n                  return;\n                }\n                operate(self, false, true);\n\n              // Hover state\n              } else if (labelHover) {\n\n                // mouseout|touchend\n                if (/ut|nd/.test(type)) {\n                  parent[_remove](hoverClass);\n                  item[_remove](labelHoverClass);\n                } else {\n                  parent[_add](hoverClass);\n                  item[_add](labelHoverClass);\n                }\n              }\n\n              if (_mobile) {\n                event.stopPropagation();\n              } else {\n                return false;\n              }\n            }\n          });\n        }\n\n        // Input events\n        self.on(_click + '.i focus.i blur.i keyup.i keydown.i keypress.i', function(event) {\n          var type = event[_type],\n            key = event.keyCode;\n\n          // Click\n          if (type == _click) {\n            return false;\n\n          // Keydown\n          } else if (type == 'keydown' && key == 32) {\n            if (!(node[_type] == _radio && node[_checked])) {\n              if (node[_checked]) {\n                off(self, _checked);\n              } else {\n                on(self, _checked);\n              }\n            }\n\n            return false;\n\n          // Keyup\n          } else if (type == 'keyup' && node[_type] == _radio) {\n            !node[_checked] && on(self, _checked);\n\n          // Focus/blur\n          } else if (/us|ur/.test(type)) {\n            parent[type == 'blur' ? _remove : _add](focusClass);\n          }\n        });\n\n        // Helper events\n        helper.on(_click + ' mousedown mouseup mouseover mouseout ' + _touch, function(event) {\n          var type = event[_type],\n\n            // mousedown|mouseup\n            toggle = /wn|up/.test(type) ? activeClass : hoverClass;\n\n          // Do nothing if input is disabled\n          if (!node[_disabled]) {\n\n            // Click\n            if (type == _click) {\n              operate(self, false, true);\n\n            // Active and hover states\n            } else {\n\n              // State is on\n              if (/wn|er|in/.test(type)) {\n\n                // mousedown|mouseover|touchbegin\n                parent[_add](toggle);\n\n              // State is off\n              } else {\n                parent[_remove](toggle + ' ' + activeClass);\n              }\n\n              // Label hover\n              if (label.length && labelHover && toggle == hoverClass) {\n\n                // mouseout|touchend\n                label[/ut|nd/.test(type) ? _remove : _add](labelHoverClass);\n              }\n            }\n\n            if (_mobile) {\n              event.stopPropagation();\n            } else {\n              return false;\n            }\n          }\n        });\n      });\n    } else {\n      return this;\n    }\n  };\n\n  // Do something with inputs\n  function operate(input, direct, method) {\n    var node = input[0],\n      state = /er/.test(method) ? _indeterminate : /bl/.test(method) ? _disabled : _checked,\n      active = method == _update ? {\n        checked: node[_checked],\n        disabled: node[_disabled],\n        indeterminate: input.attr(_indeterminate) == 'true' || input.attr(_determinate) == 'false'\n      } : node[state];\n\n    // Check, disable or indeterminate\n    if (/^(ch|di|in)/.test(method) && !active) {\n      on(input, state);\n\n    // Uncheck, enable or determinate\n    } else if (/^(un|en|de)/.test(method) && active) {\n      off(input, state);\n\n    // Update\n    } else if (method == _update) {\n\n      // Handle states\n      for (var each in active) {\n        if (active[each]) {\n          on(input, each, true);\n        } else {\n          off(input, each, true);\n        }\n      }\n\n    } else if (!direct || method == 'toggle') {\n\n      // Helper or label was clicked\n      if (!direct) {\n        input[_callback]('ifClicked');\n      }\n\n      // Toggle checked state\n      if (active) {\n        if (node[_type] !== _radio) {\n          off(input, state);\n        }\n      } else {\n        on(input, state);\n      }\n    }\n  }\n\n  // Add checked, disabled or indeterminate state\n  function on(input, state, keep) {\n    var node = input[0],\n      parent = input.parent(),\n      checked = state == _checked,\n      indeterminate = state == _indeterminate,\n      disabled = state == _disabled,\n      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',\n      regular = option(input, callback + capitalize(node[_type])),\n      specific = option(input, state + capitalize(node[_type]));\n\n    // Prevent unnecessary actions\n    if (node[state] !== true) {\n\n      // Toggle assigned radio buttons\n      if (!keep && state == _checked && node[_type] == _radio && node.name) {\n        var form = input.closest('form'),\n          inputs = 'input[name=\"' + node.name + '\"]';\n\n        inputs = form.length ? form.find(inputs) : $(inputs);\n\n        inputs.each(function() {\n          if (this !== node && $(this).data(_iCheck)) {\n            off($(this), state);\n          }\n        });\n      }\n\n      // Indeterminate state\n      if (indeterminate) {\n\n        // Add indeterminate state\n        node[state] = true;\n\n        // Remove checked state\n        if (node[_checked]) {\n          off(input, _checked, 'force');\n        }\n\n      // Checked or disabled state\n      } else {\n\n        // Add checked or disabled state\n        if (!keep) {\n          node[state] = true;\n        }\n\n        // Remove indeterminate state\n        if (checked && node[_indeterminate]) {\n          off(input, _indeterminate, false);\n        }\n      }\n\n      // Trigger callbacks\n      callbacks(input, checked, state, keep);\n    }\n\n    // Add proper cursor\n    if (node[_disabled] && !!option(input, _cursor, true)) {\n      parent.find('.' + _iCheckHelper).css(_cursor, 'default');\n    }\n\n    // Add state class\n    parent[_add](specific || option(input, state) || '');\n\n    // Set ARIA attribute\n    if (!!parent.attr('role') && !indeterminate) {\n      parent.attr('aria-' + (disabled ? _disabled : _checked), 'true');\n    }\n\n    // Remove regular state class\n    parent[_remove](regular || option(input, callback) || '');\n  }\n\n  // Remove checked, disabled or indeterminate state\n  function off(input, state, keep) {\n    var node = input[0],\n      parent = input.parent(),\n      checked = state == _checked,\n      indeterminate = state == _indeterminate,\n      disabled = state == _disabled,\n      callback = indeterminate ? _determinate : checked ? _unchecked : 'enabled',\n      regular = option(input, callback + capitalize(node[_type])),\n      specific = option(input, state + capitalize(node[_type]));\n\n    // Prevent unnecessary actions\n    if (node[state] !== false) {\n\n      // Toggle state\n      if (indeterminate || !keep || keep == 'force') {\n        node[state] = false;\n      }\n\n      // Trigger callbacks\n      callbacks(input, checked, callback, keep);\n    }\n\n    // Add proper cursor\n    if (!node[_disabled] && !!option(input, _cursor, true)) {\n      parent.find('.' + _iCheckHelper).css(_cursor, 'pointer');\n    }\n\n    // Remove state class\n    parent[_remove](specific || option(input, state) || '');\n\n    // Set ARIA attribute\n    if (!!parent.attr('role') && !indeterminate) {\n      parent.attr('aria-' + (disabled ? _disabled : _checked), 'false');\n    }\n\n    // Add regular state class\n    parent[_add](regular || option(input, callback) || '');\n  }\n\n  // Remove all traces\n  function tidy(input, callback) {\n    if (input.data(_iCheck)) {\n\n      // Remove everything except input\n      input.parent().html(input.attr('style', input.data(_iCheck).s || ''));\n\n      // Callback\n      if (callback) {\n        input[_callback](callback);\n      }\n\n      // Unbind events\n      input.off('.i').unwrap();\n      $(_label + '[for=\"' + input[0].id + '\"]').add(input.closest(_label)).off('.i');\n    }\n  }\n\n  // Get some option\n  function option(input, state, regular) {\n    if (input.data(_iCheck)) {\n      return input.data(_iCheck).o[state + (regular ? '' : 'Class')];\n    }\n  }\n\n  // Capitalize some string\n  function capitalize(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n  }\n\n  // Executable handlers\n  function callbacks(input, checked, callback, keep) {\n    if (!keep) {\n      if (checked) {\n        input[_callback]('ifToggled');\n      }\n\n      input[_callback]('ifChanged')[_callback]('if' + capitalize(callback));\n    }\n  }\n})(window.jQuery || window.Zepto);\n"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "var DateFormatter;!function(){\"use strict\";var e,t,a,r,n,o;n=864e5,o=3600,e=function(e,t){return\"string\"==typeof e&&\"string\"==typeof t&&e.toLowerCase()===t.toLowerCase()},t=function(e,a,r){var n=r||\"0\",o=e.toString();return o.length<a?t(n+o,a):o},a=function(e){var t,r;for(e=e||{},t=1;t<arguments.length;t++)if(r=arguments[t])for(var n in r)r.hasOwnProperty(n)&&(\"object\"==typeof r[n]?a(e[n],r[n]):e[n]=r[n]);return e},r={dateSettings:{days:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"],daysShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],monthsShort:[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"],meridiem:[\"AM\",\"PM\"],ordinal:function(e){var t=e%10,a={1:\"st\",2:\"nd\",3:\"rd\"};return 1!==Math.floor(e%100/10)&&a[t]?a[t]:\"th\"}},separators:/[ \\-+\\/\\.T:@]/g,validParts:/[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,intParts:/[djwNzmnyYhHgGis]/g,tzParts:/\\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\\d{4})?)\\b/g,tzClip:/[^-+\\dA-Z]/g},DateFormatter=function(e){var t=this,n=a(r,e);t.dateSettings=n.dateSettings,t.separators=n.separators,t.validParts=n.validParts,t.intParts=n.intParts,t.tzParts=n.tzParts,t.tzClip=n.tzClip},DateFormatter.prototype={constructor:DateFormatter,parseDate:function(t,a){var r,n,o,i,s,d,u,l,f,c,m=this,h=!1,g=!1,p=m.dateSettings,y={date:null,year:null,month:null,day:null,hour:0,min:0,sec:0};if(!t)return void 0;if(t instanceof Date)return t;if(\"number\"==typeof t)return new Date(t);if(\"U\"===a)return o=parseInt(t),o?new Date(1e3*o):t;if(\"string\"!=typeof t)return\"\";if(r=a.match(m.validParts),!r||0===r.length)throw new Error(\"Invalid date format definition.\");for(n=t.replace(m.separators,\"\\x00\").split(\"\\x00\"),o=0;o<n.length;o++)switch(i=n[o],s=parseInt(i),r[o]){case\"y\":case\"Y\":f=i.length,2===f?y.year=parseInt((70>s?\"20\":\"19\")+i):4===f&&(y.year=s),h=!0;break;case\"m\":case\"n\":case\"M\":case\"F\":isNaN(i)?(d=p.monthsShort.indexOf(i),d>-1&&(y.month=d+1),d=p.months.indexOf(i),d>-1&&(y.month=d+1)):s>=1&&12>=s&&(y.month=s),h=!0;break;case\"d\":case\"j\":s>=1&&31>=s&&(y.day=s),h=!0;break;case\"g\":case\"h\":u=r.indexOf(\"a\")>-1?r.indexOf(\"a\"):r.indexOf(\"A\")>-1?r.indexOf(\"A\"):-1,c=n[u],u>-1?(l=e(c,p.meridiem[0])?0:e(c,p.meridiem[1])?12:-1,s>=1&&12>=s&&l>-1?y.hour=s+l-1:s>=0&&23>=s&&(y.hour=s)):s>=0&&23>=s&&(y.hour=s),g=!0;break;case\"G\":case\"H\":s>=0&&23>=s&&(y.hour=s),g=!0;break;case\"i\":s>=0&&59>=s&&(y.min=s),g=!0;break;case\"s\":s>=0&&59>=s&&(y.sec=s),g=!0}if(h===!0&&y.year&&y.month&&y.day)y.date=new Date(y.year,y.month-1,y.day,y.hour,y.min,y.sec,0);else{if(g!==!0)return!1;y.date=new Date(0,0,0,y.hour,y.min,y.sec,0)}return y.date},guessDate:function(e,t){if(\"string\"!=typeof e)return e;var a,r,n,o,i=this,s=e.replace(i.separators,\"\\x00\").split(\"\\x00\"),d=/^[djmn]/g,u=t.match(i.validParts),l=new Date,f=0;if(!d.test(u[0]))return e;for(r=0;r<s.length;r++){switch(f=2,n=s[r],o=parseInt(n.substr(0,2)),r){case 0:\"m\"===u[0]||\"n\"===u[0]?l.setMonth(o-1):l.setDate(o);break;case 1:\"m\"===u[0]||\"n\"===u[0]?l.setDate(o):l.setMonth(o-1);break;case 2:a=l.getFullYear(),n.length<4?(l.setFullYear(parseInt(a.toString().substr(0,4-n.length)+n)),f=n.length):(l.setFullYear=parseInt(n.substr(0,4)),f=4);break;case 3:l.setHours(o);break;case 4:l.setMinutes(o);break;case 5:l.setSeconds(o)}n.substr(f).length>0&&s.splice(r+1,0,n.substr(f))}return l},parseFormat:function(e,a){var r,i=this,s=i.dateSettings,d=/\\\\?(.?)/gi,u=function(e,t){return r[e]?r[e]():t};return r={d:function(){return t(r.j(),2)},D:function(){return s.daysShort[r.w()]},j:function(){return a.getDate()},l:function(){return s.days[r.w()]},N:function(){return r.w()||7},w:function(){return a.getDay()},z:function(){var e=new Date(r.Y(),r.n()-1,r.j()),t=new Date(r.Y(),0,1);return Math.round((e-t)/n)},W:function(){var e=new Date(r.Y(),r.n()-1,r.j()-r.N()+3),a=new Date(e.getFullYear(),0,4);return t(1+Math.round((e-a)/n/7),2)},F:function(){return s.months[a.getMonth()]},m:function(){return t(r.n(),2)},M:function(){return s.monthsShort[a.getMonth()]},n:function(){return a.getMonth()+1},t:function(){return new Date(r.Y(),r.n(),0).getDate()},L:function(){var e=r.Y();return e%4===0&&e%100!==0||e%400===0?1:0},o:function(){var e=r.n(),t=r.W(),a=r.Y();return a+(12===e&&9>t?1:1===e&&t>9?-1:0)},Y:function(){return a.getFullYear()},y:function(){return r.Y().toString().slice(-2)},a:function(){return r.A().toLowerCase()},A:function(){var e=r.G()<12?0:1;return s.meridiem[e]},B:function(){var e=a.getUTCHours()*o,r=60*a.getUTCMinutes(),n=a.getUTCSeconds();return t(Math.floor((e+r+n+o)/86.4)%1e3,3)},g:function(){return r.G()%12||12},G:function(){return a.getHours()},h:function(){return t(r.g(),2)},H:function(){return t(r.G(),2)},i:function(){return t(a.getMinutes(),2)},s:function(){return t(a.getSeconds(),2)},u:function(){return t(1e3*a.getMilliseconds(),6)},e:function(){var e=/\\((.*)\\)/.exec(String(a))[1];return e||\"Coordinated Universal Time\"},T:function(){var e=(String(a).match(i.tzParts)||[\"\"]).pop().replace(i.tzClip,\"\");return e||\"UTC\"},I:function(){var e=new Date(r.Y(),0),t=Date.UTC(r.Y(),0),a=new Date(r.Y(),6),n=Date.UTC(r.Y(),6);return e-t!==a-n?1:0},O:function(){var e=a.getTimezoneOffset(),r=Math.abs(e);return(e>0?\"-\":\"+\")+t(100*Math.floor(r/60)+r%60,4)},P:function(){var e=r.O();return e.substr(0,3)+\":\"+e.substr(3,2)},Z:function(){return 60*-a.getTimezoneOffset()},c:function(){return\"Y-m-d\\\\TH:i:sP\".replace(d,u)},r:function(){return\"D, d M Y H:i:s O\".replace(d,u)},U:function(){return a.getTime()/1e3||0}},u(e,e)},formatDate:function(e,t){var a,r,n,o,i,s=this,d=\"\";if(\"string\"==typeof e&&(e=s.parseDate(e,t),e===!1))return!1;if(e instanceof Date){for(n=t.length,a=0;n>a;a++)i=t.charAt(a),\"S\"!==i&&(o=s.parseFormat(i,e),a!==n-1&&s.intParts.test(i)&&\"S\"===t.charAt(a+1)&&(r=parseInt(o),o+=s.dateSettings.ordinal(r)),d+=o);return d}return\"\"}}}(),function(e){\"function\"==typeof define&&define.amd?define([\"jquery\",\"jquery-mousewheel\"],e):\"object\"==typeof exports?module.exports=e:e(jQuery)}(function(e){\"use strict\";function t(e,t,a){this.date=e,this.desc=t,this.style=a}var a={i18n:{ar:{months:[\"كانون الثاني\",\"شباط\",\"آذار\",\"نيسان\",\"مايو\",\"حزيران\",\"تموز\",\"آب\",\"أيلول\",\"تشرين الأول\",\"تشرين الثاني\",\"كانون الأول\"],dayOfWeekShort:[\"ن\",\"ث\",\"ع\",\"خ\",\"ج\",\"س\",\"ح\"],dayOfWeek:[\"الأحد\",\"الاثنين\",\"الثلاثاء\",\"الأربعاء\",\"الخميس\",\"الجمعة\",\"السبت\",\"الأحد\"]},ro:{months:[\"Ianuarie\",\"Februarie\",\"Martie\",\"Aprilie\",\"Mai\",\"Iunie\",\"Iulie\",\"August\",\"Septembrie\",\"Octombrie\",\"Noiembrie\",\"Decembrie\"],dayOfWeekShort:[\"Du\",\"Lu\",\"Ma\",\"Mi\",\"Jo\",\"Vi\",\"Sâ\"],dayOfWeek:[\"Duminică\",\"Luni\",\"Marţi\",\"Miercuri\",\"Joi\",\"Vineri\",\"Sâmbătă\"]},id:{months:[\"Januari\",\"Februari\",\"Maret\",\"April\",\"Mei\",\"Juni\",\"Juli\",\"Agustus\",\"September\",\"Oktober\",\"November\",\"Desember\"],dayOfWeekShort:[\"Min\",\"Sen\",\"Sel\",\"Rab\",\"Kam\",\"Jum\",\"Sab\"],dayOfWeek:[\"Minggu\",\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\"]},is:{months:[\"Janúar\",\"Febrúar\",\"Mars\",\"Apríl\",\"Maí\",\"Júní\",\"Júlí\",\"Ágúst\",\"September\",\"Október\",\"Nóvember\",\"Desember\"],dayOfWeekShort:[\"Sun\",\"Mán\",\"Þrið\",\"Mið\",\"Fim\",\"Fös\",\"Lau\"],dayOfWeek:[\"Sunnudagur\",\"Mánudagur\",\"Þriðjudagur\",\"Miðvikudagur\",\"Fimmtudagur\",\"Föstudagur\",\"Laugardagur\"]},bg:{months:[\"Януари\",\"Февруари\",\"Март\",\"Април\",\"Май\",\"Юни\",\"Юли\",\"Август\",\"Септември\",\"Октомври\",\"Ноември\",\"Декември\"],dayOfWeekShort:[\"Нд\",\"Пн\",\"Вт\",\"Ср\",\"Чт\",\"Пт\",\"Сб\"],dayOfWeek:[\"Неделя\",\"Понеделник\",\"Вторник\",\"Сряда\",\"Четвъртък\",\"Петък\",\"Събота\"]},fa:{months:[\"فروردین\",\"اردیبهشت\",\"خرداد\",\"تیر\",\"مرداد\",\"شهریور\",\"مهر\",\"آبان\",\"آذر\",\"دی\",\"بهمن\",\"اسفند\"],dayOfWeekShort:[\"یکشنبه\",\"دوشنبه\",\"سه شنبه\",\"چهارشنبه\",\"پنجشنبه\",\"جمعه\",\"شنبه\"],dayOfWeek:[\"یک‌شنبه\",\"دوشنبه\",\"سه‌شنبه\",\"چهارشنبه\",\"پنج‌شنبه\",\"جمعه\",\"شنبه\",\"یک‌شنبه\"]},ru:{months:[\"Январь\",\"Февраль\",\"Март\",\"Апрель\",\"Май\",\"Июнь\",\"Июль\",\"Август\",\"Сентябрь\",\"Октябрь\",\"Ноябрь\",\"Декабрь\"],dayOfWeekShort:[\"Вс\",\"Пн\",\"Вт\",\"Ср\",\"Чт\",\"Пт\",\"Сб\"],dayOfWeek:[\"Воскресенье\",\"Понедельник\",\"Вторник\",\"Среда\",\"Четверг\",\"Пятница\",\"Суббота\"]},uk:{months:[\"Січень\",\"Лютий\",\"Березень\",\"Квітень\",\"Травень\",\"Червень\",\"Липень\",\"Серпень\",\"Вересень\",\"Жовтень\",\"Листопад\",\"Грудень\"],dayOfWeekShort:[\"Ндл\",\"Пнд\",\"Втр\",\"Срд\",\"Чтв\",\"Птн\",\"Сбт\"],dayOfWeek:[\"Неділя\",\"Понеділок\",\"Вівторок\",\"Середа\",\"Четвер\",\"П'ятниця\",\"Субота\"]},en:{months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],dayOfWeek:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]},el:{months:[\"Ιανουάριος\",\"Φεβρουάριος\",\"Μάρτιος\",\"Απρίλιος\",\"Μάιος\",\"Ιούνιος\",\"Ιούλιος\",\"Αύγουστος\",\"Σεπτέμβριος\",\"Οκτώβριος\",\"Νοέμβριος\",\"Δεκέμβριος\"],dayOfWeekShort:[\"Κυρ\",\"Δευ\",\"Τρι\",\"Τετ\",\"Πεμ\",\"Παρ\",\"Σαβ\"],dayOfWeek:[\"Κυριακή\",\"Δευτέρα\",\"Τρίτη\",\"Τετάρτη\",\"Πέμπτη\",\"Παρασκευή\",\"Σάββατο\"]},de:{months:[\"Januar\",\"Februar\",\"März\",\"April\",\"Mai\",\"Juni\",\"Juli\",\"August\",\"September\",\"Oktober\",\"November\",\"Dezember\"],dayOfWeekShort:[\"So\",\"Mo\",\"Di\",\"Mi\",\"Do\",\"Fr\",\"Sa\"],dayOfWeek:[\"Sonntag\",\"Montag\",\"Dienstag\",\"Mittwoch\",\"Donnerstag\",\"Freitag\",\"Samstag\"]},nl:{months:[\"januari\",\"februari\",\"maart\",\"april\",\"mei\",\"juni\",\"juli\",\"augustus\",\"september\",\"oktober\",\"november\",\"december\"],dayOfWeekShort:[\"zo\",\"ma\",\"di\",\"wo\",\"do\",\"vr\",\"za\"],dayOfWeek:[\"zondag\",\"maandag\",\"dinsdag\",\"woensdag\",\"donderdag\",\"vrijdag\",\"zaterdag\"]},tr:{months:[\"Ocak\",\"Şubat\",\"Mart\",\"Nisan\",\"Mayıs\",\"Haziran\",\"Temmuz\",\"Ağustos\",\"Eylül\",\"Ekim\",\"Kasım\",\"Aralık\"],dayOfWeekShort:[\"Paz\",\"Pts\",\"Sal\",\"Çar\",\"Per\",\"Cum\",\"Cts\"],dayOfWeek:[\"Pazar\",\"Pazartesi\",\"Salı\",\"Çarşamba\",\"Perşembe\",\"Cuma\",\"Cumartesi\"]},fr:{months:[\"Janvier\",\"Février\",\"Mars\",\"Avril\",\"Mai\",\"Juin\",\"Juillet\",\"Août\",\"Septembre\",\"Octobre\",\"Novembre\",\"Décembre\"],dayOfWeekShort:[\"Dim\",\"Lun\",\"Mar\",\"Mer\",\"Jeu\",\"Ven\",\"Sam\"],dayOfWeek:[\"dimanche\",\"lundi\",\"mardi\",\"mercredi\",\"jeudi\",\"vendredi\",\"samedi\"]},es:{months:[\"Enero\",\"Febrero\",\"Marzo\",\"Abril\",\"Mayo\",\"Junio\",\"Julio\",\"Agosto\",\"Septiembre\",\"Octubre\",\"Noviembre\",\"Diciembre\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mié\",\"Jue\",\"Vie\",\"Sáb\"],dayOfWeek:[\"Domingo\",\"Lunes\",\"Martes\",\"Miércoles\",\"Jueves\",\"Viernes\",\"Sábado\"]},th:{months:[\"มกราคม\",\"กุมภาพันธ์\",\"มีนาคม\",\"เมษายน\",\"พฤษภาคม\",\"มิถุนายน\",\"กรกฎาคม\",\"สิงหาคม\",\"กันยายน\",\"ตุลาคม\",\"พฤศจิกายน\",\"ธันวาคม\"],dayOfWeekShort:[\"อา.\",\"จ.\",\"อ.\",\"พ.\",\"พฤ.\",\"ศ.\",\"ส.\"],dayOfWeek:[\"อาทิตย์\",\"จันทร์\",\"อังคาร\",\"พุธ\",\"พฤหัส\",\"ศุกร์\",\"เสาร์\",\"อาทิตย์\"]},pl:{months:[\"styczeń\",\"luty\",\"marzec\",\"kwiecień\",\"maj\",\"czerwiec\",\"lipiec\",\"sierpień\",\"wrzesień\",\"październik\",\"listopad\",\"grudzień\"],dayOfWeekShort:[\"nd\",\"pn\",\"wt\",\"śr\",\"cz\",\"pt\",\"sb\"],dayOfWeek:[\"niedziela\",\"poniedziałek\",\"wtorek\",\"środa\",\"czwartek\",\"piątek\",\"sobota\"]},pt:{months:[\"Janeiro\",\"Fevereiro\",\"Março\",\"Abril\",\"Maio\",\"Junho\",\"Julho\",\"Agosto\",\"Setembro\",\"Outubro\",\"Novembro\",\"Dezembro\"],dayOfWeekShort:[\"Dom\",\"Seg\",\"Ter\",\"Qua\",\"Qui\",\"Sex\",\"Sab\"],dayOfWeek:[\"Domingo\",\"Segunda\",\"Terça\",\"Quarta\",\"Quinta\",\"Sexta\",\"Sábado\"]},ch:{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"]},se:{months:[\"Januari\",\"Februari\",\"Mars\",\"April\",\"Maj\",\"Juni\",\"Juli\",\"Augusti\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Sön\",\"Mån\",\"Tis\",\"Ons\",\"Tor\",\"Fre\",\"Lör\"]},kr:{months:[\"1월\",\"2월\",\"3월\",\"4월\",\"5월\",\"6월\",\"7월\",\"8월\",\"9월\",\"10월\",\"11월\",\"12월\"],dayOfWeekShort:[\"일\",\"월\",\"화\",\"수\",\"목\",\"금\",\"토\"],dayOfWeek:[\"일요일\",\"월요일\",\"화요일\",\"수요일\",\"목요일\",\"금요일\",\"토요일\"]},it:{months:[\"Gennaio\",\"Febbraio\",\"Marzo\",\"Aprile\",\"Maggio\",\"Giugno\",\"Luglio\",\"Agosto\",\"Settembre\",\"Ottobre\",\"Novembre\",\"Dicembre\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mer\",\"Gio\",\"Ven\",\"Sab\"],dayOfWeek:[\"Domenica\",\"Lunedì\",\"Martedì\",\"Mercoledì\",\"Giovedì\",\"Venerdì\",\"Sabato\"]},da:{months:[\"January\",\"Februar\",\"Marts\",\"April\",\"Maj\",\"Juni\",\"July\",\"August\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Søn\",\"Man\",\"Tir\",\"Ons\",\"Tor\",\"Fre\",\"Lør\"],dayOfWeek:[\"søndag\",\"mandag\",\"tirsdag\",\"onsdag\",\"torsdag\",\"fredag\",\"lørdag\"]},no:{months:[\"Januar\",\"Februar\",\"Mars\",\"April\",\"Mai\",\"Juni\",\"Juli\",\"August\",\"September\",\"Oktober\",\"November\",\"Desember\"],dayOfWeekShort:[\"Søn\",\"Man\",\"Tir\",\"Ons\",\"Tor\",\"Fre\",\"Lør\"],dayOfWeek:[\"Søndag\",\"Mandag\",\"Tirsdag\",\"Onsdag\",\"Torsdag\",\"Fredag\",\"Lørdag\"]},ja:{months:[\"1月\",\"2月\",\"3月\",\"4月\",\"5月\",\"6月\",\"7月\",\"8月\",\"9月\",\"10月\",\"11月\",\"12月\"],dayOfWeekShort:[\"日\",\"月\",\"火\",\"水\",\"木\",\"金\",\"土\"],dayOfWeek:[\"日曜\",\"月曜\",\"火曜\",\"水曜\",\"木曜\",\"金曜\",\"土曜\"]},vi:{months:[\"Tháng 1\",\"Tháng 2\",\"Tháng 3\",\"Tháng 4\",\"Tháng 5\",\"Tháng 6\",\"Tháng 7\",\"Tháng 8\",\"Tháng 9\",\"Tháng 10\",\"Tháng 11\",\"Tháng 12\"],dayOfWeekShort:[\"CN\",\"T2\",\"T3\",\"T4\",\"T5\",\"T6\",\"T7\"],dayOfWeek:[\"Chủ nhật\",\"Thứ hai\",\"Thứ ba\",\"Thứ tư\",\"Thứ năm\",\"Thứ sáu\",\"Thứ bảy\"]},sl:{months:[\"Januar\",\"Februar\",\"Marec\",\"April\",\"Maj\",\"Junij\",\"Julij\",\"Avgust\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Tor\",\"Sre\",\"Čet\",\"Pet\",\"Sob\"],dayOfWeek:[\"Nedelja\",\"Ponedeljek\",\"Torek\",\"Sreda\",\"Četrtek\",\"Petek\",\"Sobota\"]},cs:{months:[\"Leden\",\"Únor\",\"Březen\",\"Duben\",\"Květen\",\"Červen\",\"Červenec\",\"Srpen\",\"Září\",\"Říjen\",\"Listopad\",\"Prosinec\"],dayOfWeekShort:[\"Ne\",\"Po\",\"Út\",\"St\",\"Čt\",\"Pá\",\"So\"]},hu:{months:[\"Január\",\"Február\",\"Március\",\"Április\",\"Május\",\"Június\",\"Július\",\"Augusztus\",\"Szeptember\",\"Október\",\"November\",\"December\"],dayOfWeekShort:[\"Va\",\"Hé\",\"Ke\",\"Sze\",\"Cs\",\"Pé\",\"Szo\"],dayOfWeek:[\"vasárnap\",\"hétfő\",\"kedd\",\"szerda\",\"csütörtök\",\"péntek\",\"szombat\"]},az:{months:[\"Yanvar\",\"Fevral\",\"Mart\",\"Aprel\",\"May\",\"Iyun\",\"Iyul\",\"Avqust\",\"Sentyabr\",\"Oktyabr\",\"Noyabr\",\"Dekabr\"],dayOfWeekShort:[\"B\",\"Be\",\"Ça\",\"Ç\",\"Ca\",\"C\",\"Ş\"],dayOfWeek:[\"Bazar\",\"Bazar ertəsi\",\"Çərşənbə axşamı\",\"Çərşənbə\",\"Cümə axşamı\",\"Cümə\",\"Şənbə\"]},bs:{months:[\"Januar\",\"Februar\",\"Mart\",\"April\",\"Maj\",\"Jun\",\"Jul\",\"Avgust\",\"Septembar\",\"Oktobar\",\"Novembar\",\"Decembar\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sri\",\"Čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedjelja\",\"Ponedjeljak\",\"Utorak\",\"Srijeda\",\"Četvrtak\",\"Petak\",\"Subota\"]},ca:{months:[\"Gener\",\"Febrer\",\"Març\",\"Abril\",\"Maig\",\"Juny\",\"Juliol\",\"Agost\",\"Setembre\",\"Octubre\",\"Novembre\",\"Desembre\"],dayOfWeekShort:[\"Dg\",\"Dl\",\"Dt\",\"Dc\",\"Dj\",\"Dv\",\"Ds\"],dayOfWeek:[\"Diumenge\",\"Dilluns\",\"Dimarts\",\"Dimecres\",\"Dijous\",\"Divendres\",\"Dissabte\"]},\"en-GB\":{months:[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Sun\",\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\"],dayOfWeek:[\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]},et:{months:[\"Jaanuar\",\"Veebruar\",\"Märts\",\"Aprill\",\"Mai\",\"Juuni\",\"Juuli\",\"August\",\"September\",\"Oktoober\",\"November\",\"Detsember\"],dayOfWeekShort:[\"P\",\"E\",\"T\",\"K\",\"N\",\"R\",\"L\"],dayOfWeek:[\"Pühapäev\",\"Esmaspäev\",\"Teisipäev\",\"Kolmapäev\",\"Neljapäev\",\"Reede\",\"Laupäev\"]},eu:{months:[\"Urtarrila\",\"Otsaila\",\"Martxoa\",\"Apirila\",\"Maiatza\",\"Ekaina\",\"Uztaila\",\"Abuztua\",\"Iraila\",\"Urria\",\"Azaroa\",\"Abendua\"],dayOfWeekShort:[\"Ig.\",\"Al.\",\"Ar.\",\"Az.\",\"Og.\",\"Or.\",\"La.\"],dayOfWeek:[\"Igandea\",\"Astelehena\",\"Asteartea\",\"Asteazkena\",\"Osteguna\",\"Ostirala\",\"Larunbata\"]},fi:{months:[\"Tammikuu\",\"Helmikuu\",\"Maaliskuu\",\"Huhtikuu\",\"Toukokuu\",\"Kesäkuu\",\"Heinäkuu\",\"Elokuu\",\"Syyskuu\",\"Lokakuu\",\"Marraskuu\",\"Joulukuu\"],dayOfWeekShort:[\"Su\",\"Ma\",\"Ti\",\"Ke\",\"To\",\"Pe\",\"La\"],dayOfWeek:[\"sunnuntai\",\"maanantai\",\"tiistai\",\"keskiviikko\",\"torstai\",\"perjantai\",\"lauantai\"]},gl:{months:[\"Xan\",\"Feb\",\"Maz\",\"Abr\",\"Mai\",\"Xun\",\"Xul\",\"Ago\",\"Set\",\"Out\",\"Nov\",\"Dec\"],dayOfWeekShort:[\"Dom\",\"Lun\",\"Mar\",\"Mer\",\"Xov\",\"Ven\",\"Sab\"],dayOfWeek:[\"Domingo\",\"Luns\",\"Martes\",\"Mércores\",\"Xoves\",\"Venres\",\"Sábado\"]},hr:{months:[\"Siječanj\",\"Veljača\",\"Ožujak\",\"Travanj\",\"Svibanj\",\"Lipanj\",\"Srpanj\",\"Kolovoz\",\"Rujan\",\"Listopad\",\"Studeni\",\"Prosinac\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sri\",\"Čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedjelja\",\"Ponedjeljak\",\"Utorak\",\"Srijeda\",\"Četvrtak\",\"Petak\",\"Subota\"]},ko:{months:[\"1월\",\"2월\",\"3월\",\"4월\",\"5월\",\"6월\",\"7월\",\"8월\",\"9월\",\"10월\",\"11월\",\"12월\"],dayOfWeekShort:[\"일\",\"월\",\"화\",\"수\",\"목\",\"금\",\"토\"],dayOfWeek:[\"일요일\",\"월요일\",\"화요일\",\"수요일\",\"목요일\",\"금요일\",\"토요일\"]},lt:{months:[\"Sausio\",\"Vasario\",\"Kovo\",\"Balandžio\",\"Gegužės\",\"Birželio\",\"Liepos\",\"Rugpjūčio\",\"Rugsėjo\",\"Spalio\",\"Lapkričio\",\"Gruodžio\"],dayOfWeekShort:[\"Sek\",\"Pir\",\"Ant\",\"Tre\",\"Ket\",\"Pen\",\"Šeš\"],dayOfWeek:[\"Sekmadienis\",\"Pirmadienis\",\"Antradienis\",\"Trečiadienis\",\"Ketvirtadienis\",\"Penktadienis\",\"Šeštadienis\"]},lv:{months:[\"Janvāris\",\"Februāris\",\"Marts\",\"Aprīlis \",\"Maijs\",\"Jūnijs\",\"Jūlijs\",\"Augusts\",\"Septembris\",\"Oktobris\",\"Novembris\",\"Decembris\"],dayOfWeekShort:[\"Sv\",\"Pr\",\"Ot\",\"Tr\",\"Ct\",\"Pk\",\"St\"],dayOfWeek:[\"Svētdiena\",\"Pirmdiena\",\"Otrdiena\",\"Trešdiena\",\"Ceturtdiena\",\"Piektdiena\",\"Sestdiena\"]},mk:{months:[\"јануари\",\"февруари\",\"март\",\"април\",\"мај\",\"јуни\",\"јули\",\"август\",\"септември\",\"октомври\",\"ноември\",\"декември\"],dayOfWeekShort:[\"нед\",\"пон\",\"вто\",\"сре\",\"чет\",\"пет\",\"саб\"],dayOfWeek:[\"Недела\",\"Понеделник\",\"Вторник\",\"Среда\",\"Четврток\",\"Петок\",\"Сабота\"]},mn:{months:[\"1-р сар\",\"2-р сар\",\"3-р сар\",\"4-р сар\",\"5-р сар\",\"6-р сар\",\"7-р сар\",\"8-р сар\",\"9-р сар\",\"10-р сар\",\"11-р сар\",\"12-р сар\"],dayOfWeekShort:[\"Дав\",\"Мяг\",\"Лха\",\"Пүр\",\"Бсн\",\"Бям\",\"Ням\"],dayOfWeek:[\"Даваа\",\"Мягмар\",\"Лхагва\",\"Пүрэв\",\"Баасан\",\"Бямба\",\"Ням\"]},\"pt-BR\":{months:[\"Janeiro\",\"Fevereiro\",\"Março\",\"Abril\",\"Maio\",\"Junho\",\"Julho\",\"Agosto\",\"Setembro\",\"Outubro\",\"Novembro\",\"Dezembro\"],dayOfWeekShort:[\"Dom\",\"Seg\",\"Ter\",\"Qua\",\"Qui\",\"Sex\",\"Sáb\"],dayOfWeek:[\"Domingo\",\"Segunda\",\"Terça\",\"Quarta\",\"Quinta\",\"Sexta\",\"Sábado\"]},sk:{months:[\"Január\",\"Február\",\"Marec\",\"Apríl\",\"Máj\",\"Jún\",\"Júl\",\"August\",\"September\",\"Október\",\"November\",\"December\"],dayOfWeekShort:[\"Ne\",\"Po\",\"Ut\",\"St\",\"Št\",\"Pi\",\"So\"],dayOfWeek:[\"Nedeľa\",\"Pondelok\",\"Utorok\",\"Streda\",\"Štvrtok\",\"Piatok\",\"Sobota\"]},sq:{months:[\"Janar\",\"Shkurt\",\"Mars\",\"Prill\",\"Maj\",\"Qershor\",\"Korrik\",\"Gusht\",\"Shtator\",\"Tetor\",\"Nëntor\",\"Dhjetor\"],dayOfWeekShort:[\"Die\",\"Hën\",\"Mar\",\"Mër\",\"Enj\",\"Pre\",\"Shtu\"],dayOfWeek:[\"E Diel\",\"E Hënë\",\"E Martē\",\"E Mërkurë\",\"E Enjte\",\"E Premte\",\"E Shtunë\"]},\"sr-YU\":{months:[\"Januar\",\"Februar\",\"Mart\",\"April\",\"Maj\",\"Jun\",\"Jul\",\"Avgust\",\"Septembar\",\"Oktobar\",\"Novembar\",\"Decembar\"],dayOfWeekShort:[\"Ned\",\"Pon\",\"Uto\",\"Sre\",\"čet\",\"Pet\",\"Sub\"],dayOfWeek:[\"Nedelja\",\"Ponedeljak\",\"Utorak\",\"Sreda\",\"Četvrtak\",\"Petak\",\"Subota\"]},sr:{months:[\"јануар\",\"фебруар\",\"март\",\"април\",\"мај\",\"јун\",\"јул\",\"август\",\"септембар\",\"октобар\",\"новембар\",\"децембар\"],dayOfWeekShort:[\"нед\",\"пон\",\"уто\",\"сре\",\"чет\",\"пет\",\"суб\"],dayOfWeek:[\"Недеља\",\"Понедељак\",\"Уторак\",\"Среда\",\"Четвртак\",\"Петак\",\"Субота\"]},sv:{months:[\"Januari\",\"Februari\",\"Mars\",\"April\",\"Maj\",\"Juni\",\"Juli\",\"Augusti\",\"September\",\"Oktober\",\"November\",\"December\"],dayOfWeekShort:[\"Sön\",\"Mån\",\"Tis\",\"Ons\",\"Tor\",\"Fre\",\"Lör\"],dayOfWeek:[\"Söndag\",\"Måndag\",\"Tisdag\",\"Onsdag\",\"Torsdag\",\"Fredag\",\"Lördag\"]},\"zh-TW\":{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"],dayOfWeek:[\"星期日\",\"星期一\",\"星期二\",\"星期三\",\"星期四\",\"星期五\",\"星期六\"]},zh:{months:[\"一月\",\"二月\",\"三月\",\"四月\",\"五月\",\"六月\",\"七月\",\"八月\",\"九月\",\"十月\",\"十一月\",\"十二月\"],dayOfWeekShort:[\"日\",\"一\",\"二\",\"三\",\"四\",\"五\",\"六\"],dayOfWeek:[\"星期日\",\"星期一\",\"星期二\",\"星期三\",\"星期四\",\"星期五\",\"星期六\"]},he:{months:[\"ינואר\",\"פברואר\",\"מרץ\",\"אפריל\",\"מאי\",\"יוני\",\"יולי\",\"אוגוסט\",\"ספטמבר\",\"אוקטובר\",\"נובמבר\",\"דצמבר\"],dayOfWeekShort:[\"א'\",\"ב'\",\"ג'\",\"ד'\",\"ה'\",\"ו'\",\"שבת\"],dayOfWeek:[\"ראשון\",\"שני\",\"שלישי\",\"רביעי\",\"חמישי\",\"שישי\",\"שבת\",\"ראשון\"]},hy:{months:[\"Հունվար\",\"Փետրվար\",\"Մարտ\",\"Ապրիլ\",\"Մայիս\",\"Հունիս\",\"Հուլիս\",\"Օգոստոս\",\"Սեպտեմբեր\",\"Հոկտեմբեր\",\"Նոյեմբեր\",\"Դեկտեմբեր\"],dayOfWeekShort:[\"Կի\",\"Երկ\",\"Երք\",\"Չոր\",\"Հնգ\",\"Ուրբ\",\"Շբթ\"],dayOfWeek:[\"Կիրակի\",\"Երկուշաբթի\",\"Երեքշաբթի\",\"Չորեքշաբթի\",\"Հինգշաբթի\",\"Ուրբաթ\",\"Շաբաթ\"]},kg:{months:[\"Үчтүн айы\",\"Бирдин айы\",\"Жалган Куран\",\"Чын Куран\",\"Бугу\",\"Кулжа\",\"Теке\",\"Баш Оона\",\"Аяк Оона\",\"Тогуздун айы\",\"Жетинин айы\",\"Бештин айы\"],dayOfWeekShort:[\"Жек\",\"Дүй\",\"Шей\",\"Шар\",\"Бей\",\"Жум\",\"Ише\"],dayOfWeek:[\"Жекшемб\",\"Дүйшөмб\",\"Шейшемб\",\"Шаршемб\",\"Бейшемби\",\"Жума\",\"Ишенб\"]},rm:{months:[\"Schaner\",\"Favrer\",\"Mars\",\"Avrigl\",\"Matg\",\"Zercladur\",\"Fanadur\",\"Avust\",\"Settember\",\"October\",\"November\",\"December\"],dayOfWeekShort:[\"Du\",\"Gli\",\"Ma\",\"Me\",\"Gie\",\"Ve\",\"So\"],dayOfWeek:[\"Dumengia\",\"Glindesdi\",\"Mardi\",\"Mesemna\",\"Gievgia\",\"Venderdi\",\"Sonda\"]},ka:{months:[\"იანვარი\",\"თებერვალი\",\"მარტი\",\"აპრილი\",\"მაისი\",\"ივნისი\",\"ივლისი\",\"აგვისტო\",\"სექტემბერი\",\"ოქტომბერი\",\"ნოემბერი\",\"დეკემბერი\"],dayOfWeekShort:[\"კვ\",\"ორშ\",\"სამშ\",\"ოთხ\",\"ხუთ\",\"პარ\",\"შაბ\"],dayOfWeek:[\"კვირა\",\"ორშაბათი\",\"სამშაბათი\",\"ოთხშაბათი\",\"ხუთშაბათი\",\"პარასკევი\",\"შაბათი\"]}},value:\"\",rtl:!1,format:\"Y/m/d H:i\",formatTime:\"H:i\",formatDate:\"Y/m/d\",startDate:!1,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnTimeSelect:!0,closeOnWithoutClick:!0,closeOnInputClick:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,disabledMinTime:!1,disabledMaxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,theme:\"\",onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onGetWeekOfYear:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:\"xdsoft_next\",prev:\"xdsoft_prev\",dayOfWeekStart:0,parentID:\"body\",timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,prevButton:!0,nextButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,monthStart:0,monthEnd:11,style:\"\",id:\"\",fixed:!1,roundTime:\"round\",className:\"\",weekends:[],highlightedDates:[],highlightedPeriods:[],allowDates:[],allowDateRe:null,disabledDates:[],disabledWeekDays:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0,showApplyButton:!1},r=null,n=\"en\",o=\"en\",i={meridiem:[\"AM\",\"PM\"]},s=function(){var t=a.i18n[o],n={days:t.dayOfWeek,daysShort:t.dayOfWeekShort,months:t.months,monthsShort:e.map(t.months,function(e){return e.substring(0,3)})};r=new DateFormatter({dateSettings:e.extend({},i,n)})};e.datetimepicker={setLocale:function(e){var t=a.i18n[e]?e:n;o!=t&&(o=t,s())},setDateFormatter:function(e){r=e},RFC_2822:\"D, d M Y H:i:s O\",ATOM:\"Y-m-dTH:i:sP\",ISO_8601:\"Y-m-dTH:i:sO\",RFC_822:\"D, d M y H:i:s O\",RFC_850:\"l, d-M-y H:i:s T\",RFC_1036:\"D, d M y H:i:s O\",RFC_1123:\"D, d M Y H:i:s O\",RSS:\"D, d M Y H:i:s O\",W3C:\"Y-m-dTH:i:sP\"},s(),window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var a=/(\\-([a-z]){1})/g;return\"float\"===t&&(t=\"styleFloat\"),a.test(t)&&(t=t.replace(a,function(e,t,a){return a.toUpperCase()})),e.currentStyle[t]||null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var a,r;for(a=t||0,r=this.length;r>a;a+=1)if(this[a]===e)return a;return-1}),Date.prototype.countDaysInMonth=function(){return new Date(this.getFullYear(),this.getMonth()+1,0).getDate()},e.fn.xdsoftScroller=function(t){return this.each(function(){var a,r,n,o,i,s=e(this),d=function(e){var t,a={x:0,y:0};return\"touchstart\"===e.type||\"touchmove\"===e.type||\"touchend\"===e.type||\"touchcancel\"===e.type?(t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a.x=t.clientX,a.y=t.clientY):(\"mousedown\"===e.type||\"mouseup\"===e.type||\"mousemove\"===e.type||\"mouseover\"===e.type||\"mouseout\"===e.type||\"mouseenter\"===e.type||\"mouseleave\"===e.type)&&(a.x=e.clientX,a.y=e.clientY),a},u=100,l=!1,f=0,c=0,m=0,h=!1,g=0,p=function(){};return\"hide\"===t?void s.find(\".xdsoft_scrollbar\").hide():(e(this).hasClass(\"xdsoft_scroller_box\")||(a=s.children().eq(0),r=s[0].clientHeight,n=a[0].offsetHeight,o=e('<div class=\"xdsoft_scrollbar\"></div>'),i=e('<div class=\"xdsoft_scroller\"></div>'),o.append(i),s.addClass(\"xdsoft_scroller_box\").append(o),p=function(e){var t=d(e).y-f+g;0>t&&(t=0),t+i[0].offsetHeight>m&&(t=m-i[0].offsetHeight),s.trigger(\"scroll_element.xdsoft_scroller\",[u?t/u:0])},i.on(\"touchstart.xdsoft_scroller mousedown.xdsoft_scroller\",function(a){r||s.trigger(\"resize_scroll.xdsoft_scroller\",[t]),f=d(a).y,g=parseInt(i.css(\"margin-top\"),10),m=o[0].offsetHeight,\"mousedown\"===a.type||\"touchstart\"===a.type?(document&&e(document.body).addClass(\"xdsoft_noselect\"),e([document.body,window]).on(\"touchend mouseup.xdsoft_scroller\",function n(){e([document.body,window]).off(\"touchend mouseup.xdsoft_scroller\",n).off(\"mousemove.xdsoft_scroller\",p).removeClass(\"xdsoft_noselect\")}),e(document.body).on(\"mousemove.xdsoft_scroller\",p)):(h=!0,a.stopPropagation(),a.preventDefault())}).on(\"touchmove\",function(e){h&&(e.preventDefault(),p(e))}).on(\"touchend touchcancel\",function(){h=!1,g=0}),s.on(\"scroll_element.xdsoft_scroller\",function(e,t){r||s.trigger(\"resize_scroll.xdsoft_scroller\",[t,!0]),t=t>1?1:0>t||isNaN(t)?0:t,i.css(\"margin-top\",u*t),setTimeout(function(){a.css(\"marginTop\",-parseInt((a[0].offsetHeight-r)*t,10))},10)}).on(\"resize_scroll.xdsoft_scroller\",function(e,t,d){var l,f;r=s[0].clientHeight,n=a[0].offsetHeight,l=r/n,f=l*o[0].offsetHeight,l>1?i.hide():(i.show(),i.css(\"height\",parseInt(f>10?f:10,10)),u=o[0].offsetHeight-i[0].offsetHeight,d!==!0&&s.trigger(\"scroll_element.xdsoft_scroller\",[t||Math.abs(parseInt(a.css(\"marginTop\"),10))/(n-r)]))}),s.on(\"mousewheel\",function(e){var t=Math.abs(parseInt(a.css(\"marginTop\"),10));return t-=20*e.deltaY,0>t&&(t=0),s.trigger(\"scroll_element.xdsoft_scroller\",[t/(n-r)]),e.stopPropagation(),!1}),s.on(\"touchstart\",function(e){l=d(e),c=Math.abs(parseInt(a.css(\"marginTop\"),10))}),s.on(\"touchmove\",function(e){if(l){e.preventDefault();var t=d(e);s.trigger(\"scroll_element.xdsoft_scroller\",[(c-(t.y-l.y))/(n-r)])}}),s.on(\"touchend touchcancel\",function(){l=!1,c=0})),void s.trigger(\"resize_scroll.xdsoft_scroller\",[t]))})},e.fn.datetimepicker=function(n,i){var s,d,u=this,l=48,f=57,c=96,m=105,h=17,g=46,p=13,y=27,v=8,b=37,D=38,k=39,x=40,T=9,S=116,w=65,O=67,M=86,_=90,W=89,F=!1,C=e.isPlainObject(n)||!n?e.extend(!0,{},a,n):e.extend(!0,{},a),P=0,A=function(e){e.on(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",function t(){e.is(\":disabled\")||e.data(\"xdsoft_datetimepicker\")||(clearTimeout(P),P=setTimeout(function(){e.data(\"xdsoft_datetimepicker\")||s(e),e.off(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",t).trigger(\"open.xdsoft\")},100))})};return s=function(a){function i(){var e,t=!1;return C.startDate?t=j.strToDate(C.startDate):(t=C.value||(a&&a.val&&a.val()?a.val():\"\"),t?t=j.strToDateTime(t):C.defaultDate&&(t=j.strToDateTime(C.defaultDate),C.defaultTime&&(e=j.strtotime(C.defaultTime),t.setHours(e.getHours()),t.setMinutes(e.getMinutes())))),t&&j.isValidDate(t)?J.data(\"changed\",!0):t=\"\",t||0}function s(t){var r=function(e,t){var a=e.replace(/([\\[\\]\\/\\{\\}\\(\\)\\-\\.\\+]{1})/g,\"\\\\$1\").replace(/_/g,\"{digit+}\").replace(/([0-9]{1})/g,\"{digit$1}\").replace(/\\{digit([0-9]{1})\\}/g,\"[0-$1_]{1}\").replace(/\\{digit[\\+]\\}/g,\"[0-9_]{1}\");return new RegExp(a).test(t)},n=function(e){try{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();return t.getBookmark().charCodeAt(2)-2}if(e.setSelectionRange)return e.selectionStart}catch(a){return 0}},o=function(e,t){if(e=\"string\"==typeof e||e instanceof String?document.getElementById(e):e,!e)return!1;if(e.createTextRange){var a=e.createTextRange();return a.collapse(!0),a.moveEnd(\"character\",t),a.moveStart(\"character\",t),a.select(),!0}return e.setSelectionRange?(e.setSelectionRange(t,t),!0):!1};t.mask&&a.off(\"keydown.xdsoft\"),t.mask===!0&&(t.mask=\"undefined\"!=typeof moment?t.format.replace(/Y{4}/g,\"9999\").replace(/Y{2}/g,\"99\").replace(/M{2}/g,\"19\").replace(/D{2}/g,\"39\").replace(/H{2}/g,\"29\").replace(/m{2}/g,\"59\").replace(/s{2}/g,\"59\"):t.format.replace(/Y/g,\"9999\").replace(/F/g,\"9999\").replace(/m/g,\"19\").replace(/d/g,\"39\").replace(/H/g,\"29\").replace(/i/g,\"59\").replace(/s/g,\"59\")),\"string\"===e.type(t.mask)&&(r(t.mask,a.val())||(a.val(t.mask.replace(/[0-9]/g,\"_\")),o(a[0],0)),a.on(\"keydown.xdsoft\",function(i){var s,d,u=this.value,C=i.which;if(C>=l&&f>=C||C>=c&&m>=C||C===v||C===g){for(s=n(this),d=C!==v&&C!==g?String.fromCharCode(C>=c&&m>=C?C-l:C):\"_\",C!==v&&C!==g||!s||(s-=1,d=\"_\");/[^0-9_]/.test(t.mask.substr(s,1))&&s<t.mask.length&&s>0;)s+=C===v||C===g?-1:1;if(u=u.substr(0,s)+d+u.substr(s+1),\"\"===e.trim(u))u=t.mask.replace(/[0-9]/g,\"_\");else if(s===t.mask.length)return i.preventDefault(),!1;for(s+=C===v||C===g?0:1;/[^0-9_]/.test(t.mask.substr(s,1))&&s<t.mask.length&&s>0;)s+=C===v||C===g?-1:1;r(t.mask,u)?(this.value=u,o(this,s)):\"\"===e.trim(u)?this.value=t.mask.replace(/[0-9]/g,\"_\"):a.trigger(\"error_input.xdsoft\")}else if(-1!==[w,O,M,_,W].indexOf(C)&&F||-1!==[y,D,x,b,k,S,h,T,p].indexOf(C))return!0;return i.preventDefault(),!1}))}var d,u,P,A,Y,j,H,J=e('<div class=\"xdsoft_datetimepicker xdsoft_noselect\"></div>'),z=e('<div class=\"xdsoft_copyright\"><a target=\"_blank\" href=\"http://xdsoft.net/jqplugins/datetimepicker/\">xdsoft.net</a></div>'),I=e('<div class=\"xdsoft_datepicker active\"></div>'),N=e('<div class=\"xdsoft_mounthpicker\"><button type=\"button\" class=\"xdsoft_prev\"></button><button type=\"button\" class=\"xdsoft_today_button\"></button><div class=\"xdsoft_label xdsoft_month\"><span></span><i></i></div><div class=\"xdsoft_label xdsoft_year\"><span></span><i></i></div><button type=\"button\" class=\"xdsoft_next\"></button></div>'),L=e('<div class=\"xdsoft_calendar\"></div>'),E=e('<div class=\"xdsoft_timepicker active\"><button type=\"button\" class=\"xdsoft_prev\"></button><div class=\"xdsoft_time_box\"></div><button type=\"button\" class=\"xdsoft_next\"></button></div>'),R=E.find(\".xdsoft_time_box\").eq(0),B=e('<div class=\"xdsoft_time_variant\"></div>'),V=e('<button type=\"button\" class=\"xdsoft_save_selected blue-gradient-button\">Save Selected</button>'),G=e('<div class=\"xdsoft_select xdsoft_monthselect\"><div></div></div>'),U=e('<div class=\"xdsoft_select xdsoft_yearselect\"><div></div></div>'),q=!1,X=0;C.id&&J.attr(\"id\",C.id),C.style&&J.attr(\"style\",C.style),C.weeks&&J.addClass(\"xdsoft_showweeks\"),C.rtl&&J.addClass(\"xdsoft_rtl\"),J.addClass(\"xdsoft_\"+C.theme),J.addClass(C.className),N.find(\".xdsoft_month span\").after(G),N.find(\".xdsoft_year span\").after(U),N.find(\".xdsoft_month,.xdsoft_year\").on(\"touchstart mousedown.xdsoft\",function(t){var a,r,n=e(this).find(\".xdsoft_select\").eq(0),o=0,i=0,s=n.is(\":visible\");for(N.find(\".xdsoft_select\").hide(),j.currentTime&&(o=j.currentTime[e(this).hasClass(\"xdsoft_month\")?\"getMonth\":\"getFullYear\"]()),n[s?\"hide\":\"show\"](),a=n.find(\"div.xdsoft_option\"),r=0;r<a.length&&a.eq(r).data(\"value\")!==o;r+=1)i+=a[0].offsetHeight;return n.xdsoftScroller(i/(n.children()[0].offsetHeight-n[0].clientHeight)),t.stopPropagation(),!1}),N.find(\".xdsoft_select\").xdsoftScroller().on(\"touchstart mousedown.xdsoft\",function(e){e.stopPropagation(),e.preventDefault()}).on(\"touchstart mousedown.xdsoft\",\".xdsoft_option\",function(){(void 0===j.currentTime||null===j.currentTime)&&(j.currentTime=j.now());var t=j.currentTime.getFullYear();j&&j.currentTime&&j.currentTime[e(this).parent().parent().hasClass(\"xdsoft_monthselect\")?\"setMonth\":\"setFullYear\"](e(this).data(\"value\")),e(this).parent().parent().hide(),J.trigger(\"xchange.xdsoft\"),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),t!==j.currentTime.getFullYear()&&e.isFunction(C.onChangeYear)&&C.onChangeYear.call(J,j.currentTime,J.data(\"input\"))}),J.getValue=function(){return j.getCurrentTime()},J.setOptions=function(n){var o={};C=e.extend(!0,{},C,n),n.allowTimes&&e.isArray(n.allowTimes)&&n.allowTimes.length&&(C.allowTimes=e.extend(!0,[],n.allowTimes)),n.weekends&&e.isArray(n.weekends)&&n.weekends.length&&(C.weekends=e.extend(!0,[],n.weekends)),n.allowDates&&e.isArray(n.allowDates)&&n.allowDates.length&&(C.allowDates=e.extend(!0,[],n.allowDates)),n.allowDateRe&&\"[object String]\"===Object.prototype.toString.call(n.allowDateRe)&&(C.allowDateRe=new RegExp(n.allowDateRe)),n.highlightedDates&&e.isArray(n.highlightedDates)&&n.highlightedDates.length&&(e.each(n.highlightedDates,function(a,n){var i,s=e.map(n.split(\",\"),e.trim),d=new t(r.parseDate(s[0],C.formatDate),s[1],s[2]),u=r.formatDate(d.date,C.formatDate);void 0!==o[u]?(i=o[u].desc,i&&i.length&&d.desc&&d.desc.length&&(o[u].desc=i+\"\\n\"+d.desc)):o[u]=d}),C.highlightedDates=e.extend(!0,[],o)),n.highlightedPeriods&&e.isArray(n.highlightedPeriods)&&n.highlightedPeriods.length&&(o=e.extend(!0,[],C.highlightedDates),\ne.each(n.highlightedPeriods,function(a,n){var i,s,d,u,l,f,c;if(e.isArray(n))i=n[0],s=n[1],d=n[2],c=n[3];else{var m=e.map(n.split(\",\"),e.trim);i=r.parseDate(m[0],C.formatDate),s=r.parseDate(m[1],C.formatDate),d=m[2],c=m[3]}for(;s>=i;)u=new t(i,d,c),l=r.formatDate(i,C.formatDate),i.setDate(i.getDate()+1),void 0!==o[l]?(f=o[l].desc,f&&f.length&&u.desc&&u.desc.length&&(o[l].desc=f+\"\\n\"+u.desc)):o[l]=u}),C.highlightedDates=e.extend(!0,[],o)),n.disabledDates&&e.isArray(n.disabledDates)&&n.disabledDates.length&&(C.disabledDates=e.extend(!0,[],n.disabledDates)),n.disabledWeekDays&&e.isArray(n.disabledWeekDays)&&n.disabledWeekDays.length&&(C.disabledWeekDays=e.extend(!0,[],n.disabledWeekDays)),!C.open&&!C.opened||C.inline||a.trigger(\"open.xdsoft\"),C.inline&&(q=!0,J.addClass(\"xdsoft_inline\"),a.after(J).hide()),C.inverseButton&&(C.next=\"xdsoft_prev\",C.prev=\"xdsoft_next\"),C.datepicker?I.addClass(\"active\"):I.removeClass(\"active\"),C.timepicker?E.addClass(\"active\"):E.removeClass(\"active\"),C.value&&(j.setCurrentTime(C.value),a&&a.val&&a.val(j.str)),C.dayOfWeekStart=isNaN(C.dayOfWeekStart)?0:parseInt(C.dayOfWeekStart,10)%7,C.timepickerScrollbar||R.xdsoftScroller(\"hide\"),C.minDate&&/^[\\+\\-](.*)$/.test(C.minDate)&&(C.minDate=r.formatDate(j.strToDateTime(C.minDate),C.formatDate)),C.maxDate&&/^[\\+\\-](.*)$/.test(C.maxDate)&&(C.maxDate=r.formatDate(j.strToDateTime(C.maxDate),C.formatDate)),V.toggle(C.showApplyButton),N.find(\".xdsoft_today_button\").css(\"visibility\",C.todayButton?\"visible\":\"hidden\"),N.find(\".\"+C.prev).css(\"visibility\",C.prevButton?\"visible\":\"hidden\"),N.find(\".\"+C.next).css(\"visibility\",C.nextButton?\"visible\":\"hidden\"),s(C),C.validateOnBlur&&a.off(\"blur.xdsoft\").on(\"blur.xdsoft\",function(){if(C.allowBlank&&(!e.trim(e(this).val()).length||\"string\"==typeof C.mask&&e.trim(e(this).val())===C.mask.replace(/[0-9]/g,\"_\")))e(this).val(null),J.data(\"xdsoft_datetime\").empty();else{var t=r.parseDate(e(this).val(),C.format);if(t)e(this).val(r.formatDate(t,C.format));else{var a=+[e(this).val()[0],e(this).val()[1]].join(\"\"),n=+[e(this).val()[2],e(this).val()[3]].join(\"\");e(this).val(!C.datepicker&&C.timepicker&&a>=0&&24>a&&n>=0&&60>n?[a,n].map(function(e){return e>9?e:\"0\"+e}).join(\":\"):r.formatDate(j.now(),C.format))}J.data(\"xdsoft_datetime\").setCurrentTime(e(this).val())}J.trigger(\"changedatetime.xdsoft\"),J.trigger(\"close.xdsoft\")}),C.dayOfWeekStartPrev=0===C.dayOfWeekStart?6:C.dayOfWeekStart-1,J.trigger(\"xchange.xdsoft\").trigger(\"afterOpen.xdsoft\")},J.data(\"options\",C).on(\"touchstart mousedown.xdsoft\",function(e){return e.stopPropagation(),e.preventDefault(),U.hide(),G.hide(),!1}),R.append(B),R.xdsoftScroller(),J.on(\"afterOpen.xdsoft\",function(){R.xdsoftScroller()}),J.append(I).append(E),C.withoutCopyright!==!0&&J.append(z),I.append(N).append(L).append(V),e(C.parentID).append(J),d=function(){var t=this;t.now=function(e){var a,r,n=new Date;return!e&&C.defaultDate&&(a=t.strToDateTime(C.defaultDate),n.setFullYear(a.getFullYear()),n.setMonth(a.getMonth()),n.setDate(a.getDate())),C.yearOffset&&n.setFullYear(n.getFullYear()+C.yearOffset),!e&&C.defaultTime&&(r=t.strtotime(C.defaultTime),n.setHours(r.getHours()),n.setMinutes(r.getMinutes())),n},t.isValidDate=function(e){return\"[object Date]\"!==Object.prototype.toString.call(e)?!1:!isNaN(e.getTime())},t.setCurrentTime=function(e,a){t.currentTime=\"string\"==typeof e?t.strToDateTime(e):t.isValidDate(e)?e:e||a||!C.allowBlank?t.now():null,J.trigger(\"xchange.xdsoft\")},t.empty=function(){t.currentTime=null},t.getCurrentTime=function(){return t.currentTime},t.nextMonth=function(){(void 0===t.currentTime||null===t.currentTime)&&(t.currentTime=t.now());var a,r=t.currentTime.getMonth()+1;return 12===r&&(t.currentTime.setFullYear(t.currentTime.getFullYear()+1),r=0),a=t.currentTime.getFullYear(),t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(),r+1,0).getDate(),t.currentTime.getDate())),t.currentTime.setMonth(r),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),a!==t.currentTime.getFullYear()&&e.isFunction(C.onChangeYear)&&C.onChangeYear.call(J,j.currentTime,J.data(\"input\")),J.trigger(\"xchange.xdsoft\"),r},t.prevMonth=function(){(void 0===t.currentTime||null===t.currentTime)&&(t.currentTime=t.now());var a=t.currentTime.getMonth()-1;return-1===a&&(t.currentTime.setFullYear(t.currentTime.getFullYear()-1),a=11),t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(),a+1,0).getDate(),t.currentTime.getDate())),t.currentTime.setMonth(a),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data(\"input\")),J.trigger(\"xchange.xdsoft\"),a},t.getWeekOfYear=function(t){if(C.onGetWeekOfYear&&e.isFunction(C.onGetWeekOfYear)){var a=C.onGetWeekOfYear.call(J,t);if(\"undefined\"!=typeof a)return a}var r=new Date(t.getFullYear(),0,1);return 4!=r.getDay()&&r.setMonth(0,1+(4-r.getDay()+7)%7),Math.ceil(((t-r)/864e5+r.getDay()+1)/7)},t.strToDateTime=function(e){var a,n,o=[];return e&&e instanceof Date&&t.isValidDate(e)?e:(o=/^(\\+|\\-)(.*)$/.exec(e),o&&(o[2]=r.parseDate(o[2],C.formatDate)),o&&o[2]?(a=o[2].getTime()-6e4*o[2].getTimezoneOffset(),n=new Date(t.now(!0).getTime()+parseInt(o[1]+\"1\",10)*a)):n=e?r.parseDate(e,C.format):t.now(),t.isValidDate(n)||(n=t.now()),n)},t.strToDate=function(e){if(e&&e instanceof Date&&t.isValidDate(e))return e;var a=e?r.parseDate(e,C.formatDate):t.now(!0);return t.isValidDate(a)||(a=t.now(!0)),a},t.strtotime=function(e){if(e&&e instanceof Date&&t.isValidDate(e))return e;var a=e?r.parseDate(e,C.formatTime):t.now(!0);return t.isValidDate(a)||(a=t.now(!0)),a},t.str=function(){return r.formatDate(t.currentTime,C.format)},t.currentTime=this.now()},j=new d,V.on(\"touchend click\",function(e){e.preventDefault(),J.data(\"changed\",!0),j.setCurrentTime(i()),a.val(j.str()),J.trigger(\"close.xdsoft\")}),N.find(\".xdsoft_today_button\").on(\"touchend mousedown.xdsoft\",function(){J.data(\"changed\",!0),j.setCurrentTime(0,!0),J.trigger(\"afterOpen.xdsoft\")}).on(\"dblclick.xdsoft\",function(){var e,t,r=j.getCurrentTime();r=new Date(r.getFullYear(),r.getMonth(),r.getDate()),e=j.strToDate(C.minDate),e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),e>r||(t=j.strToDate(C.maxDate),t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r>t||(a.val(j.str()),a.trigger(\"change\"),J.trigger(\"close.xdsoft\")))}),N.find(\".xdsoft_prev,.xdsoft_next\").on(\"touchend mousedown.xdsoft\",function(){var t=e(this),a=0,r=!1;!function n(e){t.hasClass(C.next)?j.nextMonth():t.hasClass(C.prev)&&j.prevMonth(),C.monthChangeSpinner&&(r||(a=setTimeout(n,e||100)))}(500),e([document.body,window]).on(\"touchend mouseup.xdsoft\",function o(){clearTimeout(a),r=!0,e([document.body,window]).off(\"touchend mouseup.xdsoft\",o)})}),E.find(\".xdsoft_prev,.xdsoft_next\").on(\"touchend mousedown.xdsoft\",function(){var t=e(this),a=0,r=!1,n=110;!function o(e){var i=R[0].clientHeight,s=B[0].offsetHeight,d=Math.abs(parseInt(B.css(\"marginTop\"),10));t.hasClass(C.next)&&s-i-C.timeHeightInTimePicker>=d?B.css(\"marginTop\",\"-\"+(d+C.timeHeightInTimePicker)+\"px\"):t.hasClass(C.prev)&&d-C.timeHeightInTimePicker>=0&&B.css(\"marginTop\",\"-\"+(d-C.timeHeightInTimePicker)+\"px\"),R.trigger(\"scroll_element.xdsoft_scroller\",[Math.abs(parseInt(B[0].style.marginTop,10)/(s-i))]),n=n>10?10:n-10,r||(a=setTimeout(o,e||n))}(500),e([document.body,window]).on(\"touchend mouseup.xdsoft\",function i(){clearTimeout(a),r=!0,e([document.body,window]).off(\"touchend mouseup.xdsoft\",i)})}),u=0,J.on(\"xchange.xdsoft\",function(t){clearTimeout(u),u=setTimeout(function(){if(void 0===j.currentTime||null===j.currentTime){if(C.allowBlank)return;j.currentTime=j.now()}for(var t,i,s,d,u,l,f,c,m,h,g=\"\",p=new Date(j.currentTime.getFullYear(),j.currentTime.getMonth(),1,12,0,0),y=0,v=j.now(),b=!1,D=!1,k=[],x=!0,T=\"\",S=\"\";p.getDay()!==C.dayOfWeekStart;)p.setDate(p.getDate()-1);for(g+=\"<table><thead><tr>\",C.weeks&&(g+=\"<th></th>\"),t=0;7>t;t+=1)g+=\"<th>\"+C.i18n[o].dayOfWeekShort[(t+C.dayOfWeekStart)%7]+\"</th>\";for(g+=\"</tr></thead>\",g+=\"<tbody>\",C.maxDate!==!1&&(b=j.strToDate(C.maxDate),b=new Date(b.getFullYear(),b.getMonth(),b.getDate(),23,59,59,999)),C.minDate!==!1&&(D=j.strToDate(C.minDate),D=new Date(D.getFullYear(),D.getMonth(),D.getDate()));y<j.currentTime.countDaysInMonth()||p.getDay()!==C.dayOfWeekStart||j.currentTime.getMonth()===p.getMonth();)k=[],y+=1,s=p.getDay(),d=p.getDate(),u=p.getFullYear(),l=p.getMonth(),f=j.getWeekOfYear(p),h=\"\",k.push(\"xdsoft_date\"),c=C.beforeShowDay&&e.isFunction(C.beforeShowDay.call)?C.beforeShowDay.call(J,p):null,C.allowDateRe&&\"[object RegExp]\"===Object.prototype.toString.call(C.allowDateRe)?C.allowDateRe.test(r.formatDate(p,C.formatDate))||k.push(\"xdsoft_disabled\"):C.allowDates&&C.allowDates.length>0?-1===C.allowDates.indexOf(r.formatDate(p,C.formatDate))&&k.push(\"xdsoft_disabled\"):b!==!1&&p>b||D!==!1&&D>p||c&&c[0]===!1?k.push(\"xdsoft_disabled\"):-1!==C.disabledDates.indexOf(r.formatDate(p,C.formatDate))?k.push(\"xdsoft_disabled\"):-1!==C.disabledWeekDays.indexOf(s)?k.push(\"xdsoft_disabled\"):a.is(\"[readonly]\")&&k.push(\"xdsoft_disabled\"),c&&\"\"!==c[1]&&k.push(c[1]),j.currentTime.getMonth()!==l&&k.push(\"xdsoft_other_month\"),(C.defaultSelect||J.data(\"changed\"))&&r.formatDate(j.currentTime,C.formatDate)===r.formatDate(p,C.formatDate)&&k.push(\"xdsoft_current\"),r.formatDate(v,C.formatDate)===r.formatDate(p,C.formatDate)&&k.push(\"xdsoft_today\"),(0===p.getDay()||6===p.getDay()||-1!==C.weekends.indexOf(r.formatDate(p,C.formatDate)))&&k.push(\"xdsoft_weekend\"),void 0!==C.highlightedDates[r.formatDate(p,C.formatDate)]&&(i=C.highlightedDates[r.formatDate(p,C.formatDate)],k.push(void 0===i.style?\"xdsoft_highlighted_default\":i.style),h=void 0===i.desc?\"\":i.desc),C.beforeShowDay&&e.isFunction(C.beforeShowDay)&&k.push(C.beforeShowDay(p)),x&&(g+=\"<tr>\",x=!1,C.weeks&&(g+=\"<th>\"+f+\"</th>\")),g+='<td data-date=\"'+d+'\" data-month=\"'+l+'\" data-year=\"'+u+'\" class=\"xdsoft_date xdsoft_day_of_week'+p.getDay()+\" \"+k.join(\" \")+'\" title=\"'+h+'\"><div>'+d+\"</div></td>\",p.getDay()===C.dayOfWeekStartPrev&&(g+=\"</tr>\",x=!0),p.setDate(d+1);if(g+=\"</tbody></table>\",L.html(g),N.find(\".xdsoft_label span\").eq(0).text(C.i18n[o].months[j.currentTime.getMonth()]),N.find(\".xdsoft_label span\").eq(1).text(j.currentTime.getFullYear()),T=\"\",S=\"\",l=\"\",m=function(t,n){var o,i,s=j.now(),d=C.allowTimes&&e.isArray(C.allowTimes)&&C.allowTimes.length;s.setHours(t),t=parseInt(s.getHours(),10),s.setMinutes(n),n=parseInt(s.getMinutes(),10),o=new Date(j.currentTime),o.setHours(t),o.setMinutes(n),k=[],C.minDateTime!==!1&&C.minDateTime>o||C.maxTime!==!1&&j.strtotime(C.maxTime).getTime()<s.getTime()||C.minTime!==!1&&j.strtotime(C.minTime).getTime()>s.getTime()?k.push(\"xdsoft_disabled\"):C.minDateTime!==!1&&C.minDateTime>o||C.disabledMinTime!==!1&&s.getTime()>j.strtotime(C.disabledMinTime).getTime()&&C.disabledMaxTime!==!1&&s.getTime()<j.strtotime(C.disabledMaxTime).getTime()?k.push(\"xdsoft_disabled\"):a.is(\"[readonly]\")&&k.push(\"xdsoft_disabled\"),i=new Date(j.currentTime),i.setHours(parseInt(j.currentTime.getHours(),10)),d||i.setMinutes(Math[C.roundTime](j.currentTime.getMinutes()/C.step)*C.step),(C.initTime||C.defaultSelect||J.data(\"changed\"))&&i.getHours()===parseInt(t,10)&&(!d&&C.step>59||i.getMinutes()===parseInt(n,10))&&(C.defaultSelect||J.data(\"changed\")?k.push(\"xdsoft_current\"):C.initTime&&k.push(\"xdsoft_init_time\")),parseInt(v.getHours(),10)===parseInt(t,10)&&parseInt(v.getMinutes(),10)===parseInt(n,10)&&k.push(\"xdsoft_today\"),T+='<div class=\"xdsoft_time '+k.join(\" \")+'\" data-hour=\"'+t+'\" data-minute=\"'+n+'\">'+r.formatDate(s,C.formatTime)+\"</div>\"},C.allowTimes&&e.isArray(C.allowTimes)&&C.allowTimes.length)for(y=0;y<C.allowTimes.length;y+=1)S=j.strtotime(C.allowTimes[y]).getHours(),l=j.strtotime(C.allowTimes[y]).getMinutes(),m(S,l);else for(y=0,t=0;y<(C.hours12?12:24);y+=1)for(t=0;60>t;t+=C.step)S=(10>y?\"0\":\"\")+y,l=(10>t?\"0\":\"\")+t,m(S,l);for(B.html(T),n=\"\",y=0,y=parseInt(C.yearStart,10)+C.yearOffset;y<=parseInt(C.yearEnd,10)+C.yearOffset;y+=1)n+='<div class=\"xdsoft_option '+(j.currentTime.getFullYear()===y?\"xdsoft_current\":\"\")+'\" data-value=\"'+y+'\">'+y+\"</div>\";for(U.children().eq(0).html(n),y=parseInt(C.monthStart,10),n=\"\";y<=parseInt(C.monthEnd,10);y+=1)n+='<div class=\"xdsoft_option '+(j.currentTime.getMonth()===y?\"xdsoft_current\":\"\")+'\" data-value=\"'+y+'\">'+C.i18n[o].months[y]+\"</div>\";G.children().eq(0).html(n),e(J).trigger(\"generate.xdsoft\")},10),t.stopPropagation()}).on(\"afterOpen.xdsoft\",function(){if(C.timepicker){var e,t,a,r;B.find(\".xdsoft_current\").length?e=\".xdsoft_current\":B.find(\".xdsoft_init_time\").length&&(e=\".xdsoft_init_time\"),e?(t=R[0].clientHeight,a=B[0].offsetHeight,r=B.find(e).index()*C.timeHeightInTimePicker+1,r>a-t&&(r=a-t),R.trigger(\"scroll_element.xdsoft_scroller\",[parseInt(r,10)/(a-t)])):R.trigger(\"scroll_element.xdsoft_scroller\",[0])}}),P=0,L.on(\"touchend click.xdsoft\",\"td\",function(t){t.stopPropagation(),P+=1;var r=e(this),n=j.currentTime;return(void 0===n||null===n)&&(j.currentTime=j.now(),n=j.currentTime),r.hasClass(\"xdsoft_disabled\")?!1:(n.setDate(1),n.setFullYear(r.data(\"year\")),n.setMonth(r.data(\"month\")),n.setDate(r.data(\"date\")),J.trigger(\"select.xdsoft\",[n]),a.val(j.str()),C.onSelectDate&&e.isFunction(C.onSelectDate)&&C.onSelectDate.call(J,j.currentTime,J.data(\"input\"),t),J.data(\"changed\",!0),J.trigger(\"xchange.xdsoft\"),J.trigger(\"changedatetime.xdsoft\"),(P>1||C.closeOnDateSelect===!0||C.closeOnDateSelect===!1&&!C.timepicker)&&!C.inline&&J.trigger(\"close.xdsoft\"),void setTimeout(function(){P=0},200))}),B.on(\"touchend click.xdsoft\",\"div\",function(t){t.stopPropagation();var a=e(this),r=j.currentTime;return(void 0===r||null===r)&&(j.currentTime=j.now(),r=j.currentTime),a.hasClass(\"xdsoft_disabled\")?!1:(r.setHours(a.data(\"hour\")),r.setMinutes(a.data(\"minute\")),J.trigger(\"select.xdsoft\",[r]),J.data(\"input\").val(j.str()),C.onSelectTime&&e.isFunction(C.onSelectTime)&&C.onSelectTime.call(J,j.currentTime,J.data(\"input\"),t),J.data(\"changed\",!0),J.trigger(\"xchange.xdsoft\"),J.trigger(\"changedatetime.xdsoft\"),void(C.inline!==!0&&C.closeOnTimeSelect===!0&&J.trigger(\"close.xdsoft\")))}),I.on(\"mousewheel.xdsoft\",function(e){return C.scrollMonth?(e.deltaY<0?j.nextMonth():j.prevMonth(),!1):!0}),a.on(\"mousewheel.xdsoft\",function(e){return C.scrollInput?!C.datepicker&&C.timepicker?(A=B.find(\".xdsoft_current\").length?B.find(\".xdsoft_current\").eq(0).index():0,A+e.deltaY>=0&&A+e.deltaY<B.children().length&&(A+=e.deltaY),B.children().eq(A).length&&B.children().eq(A).trigger(\"mousedown\"),!1):C.datepicker&&!C.timepicker?(I.trigger(e,[e.deltaY,e.deltaX,e.deltaY]),a.val&&a.val(j.str()),J.trigger(\"changedatetime.xdsoft\"),!1):void 0:!0}),J.on(\"changedatetime.xdsoft\",function(t){if(C.onChangeDateTime&&e.isFunction(C.onChangeDateTime)){var a=J.data(\"input\");C.onChangeDateTime.call(J,j.currentTime,a,t),delete C.value,a.trigger(\"change\")}}).on(\"generate.xdsoft\",function(){C.onGenerate&&e.isFunction(C.onGenerate)&&C.onGenerate.call(J,j.currentTime,J.data(\"input\")),q&&(J.trigger(\"afterOpen.xdsoft\"),q=!1)}).on(\"click.xdsoft\",function(e){e.stopPropagation()}),A=0,H=function(e,t){do if(e=e.parentNode,t(e)===!1)break;while(\"HTML\"!==e.nodeName)},Y=function(){var t,a,r,n,o,i,s,d,u,l,f,c,m;if(d=J.data(\"input\"),t=d.offset(),a=d[0],l=\"top\",r=t.top+a.offsetHeight-1,n=t.left,o=\"absolute\",u=e(window).width(),c=e(window).height(),m=e(window).scrollTop(),document.documentElement.clientWidth-t.left<I.parent().outerWidth(!0)){var h=I.parent().outerWidth(!0)-a.offsetWidth;n-=h}\"rtl\"===d.parent().css(\"direction\")&&(n-=J.outerWidth()-d.outerWidth()),C.fixed?(r-=m,n-=e(window).scrollLeft(),o=\"fixed\"):(s=!1,H(a,function(e){return\"fixed\"===window.getComputedStyle(e).getPropertyValue(\"position\")?(s=!0,!1):void 0}),s?(o=\"fixed\",r+J.outerHeight()>c+m?(l=\"bottom\",r=c+m-t.top):r-=m):r+a.offsetHeight>c+m&&(r=t.top-a.offsetHeight+1),0>r&&(r=0),n+a.offsetWidth>u&&(n=u-a.offsetWidth)),i=J[0],H(i,function(e){var t;return t=window.getComputedStyle(e).getPropertyValue(\"position\"),\"relative\"===t&&u>=e.offsetWidth?(n-=(u-e.offsetWidth)/2,!1):void 0}),f={position:o,left:n,top:\"\",bottom:\"\"},f[l]=r,J.css(f)},J.on(\"open.xdsoft\",function(t){var a=!0;C.onShow&&e.isFunction(C.onShow)&&(a=C.onShow.call(J,j.currentTime,J.data(\"input\"),t)),a!==!1&&(J.show(),Y(),e(window).off(\"resize.xdsoft\",Y).on(\"resize.xdsoft\",Y),C.closeOnWithoutClick&&e([document.body,window]).on(\"touchstart mousedown.xdsoft\",function r(){J.trigger(\"close.xdsoft\"),e([document.body,window]).off(\"touchstart mousedown.xdsoft\",r)}))}).on(\"close.xdsoft\",function(t){var a=!0;N.find(\".xdsoft_month,.xdsoft_year\").find(\".xdsoft_select\").hide(),C.onClose&&e.isFunction(C.onClose)&&(a=C.onClose.call(J,j.currentTime,J.data(\"input\"),t)),a===!1||C.opened||C.inline||J.hide(),t.stopPropagation()}).on(\"toggle.xdsoft\",function(){J.trigger(J.is(\":visible\")?\"close.xdsoft\":\"open.xdsoft\")}).data(\"input\",a),X=0,J.data(\"xdsoft_datetime\",j),J.setOptions(C),j.setCurrentTime(i()),a.data(\"xdsoft_datetimepicker\",J).on(\"open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart\",function(){a.is(\":disabled\")||a.data(\"xdsoft_datetimepicker\").is(\":visible\")&&C.closeOnInputClick||(clearTimeout(X),X=setTimeout(function(){a.is(\":disabled\")||(q=!0,j.setCurrentTime(i(),!0),C.mask&&s(C),J.trigger(\"open.xdsoft\"))},100))}).on(\"keydown.xdsoft\",function(t){var a,r=t.which;return-1!==[p].indexOf(r)&&C.enterLikeTab?(a=e(\"input:visible,textarea:visible,button:visible,a:visible\"),J.trigger(\"close.xdsoft\"),a.eq(a.index(this)+1).focus(),!1):-1!==[T].indexOf(r)?(J.trigger(\"close.xdsoft\"),!0):void 0}).on(\"blur.xdsoft\",function(){J.trigger(\"close.xdsoft\")})},d=function(t){var a=t.data(\"xdsoft_datetimepicker\");a&&(a.data(\"xdsoft_datetime\",null),a.remove(),t.data(\"xdsoft_datetimepicker\",null).off(\".xdsoft\"),e(window).off(\"resize.xdsoft\"),e([window,document.body]).off(\"mousedown.xdsoft touchstart\"),t.unmousewheel&&t.unmousewheel())},e(document).off(\"keydown.xdsoftctrl keyup.xdsoftctrl\").on(\"keydown.xdsoftctrl\",function(e){e.keyCode===h&&(F=!0)}).on(\"keyup.xdsoftctrl\",function(e){e.keyCode===h&&(F=!1)}),this.each(function(){var t,a=e(this).data(\"xdsoft_datetimepicker\");if(a){if(\"string\"===e.type(n))switch(n){case\"show\":e(this).select().focus(),a.trigger(\"open.xdsoft\");break;case\"hide\":a.trigger(\"close.xdsoft\");break;case\"toggle\":a.trigger(\"toggle.xdsoft\");break;case\"destroy\":d(e(this));break;case\"reset\":this.value=this.defaultValue,this.value&&a.data(\"xdsoft_datetime\").isValidDate(r.parseDate(this.value,C.format))||a.data(\"changed\",!1),a.data(\"xdsoft_datetime\").setCurrentTime(this.value);break;case\"validate\":t=a.data(\"input\"),t.trigger(\"blur.xdsoft\");break;default:a[n]&&e.isFunction(a[n])&&(u=a[n](i))}else a.setOptions(n);return 0}\"string\"!==e.type(n)&&(!C.lazyInit||C.open||C.inline?s(e(this)):A(e(this)))}),u},e.fn.datetimepicker.defaults=a}),function(e){\"function\"==typeof define&&define.amd?define([\"jquery\"],e):\"object\"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var i=t||window.event,s=d.call(arguments,1),u=0,f=0,c=0,m=0,h=0,g=0;if(t=e.event.fix(i),t.type=\"mousewheel\",\"detail\"in i&&(c=-1*i.detail),\"wheelDelta\"in i&&(c=i.wheelDelta),\"wheelDeltaY\"in i&&(c=i.wheelDeltaY),\"wheelDeltaX\"in i&&(f=-1*i.wheelDeltaX),\"axis\"in i&&i.axis===i.HORIZONTAL_AXIS&&(f=-1*c,c=0),u=0===c?f:c,\"deltaY\"in i&&(c=-1*i.deltaY,u=c),\"deltaX\"in i&&(f=i.deltaX,0===c&&(u=-1*f)),0!==c||0!==f){if(1===i.deltaMode){var p=e.data(this,\"mousewheel-line-height\");u*=p,c*=p,f*=p}else if(2===i.deltaMode){var y=e.data(this,\"mousewheel-page-height\");u*=y,c*=y,f*=y}if(m=Math.max(Math.abs(c),Math.abs(f)),(!o||o>m)&&(o=m,r(i,m)&&(o/=40)),r(i,m)&&(u/=40,f/=40,c/=40),u=Math[u>=1?\"floor\":\"ceil\"](u/o),f=Math[f>=1?\"floor\":\"ceil\"](f/o),c=Math[c>=1?\"floor\":\"ceil\"](c/o),l.settings.normalizeOffset&&this.getBoundingClientRect){var v=this.getBoundingClientRect();h=t.clientX-v.left,g=t.clientY-v.top}return t.deltaX=f,t.deltaY=c,t.deltaFactor=o,t.offsetX=h,t.offsetY=g,t.deltaMode=0,s.unshift(t,u,f,c),n&&clearTimeout(n),n=setTimeout(a,200),(e.event.dispatch||e.event.handle).apply(this,s)}}function a(){o=null}function r(e,t){return l.settings.adjustOldDeltas&&\"mousewheel\"===e.type&&t%120===0}var n,o,i=[\"wheel\",\"mousewheel\",\"DOMMouseScroll\",\"MozMousePixelScroll\"],s=\"onwheel\"in document||document.documentMode>=9?[\"wheel\"]:[\"mousewheel\",\"DomMouseScroll\",\"MozMousePixelScroll\"],d=Array.prototype.slice;if(e.event.fixHooks)for(var u=i.length;u;)e.event.fixHooks[i[--u]]=e.event.mouseHooks;var l=e.event.special.mousewheel={version:\"3.1.12\",setup:function(){if(this.addEventListener)for(var a=s.length;a;)this.addEventListener(s[--a],t,!1);else this.onmousewheel=t;e.data(this,\"mousewheel-line-height\",l.getLineHeight(this)),e.data(this,\"mousewheel-page-height\",l.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var a=s.length;a;)this.removeEventListener(s[--a],t,!1);else this.onmousewheel=null;e.removeData(this,\"mousewheel-line-height\"),e.removeData(this,\"mousewheel-page-height\")},getLineHeight:function(t){var a=e(t),r=a[\"offsetParent\"in e.fn?\"offsetParent\":\"parent\"]();return r.length||(r=e(\"body\")),parseInt(r.css(\"fontSize\"),10)||parseInt(a.css(\"fontSize\"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind(\"mousewheel\",e):this.trigger(\"mousewheel\")},unmousewheel:function(e){return this.unbind(\"mousewheel\",e)}})});"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "/**\n * jquery.mask.js\n * @version: v1.14.10\n * @author: Igor Escobar\n *\n * Created by Igor Escobar on 2012-03-10. Please report any bug at http://blog.igorescobar.com\n *\n * Copyright (c) 2012 Igor Escobar http://blog.igorescobar.com\n *\n * The MIT License (http://www.opensource.org/licenses/mit-license.php)\n *\n * Permission is hereby granted, free of charge, to any person\n * obtaining a copy of this software and associated documentation\n * files (the \"Software\"), to deal in the Software without\n * restriction, including without limitation the rights to use,\n * copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the\n * Software is furnished to do so, subject to the following\n * conditions:\n *\n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n * OTHER DEALINGS IN THE SOFTWARE.\n */\n\n/* jshint laxbreak: true */\n/* jshint maxcomplexity:17 */\n/* global define */\n\n'use strict';\n\n// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.\n// https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js\n(function (factory, jQuery, Zepto) {\n\n    if (typeof define === 'function' && define.amd) {\n        define(['jquery'], factory);\n    } else if (typeof exports === 'object') {\n        module.exports = factory(require('jquery'));\n    } else {\n        factory(jQuery || Zepto);\n    }\n\n}(function ($) {\n\n    var Mask = function (el, mask, options) {\n\n        var p = {\n            invalid: [],\n            getCaret: function () {\n                try {\n                    var sel,\n                        pos = 0,\n                        ctrl = el.get(0),\n                        dSel = document.selection,\n                        cSelStart = ctrl.selectionStart;\n\n                    // IE Support\n                    if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {\n                        sel = dSel.createRange();\n                        sel.moveStart('character', -p.val().length);\n                        pos = sel.text.length;\n                    }\n                    // Firefox support\n                    else if (cSelStart || cSelStart === '0') {\n                        pos = cSelStart;\n                    }\n\n                    return pos;\n                } catch (e) {}\n            },\n            setCaret: function(pos) {\n                try {\n                    if (el.is(':focus')) {\n                        var range, ctrl = el.get(0);\n\n                        // Firefox, WebKit, etc..\n                        if (ctrl.setSelectionRange) {\n                            ctrl.setSelectionRange(pos, pos);\n                        } else { // IE\n                            range = ctrl.createTextRange();\n                            range.collapse(true);\n                            range.moveEnd('character', pos);\n                            range.moveStart('character', pos);\n                            range.select();\n                        }\n                    }\n                } catch (e) {}\n            },\n            events: function() {\n                el\n                .on('keydown.mask', function(e) {\n                    el.data('mask-keycode', e.keyCode || e.which);\n                    el.data('mask-previus-value', el.val());\n                })\n                .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)\n                .on('paste.mask drop.mask', function() {\n                    setTimeout(function() {\n                        el.keydown().keyup();\n                    }, 100);\n                })\n                .on('change.mask', function(){\n                    el.data('changed', true);\n                })\n                .on('blur.mask', function(){\n                    if (oldValue !== p.val() && !el.data('changed')) {\n                        el.trigger('change');\n                    }\n                    el.data('changed', false);\n                })\n                // it's very important that this callback remains in this position\n                // otherwhise oldValue it's going to work buggy\n                .on('blur.mask', function() {\n                    oldValue = p.val();\n                })\n                // select all text on focus\n                .on('focus.mask', function (e) {\n                    if (options.selectOnFocus === true) {\n                        $(e.target).select();\n                    }\n                })\n                // clear the value if it not complete the mask\n                .on('focusout.mask', function() {\n                    if (options.clearIfNotMatch && !regexMask.test(p.val())) {\n                       p.val('');\n                   }\n                });\n            },\n            getRegexMask: function() {\n                var maskChunks = [], translation, pattern, optional, recursive, oRecursive, r;\n\n                for (var i = 0; i < mask.length; i++) {\n                    translation = jMask.translation[mask.charAt(i)];\n\n                    if (translation) {\n\n                        pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');\n                        optional = translation.optional;\n                        recursive = translation.recursive;\n\n                        if (recursive) {\n                            maskChunks.push(mask.charAt(i));\n                            oRecursive = {digit: mask.charAt(i), pattern: pattern};\n                        } else {\n                            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));\n                        }\n\n                    } else {\n                        maskChunks.push(mask.charAt(i).replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&'));\n                    }\n                }\n\n                r = maskChunks.join('');\n\n                if (oRecursive) {\n                    r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')\n                         .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);\n                }\n\n                return new RegExp(r);\n            },\n            destroyEvents: function() {\n                el.off(['input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''].join('.mask '));\n            },\n            val: function(v) {\n                var isInput = el.is('input'),\n                    method = isInput ? 'val' : 'text',\n                    r;\n\n                if (arguments.length > 0) {\n                    if (el[method]() !== v) {\n                        el[method](v);\n                    }\n                    r = el;\n                } else {\n                    r = el[method]();\n                }\n\n                return r;\n            },\n            calculateCaretPosition: function(caretPos, newVal) {\n                var newValL = newVal.length,\n                    oValue  = el.data('mask-previus-value') || '',\n                    oValueL = oValue.length;\n\n                // edge cases when erasing digits\n                if (el.data('mask-keycode') === 8 && oValue !== newVal) {\n                    caretPos = caretPos - (newVal.slice(0, caretPos).length - oValue.slice(0, caretPos).length);\n\n                // edge cases when typing new digits\n                } else if (oValue !== newVal) {\n                    // if the cursor is at the end keep it there\n                    if (caretPos >= oValueL) {\n                        caretPos = newValL;\n                    } else {\n                        caretPos = caretPos + (newVal.slice(0, caretPos).length - oValue.slice(0, caretPos).length);\n                    }\n                }\n\n                return caretPos;\n            },\n            behaviour: function(e) {\n                e = e || window.event;\n                p.invalid = [];\n\n                var keyCode = el.data('mask-keycode');\n\n                if ($.inArray(keyCode, jMask.byPassKeys) === -1) {\n                    var newVal   = p.getMasked(),\n                        caretPos = p.getCaret();\n\n                    setTimeout(function(caretPos, newVal) {\n                      p.setCaret(p.calculateCaretPosition(caretPos, newVal));\n                    }, 10, caretPos, newVal);\n\n                    p.val(newVal);\n                    p.setCaret(caretPos);\n                    return p.callbacks(e);\n                }\n            },\n            getMasked: function(skipMaskChars, val) {\n                var buf = [],\n                    value = val === undefined ? p.val() : val + '',\n                    m = 0, maskLen = mask.length,\n                    v = 0, valLen = value.length,\n                    offset = 1, addMethod = 'push',\n                    resetPos = -1,\n                    lastMaskChar,\n                    check;\n\n                if (options.reverse) {\n                    addMethod = 'unshift';\n                    offset = -1;\n                    lastMaskChar = 0;\n                    m = maskLen - 1;\n                    v = valLen - 1;\n                    check = function () {\n                        return m > -1 && v > -1;\n                    };\n                } else {\n                    lastMaskChar = maskLen - 1;\n                    check = function () {\n                        return m < maskLen && v < valLen;\n                    };\n                }\n\n                var lastUntranslatedMaskChar;\n                while (check()) {\n                    var maskDigit = mask.charAt(m),\n                        valDigit = value.charAt(v),\n                        translation = jMask.translation[maskDigit];\n\n                    if (translation) {\n                        if (valDigit.match(translation.pattern)) {\n                            buf[addMethod](valDigit);\n                             if (translation.recursive) {\n                                if (resetPos === -1) {\n                                    resetPos = m;\n                                } else if (m === lastMaskChar) {\n                                    m = resetPos - offset;\n                                }\n\n                                if (lastMaskChar === resetPos) {\n                                    m -= offset;\n                                }\n                            }\n                            m += offset;\n                        } else if (valDigit === lastUntranslatedMaskChar) {\n                            // matched the last untranslated (raw) mask character that we encountered\n                            // likely an insert offset the mask character from the last entry; fall\n                            // through and only increment v\n                            lastUntranslatedMaskChar = undefined;\n                        } else if (translation.optional) {\n                            m += offset;\n                            v -= offset;\n                        } else if (translation.fallback) {\n                            buf[addMethod](translation.fallback);\n                            m += offset;\n                            v -= offset;\n                        } else {\n                          p.invalid.push({p: v, v: valDigit, e: translation.pattern});\n                        }\n                        v += offset;\n                    } else {\n                        if (!skipMaskChars) {\n                            buf[addMethod](maskDigit);\n                        }\n\n                        if (valDigit === maskDigit) {\n                            v += offset;\n                        } else {\n                            lastUntranslatedMaskChar = maskDigit;\n                        }\n\n                        m += offset;\n                    }\n                }\n\n                var lastMaskCharDigit = mask.charAt(lastMaskChar);\n                if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {\n                    buf.push(lastMaskCharDigit);\n                }\n\n                return buf.join('');\n            },\n            callbacks: function (e) {\n                var val = p.val(),\n                    changed = val !== oldValue,\n                    defaultArgs = [val, e, el, options],\n                    callback = function(name, criteria, args) {\n                        if (typeof options[name] === 'function' && criteria) {\n                            options[name].apply(this, args);\n                        }\n                    };\n\n                callback('onChange', changed === true, defaultArgs);\n                callback('onKeyPress', changed === true, defaultArgs);\n                callback('onComplete', val.length === mask.length, defaultArgs);\n                callback('onInvalid', p.invalid.length > 0, [val, e, el, p.invalid, options]);\n            }\n        };\n\n        el = $(el);\n        var jMask = this, oldValue = p.val(), regexMask;\n\n        mask = typeof mask === 'function' ? mask(p.val(), undefined, el,  options) : mask;\n\n        // public methods\n        jMask.mask = mask;\n        jMask.options = options;\n        jMask.remove = function() {\n            var caret = p.getCaret();\n            p.destroyEvents();\n            p.val(jMask.getCleanVal());\n            p.setCaret(caret);\n            return el;\n        };\n\n        // get value without mask\n        jMask.getCleanVal = function() {\n           return p.getMasked(true);\n        };\n\n        // get masked value without the value being in the input or element\n        jMask.getMaskedVal = function(val) {\n           return p.getMasked(false, val);\n        };\n\n       jMask.init = function(onlyMask) {\n            onlyMask = onlyMask || false;\n            options = options || {};\n\n            jMask.clearIfNotMatch  = $.jMaskGlobals.clearIfNotMatch;\n            jMask.byPassKeys       = $.jMaskGlobals.byPassKeys;\n            jMask.translation      = $.extend({}, $.jMaskGlobals.translation, options.translation);\n\n            jMask = $.extend(true, {}, jMask, options);\n\n            regexMask = p.getRegexMask();\n\n            if (onlyMask) {\n                p.events();\n                p.val(p.getMasked());\n            } else {\n                if (options.placeholder) {\n                    el.attr('placeholder' , options.placeholder);\n                }\n\n                // this is necessary, otherwise if the user submit the form\n                // and then press the \"back\" button, the autocomplete will erase\n                // the data. Works fine on IE9+, FF, Opera, Safari.\n                if (el.data('mask')) {\n                  el.attr('autocomplete', 'off');\n                }\n\n                // detect if is necessary let the user type freely.\n                // for is a lot faster than forEach.\n                for (var i = 0, maxlength = true; i < mask.length; i++) {\n                    var translation = jMask.translation[mask.charAt(i)];\n                    if (translation && translation.recursive) {\n                        maxlength = false;\n                        break;\n                    }\n                }\n\n                if (maxlength) {\n                    el.attr('maxlength', mask.length);\n                }\n\n                p.destroyEvents();\n                p.events();\n\n                var caret = p.getCaret();\n                p.val(p.getMasked());\n                p.setCaret(caret);\n            }\n        };\n\n        jMask.init(!el.is('input'));\n    };\n\n    $.maskWatchers = {};\n    var HTMLAttributes = function () {\n        var input = $(this),\n            options = {},\n            prefix = 'data-mask-',\n            mask = input.attr('data-mask');\n\n        if (input.attr(prefix + 'reverse')) {\n            options.reverse = true;\n        }\n\n        if (input.attr(prefix + 'clearifnotmatch')) {\n            options.clearIfNotMatch = true;\n        }\n\n        if (input.attr(prefix + 'selectonfocus') === 'true') {\n           options.selectOnFocus = true;\n        }\n\n        if (notSameMaskObject(input, mask, options)) {\n            return input.data('mask', new Mask(this, mask, options));\n        }\n    },\n    notSameMaskObject = function(field, mask, options) {\n        options = options || {};\n        var maskObject = $(field).data('mask'),\n            stringify = JSON.stringify,\n            value = $(field).val() || $(field).text();\n        try {\n            if (typeof mask === 'function') {\n                mask = mask(value);\n            }\n            return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(options) || maskObject.mask !== mask;\n        } catch (e) {}\n    },\n    eventSupported = function(eventName) {\n        var el = document.createElement('div'), isSupported;\n\n        eventName = 'on' + eventName;\n        isSupported = (eventName in el);\n\n        if ( !isSupported ) {\n            el.setAttribute(eventName, 'return;');\n            isSupported = typeof el[eventName] === 'function';\n        }\n        el = null;\n\n        return isSupported;\n    };\n\n    $.fn.mask = function(mask, options) {\n        options = options || {};\n        var selector = this.selector,\n            globals = $.jMaskGlobals,\n            interval = globals.watchInterval,\n            watchInputs = options.watchInputs || globals.watchInputs,\n            maskFunction = function() {\n                if (notSameMaskObject(this, mask, options)) {\n                    return $(this).data('mask', new Mask(this, mask, options));\n                }\n            };\n\n        $(this).each(maskFunction);\n\n        if (selector && selector !== '' && watchInputs) {\n            clearInterval($.maskWatchers[selector]);\n            $.maskWatchers[selector] = setInterval(function(){\n                $(document).find(selector).each(maskFunction);\n            }, interval);\n        }\n        return this;\n    };\n\n    $.fn.masked = function(val) {\n        return this.data('mask').getMaskedVal(val);\n    };\n\n    $.fn.unmask = function() {\n        clearInterval($.maskWatchers[this.selector]);\n        delete $.maskWatchers[this.selector];\n        return this.each(function() {\n            var dataMask = $(this).data('mask');\n            if (dataMask) {\n                dataMask.remove().removeData('mask');\n            }\n        });\n    };\n\n    $.fn.cleanVal = function() {\n        return this.data('mask').getCleanVal();\n    };\n\n    $.applyDataMask = function(selector) {\n        selector = selector || $.jMaskGlobals.maskElements;\n        var $selector = (selector instanceof $) ? selector : $(selector);\n        $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);\n    };\n\n    var globals = {\n        maskElements: 'input,td,span,div',\n        dataMaskAttr: '*[data-mask]',\n        dataMask: true,\n        watchInterval: 300,\n        watchInputs: true,\n        // old versions of chrome dont work great with input event\n        useInput: !/Chrome\\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),\n        watchDataMask: false,\n        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],\n        translation: {\n            '0': {pattern: /\\d/},\n            '9': {pattern: /\\d/, optional: true},\n            '#': {pattern: /\\d/, recursive: true},\n            'A': {pattern: /[a-zA-Z0-9]/},\n            'S': {pattern: /[a-zA-Z]/}\n        }\n    };\n\n    $.jMaskGlobals = $.jMaskGlobals || {};\n    globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);\n\n    // looking for inputs with data-mask attribute\n    if (globals.dataMask) {\n        $.applyDataMask();\n    }\n\n    setInterval(function() {\n        if ($.jMaskGlobals.watchDataMask) {\n            $.applyDataMask();\n        }\n    }, globals.watchInterval);\n}, window.jQuery, window.Zepto));\n\n"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Select2 4.0.3\r\n * https://select2.github.io\r\n *\r\n * Released under the MIT license\r\n * https://github.com/select2/select2/blob/master/LICENSE.md\r\n */\r\n(function (factory) {\r\n  if (typeof define === 'function' && define.amd) {\r\n    // AMD. Register as an anonymous module.\r\n    define(['jquery'], factory);\r\n  } else if (typeof exports === 'object') {\r\n    // Node/CommonJS\r\n    factory(require('jquery'));\r\n  } else {\r\n    // Browser globals\r\n    factory(jQuery);\r\n  }\r\n}(function (jQuery) {\r\n  // This is needed so we can catch the AMD loader configuration and use it\r\n  // The inner file should be wrapped (by `banner.start.js`) in a function that\r\n  // returns the AMD loader references.\r\n  var S2 =\r\n(function () {\r\n  // Restore the Select2 AMD loader so it can be used\r\n  // Needed mostly in the language files, where the loader is not inserted\r\n  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {\r\n    var S2 = jQuery.fn.select2.amd;\r\n  }\r\nvar S2;(function () { if (!S2 || !S2.requirejs) {\nif (!S2) { S2 = {}; } else { require = S2; }\n/**\n * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.\n * Available via the MIT or new BSD license.\n * see: http://github.com/jrburke/almond for details\n */\n//Going sloppy to avoid 'use strict' string cost, but strict practices should\n//be followed.\n/*jslint sloppy: true */\n/*global setTimeout: false */\n\nvar requirejs, require, define;\n(function (undef) {\n    var main, req, makeMap, handlers,\n        defined = {},\n        waiting = {},\n        config = {},\n        defining = {},\n        hasOwn = Object.prototype.hasOwnProperty,\n        aps = [].slice,\n        jsSuffixRegExp = /\\.js$/;\n\n    function hasProp(obj, prop) {\n        return hasOwn.call(obj, prop);\n    }\n\n    /**\n     * Given a relative module name, like ./something, normalize it to\n     * a real name that can be mapped to a path.\n     * @param {String} name the relative name\n     * @param {String} baseName a real name that the name arg is relative\n     * to.\n     * @returns {String} normalized name\n     */\n    function normalize(name, baseName) {\n        var nameParts, nameSegment, mapValue, foundMap, lastIndex,\n            foundI, foundStarMap, starI, i, j, part,\n            baseParts = baseName && baseName.split(\"/\"),\n            map = config.map,\n            starMap = (map && map['*']) || {};\n\n        //Adjust any relative paths.\n        if (name && name.charAt(0) === \".\") {\n            //If have a base name, try to normalize against it,\n            //otherwise, assume it is a top-level require that will\n            //be relative to baseUrl in the end.\n            if (baseName) {\n                name = name.split('/');\n                lastIndex = name.length - 1;\n\n                // Node .js allowance:\n                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {\n                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');\n                }\n\n                //Lop off the last part of baseParts, so that . matches the\n                //\"directory\" and not name of the baseName's module. For instance,\n                //baseName of \"one/two/three\", maps to \"one/two/three.js\", but we\n                //want the directory, \"one/two\" for this normalization.\n                name = baseParts.slice(0, baseParts.length - 1).concat(name);\n\n                //start trimDots\n                for (i = 0; i < name.length; i += 1) {\n                    part = name[i];\n                    if (part === \".\") {\n                        name.splice(i, 1);\n                        i -= 1;\n                    } else if (part === \"..\") {\n                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {\n                            //End of the line. Keep at least one non-dot\n                            //path segment at the front so it can be mapped\n                            //correctly to disk. Otherwise, there is likely\n                            //no path mapping for a path starting with '..'.\n                            //This can still fail, but catches the most reasonable\n                            //uses of ..\n                            break;\n                        } else if (i > 0) {\n                            name.splice(i - 1, 2);\n                            i -= 2;\n                        }\n                    }\n                }\n                //end trimDots\n\n                name = name.join(\"/\");\n            } else if (name.indexOf('./') === 0) {\n                // No baseName, so this is ID is resolved relative\n                // to baseUrl, pull off the leading dot.\n                name = name.substring(2);\n            }\n        }\n\n        //Apply map config if available.\n        if ((baseParts || starMap) && map) {\n            nameParts = name.split('/');\n\n            for (i = nameParts.length; i > 0; i -= 1) {\n                nameSegment = nameParts.slice(0, i).join(\"/\");\n\n                if (baseParts) {\n                    //Find the longest baseName segment match in the config.\n                    //So, do joins on the biggest to smallest lengths of baseParts.\n                    for (j = baseParts.length; j > 0; j -= 1) {\n                        mapValue = map[baseParts.slice(0, j).join('/')];\n\n                        //baseName segment has  config, find if it has one for\n                        //this name.\n                        if (mapValue) {\n                            mapValue = mapValue[nameSegment];\n                            if (mapValue) {\n                                //Match, update name to the new value.\n                                foundMap = mapValue;\n                                foundI = i;\n                                break;\n                            }\n                        }\n                    }\n                }\n\n                if (foundMap) {\n                    break;\n                }\n\n                //Check for a star map match, but just hold on to it,\n                //if there is a shorter segment match later in a matching\n                //config, then favor over this star map.\n                if (!foundStarMap && starMap && starMap[nameSegment]) {\n                    foundStarMap = starMap[nameSegment];\n                    starI = i;\n                }\n            }\n\n            if (!foundMap && foundStarMap) {\n                foundMap = foundStarMap;\n                foundI = starI;\n            }\n\n            if (foundMap) {\n                nameParts.splice(0, foundI, foundMap);\n                name = nameParts.join('/');\n            }\n        }\n\n        return name;\n    }\n\n    function makeRequire(relName, forceSync) {\n        return function () {\n            //A version of a require function that passes a moduleName\n            //value for items that may need to\n            //look up paths relative to the moduleName\n            var args = aps.call(arguments, 0);\n\n            //If first arg is not require('string'), and there is only\n            //one arg, it is the array form without a callback. Insert\n            //a null so that the following concat is correct.\n            if (typeof args[0] !== 'string' && args.length === 1) {\n                args.push(null);\n            }\n            return req.apply(undef, args.concat([relName, forceSync]));\n        };\n    }\n\n    function makeNormalize(relName) {\n        return function (name) {\n            return normalize(name, relName);\n        };\n    }\n\n    function makeLoad(depName) {\n        return function (value) {\n            defined[depName] = value;\n        };\n    }\n\n    function callDep(name) {\n        if (hasProp(waiting, name)) {\n            var args = waiting[name];\n            delete waiting[name];\n            defining[name] = true;\n            main.apply(undef, args);\n        }\n\n        if (!hasProp(defined, name) && !hasProp(defining, name)) {\n            throw new Error('No ' + name);\n        }\n        return defined[name];\n    }\n\n    //Turns a plugin!resource to [plugin, resource]\n    //with the plugin being undefined if the name\n    //did not have a plugin prefix.\n    function splitPrefix(name) {\n        var prefix,\n            index = name ? name.indexOf('!') : -1;\n        if (index > -1) {\n            prefix = name.substring(0, index);\n            name = name.substring(index + 1, name.length);\n        }\n        return [prefix, name];\n    }\n\n    /**\n     * Makes a name map, normalizing the name, and using a plugin\n     * for normalization if necessary. Grabs a ref to plugin\n     * too, as an optimization.\n     */\n    makeMap = function (name, relName) {\n        var plugin,\n            parts = splitPrefix(name),\n            prefix = parts[0];\n\n        name = parts[1];\n\n        if (prefix) {\n            prefix = normalize(prefix, relName);\n            plugin = callDep(prefix);\n        }\n\n        //Normalize according\n        if (prefix) {\n            if (plugin && plugin.normalize) {\n                name = plugin.normalize(name, makeNormalize(relName));\n            } else {\n                name = normalize(name, relName);\n            }\n        } else {\n            name = normalize(name, relName);\n            parts = splitPrefix(name);\n            prefix = parts[0];\n            name = parts[1];\n            if (prefix) {\n                plugin = callDep(prefix);\n            }\n        }\n\n        //Using ridiculous property names for space reasons\n        return {\n            f: prefix ? prefix + '!' + name : name, //fullName\n            n: name,\n            pr: prefix,\n            p: plugin\n        };\n    };\n\n    function makeConfig(name) {\n        return function () {\n            return (config && config.config && config.config[name]) || {};\n        };\n    }\n\n    handlers = {\n        require: function (name) {\n            return makeRequire(name);\n        },\n        exports: function (name) {\n            var e = defined[name];\n            if (typeof e !== 'undefined') {\n                return e;\n            } else {\n                return (defined[name] = {});\n            }\n        },\n        module: function (name) {\n            return {\n                id: name,\n                uri: '',\n                exports: defined[name],\n                config: makeConfig(name)\n            };\n        }\n    };\n\n    main = function (name, deps, callback, relName) {\n        var cjsModule, depName, ret, map, i,\n            args = [],\n            callbackType = typeof callback,\n            usingExports;\n\n        //Use name if no relName\n        relName = relName || name;\n\n        //Call the callback to define the module, if necessary.\n        if (callbackType === 'undefined' || callbackType === 'function') {\n            //Pull out the defined dependencies and pass the ordered\n            //values to the callback.\n            //Default to [require, exports, module] if no deps\n            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;\n            for (i = 0; i < deps.length; i += 1) {\n                map = makeMap(deps[i], relName);\n                depName = map.f;\n\n                //Fast path CommonJS standard dependencies.\n                if (depName === \"require\") {\n                    args[i] = handlers.require(name);\n                } else if (depName === \"exports\") {\n                    //CommonJS module spec 1.1\n                    args[i] = handlers.exports(name);\n                    usingExports = true;\n                } else if (depName === \"module\") {\n                    //CommonJS module spec 1.1\n                    cjsModule = args[i] = handlers.module(name);\n                } else if (hasProp(defined, depName) ||\n                           hasProp(waiting, depName) ||\n                           hasProp(defining, depName)) {\n                    args[i] = callDep(depName);\n                } else if (map.p) {\n                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});\n                    args[i] = defined[depName];\n                } else {\n                    throw new Error(name + ' missing ' + depName);\n                }\n            }\n\n            ret = callback ? callback.apply(defined[name], args) : undefined;\n\n            if (name) {\n                //If setting exports via \"module\" is in play,\n                //favor that over return value and exports. After that,\n                //favor a non-undefined return value over exports use.\n                if (cjsModule && cjsModule.exports !== undef &&\n                        cjsModule.exports !== defined[name]) {\n                    defined[name] = cjsModule.exports;\n                } else if (ret !== undef || !usingExports) {\n                    //Use the return value from the function.\n                    defined[name] = ret;\n                }\n            }\n        } else if (name) {\n            //May just be an object definition for the module. Only\n            //worry about defining if have a module name.\n            defined[name] = callback;\n        }\n    };\n\n    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {\n        if (typeof deps === \"string\") {\n            if (handlers[deps]) {\n                //callback in this case is really relName\n                return handlers[deps](callback);\n            }\n            //Just return the module wanted. In this scenario, the\n            //deps arg is the module name, and second arg (if passed)\n            //is just the relName.\n            //Normalize module name, if it contains . or ..\n            return callDep(makeMap(deps, callback).f);\n        } else if (!deps.splice) {\n            //deps is a config object, not an array.\n            config = deps;\n            if (config.deps) {\n                req(config.deps, config.callback);\n            }\n            if (!callback) {\n                return;\n            }\n\n            if (callback.splice) {\n                //callback is an array, which means it is a dependency list.\n                //Adjust args if there are dependencies\n                deps = callback;\n                callback = relName;\n                relName = null;\n            } else {\n                deps = undef;\n            }\n        }\n\n        //Support require(['a'])\n        callback = callback || function () {};\n\n        //If relName is a function, it is an errback handler,\n        //so remove it.\n        if (typeof relName === 'function') {\n            relName = forceSync;\n            forceSync = alt;\n        }\n\n        //Simulate async callback;\n        if (forceSync) {\n            main(undef, deps, callback, relName);\n        } else {\n            //Using a non-zero value because of concern for what old browsers\n            //do, and latest browsers \"upgrade\" to 4 if lower value is used:\n            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:\n            //If want a value immediately, use require('id') instead -- something\n            //that works in almond on the global level, but not guaranteed and\n            //unlikely to work in other AMD implementations.\n            setTimeout(function () {\n                main(undef, deps, callback, relName);\n            }, 4);\n        }\n\n        return req;\n    };\n\n    /**\n     * Just drops the config on the floor, but returns req in case\n     * the config return value is used.\n     */\n    req.config = function (cfg) {\n        return req(cfg);\n    };\n\n    /**\n     * Expose module registry for debugging and tooling\n     */\n    requirejs._defined = defined;\n\n    define = function (name, deps, callback) {\n        if (typeof name !== 'string') {\n            throw new Error('See almond README: incorrect module build, no module name');\n        }\n\n        //This module may not have dependencies\n        if (!deps.splice) {\n            //deps is not an array, so probably means\n            //an object literal or factory function for\n            //the value. Adjust args.\n            callback = deps;\n            deps = [];\n        }\n\n        if (!hasProp(defined, name) && !hasProp(waiting, name)) {\n            waiting[name] = [name, deps, callback];\n        }\n    };\n\n    define.amd = {\n        jQuery: true\n    };\n}());\n\nS2.requirejs = requirejs;S2.require = require;S2.define = define;\n}\n}());\nS2.define(\"almond\", function(){});\n\n/* global jQuery:false, $:false */\r\nS2.define('jquery',[],function () {\r\n  var _$ = jQuery || $;\r\n\r\n  if (_$ == null && console && console.error) {\r\n    console.error(\r\n      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +\r\n      'found. Make sure that you are including jQuery before Select2 on your ' +\r\n      'web page.'\r\n    );\r\n  }\r\n\r\n  return _$;\r\n});\r\n\nS2.define('select2/utils',[\r\n  'jquery'\r\n], function ($) {\r\n  var Utils = {};\r\n\r\n  Utils.Extend = function (ChildClass, SuperClass) {\r\n    var __hasProp = {}.hasOwnProperty;\r\n\r\n    function BaseConstructor () {\r\n      this.constructor = ChildClass;\r\n    }\r\n\r\n    for (var key in SuperClass) {\r\n      if (__hasProp.call(SuperClass, key)) {\r\n        ChildClass[key] = SuperClass[key];\r\n      }\r\n    }\r\n\r\n    BaseConstructor.prototype = SuperClass.prototype;\r\n    ChildClass.prototype = new BaseConstructor();\r\n    ChildClass.__super__ = SuperClass.prototype;\r\n\r\n    return ChildClass;\r\n  };\r\n\r\n  function getMethods (theClass) {\r\n    var proto = theClass.prototype;\r\n\r\n    var methods = [];\r\n\r\n    for (var methodName in proto) {\r\n      var m = proto[methodName];\r\n\r\n      if (typeof m !== 'function') {\r\n        continue;\r\n      }\r\n\r\n      if (methodName === 'constructor') {\r\n        continue;\r\n      }\r\n\r\n      methods.push(methodName);\r\n    }\r\n\r\n    return methods;\r\n  }\r\n\r\n  Utils.Decorate = function (SuperClass, DecoratorClass) {\r\n    var decoratedMethods = getMethods(DecoratorClass);\r\n    var superMethods = getMethods(SuperClass);\r\n\r\n    function DecoratedClass () {\r\n      var unshift = Array.prototype.unshift;\r\n\r\n      var argCount = DecoratorClass.prototype.constructor.length;\r\n\r\n      var calledConstructor = SuperClass.prototype.constructor;\r\n\r\n      if (argCount > 0) {\r\n        unshift.call(arguments, SuperClass.prototype.constructor);\r\n\r\n        calledConstructor = DecoratorClass.prototype.constructor;\r\n      }\r\n\r\n      calledConstructor.apply(this, arguments);\r\n    }\r\n\r\n    DecoratorClass.displayName = SuperClass.displayName;\r\n\r\n    function ctr () {\r\n      this.constructor = DecoratedClass;\r\n    }\r\n\r\n    DecoratedClass.prototype = new ctr();\r\n\r\n    for (var m = 0; m < superMethods.length; m++) {\r\n        var superMethod = superMethods[m];\r\n\r\n        DecoratedClass.prototype[superMethod] =\r\n          SuperClass.prototype[superMethod];\r\n    }\r\n\r\n    var calledMethod = function (methodName) {\r\n      // Stub out the original method if it's not decorating an actual method\r\n      var originalMethod = function () {};\r\n\r\n      if (methodName in DecoratedClass.prototype) {\r\n        originalMethod = DecoratedClass.prototype[methodName];\r\n      }\r\n\r\n      var decoratedMethod = DecoratorClass.prototype[methodName];\r\n\r\n      return function () {\r\n        var unshift = Array.prototype.unshift;\r\n\r\n        unshift.call(arguments, originalMethod);\r\n\r\n        return decoratedMethod.apply(this, arguments);\r\n      };\r\n    };\r\n\r\n    for (var d = 0; d < decoratedMethods.length; d++) {\r\n      var decoratedMethod = decoratedMethods[d];\r\n\r\n      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);\r\n    }\r\n\r\n    return DecoratedClass;\r\n  };\r\n\r\n  var Observable = function () {\r\n    this.listeners = {};\r\n  };\r\n\r\n  Observable.prototype.on = function (event, callback) {\r\n    this.listeners = this.listeners || {};\r\n\r\n    if (event in this.listeners) {\r\n      this.listeners[event].push(callback);\r\n    } else {\r\n      this.listeners[event] = [callback];\r\n    }\r\n  };\r\n\r\n  Observable.prototype.trigger = function (event) {\r\n    var slice = Array.prototype.slice;\r\n    var params = slice.call(arguments, 1);\r\n\r\n    this.listeners = this.listeners || {};\r\n\r\n    // Params should always come in as an array\r\n    if (params == null) {\r\n      params = [];\r\n    }\r\n\r\n    // If there are no arguments to the event, use a temporary object\r\n    if (params.length === 0) {\r\n      params.push({});\r\n    }\r\n\r\n    // Set the `_type` of the first object to the event\r\n    params[0]._type = event;\r\n\r\n    if (event in this.listeners) {\r\n      this.invoke(this.listeners[event], slice.call(arguments, 1));\r\n    }\r\n\r\n    if ('*' in this.listeners) {\r\n      this.invoke(this.listeners['*'], arguments);\r\n    }\r\n  };\r\n\r\n  Observable.prototype.invoke = function (listeners, params) {\r\n    for (var i = 0, len = listeners.length; i < len; i++) {\r\n      listeners[i].apply(this, params);\r\n    }\r\n  };\r\n\r\n  Utils.Observable = Observable;\r\n\r\n  Utils.generateChars = function (length) {\r\n    var chars = '';\r\n\r\n    for (var i = 0; i < length; i++) {\r\n      var randomChar = Math.floor(Math.random() * 36);\r\n      chars += randomChar.toString(36);\r\n    }\r\n\r\n    return chars;\r\n  };\r\n\r\n  Utils.bind = function (func, context) {\r\n    return function () {\r\n      func.apply(context, arguments);\r\n    };\r\n  };\r\n\r\n  Utils._convertData = function (data) {\r\n    for (var originalKey in data) {\r\n      var keys = originalKey.split('-');\r\n\r\n      var dataLevel = data;\r\n\r\n      if (keys.length === 1) {\r\n        continue;\r\n      }\r\n\r\n      for (var k = 0; k < keys.length; k++) {\r\n        var key = keys[k];\r\n\r\n        // Lowercase the first letter\r\n        // By default, dash-separated becomes camelCase\r\n        key = key.substring(0, 1).toLowerCase() + key.substring(1);\r\n\r\n        if (!(key in dataLevel)) {\r\n          dataLevel[key] = {};\r\n        }\r\n\r\n        if (k == keys.length - 1) {\r\n          dataLevel[key] = data[originalKey];\r\n        }\r\n\r\n        dataLevel = dataLevel[key];\r\n      }\r\n\r\n      delete data[originalKey];\r\n    }\r\n\r\n    return data;\r\n  };\r\n\r\n  Utils.hasScroll = function (index, el) {\r\n    // Adapted from the function created by @ShadowScripter\r\n    // and adapted by @BillBarry on the Stack Exchange Code Review website.\r\n    // The original code can be found at\r\n    // http://codereview.stackexchange.com/q/13338\r\n    // and was designed to be used with the Sizzle selector engine.\r\n\r\n    var $el = $(el);\r\n    var overflowX = el.style.overflowX;\r\n    var overflowY = el.style.overflowY;\r\n\r\n    //Check both x and y declarations\r\n    if (overflowX === overflowY &&\r\n        (overflowY === 'hidden' || overflowY === 'visible')) {\r\n      return false;\r\n    }\r\n\r\n    if (overflowX === 'scroll' || overflowY === 'scroll') {\r\n      return true;\r\n    }\r\n\r\n    return ($el.innerHeight() < el.scrollHeight ||\r\n      $el.innerWidth() < el.scrollWidth);\r\n  };\r\n\r\n  Utils.escapeMarkup = function (markup) {\r\n    var replaceMap = {\r\n      '\\\\': '&#92;',\r\n      '&': '&amp;',\r\n      '<': '&lt;',\r\n      '>': '&gt;',\r\n      '\"': '&quot;',\r\n      '\\'': '&#39;',\r\n      '/': '&#47;'\r\n    };\r\n\r\n    // Do not try to escape the markup if it's not a string\r\n    if (typeof markup !== 'string') {\r\n      return markup;\r\n    }\r\n\r\n    return String(markup).replace(/[&<>\"'\\/\\\\]/g, function (match) {\r\n      return replaceMap[match];\r\n    });\r\n  };\r\n\r\n  // Append an array of jQuery nodes to a given element.\r\n  Utils.appendMany = function ($element, $nodes) {\r\n    // jQuery 1.7.x does not support $.fn.append() with an array\r\n    // Fall back to a jQuery object collection using $.fn.add()\r\n    if ($.fn.jquery.substr(0, 3) === '1.7') {\r\n      var $jqNodes = $();\r\n\r\n      $.map($nodes, function (node) {\r\n        $jqNodes = $jqNodes.add(node);\r\n      });\r\n\r\n      $nodes = $jqNodes;\r\n    }\r\n\r\n    $element.append($nodes);\r\n  };\r\n\r\n  return Utils;\r\n});\r\n\nS2.define('select2/results',[\r\n  'jquery',\r\n  './utils'\r\n], function ($, Utils) {\r\n  function Results ($element, options, dataAdapter) {\r\n    this.$element = $element;\r\n    this.data = dataAdapter;\r\n    this.options = options;\r\n\r\n    Results.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(Results, Utils.Observable);\r\n\r\n  Results.prototype.render = function () {\r\n    var $results = $(\r\n      '<ul class=\"select2-results__options\" role=\"tree\"></ul>'\r\n    );\r\n\r\n    if (this.options.get('multiple')) {\r\n      $results.attr('aria-multiselectable', 'true');\r\n    }\r\n\r\n    this.$results = $results;\r\n\r\n    return $results;\r\n  };\r\n\r\n  Results.prototype.clear = function () {\r\n    this.$results.empty();\r\n  };\r\n\r\n  Results.prototype.displayMessage = function (params) {\r\n    var escapeMarkup = this.options.get('escapeMarkup');\r\n\r\n    this.clear();\r\n    this.hideLoading();\r\n\r\n    var $message = $(\r\n      '<li role=\"treeitem\" aria-live=\"assertive\"' +\r\n      ' class=\"select2-results__option\"></li>'\r\n    );\r\n\r\n    var message = this.options.get('translations').get(params.message);\r\n\r\n    $message.append(\r\n      escapeMarkup(\r\n        message(params.args)\r\n      )\r\n    );\r\n\r\n    $message[0].className += ' select2-results__message';\r\n\r\n    this.$results.append($message);\r\n  };\r\n\r\n  Results.prototype.hideMessages = function () {\r\n    this.$results.find('.select2-results__message').remove();\r\n  };\r\n\r\n  Results.prototype.append = function (data) {\r\n    this.hideLoading();\r\n\r\n    var $options = [];\r\n\r\n    if (data.results == null || data.results.length === 0) {\r\n      if (this.$results.children().length === 0) {\r\n        this.trigger('results:message', {\r\n          message: 'noResults'\r\n        });\r\n      }\r\n\r\n      return;\r\n    }\r\n\r\n    data.results = this.sort(data.results);\r\n\r\n    for (var d = 0; d < data.results.length; d++) {\r\n      var item = data.results[d];\r\n\r\n      var $option = this.option(item);\r\n\r\n      $options.push($option);\r\n    }\r\n\r\n    this.$results.append($options);\r\n  };\r\n\r\n  Results.prototype.position = function ($results, $dropdown) {\r\n    var $resultsContainer = $dropdown.find('.select2-results');\r\n    $resultsContainer.append($results);\r\n  };\r\n\r\n  Results.prototype.sort = function (data) {\r\n    var sorter = this.options.get('sorter');\r\n\r\n    return sorter(data);\r\n  };\r\n\r\n  Results.prototype.highlightFirstItem = function () {\r\n    var $options = this.$results\r\n      .find('.select2-results__option[aria-selected]');\r\n\r\n    var $selected = $options.filter('[aria-selected=true]');\r\n\r\n    // Check if there are any selected options\r\n    if ($selected.length > 0) {\r\n      // If there are selected options, highlight the first\r\n      $selected.first().trigger('mouseenter');\r\n    } else {\r\n      // If there are no selected options, highlight the first option\r\n      // in the dropdown\r\n      $options.first().trigger('mouseenter');\r\n    }\r\n\r\n    this.ensureHighlightVisible();\r\n  };\r\n\r\n  Results.prototype.setClasses = function () {\r\n    var self = this;\r\n\r\n    this.data.current(function (selected) {\r\n      var selectedIds = $.map(selected, function (s) {\r\n        return s.id.toString();\r\n      });\r\n\r\n      var $options = self.$results\r\n        .find('.select2-results__option[aria-selected]');\r\n\r\n      $options.each(function () {\r\n        var $option = $(this);\r\n\r\n        var item = $.data(this, 'data');\r\n\r\n        // id needs to be converted to a string when comparing\r\n        var id = '' + item.id;\r\n\r\n        if ((item.element != null && item.element.selected) ||\r\n            (item.element == null && $.inArray(id, selectedIds) > -1)) {\r\n          $option.attr('aria-selected', 'true');\r\n        } else {\r\n          $option.attr('aria-selected', 'false');\r\n        }\r\n      });\r\n\r\n    });\r\n  };\r\n\r\n  Results.prototype.showLoading = function (params) {\r\n    this.hideLoading();\r\n\r\n    var loadingMore = this.options.get('translations').get('searching');\r\n\r\n    var loading = {\r\n      disabled: true,\r\n      loading: true,\r\n      text: loadingMore(params)\r\n    };\r\n    var $loading = this.option(loading);\r\n    $loading.className += ' loading-results';\r\n\r\n    this.$results.prepend($loading);\r\n  };\r\n\r\n  Results.prototype.hideLoading = function () {\r\n    this.$results.find('.loading-results').remove();\r\n  };\r\n\r\n  Results.prototype.option = function (data) {\r\n    var option = document.createElement('li');\r\n    option.className = 'select2-results__option';\r\n\r\n    var attrs = {\r\n      'role': 'treeitem',\r\n      'aria-selected': 'false'\r\n    };\r\n\r\n    if (data.disabled) {\r\n      delete attrs['aria-selected'];\r\n      attrs['aria-disabled'] = 'true';\r\n    }\r\n\r\n    if (data.id == null) {\r\n      delete attrs['aria-selected'];\r\n    }\r\n\r\n    if (data._resultId != null) {\r\n      option.id = data._resultId;\r\n    }\r\n\r\n    if (data.title) {\r\n      option.title = data.title;\r\n    }\r\n\r\n    if (data.children) {\r\n      attrs.role = 'group';\r\n      attrs['aria-label'] = data.text;\r\n      delete attrs['aria-selected'];\r\n    }\r\n\r\n    for (var attr in attrs) {\r\n      var val = attrs[attr];\r\n\r\n      option.setAttribute(attr, val);\r\n    }\r\n\r\n    if (data.children) {\r\n      var $option = $(option);\r\n\r\n      var label = document.createElement('strong');\r\n      label.className = 'select2-results__group';\r\n\r\n      var $label = $(label);\r\n      this.template(data, label);\r\n\r\n      var $children = [];\r\n\r\n      for (var c = 0; c < data.children.length; c++) {\r\n        var child = data.children[c];\r\n\r\n        var $child = this.option(child);\r\n\r\n        $children.push($child);\r\n      }\r\n\r\n      var $childrenContainer = $('<ul></ul>', {\r\n        'class': 'select2-results__options select2-results__options--nested'\r\n      });\r\n\r\n      $childrenContainer.append($children);\r\n\r\n      $option.append(label);\r\n      $option.append($childrenContainer);\r\n    } else {\r\n      this.template(data, option);\r\n    }\r\n\r\n    $.data(option, 'data', data);\r\n\r\n    return option;\r\n  };\r\n\r\n  Results.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    var id = container.id + '-results';\r\n\r\n    this.$results.attr('id', id);\r\n\r\n    container.on('results:all', function (params) {\r\n      self.clear();\r\n      self.append(params.data);\r\n\r\n      if (container.isOpen()) {\r\n        self.setClasses();\r\n        self.highlightFirstItem();\r\n      }\r\n    });\r\n\r\n    container.on('results:append', function (params) {\r\n      self.append(params.data);\r\n\r\n      if (container.isOpen()) {\r\n        self.setClasses();\r\n      }\r\n    });\r\n\r\n    container.on('query', function (params) {\r\n      self.hideMessages();\r\n      self.showLoading(params);\r\n    });\r\n\r\n    container.on('select', function () {\r\n      if (!container.isOpen()) {\r\n        return;\r\n      }\r\n\r\n      self.setClasses();\r\n      self.highlightFirstItem();\r\n    });\r\n\r\n    container.on('unselect', function () {\r\n      if (!container.isOpen()) {\r\n        return;\r\n      }\r\n\r\n      self.setClasses();\r\n      self.highlightFirstItem();\r\n    });\r\n\r\n    container.on('open', function () {\r\n      // When the dropdown is open, aria-expended=\"true\"\r\n      self.$results.attr('aria-expanded', 'true');\r\n      self.$results.attr('aria-hidden', 'false');\r\n\r\n      self.setClasses();\r\n      self.ensureHighlightVisible();\r\n    });\r\n\r\n    container.on('close', function () {\r\n      // When the dropdown is closed, aria-expended=\"false\"\r\n      self.$results.attr('aria-expanded', 'false');\r\n      self.$results.attr('aria-hidden', 'true');\r\n      self.$results.removeAttr('aria-activedescendant');\r\n    });\r\n\r\n    container.on('results:toggle', function () {\r\n      var $highlighted = self.getHighlightedResults();\r\n\r\n      if ($highlighted.length === 0) {\r\n        return;\r\n      }\r\n\r\n      $highlighted.trigger('mouseup');\r\n    });\r\n\r\n    container.on('results:select', function () {\r\n      var $highlighted = self.getHighlightedResults();\r\n\r\n      if ($highlighted.length === 0) {\r\n        return;\r\n      }\r\n\r\n      var data = $highlighted.data('data');\r\n\r\n      if ($highlighted.attr('aria-selected') == 'true') {\r\n        self.trigger('close', {});\r\n      } else {\r\n        self.trigger('select', {\r\n          data: data\r\n        });\r\n      }\r\n    });\r\n\r\n    container.on('results:previous', function () {\r\n      var $highlighted = self.getHighlightedResults();\r\n\r\n      var $options = self.$results.find('[aria-selected]');\r\n\r\n      var currentIndex = $options.index($highlighted);\r\n\r\n      // If we are already at te top, don't move further\r\n      if (currentIndex === 0) {\r\n        return;\r\n      }\r\n\r\n      var nextIndex = currentIndex - 1;\r\n\r\n      // If none are highlighted, highlight the first\r\n      if ($highlighted.length === 0) {\r\n        nextIndex = 0;\r\n      }\r\n\r\n      var $next = $options.eq(nextIndex);\r\n\r\n      $next.trigger('mouseenter');\r\n\r\n      var currentOffset = self.$results.offset().top;\r\n      var nextTop = $next.offset().top;\r\n      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);\r\n\r\n      if (nextIndex === 0) {\r\n        self.$results.scrollTop(0);\r\n      } else if (nextTop - currentOffset < 0) {\r\n        self.$results.scrollTop(nextOffset);\r\n      }\r\n    });\r\n\r\n    container.on('results:next', function () {\r\n      var $highlighted = self.getHighlightedResults();\r\n\r\n      var $options = self.$results.find('[aria-selected]');\r\n\r\n      var currentIndex = $options.index($highlighted);\r\n\r\n      var nextIndex = currentIndex + 1;\r\n\r\n      // If we are at the last option, stay there\r\n      if (nextIndex >= $options.length) {\r\n        return;\r\n      }\r\n\r\n      var $next = $options.eq(nextIndex);\r\n\r\n      $next.trigger('mouseenter');\r\n\r\n      var currentOffset = self.$results.offset().top +\r\n        self.$results.outerHeight(false);\r\n      var nextBottom = $next.offset().top + $next.outerHeight(false);\r\n      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;\r\n\r\n      if (nextIndex === 0) {\r\n        self.$results.scrollTop(0);\r\n      } else if (nextBottom > currentOffset) {\r\n        self.$results.scrollTop(nextOffset);\r\n      }\r\n    });\r\n\r\n    container.on('results:focus', function (params) {\r\n      params.element.addClass('select2-results__option--highlighted');\r\n    });\r\n\r\n    container.on('results:message', function (params) {\r\n      self.displayMessage(params);\r\n    });\r\n\r\n    if ($.fn.mousewheel) {\r\n      this.$results.on('mousewheel', function (e) {\r\n        var top = self.$results.scrollTop();\r\n\r\n        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;\r\n\r\n        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;\r\n        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();\r\n\r\n        if (isAtTop) {\r\n          self.$results.scrollTop(0);\r\n\r\n          e.preventDefault();\r\n          e.stopPropagation();\r\n        } else if (isAtBottom) {\r\n          self.$results.scrollTop(\r\n            self.$results.get(0).scrollHeight - self.$results.height()\r\n          );\r\n\r\n          e.preventDefault();\r\n          e.stopPropagation();\r\n        }\r\n      });\r\n    }\r\n\r\n    this.$results.on('mouseup', '.select2-results__option[aria-selected]',\r\n      function (evt) {\r\n      var $this = $(this);\r\n\r\n      var data = $this.data('data');\r\n\r\n      if ($this.attr('aria-selected') === 'true') {\r\n        if (self.options.get('multiple')) {\r\n          self.trigger('unselect', {\r\n            originalEvent: evt,\r\n            data: data\r\n          });\r\n        } else {\r\n          self.trigger('close', {});\r\n        }\r\n\r\n        return;\r\n      }\r\n\r\n      self.trigger('select', {\r\n        originalEvent: evt,\r\n        data: data\r\n      });\r\n    });\r\n\r\n    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',\r\n      function (evt) {\r\n      var data = $(this).data('data');\r\n\r\n      self.getHighlightedResults()\r\n          .removeClass('select2-results__option--highlighted');\r\n\r\n      self.trigger('results:focus', {\r\n        data: data,\r\n        element: $(this)\r\n      });\r\n    });\r\n  };\r\n\r\n  Results.prototype.getHighlightedResults = function () {\r\n    var $highlighted = this.$results\r\n    .find('.select2-results__option--highlighted');\r\n\r\n    return $highlighted;\r\n  };\r\n\r\n  Results.prototype.destroy = function () {\r\n    this.$results.remove();\r\n  };\r\n\r\n  Results.prototype.ensureHighlightVisible = function () {\r\n    var $highlighted = this.getHighlightedResults();\r\n\r\n    if ($highlighted.length === 0) {\r\n      return;\r\n    }\r\n\r\n    var $options = this.$results.find('[aria-selected]');\r\n\r\n    var currentIndex = $options.index($highlighted);\r\n\r\n    var currentOffset = this.$results.offset().top;\r\n    var nextTop = $highlighted.offset().top;\r\n    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);\r\n\r\n    var offsetDelta = nextTop - currentOffset;\r\n    nextOffset -= $highlighted.outerHeight(false) * 2;\r\n\r\n    if (currentIndex <= 2) {\r\n      this.$results.scrollTop(0);\r\n    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {\r\n      this.$results.scrollTop(nextOffset);\r\n    }\r\n  };\r\n\r\n  Results.prototype.template = function (result, container) {\r\n    var template = this.options.get('templateResult');\r\n    var escapeMarkup = this.options.get('escapeMarkup');\r\n\r\n    var content = template(result, container);\r\n\r\n    if (content == null) {\r\n      container.style.display = 'none';\r\n    } else if (typeof content === 'string') {\r\n      container.innerHTML = escapeMarkup(content);\r\n    } else {\r\n      $(container).append(content);\r\n    }\r\n  };\r\n\r\n  return Results;\r\n});\r\n\nS2.define('select2/keys',[\r\n\r\n], function () {\r\n  var KEYS = {\r\n    BACKSPACE: 8,\r\n    TAB: 9,\r\n    ENTER: 13,\r\n    SHIFT: 16,\r\n    CTRL: 17,\r\n    ALT: 18,\r\n    ESC: 27,\r\n    SPACE: 32,\r\n    PAGE_UP: 33,\r\n    PAGE_DOWN: 34,\r\n    END: 35,\r\n    HOME: 36,\r\n    LEFT: 37,\r\n    UP: 38,\r\n    RIGHT: 39,\r\n    DOWN: 40,\r\n    DELETE: 46\r\n  };\r\n\r\n  return KEYS;\r\n});\r\n\nS2.define('select2/selection/base',[\r\n  'jquery',\r\n  '../utils',\r\n  '../keys'\r\n], function ($, Utils, KEYS) {\r\n  function BaseSelection ($element, options) {\r\n    this.$element = $element;\r\n    this.options = options;\r\n\r\n    BaseSelection.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(BaseSelection, Utils.Observable);\r\n\r\n  BaseSelection.prototype.render = function () {\r\n    var $selection = $(\r\n      '<span class=\"select2-selection\" role=\"combobox\" ' +\r\n      ' aria-haspopup=\"true\" aria-expanded=\"false\">' +\r\n      '</span>'\r\n    );\r\n\r\n    this._tabindex = 0;\r\n\r\n    if (this.$element.data('old-tabindex') != null) {\r\n      this._tabindex = this.$element.data('old-tabindex');\r\n    } else if (this.$element.attr('tabindex') != null) {\r\n      this._tabindex = this.$element.attr('tabindex');\r\n    }\r\n\r\n    $selection.attr('title', this.$element.attr('title'));\r\n    $selection.attr('tabindex', this._tabindex);\r\n\r\n    this.$selection = $selection;\r\n\r\n    return $selection;\r\n  };\r\n\r\n  BaseSelection.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    var id = container.id + '-container';\r\n    var resultsId = container.id + '-results';\r\n\r\n    this.container = container;\r\n\r\n    this.$selection.on('focus', function (evt) {\r\n      self.trigger('focus', evt);\r\n    });\r\n\r\n    this.$selection.on('blur', function (evt) {\r\n      self._handleBlur(evt);\r\n    });\r\n\r\n    this.$selection.on('keydown', function (evt) {\r\n      self.trigger('keypress', evt);\r\n\r\n      if (evt.which === KEYS.SPACE) {\r\n        evt.preventDefault();\r\n      }\r\n    });\r\n\r\n    container.on('results:focus', function (params) {\r\n      self.$selection.attr('aria-activedescendant', params.data._resultId);\r\n    });\r\n\r\n    container.on('selection:update', function (params) {\r\n      self.update(params.data);\r\n    });\r\n\r\n    container.on('open', function () {\r\n      // When the dropdown is open, aria-expanded=\"true\"\r\n      self.$selection.attr('aria-expanded', 'true');\r\n      self.$selection.attr('aria-owns', resultsId);\r\n\r\n      self._attachCloseHandler(container);\r\n    });\r\n\r\n    container.on('close', function () {\r\n      // When the dropdown is closed, aria-expanded=\"false\"\r\n      self.$selection.attr('aria-expanded', 'false');\r\n      self.$selection.removeAttr('aria-activedescendant');\r\n      self.$selection.removeAttr('aria-owns');\r\n\r\n      self.$selection.focus();\r\n\r\n      self._detachCloseHandler(container);\r\n    });\r\n\r\n    container.on('enable', function () {\r\n      self.$selection.attr('tabindex', self._tabindex);\r\n    });\r\n\r\n    container.on('disable', function () {\r\n      self.$selection.attr('tabindex', '-1');\r\n    });\r\n  };\r\n\r\n  BaseSelection.prototype._handleBlur = function (evt) {\r\n    var self = this;\r\n\r\n    // This needs to be delayed as the active element is the body when the tab\r\n    // key is pressed, possibly along with others.\r\n    window.setTimeout(function () {\r\n      // Don't trigger `blur` if the focus is still in the selection\r\n      if (\r\n        (document.activeElement == self.$selection[0]) ||\r\n        ($.contains(self.$selection[0], document.activeElement))\r\n      ) {\r\n        return;\r\n      }\r\n\r\n      self.trigger('blur', evt);\r\n    }, 1);\r\n  };\r\n\r\n  BaseSelection.prototype._attachCloseHandler = function (container) {\r\n    var self = this;\r\n\r\n    $(document.body).on('mousedown.select2.' + container.id, function (e) {\r\n      var $target = $(e.target);\r\n\r\n      var $select = $target.closest('.select2');\r\n\r\n      var $all = $('.select2.select2-container--open');\r\n\r\n      $all.each(function () {\r\n        var $this = $(this);\r\n\r\n        if (this == $select[0]) {\r\n          return;\r\n        }\r\n\r\n        var $element = $this.data('element');\r\n\r\n        $element.select2('close');\r\n      });\r\n    });\r\n  };\r\n\r\n  BaseSelection.prototype._detachCloseHandler = function (container) {\r\n    $(document.body).off('mousedown.select2.' + container.id);\r\n  };\r\n\r\n  BaseSelection.prototype.position = function ($selection, $container) {\r\n    var $selectionContainer = $container.find('.selection');\r\n    $selectionContainer.append($selection);\r\n  };\r\n\r\n  BaseSelection.prototype.destroy = function () {\r\n    this._detachCloseHandler(this.container);\r\n  };\r\n\r\n  BaseSelection.prototype.update = function (data) {\r\n    throw new Error('The `update` method must be defined in child classes.');\r\n  };\r\n\r\n  return BaseSelection;\r\n});\r\n\nS2.define('select2/selection/single',[\r\n  'jquery',\r\n  './base',\r\n  '../utils',\r\n  '../keys'\r\n], function ($, BaseSelection, Utils, KEYS) {\r\n  function SingleSelection () {\r\n    SingleSelection.__super__.constructor.apply(this, arguments);\r\n  }\r\n\r\n  Utils.Extend(SingleSelection, BaseSelection);\r\n\r\n  SingleSelection.prototype.render = function () {\r\n    var $selection = SingleSelection.__super__.render.call(this);\r\n\r\n    $selection.addClass('select2-selection--single');\r\n\r\n    $selection.html(\r\n      '<span class=\"select2-selection__rendered\"></span>' +\r\n      '<span class=\"select2-selection__arrow\" role=\"presentation\">' +\r\n        '<b role=\"presentation\"></b>' +\r\n      '</span>'\r\n    );\r\n\r\n    return $selection;\r\n  };\r\n\r\n  SingleSelection.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    SingleSelection.__super__.bind.apply(this, arguments);\r\n\r\n    var id = container.id + '-container';\r\n\r\n    this.$selection.find('.select2-selection__rendered').attr('id', id);\r\n    this.$selection.attr('aria-labelledby', id);\r\n\r\n    this.$selection.on('mousedown', function (evt) {\r\n      // Only respond to left clicks\r\n      if (evt.which !== 1) {\r\n        return;\r\n      }\r\n\r\n      self.trigger('toggle', {\r\n        originalEvent: evt\r\n      });\r\n    });\r\n\r\n    this.$selection.on('focus', function (evt) {\r\n      // User focuses on the container\r\n    });\r\n\r\n    this.$selection.on('blur', function (evt) {\r\n      // User exits the container\r\n    });\r\n\r\n    container.on('focus', function (evt) {\r\n      if (!container.isOpen()) {\r\n        self.$selection.focus();\r\n      }\r\n    });\r\n\r\n    container.on('selection:update', function (params) {\r\n      self.update(params.data);\r\n    });\r\n  };\r\n\r\n  SingleSelection.prototype.clear = function () {\r\n    this.$selection.find('.select2-selection__rendered').empty();\r\n  };\r\n\r\n  SingleSelection.prototype.display = function (data, container) {\r\n    var template = this.options.get('templateSelection');\r\n    var escapeMarkup = this.options.get('escapeMarkup');\r\n\r\n    return escapeMarkup(template(data, container));\r\n  };\r\n\r\n  SingleSelection.prototype.selectionContainer = function () {\r\n    return $('<span></span>');\r\n  };\r\n\r\n  SingleSelection.prototype.update = function (data) {\r\n    if (data.length === 0) {\r\n      this.clear();\r\n      return;\r\n    }\r\n\r\n    var selection = data[0];\r\n\r\n    var $rendered = this.$selection.find('.select2-selection__rendered');\r\n    var formatted = this.display(selection, $rendered);\r\n\r\n    $rendered.empty().append(formatted);\r\n    $rendered.prop('title', selection.title || selection.text);\r\n  };\r\n\r\n  return SingleSelection;\r\n});\r\n\nS2.define('select2/selection/multiple',[\r\n  'jquery',\r\n  './base',\r\n  '../utils'\r\n], function ($, BaseSelection, Utils) {\r\n  function MultipleSelection ($element, options) {\r\n    MultipleSelection.__super__.constructor.apply(this, arguments);\r\n  }\r\n\r\n  Utils.Extend(MultipleSelection, BaseSelection);\r\n\r\n  MultipleSelection.prototype.render = function () {\r\n    var $selection = MultipleSelection.__super__.render.call(this);\r\n\r\n    $selection.addClass('select2-selection--multiple');\r\n\r\n    $selection.html(\r\n      '<ul class=\"select2-selection__rendered\"></ul>'\r\n    );\r\n\r\n    return $selection;\r\n  };\r\n\r\n  MultipleSelection.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    MultipleSelection.__super__.bind.apply(this, arguments);\r\n\r\n    this.$selection.on('click', function (evt) {\r\n      self.trigger('toggle', {\r\n        originalEvent: evt\r\n      });\r\n    });\r\n\r\n    this.$selection.on(\r\n      'click',\r\n      '.select2-selection__choice__remove',\r\n      function (evt) {\r\n        // Ignore the event if it is disabled\r\n        if (self.options.get('disabled')) {\r\n          return;\r\n        }\r\n\r\n        var $remove = $(this);\r\n        var $selection = $remove.parent();\r\n\r\n        var data = $selection.data('data');\r\n\r\n        self.trigger('unselect', {\r\n          originalEvent: evt,\r\n          data: data\r\n        });\r\n      }\r\n    );\r\n  };\r\n\r\n  MultipleSelection.prototype.clear = function () {\r\n    this.$selection.find('.select2-selection__rendered').empty();\r\n  };\r\n\r\n  MultipleSelection.prototype.display = function (data, container) {\r\n    var template = this.options.get('templateSelection');\r\n    var escapeMarkup = this.options.get('escapeMarkup');\r\n\r\n    return escapeMarkup(template(data, container));\r\n  };\r\n\r\n  MultipleSelection.prototype.selectionContainer = function () {\r\n    var $container = $(\r\n      '<li class=\"select2-selection__choice\">' +\r\n        '<span class=\"select2-selection__choice__remove\" role=\"presentation\">' +\r\n          '&times;' +\r\n        '</span>' +\r\n      '</li>'\r\n    );\r\n\r\n    return $container;\r\n  };\r\n\r\n  MultipleSelection.prototype.update = function (data) {\r\n    this.clear();\r\n\r\n    if (data.length === 0) {\r\n      return;\r\n    }\r\n\r\n    var $selections = [];\r\n\r\n    for (var d = 0; d < data.length; d++) {\r\n      var selection = data[d];\r\n\r\n      var $selection = this.selectionContainer();\r\n      var formatted = this.display(selection, $selection);\r\n\r\n      $selection.append(formatted);\r\n      $selection.prop('title', selection.title || selection.text);\r\n\r\n      $selection.data('data', selection);\r\n\r\n      $selections.push($selection);\r\n    }\r\n\r\n    var $rendered = this.$selection.find('.select2-selection__rendered');\r\n\r\n    Utils.appendMany($rendered, $selections);\r\n  };\r\n\r\n  return MultipleSelection;\r\n});\r\n\nS2.define('select2/selection/placeholder',[\r\n  '../utils'\r\n], function (Utils) {\r\n  function Placeholder (decorated, $element, options) {\r\n    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));\r\n\r\n    decorated.call(this, $element, options);\r\n  }\r\n\r\n  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {\r\n    if (typeof placeholder === 'string') {\r\n      placeholder = {\r\n        id: '',\r\n        text: placeholder\r\n      };\r\n    }\r\n\r\n    return placeholder;\r\n  };\r\n\r\n  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {\r\n    var $placeholder = this.selectionContainer();\r\n\r\n    $placeholder.html(this.display(placeholder));\r\n    $placeholder.addClass('select2-selection__placeholder')\r\n                .removeClass('select2-selection__choice');\r\n\r\n    return $placeholder;\r\n  };\r\n\r\n  Placeholder.prototype.update = function (decorated, data) {\r\n    var singlePlaceholder = (\r\n      data.length == 1 && data[0].id != this.placeholder.id\r\n    );\r\n    var multipleSelections = data.length > 1;\r\n\r\n    if (multipleSelections || singlePlaceholder) {\r\n      return decorated.call(this, data);\r\n    }\r\n\r\n    this.clear();\r\n\r\n    var $placeholder = this.createPlaceholder(this.placeholder);\r\n\r\n    this.$selection.find('.select2-selection__rendered').append($placeholder);\r\n  };\r\n\r\n  return Placeholder;\r\n});\r\n\nS2.define('select2/selection/allowClear',[\r\n  'jquery',\r\n  '../keys'\r\n], function ($, KEYS) {\r\n  function AllowClear () { }\r\n\r\n  AllowClear.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    if (this.placeholder == null) {\r\n      if (this.options.get('debug') && window.console && console.error) {\r\n        console.error(\r\n          'Select2: The `allowClear` option should be used in combination ' +\r\n          'with the `placeholder` option.'\r\n        );\r\n      }\r\n    }\r\n\r\n    this.$selection.on('mousedown', '.select2-selection__clear',\r\n      function (evt) {\r\n        self._handleClear(evt);\r\n    });\r\n\r\n    container.on('keypress', function (evt) {\r\n      self._handleKeyboardClear(evt, container);\r\n    });\r\n  };\r\n\r\n  AllowClear.prototype._handleClear = function (_, evt) {\r\n    // Ignore the event if it is disabled\r\n    if (this.options.get('disabled')) {\r\n      return;\r\n    }\r\n\r\n    var $clear = this.$selection.find('.select2-selection__clear');\r\n\r\n    // Ignore the event if nothing has been selected\r\n    if ($clear.length === 0) {\r\n      return;\r\n    }\r\n\r\n    evt.stopPropagation();\r\n\r\n    var data = $clear.data('data');\r\n\r\n    for (var d = 0; d < data.length; d++) {\r\n      var unselectData = {\r\n        data: data[d]\r\n      };\r\n\r\n      // Trigger the `unselect` event, so people can prevent it from being\r\n      // cleared.\r\n      this.trigger('unselect', unselectData);\r\n\r\n      // If the event was prevented, don't clear it out.\r\n      if (unselectData.prevented) {\r\n        return;\r\n      }\r\n    }\r\n\r\n    this.$element.val(this.placeholder.id).trigger('change');\r\n\r\n    this.trigger('toggle', {});\r\n  };\r\n\r\n  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {\r\n    if (container.isOpen()) {\r\n      return;\r\n    }\r\n\r\n    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {\r\n      this._handleClear(evt);\r\n    }\r\n  };\r\n\r\n  AllowClear.prototype.update = function (decorated, data) {\r\n    decorated.call(this, data);\r\n\r\n    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||\r\n        data.length === 0) {\r\n      return;\r\n    }\r\n\r\n    var $remove = $(\r\n      '<span class=\"select2-selection__clear\">' +\r\n        '&times;' +\r\n      '</span>'\r\n    );\r\n    $remove.data('data', data);\r\n\r\n    this.$selection.find('.select2-selection__rendered').prepend($remove);\r\n  };\r\n\r\n  return AllowClear;\r\n});\r\n\nS2.define('select2/selection/search',[\r\n  'jquery',\r\n  '../utils',\r\n  '../keys'\r\n], function ($, Utils, KEYS) {\r\n  function Search (decorated, $element, options) {\r\n    decorated.call(this, $element, options);\r\n  }\r\n\r\n  Search.prototype.render = function (decorated) {\r\n    var $search = $(\r\n      '<li class=\"select2-search select2-search--inline\">' +\r\n        '<input class=\"select2-search__field\" type=\"search\" tabindex=\"-1\"' +\r\n        ' autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"' +\r\n        ' spellcheck=\"false\" role=\"textbox\" aria-autocomplete=\"list\" />' +\r\n      '</li>'\r\n    );\r\n\r\n    this.$searchContainer = $search;\r\n    this.$search = $search.find('input');\r\n\r\n    var $rendered = decorated.call(this);\r\n\r\n    this._transferTabIndex();\r\n\r\n    return $rendered;\r\n  };\r\n\r\n  Search.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('open', function () {\r\n      self.$search.trigger('focus');\r\n    });\r\n\r\n    container.on('close', function () {\r\n      self.$search.val('');\r\n      self.$search.removeAttr('aria-activedescendant');\r\n      self.$search.trigger('focus');\r\n    });\r\n\r\n    container.on('enable', function () {\r\n      self.$search.prop('disabled', false);\r\n\r\n      self._transferTabIndex();\r\n    });\r\n\r\n    container.on('disable', function () {\r\n      self.$search.prop('disabled', true);\r\n    });\r\n\r\n    container.on('focus', function (evt) {\r\n      self.$search.trigger('focus');\r\n    });\r\n\r\n    container.on('results:focus', function (params) {\r\n      self.$search.attr('aria-activedescendant', params.id);\r\n    });\r\n\r\n    this.$selection.on('focusin', '.select2-search--inline', function (evt) {\r\n      self.trigger('focus', evt);\r\n    });\r\n\r\n    this.$selection.on('focusout', '.select2-search--inline', function (evt) {\r\n      self._handleBlur(evt);\r\n    });\r\n\r\n    this.$selection.on('keydown', '.select2-search--inline', function (evt) {\r\n      evt.stopPropagation();\r\n\r\n      self.trigger('keypress', evt);\r\n\r\n      self._keyUpPrevented = evt.isDefaultPrevented();\r\n\r\n      var key = evt.which;\r\n\r\n      if (key === KEYS.BACKSPACE && self.$search.val() === '') {\r\n        var $previousChoice = self.$searchContainer\r\n          .prev('.select2-selection__choice');\r\n\r\n        if ($previousChoice.length > 0) {\r\n          var item = $previousChoice.data('data');\r\n\r\n          self.searchRemoveChoice(item);\r\n\r\n          evt.preventDefault();\r\n        }\r\n      }\r\n    });\r\n\r\n    // Try to detect the IE version should the `documentMode` property that\r\n    // is stored on the document. This is only implemented in IE and is\r\n    // slightly cleaner than doing a user agent check.\r\n    // This property is not available in Edge, but Edge also doesn't have\r\n    // this bug.\r\n    var msie = document.documentMode;\r\n    var disableInputEvents = msie && msie <= 11;\r\n\r\n    // Workaround for browsers which do not support the `input` event\r\n    // This will prevent double-triggering of events for browsers which support\r\n    // both the `keyup` and `input` events.\r\n    this.$selection.on(\r\n      'input.searchcheck',\r\n      '.select2-search--inline',\r\n      function (evt) {\r\n        // IE will trigger the `input` event when a placeholder is used on a\r\n        // search box. To get around this issue, we are forced to ignore all\r\n        // `input` events in IE and keep using `keyup`.\r\n        if (disableInputEvents) {\r\n          self.$selection.off('input.search input.searchcheck');\r\n          return;\r\n        }\r\n\r\n        // Unbind the duplicated `keyup` event\r\n        self.$selection.off('keyup.search');\r\n      }\r\n    );\r\n\r\n    this.$selection.on(\r\n      'keyup.search input.search',\r\n      '.select2-search--inline',\r\n      function (evt) {\r\n        // IE will trigger the `input` event when a placeholder is used on a\r\n        // search box. To get around this issue, we are forced to ignore all\r\n        // `input` events in IE and keep using `keyup`.\r\n        if (disableInputEvents && evt.type === 'input') {\r\n          self.$selection.off('input.search input.searchcheck');\r\n          return;\r\n        }\r\n\r\n        var key = evt.which;\r\n\r\n        // We can freely ignore events from modifier keys\r\n        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {\r\n          return;\r\n        }\r\n\r\n        // Tabbing will be handled during the `keydown` phase\r\n        if (key == KEYS.TAB) {\r\n          return;\r\n        }\r\n\r\n        self.handleSearch(evt);\r\n      }\r\n    );\r\n  };\r\n\r\n  /**\r\n   * This method will transfer the tabindex attribute from the rendered\r\n   * selection to the search box. This allows for the search box to be used as\r\n   * the primary focus instead of the selection container.\r\n   *\r\n   * @private\r\n   */\r\n  Search.prototype._transferTabIndex = function (decorated) {\r\n    this.$search.attr('tabindex', this.$selection.attr('tabindex'));\r\n    this.$selection.attr('tabindex', '-1');\r\n  };\r\n\r\n  Search.prototype.createPlaceholder = function (decorated, placeholder) {\r\n    this.$search.attr('placeholder', placeholder.text);\r\n  };\r\n\r\n  Search.prototype.update = function (decorated, data) {\r\n    var searchHadFocus = this.$search[0] == document.activeElement;\r\n\r\n    this.$search.attr('placeholder', '');\r\n\r\n    decorated.call(this, data);\r\n\r\n    this.$selection.find('.select2-selection__rendered')\r\n                   .append(this.$searchContainer);\r\n\r\n    this.resizeSearch();\r\n    if (searchHadFocus) {\r\n      this.$search.focus();\r\n    }\r\n  };\r\n\r\n  Search.prototype.handleSearch = function () {\r\n    this.resizeSearch();\r\n\r\n    if (!this._keyUpPrevented) {\r\n      var input = this.$search.val();\r\n\r\n      this.trigger('query', {\r\n        term: input\r\n      });\r\n    }\r\n\r\n    this._keyUpPrevented = false;\r\n  };\r\n\r\n  Search.prototype.searchRemoveChoice = function (decorated, item) {\r\n    this.trigger('unselect', {\r\n      data: item\r\n    });\r\n\r\n    this.$search.val(item.text);\r\n    this.handleSearch();\r\n  };\r\n\r\n  Search.prototype.resizeSearch = function () {\r\n    this.$search.css('width', '25px');\r\n\r\n    var width = '';\r\n\r\n    if (this.$search.attr('placeholder') !== '') {\r\n      width = this.$selection.find('.select2-selection__rendered').innerWidth();\r\n    } else {\r\n      var minimumWidth = this.$search.val().length + 1;\r\n\r\n      width = (minimumWidth * 0.75) + 'em';\r\n    }\r\n\r\n    this.$search.css('width', width);\r\n  };\r\n\r\n  return Search;\r\n});\r\n\nS2.define('select2/selection/eventRelay',[\r\n  'jquery'\r\n], function ($) {\r\n  function EventRelay () { }\r\n\r\n  EventRelay.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n    var relayEvents = [\r\n      'open', 'opening',\r\n      'close', 'closing',\r\n      'select', 'selecting',\r\n      'unselect', 'unselecting'\r\n    ];\r\n\r\n    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('*', function (name, params) {\r\n      // Ignore events that should not be relayed\r\n      if ($.inArray(name, relayEvents) === -1) {\r\n        return;\r\n      }\r\n\r\n      // The parameters should always be an object\r\n      params = params || {};\r\n\r\n      // Generate the jQuery event for the Select2 event\r\n      var evt = $.Event('select2:' + name, {\r\n        params: params\r\n      });\r\n\r\n      self.$element.trigger(evt);\r\n\r\n      // Only handle preventable events if it was one\r\n      if ($.inArray(name, preventableEvents) === -1) {\r\n        return;\r\n      }\r\n\r\n      params.prevented = evt.isDefaultPrevented();\r\n    });\r\n  };\r\n\r\n  return EventRelay;\r\n});\r\n\nS2.define('select2/translation',[\r\n  'jquery',\r\n  'require'\r\n], function ($, require) {\r\n  function Translation (dict) {\r\n    this.dict = dict || {};\r\n  }\r\n\r\n  Translation.prototype.all = function () {\r\n    return this.dict;\r\n  };\r\n\r\n  Translation.prototype.get = function (key) {\r\n    return this.dict[key];\r\n  };\r\n\r\n  Translation.prototype.extend = function (translation) {\r\n    this.dict = $.extend({}, translation.all(), this.dict);\r\n  };\r\n\r\n  // Static functions\r\n\r\n  Translation._cache = {};\r\n\r\n  Translation.loadPath = function (path) {\r\n    if (!(path in Translation._cache)) {\r\n      var translations = require(path);\r\n\r\n      Translation._cache[path] = translations;\r\n    }\r\n\r\n    return new Translation(Translation._cache[path]);\r\n  };\r\n\r\n  return Translation;\r\n});\r\n\nS2.define('select2/diacritics',[\r\n\r\n], function () {\r\n  var diacritics = {\r\n    '\\u24B6': 'A',\r\n    '\\uFF21': 'A',\r\n    '\\u00C0': 'A',\r\n    '\\u00C1': 'A',\r\n    '\\u00C2': 'A',\r\n    '\\u1EA6': 'A',\r\n    '\\u1EA4': 'A',\r\n    '\\u1EAA': 'A',\r\n    '\\u1EA8': 'A',\r\n    '\\u00C3': 'A',\r\n    '\\u0100': 'A',\r\n    '\\u0102': 'A',\r\n    '\\u1EB0': 'A',\r\n    '\\u1EAE': 'A',\r\n    '\\u1EB4': 'A',\r\n    '\\u1EB2': 'A',\r\n    '\\u0226': 'A',\r\n    '\\u01E0': 'A',\r\n    '\\u00C4': 'A',\r\n    '\\u01DE': 'A',\r\n    '\\u1EA2': 'A',\r\n    '\\u00C5': 'A',\r\n    '\\u01FA': 'A',\r\n    '\\u01CD': 'A',\r\n    '\\u0200': 'A',\r\n    '\\u0202': 'A',\r\n    '\\u1EA0': 'A',\r\n    '\\u1EAC': 'A',\r\n    '\\u1EB6': 'A',\r\n    '\\u1E00': 'A',\r\n    '\\u0104': 'A',\r\n    '\\u023A': 'A',\r\n    '\\u2C6F': 'A',\r\n    '\\uA732': 'AA',\r\n    '\\u00C6': 'AE',\r\n    '\\u01FC': 'AE',\r\n    '\\u01E2': 'AE',\r\n    '\\uA734': 'AO',\r\n    '\\uA736': 'AU',\r\n    '\\uA738': 'AV',\r\n    '\\uA73A': 'AV',\r\n    '\\uA73C': 'AY',\r\n    '\\u24B7': 'B',\r\n    '\\uFF22': 'B',\r\n    '\\u1E02': 'B',\r\n    '\\u1E04': 'B',\r\n    '\\u1E06': 'B',\r\n    '\\u0243': 'B',\r\n    '\\u0182': 'B',\r\n    '\\u0181': 'B',\r\n    '\\u24B8': 'C',\r\n    '\\uFF23': 'C',\r\n    '\\u0106': 'C',\r\n    '\\u0108': 'C',\r\n    '\\u010A': 'C',\r\n    '\\u010C': 'C',\r\n    '\\u00C7': 'C',\r\n    '\\u1E08': 'C',\r\n    '\\u0187': 'C',\r\n    '\\u023B': 'C',\r\n    '\\uA73E': 'C',\r\n    '\\u24B9': 'D',\r\n    '\\uFF24': 'D',\r\n    '\\u1E0A': 'D',\r\n    '\\u010E': 'D',\r\n    '\\u1E0C': 'D',\r\n    '\\u1E10': 'D',\r\n    '\\u1E12': 'D',\r\n    '\\u1E0E': 'D',\r\n    '\\u0110': 'D',\r\n    '\\u018B': 'D',\r\n    '\\u018A': 'D',\r\n    '\\u0189': 'D',\r\n    '\\uA779': 'D',\r\n    '\\u01F1': 'DZ',\r\n    '\\u01C4': 'DZ',\r\n    '\\u01F2': 'Dz',\r\n    '\\u01C5': 'Dz',\r\n    '\\u24BA': 'E',\r\n    '\\uFF25': 'E',\r\n    '\\u00C8': 'E',\r\n    '\\u00C9': 'E',\r\n    '\\u00CA': 'E',\r\n    '\\u1EC0': 'E',\r\n    '\\u1EBE': 'E',\r\n    '\\u1EC4': 'E',\r\n    '\\u1EC2': 'E',\r\n    '\\u1EBC': 'E',\r\n    '\\u0112': 'E',\r\n    '\\u1E14': 'E',\r\n    '\\u1E16': 'E',\r\n    '\\u0114': 'E',\r\n    '\\u0116': 'E',\r\n    '\\u00CB': 'E',\r\n    '\\u1EBA': 'E',\r\n    '\\u011A': 'E',\r\n    '\\u0204': 'E',\r\n    '\\u0206': 'E',\r\n    '\\u1EB8': 'E',\r\n    '\\u1EC6': 'E',\r\n    '\\u0228': 'E',\r\n    '\\u1E1C': 'E',\r\n    '\\u0118': 'E',\r\n    '\\u1E18': 'E',\r\n    '\\u1E1A': 'E',\r\n    '\\u0190': 'E',\r\n    '\\u018E': 'E',\r\n    '\\u24BB': 'F',\r\n    '\\uFF26': 'F',\r\n    '\\u1E1E': 'F',\r\n    '\\u0191': 'F',\r\n    '\\uA77B': 'F',\r\n    '\\u24BC': 'G',\r\n    '\\uFF27': 'G',\r\n    '\\u01F4': 'G',\r\n    '\\u011C': 'G',\r\n    '\\u1E20': 'G',\r\n    '\\u011E': 'G',\r\n    '\\u0120': 'G',\r\n    '\\u01E6': 'G',\r\n    '\\u0122': 'G',\r\n    '\\u01E4': 'G',\r\n    '\\u0193': 'G',\r\n    '\\uA7A0': 'G',\r\n    '\\uA77D': 'G',\r\n    '\\uA77E': 'G',\r\n    '\\u24BD': 'H',\r\n    '\\uFF28': 'H',\r\n    '\\u0124': 'H',\r\n    '\\u1E22': 'H',\r\n    '\\u1E26': 'H',\r\n    '\\u021E': 'H',\r\n    '\\u1E24': 'H',\r\n    '\\u1E28': 'H',\r\n    '\\u1E2A': 'H',\r\n    '\\u0126': 'H',\r\n    '\\u2C67': 'H',\r\n    '\\u2C75': 'H',\r\n    '\\uA78D': 'H',\r\n    '\\u24BE': 'I',\r\n    '\\uFF29': 'I',\r\n    '\\u00CC': 'I',\r\n    '\\u00CD': 'I',\r\n    '\\u00CE': 'I',\r\n    '\\u0128': 'I',\r\n    '\\u012A': 'I',\r\n    '\\u012C': 'I',\r\n    '\\u0130': 'I',\r\n    '\\u00CF': 'I',\r\n    '\\u1E2E': 'I',\r\n    '\\u1EC8': 'I',\r\n    '\\u01CF': 'I',\r\n    '\\u0208': 'I',\r\n    '\\u020A': 'I',\r\n    '\\u1ECA': 'I',\r\n    '\\u012E': 'I',\r\n    '\\u1E2C': 'I',\r\n    '\\u0197': 'I',\r\n    '\\u24BF': 'J',\r\n    '\\uFF2A': 'J',\r\n    '\\u0134': 'J',\r\n    '\\u0248': 'J',\r\n    '\\u24C0': 'K',\r\n    '\\uFF2B': 'K',\r\n    '\\u1E30': 'K',\r\n    '\\u01E8': 'K',\r\n    '\\u1E32': 'K',\r\n    '\\u0136': 'K',\r\n    '\\u1E34': 'K',\r\n    '\\u0198': 'K',\r\n    '\\u2C69': 'K',\r\n    '\\uA740': 'K',\r\n    '\\uA742': 'K',\r\n    '\\uA744': 'K',\r\n    '\\uA7A2': 'K',\r\n    '\\u24C1': 'L',\r\n    '\\uFF2C': 'L',\r\n    '\\u013F': 'L',\r\n    '\\u0139': 'L',\r\n    '\\u013D': 'L',\r\n    '\\u1E36': 'L',\r\n    '\\u1E38': 'L',\r\n    '\\u013B': 'L',\r\n    '\\u1E3C': 'L',\r\n    '\\u1E3A': 'L',\r\n    '\\u0141': 'L',\r\n    '\\u023D': 'L',\r\n    '\\u2C62': 'L',\r\n    '\\u2C60': 'L',\r\n    '\\uA748': 'L',\r\n    '\\uA746': 'L',\r\n    '\\uA780': 'L',\r\n    '\\u01C7': 'LJ',\r\n    '\\u01C8': 'Lj',\r\n    '\\u24C2': 'M',\r\n    '\\uFF2D': 'M',\r\n    '\\u1E3E': 'M',\r\n    '\\u1E40': 'M',\r\n    '\\u1E42': 'M',\r\n    '\\u2C6E': 'M',\r\n    '\\u019C': 'M',\r\n    '\\u24C3': 'N',\r\n    '\\uFF2E': 'N',\r\n    '\\u01F8': 'N',\r\n    '\\u0143': 'N',\r\n    '\\u00D1': 'N',\r\n    '\\u1E44': 'N',\r\n    '\\u0147': 'N',\r\n    '\\u1E46': 'N',\r\n    '\\u0145': 'N',\r\n    '\\u1E4A': 'N',\r\n    '\\u1E48': 'N',\r\n    '\\u0220': 'N',\r\n    '\\u019D': 'N',\r\n    '\\uA790': 'N',\r\n    '\\uA7A4': 'N',\r\n    '\\u01CA': 'NJ',\r\n    '\\u01CB': 'Nj',\r\n    '\\u24C4': 'O',\r\n    '\\uFF2F': 'O',\r\n    '\\u00D2': 'O',\r\n    '\\u00D3': 'O',\r\n    '\\u00D4': 'O',\r\n    '\\u1ED2': 'O',\r\n    '\\u1ED0': 'O',\r\n    '\\u1ED6': 'O',\r\n    '\\u1ED4': 'O',\r\n    '\\u00D5': 'O',\r\n    '\\u1E4C': 'O',\r\n    '\\u022C': 'O',\r\n    '\\u1E4E': 'O',\r\n    '\\u014C': 'O',\r\n    '\\u1E50': 'O',\r\n    '\\u1E52': 'O',\r\n    '\\u014E': 'O',\r\n    '\\u022E': 'O',\r\n    '\\u0230': 'O',\r\n    '\\u00D6': 'O',\r\n    '\\u022A': 'O',\r\n    '\\u1ECE': 'O',\r\n    '\\u0150': 'O',\r\n    '\\u01D1': 'O',\r\n    '\\u020C': 'O',\r\n    '\\u020E': 'O',\r\n    '\\u01A0': 'O',\r\n    '\\u1EDC': 'O',\r\n    '\\u1EDA': 'O',\r\n    '\\u1EE0': 'O',\r\n    '\\u1EDE': 'O',\r\n    '\\u1EE2': 'O',\r\n    '\\u1ECC': 'O',\r\n    '\\u1ED8': 'O',\r\n    '\\u01EA': 'O',\r\n    '\\u01EC': 'O',\r\n    '\\u00D8': 'O',\r\n    '\\u01FE': 'O',\r\n    '\\u0186': 'O',\r\n    '\\u019F': 'O',\r\n    '\\uA74A': 'O',\r\n    '\\uA74C': 'O',\r\n    '\\u01A2': 'OI',\r\n    '\\uA74E': 'OO',\r\n    '\\u0222': 'OU',\r\n    '\\u24C5': 'P',\r\n    '\\uFF30': 'P',\r\n    '\\u1E54': 'P',\r\n    '\\u1E56': 'P',\r\n    '\\u01A4': 'P',\r\n    '\\u2C63': 'P',\r\n    '\\uA750': 'P',\r\n    '\\uA752': 'P',\r\n    '\\uA754': 'P',\r\n    '\\u24C6': 'Q',\r\n    '\\uFF31': 'Q',\r\n    '\\uA756': 'Q',\r\n    '\\uA758': 'Q',\r\n    '\\u024A': 'Q',\r\n    '\\u24C7': 'R',\r\n    '\\uFF32': 'R',\r\n    '\\u0154': 'R',\r\n    '\\u1E58': 'R',\r\n    '\\u0158': 'R',\r\n    '\\u0210': 'R',\r\n    '\\u0212': 'R',\r\n    '\\u1E5A': 'R',\r\n    '\\u1E5C': 'R',\r\n    '\\u0156': 'R',\r\n    '\\u1E5E': 'R',\r\n    '\\u024C': 'R',\r\n    '\\u2C64': 'R',\r\n    '\\uA75A': 'R',\r\n    '\\uA7A6': 'R',\r\n    '\\uA782': 'R',\r\n    '\\u24C8': 'S',\r\n    '\\uFF33': 'S',\r\n    '\\u1E9E': 'S',\r\n    '\\u015A': 'S',\r\n    '\\u1E64': 'S',\r\n    '\\u015C': 'S',\r\n    '\\u1E60': 'S',\r\n    '\\u0160': 'S',\r\n    '\\u1E66': 'S',\r\n    '\\u1E62': 'S',\r\n    '\\u1E68': 'S',\r\n    '\\u0218': 'S',\r\n    '\\u015E': 'S',\r\n    '\\u2C7E': 'S',\r\n    '\\uA7A8': 'S',\r\n    '\\uA784': 'S',\r\n    '\\u24C9': 'T',\r\n    '\\uFF34': 'T',\r\n    '\\u1E6A': 'T',\r\n    '\\u0164': 'T',\r\n    '\\u1E6C': 'T',\r\n    '\\u021A': 'T',\r\n    '\\u0162': 'T',\r\n    '\\u1E70': 'T',\r\n    '\\u1E6E': 'T',\r\n    '\\u0166': 'T',\r\n    '\\u01AC': 'T',\r\n    '\\u01AE': 'T',\r\n    '\\u023E': 'T',\r\n    '\\uA786': 'T',\r\n    '\\uA728': 'TZ',\r\n    '\\u24CA': 'U',\r\n    '\\uFF35': 'U',\r\n    '\\u00D9': 'U',\r\n    '\\u00DA': 'U',\r\n    '\\u00DB': 'U',\r\n    '\\u0168': 'U',\r\n    '\\u1E78': 'U',\r\n    '\\u016A': 'U',\r\n    '\\u1E7A': 'U',\r\n    '\\u016C': 'U',\r\n    '\\u00DC': 'U',\r\n    '\\u01DB': 'U',\r\n    '\\u01D7': 'U',\r\n    '\\u01D5': 'U',\r\n    '\\u01D9': 'U',\r\n    '\\u1EE6': 'U',\r\n    '\\u016E': 'U',\r\n    '\\u0170': 'U',\r\n    '\\u01D3': 'U',\r\n    '\\u0214': 'U',\r\n    '\\u0216': 'U',\r\n    '\\u01AF': 'U',\r\n    '\\u1EEA': 'U',\r\n    '\\u1EE8': 'U',\r\n    '\\u1EEE': 'U',\r\n    '\\u1EEC': 'U',\r\n    '\\u1EF0': 'U',\r\n    '\\u1EE4': 'U',\r\n    '\\u1E72': 'U',\r\n    '\\u0172': 'U',\r\n    '\\u1E76': 'U',\r\n    '\\u1E74': 'U',\r\n    '\\u0244': 'U',\r\n    '\\u24CB': 'V',\r\n    '\\uFF36': 'V',\r\n    '\\u1E7C': 'V',\r\n    '\\u1E7E': 'V',\r\n    '\\u01B2': 'V',\r\n    '\\uA75E': 'V',\r\n    '\\u0245': 'V',\r\n    '\\uA760': 'VY',\r\n    '\\u24CC': 'W',\r\n    '\\uFF37': 'W',\r\n    '\\u1E80': 'W',\r\n    '\\u1E82': 'W',\r\n    '\\u0174': 'W',\r\n    '\\u1E86': 'W',\r\n    '\\u1E84': 'W',\r\n    '\\u1E88': 'W',\r\n    '\\u2C72': 'W',\r\n    '\\u24CD': 'X',\r\n    '\\uFF38': 'X',\r\n    '\\u1E8A': 'X',\r\n    '\\u1E8C': 'X',\r\n    '\\u24CE': 'Y',\r\n    '\\uFF39': 'Y',\r\n    '\\u1EF2': 'Y',\r\n    '\\u00DD': 'Y',\r\n    '\\u0176': 'Y',\r\n    '\\u1EF8': 'Y',\r\n    '\\u0232': 'Y',\r\n    '\\u1E8E': 'Y',\r\n    '\\u0178': 'Y',\r\n    '\\u1EF6': 'Y',\r\n    '\\u1EF4': 'Y',\r\n    '\\u01B3': 'Y',\r\n    '\\u024E': 'Y',\r\n    '\\u1EFE': 'Y',\r\n    '\\u24CF': 'Z',\r\n    '\\uFF3A': 'Z',\r\n    '\\u0179': 'Z',\r\n    '\\u1E90': 'Z',\r\n    '\\u017B': 'Z',\r\n    '\\u017D': 'Z',\r\n    '\\u1E92': 'Z',\r\n    '\\u1E94': 'Z',\r\n    '\\u01B5': 'Z',\r\n    '\\u0224': 'Z',\r\n    '\\u2C7F': 'Z',\r\n    '\\u2C6B': 'Z',\r\n    '\\uA762': 'Z',\r\n    '\\u24D0': 'a',\r\n    '\\uFF41': 'a',\r\n    '\\u1E9A': 'a',\r\n    '\\u00E0': 'a',\r\n    '\\u00E1': 'a',\r\n    '\\u00E2': 'a',\r\n    '\\u1EA7': 'a',\r\n    '\\u1EA5': 'a',\r\n    '\\u1EAB': 'a',\r\n    '\\u1EA9': 'a',\r\n    '\\u00E3': 'a',\r\n    '\\u0101': 'a',\r\n    '\\u0103': 'a',\r\n    '\\u1EB1': 'a',\r\n    '\\u1EAF': 'a',\r\n    '\\u1EB5': 'a',\r\n    '\\u1EB3': 'a',\r\n    '\\u0227': 'a',\r\n    '\\u01E1': 'a',\r\n    '\\u00E4': 'a',\r\n    '\\u01DF': 'a',\r\n    '\\u1EA3': 'a',\r\n    '\\u00E5': 'a',\r\n    '\\u01FB': 'a',\r\n    '\\u01CE': 'a',\r\n    '\\u0201': 'a',\r\n    '\\u0203': 'a',\r\n    '\\u1EA1': 'a',\r\n    '\\u1EAD': 'a',\r\n    '\\u1EB7': 'a',\r\n    '\\u1E01': 'a',\r\n    '\\u0105': 'a',\r\n    '\\u2C65': 'a',\r\n    '\\u0250': 'a',\r\n    '\\uA733': 'aa',\r\n    '\\u00E6': 'ae',\r\n    '\\u01FD': 'ae',\r\n    '\\u01E3': 'ae',\r\n    '\\uA735': 'ao',\r\n    '\\uA737': 'au',\r\n    '\\uA739': 'av',\r\n    '\\uA73B': 'av',\r\n    '\\uA73D': 'ay',\r\n    '\\u24D1': 'b',\r\n    '\\uFF42': 'b',\r\n    '\\u1E03': 'b',\r\n    '\\u1E05': 'b',\r\n    '\\u1E07': 'b',\r\n    '\\u0180': 'b',\r\n    '\\u0183': 'b',\r\n    '\\u0253': 'b',\r\n    '\\u24D2': 'c',\r\n    '\\uFF43': 'c',\r\n    '\\u0107': 'c',\r\n    '\\u0109': 'c',\r\n    '\\u010B': 'c',\r\n    '\\u010D': 'c',\r\n    '\\u00E7': 'c',\r\n    '\\u1E09': 'c',\r\n    '\\u0188': 'c',\r\n    '\\u023C': 'c',\r\n    '\\uA73F': 'c',\r\n    '\\u2184': 'c',\r\n    '\\u24D3': 'd',\r\n    '\\uFF44': 'd',\r\n    '\\u1E0B': 'd',\r\n    '\\u010F': 'd',\r\n    '\\u1E0D': 'd',\r\n    '\\u1E11': 'd',\r\n    '\\u1E13': 'd',\r\n    '\\u1E0F': 'd',\r\n    '\\u0111': 'd',\r\n    '\\u018C': 'd',\r\n    '\\u0256': 'd',\r\n    '\\u0257': 'd',\r\n    '\\uA77A': 'd',\r\n    '\\u01F3': 'dz',\r\n    '\\u01C6': 'dz',\r\n    '\\u24D4': 'e',\r\n    '\\uFF45': 'e',\r\n    '\\u00E8': 'e',\r\n    '\\u00E9': 'e',\r\n    '\\u00EA': 'e',\r\n    '\\u1EC1': 'e',\r\n    '\\u1EBF': 'e',\r\n    '\\u1EC5': 'e',\r\n    '\\u1EC3': 'e',\r\n    '\\u1EBD': 'e',\r\n    '\\u0113': 'e',\r\n    '\\u1E15': 'e',\r\n    '\\u1E17': 'e',\r\n    '\\u0115': 'e',\r\n    '\\u0117': 'e',\r\n    '\\u00EB': 'e',\r\n    '\\u1EBB': 'e',\r\n    '\\u011B': 'e',\r\n    '\\u0205': 'e',\r\n    '\\u0207': 'e',\r\n    '\\u1EB9': 'e',\r\n    '\\u1EC7': 'e',\r\n    '\\u0229': 'e',\r\n    '\\u1E1D': 'e',\r\n    '\\u0119': 'e',\r\n    '\\u1E19': 'e',\r\n    '\\u1E1B': 'e',\r\n    '\\u0247': 'e',\r\n    '\\u025B': 'e',\r\n    '\\u01DD': 'e',\r\n    '\\u24D5': 'f',\r\n    '\\uFF46': 'f',\r\n    '\\u1E1F': 'f',\r\n    '\\u0192': 'f',\r\n    '\\uA77C': 'f',\r\n    '\\u24D6': 'g',\r\n    '\\uFF47': 'g',\r\n    '\\u01F5': 'g',\r\n    '\\u011D': 'g',\r\n    '\\u1E21': 'g',\r\n    '\\u011F': 'g',\r\n    '\\u0121': 'g',\r\n    '\\u01E7': 'g',\r\n    '\\u0123': 'g',\r\n    '\\u01E5': 'g',\r\n    '\\u0260': 'g',\r\n    '\\uA7A1': 'g',\r\n    '\\u1D79': 'g',\r\n    '\\uA77F': 'g',\r\n    '\\u24D7': 'h',\r\n    '\\uFF48': 'h',\r\n    '\\u0125': 'h',\r\n    '\\u1E23': 'h',\r\n    '\\u1E27': 'h',\r\n    '\\u021F': 'h',\r\n    '\\u1E25': 'h',\r\n    '\\u1E29': 'h',\r\n    '\\u1E2B': 'h',\r\n    '\\u1E96': 'h',\r\n    '\\u0127': 'h',\r\n    '\\u2C68': 'h',\r\n    '\\u2C76': 'h',\r\n    '\\u0265': 'h',\r\n    '\\u0195': 'hv',\r\n    '\\u24D8': 'i',\r\n    '\\uFF49': 'i',\r\n    '\\u00EC': 'i',\r\n    '\\u00ED': 'i',\r\n    '\\u00EE': 'i',\r\n    '\\u0129': 'i',\r\n    '\\u012B': 'i',\r\n    '\\u012D': 'i',\r\n    '\\u00EF': 'i',\r\n    '\\u1E2F': 'i',\r\n    '\\u1EC9': 'i',\r\n    '\\u01D0': 'i',\r\n    '\\u0209': 'i',\r\n    '\\u020B': 'i',\r\n    '\\u1ECB': 'i',\r\n    '\\u012F': 'i',\r\n    '\\u1E2D': 'i',\r\n    '\\u0268': 'i',\r\n    '\\u0131': 'i',\r\n    '\\u24D9': 'j',\r\n    '\\uFF4A': 'j',\r\n    '\\u0135': 'j',\r\n    '\\u01F0': 'j',\r\n    '\\u0249': 'j',\r\n    '\\u24DA': 'k',\r\n    '\\uFF4B': 'k',\r\n    '\\u1E31': 'k',\r\n    '\\u01E9': 'k',\r\n    '\\u1E33': 'k',\r\n    '\\u0137': 'k',\r\n    '\\u1E35': 'k',\r\n    '\\u0199': 'k',\r\n    '\\u2C6A': 'k',\r\n    '\\uA741': 'k',\r\n    '\\uA743': 'k',\r\n    '\\uA745': 'k',\r\n    '\\uA7A3': 'k',\r\n    '\\u24DB': 'l',\r\n    '\\uFF4C': 'l',\r\n    '\\u0140': 'l',\r\n    '\\u013A': 'l',\r\n    '\\u013E': 'l',\r\n    '\\u1E37': 'l',\r\n    '\\u1E39': 'l',\r\n    '\\u013C': 'l',\r\n    '\\u1E3D': 'l',\r\n    '\\u1E3B': 'l',\r\n    '\\u017F': 'l',\r\n    '\\u0142': 'l',\r\n    '\\u019A': 'l',\r\n    '\\u026B': 'l',\r\n    '\\u2C61': 'l',\r\n    '\\uA749': 'l',\r\n    '\\uA781': 'l',\r\n    '\\uA747': 'l',\r\n    '\\u01C9': 'lj',\r\n    '\\u24DC': 'm',\r\n    '\\uFF4D': 'm',\r\n    '\\u1E3F': 'm',\r\n    '\\u1E41': 'm',\r\n    '\\u1E43': 'm',\r\n    '\\u0271': 'm',\r\n    '\\u026F': 'm',\r\n    '\\u24DD': 'n',\r\n    '\\uFF4E': 'n',\r\n    '\\u01F9': 'n',\r\n    '\\u0144': 'n',\r\n    '\\u00F1': 'n',\r\n    '\\u1E45': 'n',\r\n    '\\u0148': 'n',\r\n    '\\u1E47': 'n',\r\n    '\\u0146': 'n',\r\n    '\\u1E4B': 'n',\r\n    '\\u1E49': 'n',\r\n    '\\u019E': 'n',\r\n    '\\u0272': 'n',\r\n    '\\u0149': 'n',\r\n    '\\uA791': 'n',\r\n    '\\uA7A5': 'n',\r\n    '\\u01CC': 'nj',\r\n    '\\u24DE': 'o',\r\n    '\\uFF4F': 'o',\r\n    '\\u00F2': 'o',\r\n    '\\u00F3': 'o',\r\n    '\\u00F4': 'o',\r\n    '\\u1ED3': 'o',\r\n    '\\u1ED1': 'o',\r\n    '\\u1ED7': 'o',\r\n    '\\u1ED5': 'o',\r\n    '\\u00F5': 'o',\r\n    '\\u1E4D': 'o',\r\n    '\\u022D': 'o',\r\n    '\\u1E4F': 'o',\r\n    '\\u014D': 'o',\r\n    '\\u1E51': 'o',\r\n    '\\u1E53': 'o',\r\n    '\\u014F': 'o',\r\n    '\\u022F': 'o',\r\n    '\\u0231': 'o',\r\n    '\\u00F6': 'o',\r\n    '\\u022B': 'o',\r\n    '\\u1ECF': 'o',\r\n    '\\u0151': 'o',\r\n    '\\u01D2': 'o',\r\n    '\\u020D': 'o',\r\n    '\\u020F': 'o',\r\n    '\\u01A1': 'o',\r\n    '\\u1EDD': 'o',\r\n    '\\u1EDB': 'o',\r\n    '\\u1EE1': 'o',\r\n    '\\u1EDF': 'o',\r\n    '\\u1EE3': 'o',\r\n    '\\u1ECD': 'o',\r\n    '\\u1ED9': 'o',\r\n    '\\u01EB': 'o',\r\n    '\\u01ED': 'o',\r\n    '\\u00F8': 'o',\r\n    '\\u01FF': 'o',\r\n    '\\u0254': 'o',\r\n    '\\uA74B': 'o',\r\n    '\\uA74D': 'o',\r\n    '\\u0275': 'o',\r\n    '\\u01A3': 'oi',\r\n    '\\u0223': 'ou',\r\n    '\\uA74F': 'oo',\r\n    '\\u24DF': 'p',\r\n    '\\uFF50': 'p',\r\n    '\\u1E55': 'p',\r\n    '\\u1E57': 'p',\r\n    '\\u01A5': 'p',\r\n    '\\u1D7D': 'p',\r\n    '\\uA751': 'p',\r\n    '\\uA753': 'p',\r\n    '\\uA755': 'p',\r\n    '\\u24E0': 'q',\r\n    '\\uFF51': 'q',\r\n    '\\u024B': 'q',\r\n    '\\uA757': 'q',\r\n    '\\uA759': 'q',\r\n    '\\u24E1': 'r',\r\n    '\\uFF52': 'r',\r\n    '\\u0155': 'r',\r\n    '\\u1E59': 'r',\r\n    '\\u0159': 'r',\r\n    '\\u0211': 'r',\r\n    '\\u0213': 'r',\r\n    '\\u1E5B': 'r',\r\n    '\\u1E5D': 'r',\r\n    '\\u0157': 'r',\r\n    '\\u1E5F': 'r',\r\n    '\\u024D': 'r',\r\n    '\\u027D': 'r',\r\n    '\\uA75B': 'r',\r\n    '\\uA7A7': 'r',\r\n    '\\uA783': 'r',\r\n    '\\u24E2': 's',\r\n    '\\uFF53': 's',\r\n    '\\u00DF': 's',\r\n    '\\u015B': 's',\r\n    '\\u1E65': 's',\r\n    '\\u015D': 's',\r\n    '\\u1E61': 's',\r\n    '\\u0161': 's',\r\n    '\\u1E67': 's',\r\n    '\\u1E63': 's',\r\n    '\\u1E69': 's',\r\n    '\\u0219': 's',\r\n    '\\u015F': 's',\r\n    '\\u023F': 's',\r\n    '\\uA7A9': 's',\r\n    '\\uA785': 's',\r\n    '\\u1E9B': 's',\r\n    '\\u24E3': 't',\r\n    '\\uFF54': 't',\r\n    '\\u1E6B': 't',\r\n    '\\u1E97': 't',\r\n    '\\u0165': 't',\r\n    '\\u1E6D': 't',\r\n    '\\u021B': 't',\r\n    '\\u0163': 't',\r\n    '\\u1E71': 't',\r\n    '\\u1E6F': 't',\r\n    '\\u0167': 't',\r\n    '\\u01AD': 't',\r\n    '\\u0288': 't',\r\n    '\\u2C66': 't',\r\n    '\\uA787': 't',\r\n    '\\uA729': 'tz',\r\n    '\\u24E4': 'u',\r\n    '\\uFF55': 'u',\r\n    '\\u00F9': 'u',\r\n    '\\u00FA': 'u',\r\n    '\\u00FB': 'u',\r\n    '\\u0169': 'u',\r\n    '\\u1E79': 'u',\r\n    '\\u016B': 'u',\r\n    '\\u1E7B': 'u',\r\n    '\\u016D': 'u',\r\n    '\\u00FC': 'u',\r\n    '\\u01DC': 'u',\r\n    '\\u01D8': 'u',\r\n    '\\u01D6': 'u',\r\n    '\\u01DA': 'u',\r\n    '\\u1EE7': 'u',\r\n    '\\u016F': 'u',\r\n    '\\u0171': 'u',\r\n    '\\u01D4': 'u',\r\n    '\\u0215': 'u',\r\n    '\\u0217': 'u',\r\n    '\\u01B0': 'u',\r\n    '\\u1EEB': 'u',\r\n    '\\u1EE9': 'u',\r\n    '\\u1EEF': 'u',\r\n    '\\u1EED': 'u',\r\n    '\\u1EF1': 'u',\r\n    '\\u1EE5': 'u',\r\n    '\\u1E73': 'u',\r\n    '\\u0173': 'u',\r\n    '\\u1E77': 'u',\r\n    '\\u1E75': 'u',\r\n    '\\u0289': 'u',\r\n    '\\u24E5': 'v',\r\n    '\\uFF56': 'v',\r\n    '\\u1E7D': 'v',\r\n    '\\u1E7F': 'v',\r\n    '\\u028B': 'v',\r\n    '\\uA75F': 'v',\r\n    '\\u028C': 'v',\r\n    '\\uA761': 'vy',\r\n    '\\u24E6': 'w',\r\n    '\\uFF57': 'w',\r\n    '\\u1E81': 'w',\r\n    '\\u1E83': 'w',\r\n    '\\u0175': 'w',\r\n    '\\u1E87': 'w',\r\n    '\\u1E85': 'w',\r\n    '\\u1E98': 'w',\r\n    '\\u1E89': 'w',\r\n    '\\u2C73': 'w',\r\n    '\\u24E7': 'x',\r\n    '\\uFF58': 'x',\r\n    '\\u1E8B': 'x',\r\n    '\\u1E8D': 'x',\r\n    '\\u24E8': 'y',\r\n    '\\uFF59': 'y',\r\n    '\\u1EF3': 'y',\r\n    '\\u00FD': 'y',\r\n    '\\u0177': 'y',\r\n    '\\u1EF9': 'y',\r\n    '\\u0233': 'y',\r\n    '\\u1E8F': 'y',\r\n    '\\u00FF': 'y',\r\n    '\\u1EF7': 'y',\r\n    '\\u1E99': 'y',\r\n    '\\u1EF5': 'y',\r\n    '\\u01B4': 'y',\r\n    '\\u024F': 'y',\r\n    '\\u1EFF': 'y',\r\n    '\\u24E9': 'z',\r\n    '\\uFF5A': 'z',\r\n    '\\u017A': 'z',\r\n    '\\u1E91': 'z',\r\n    '\\u017C': 'z',\r\n    '\\u017E': 'z',\r\n    '\\u1E93': 'z',\r\n    '\\u1E95': 'z',\r\n    '\\u01B6': 'z',\r\n    '\\u0225': 'z',\r\n    '\\u0240': 'z',\r\n    '\\u2C6C': 'z',\r\n    '\\uA763': 'z',\r\n    '\\u0386': '\\u0391',\r\n    '\\u0388': '\\u0395',\r\n    '\\u0389': '\\u0397',\r\n    '\\u038A': '\\u0399',\r\n    '\\u03AA': '\\u0399',\r\n    '\\u038C': '\\u039F',\r\n    '\\u038E': '\\u03A5',\r\n    '\\u03AB': '\\u03A5',\r\n    '\\u038F': '\\u03A9',\r\n    '\\u03AC': '\\u03B1',\r\n    '\\u03AD': '\\u03B5',\r\n    '\\u03AE': '\\u03B7',\r\n    '\\u03AF': '\\u03B9',\r\n    '\\u03CA': '\\u03B9',\r\n    '\\u0390': '\\u03B9',\r\n    '\\u03CC': '\\u03BF',\r\n    '\\u03CD': '\\u03C5',\r\n    '\\u03CB': '\\u03C5',\r\n    '\\u03B0': '\\u03C5',\r\n    '\\u03C9': '\\u03C9',\r\n    '\\u03C2': '\\u03C3'\r\n  };\r\n\r\n  return diacritics;\r\n});\r\n\nS2.define('select2/data/base',[\r\n  '../utils'\r\n], function (Utils) {\r\n  function BaseAdapter ($element, options) {\r\n    BaseAdapter.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(BaseAdapter, Utils.Observable);\r\n\r\n  BaseAdapter.prototype.current = function (callback) {\r\n    throw new Error('The `current` method must be defined in child classes.');\r\n  };\r\n\r\n  BaseAdapter.prototype.query = function (params, callback) {\r\n    throw new Error('The `query` method must be defined in child classes.');\r\n  };\r\n\r\n  BaseAdapter.prototype.bind = function (container, $container) {\r\n    // Can be implemented in subclasses\r\n  };\r\n\r\n  BaseAdapter.prototype.destroy = function () {\r\n    // Can be implemented in subclasses\r\n  };\r\n\r\n  BaseAdapter.prototype.generateResultId = function (container, data) {\r\n    var id = container.id + '-result-';\r\n\r\n    id += Utils.generateChars(4);\r\n\r\n    if (data.id != null) {\r\n      id += '-' + data.id.toString();\r\n    } else {\r\n      id += '-' + Utils.generateChars(4);\r\n    }\r\n    return id;\r\n  };\r\n\r\n  return BaseAdapter;\r\n});\r\n\nS2.define('select2/data/select',[\r\n  './base',\r\n  '../utils',\r\n  'jquery'\r\n], function (BaseAdapter, Utils, $) {\r\n  function SelectAdapter ($element, options) {\r\n    this.$element = $element;\r\n    this.options = options;\r\n\r\n    SelectAdapter.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(SelectAdapter, BaseAdapter);\r\n\r\n  SelectAdapter.prototype.current = function (callback) {\r\n    var data = [];\r\n    var self = this;\r\n\r\n    this.$element.find(':selected').each(function () {\r\n      var $option = $(this);\r\n\r\n      var option = self.item($option);\r\n\r\n      data.push(option);\r\n    });\r\n\r\n    callback(data);\r\n  };\r\n\r\n  SelectAdapter.prototype.select = function (data) {\r\n    var self = this;\r\n\r\n    data.selected = true;\r\n\r\n    // If data.element is a DOM node, use it instead\r\n    if ($(data.element).is('option')) {\r\n      data.element.selected = true;\r\n\r\n      this.$element.trigger('change');\r\n\r\n      return;\r\n    }\r\n\r\n    if (this.$element.prop('multiple')) {\r\n      this.current(function (currentData) {\r\n        var val = [];\r\n\r\n        data = [data];\r\n        data.push.apply(data, currentData);\r\n\r\n        for (var d = 0; d < data.length; d++) {\r\n          var id = data[d].id;\r\n\r\n          if ($.inArray(id, val) === -1) {\r\n            val.push(id);\r\n          }\r\n        }\r\n\r\n        self.$element.val(val);\r\n        self.$element.trigger('change');\r\n      });\r\n    } else {\r\n      var val = data.id;\r\n\r\n      this.$element.val(val);\r\n      this.$element.trigger('change');\r\n    }\r\n  };\r\n\r\n  SelectAdapter.prototype.unselect = function (data) {\r\n    var self = this;\r\n\r\n    if (!this.$element.prop('multiple')) {\r\n      return;\r\n    }\r\n\r\n    data.selected = false;\r\n\r\n    if ($(data.element).is('option')) {\r\n      data.element.selected = false;\r\n\r\n      this.$element.trigger('change');\r\n\r\n      return;\r\n    }\r\n\r\n    this.current(function (currentData) {\r\n      var val = [];\r\n\r\n      for (var d = 0; d < currentData.length; d++) {\r\n        var id = currentData[d].id;\r\n\r\n        if (id !== data.id && $.inArray(id, val) === -1) {\r\n          val.push(id);\r\n        }\r\n      }\r\n\r\n      self.$element.val(val);\r\n\r\n      self.$element.trigger('change');\r\n    });\r\n  };\r\n\r\n  SelectAdapter.prototype.bind = function (container, $container) {\r\n    var self = this;\r\n\r\n    this.container = container;\r\n\r\n    container.on('select', function (params) {\r\n      self.select(params.data);\r\n    });\r\n\r\n    container.on('unselect', function (params) {\r\n      self.unselect(params.data);\r\n    });\r\n  };\r\n\r\n  SelectAdapter.prototype.destroy = function () {\r\n    // Remove anything added to child elements\r\n    this.$element.find('*').each(function () {\r\n      // Remove any custom data set by Select2\r\n      $.removeData(this, 'data');\r\n    });\r\n  };\r\n\r\n  SelectAdapter.prototype.query = function (params, callback) {\r\n    var data = [];\r\n    var self = this;\r\n\r\n    var $options = this.$element.children();\r\n\r\n    $options.each(function () {\r\n      var $option = $(this);\r\n\r\n      if (!$option.is('option') && !$option.is('optgroup')) {\r\n        return;\r\n      }\r\n\r\n      var option = self.item($option);\r\n\r\n      var matches = self.matches(params, option);\r\n\r\n      if (matches !== null) {\r\n        data.push(matches);\r\n      }\r\n    });\r\n\r\n    callback({\r\n      results: data\r\n    });\r\n  };\r\n\r\n  SelectAdapter.prototype.addOptions = function ($options) {\r\n    Utils.appendMany(this.$element, $options);\r\n  };\r\n\r\n  SelectAdapter.prototype.option = function (data) {\r\n    var option;\r\n\r\n    if (data.children) {\r\n      option = document.createElement('optgroup');\r\n      option.label = data.text;\r\n    } else {\r\n      option = document.createElement('option');\r\n\r\n      if (option.textContent !== undefined) {\r\n        option.textContent = data.text;\r\n      } else {\r\n        option.innerText = data.text;\r\n      }\r\n    }\r\n\r\n    if (data.id) {\r\n      option.value = data.id;\r\n    }\r\n\r\n    if (data.disabled) {\r\n      option.disabled = true;\r\n    }\r\n\r\n    if (data.selected) {\r\n      option.selected = true;\r\n    }\r\n\r\n    if (data.title) {\r\n      option.title = data.title;\r\n    }\r\n\r\n    var $option = $(option);\r\n\r\n    var normalizedData = this._normalizeItem(data);\r\n    normalizedData.element = option;\r\n\r\n    // Override the option's data with the combined data\r\n    $.data(option, 'data', normalizedData);\r\n\r\n    return $option;\r\n  };\r\n\r\n  SelectAdapter.prototype.item = function ($option) {\r\n    var data = {};\r\n\r\n    data = $.data($option[0], 'data');\r\n\r\n    if (data != null) {\r\n      return data;\r\n    }\r\n\r\n    if ($option.is('option')) {\r\n      data = {\r\n        id: $option.val(),\r\n        text: $option.text(),\r\n        disabled: $option.prop('disabled'),\r\n        selected: $option.prop('selected'),\r\n        title: $option.prop('title')\r\n      };\r\n    } else if ($option.is('optgroup')) {\r\n      data = {\r\n        text: $option.prop('label'),\r\n        children: [],\r\n        title: $option.prop('title')\r\n      };\r\n\r\n      var $children = $option.children('option');\r\n      var children = [];\r\n\r\n      for (var c = 0; c < $children.length; c++) {\r\n        var $child = $($children[c]);\r\n\r\n        var child = this.item($child);\r\n\r\n        children.push(child);\r\n      }\r\n\r\n      data.children = children;\r\n    }\r\n\r\n    data = this._normalizeItem(data);\r\n    data.element = $option[0];\r\n\r\n    $.data($option[0], 'data', data);\r\n\r\n    return data;\r\n  };\r\n\r\n  SelectAdapter.prototype._normalizeItem = function (item) {\r\n    if (!$.isPlainObject(item)) {\r\n      item = {\r\n        id: item,\r\n        text: item\r\n      };\r\n    }\r\n\r\n    item = $.extend({}, {\r\n      text: ''\r\n    }, item);\r\n\r\n    var defaults = {\r\n      selected: false,\r\n      disabled: false\r\n    };\r\n\r\n    if (item.id != null) {\r\n      item.id = item.id.toString();\r\n    }\r\n\r\n    if (item.text != null) {\r\n      item.text = item.text.toString();\r\n    }\r\n\r\n    if (item._resultId == null && item.id && this.container != null) {\r\n      item._resultId = this.generateResultId(this.container, item);\r\n    }\r\n\r\n    return $.extend({}, defaults, item);\r\n  };\r\n\r\n  SelectAdapter.prototype.matches = function (params, data) {\r\n    var matcher = this.options.get('matcher');\r\n\r\n    return matcher(params, data);\r\n  };\r\n\r\n  return SelectAdapter;\r\n});\r\n\nS2.define('select2/data/array',[\r\n  './select',\r\n  '../utils',\r\n  'jquery'\r\n], function (SelectAdapter, Utils, $) {\r\n  function ArrayAdapter ($element, options) {\r\n    var data = options.get('data') || [];\r\n\r\n    ArrayAdapter.__super__.constructor.call(this, $element, options);\r\n\r\n    this.addOptions(this.convertToOptions(data));\r\n  }\r\n\r\n  Utils.Extend(ArrayAdapter, SelectAdapter);\r\n\r\n  ArrayAdapter.prototype.select = function (data) {\r\n    var $option = this.$element.find('option').filter(function (i, elm) {\r\n      return elm.value == data.id.toString();\r\n    });\r\n\r\n    if ($option.length === 0) {\r\n      $option = this.option(data);\r\n\r\n      this.addOptions($option);\r\n    }\r\n\r\n    ArrayAdapter.__super__.select.call(this, data);\r\n  };\r\n\r\n  ArrayAdapter.prototype.convertToOptions = function (data) {\r\n    var self = this;\r\n\r\n    var $existing = this.$element.find('option');\r\n    var existingIds = $existing.map(function () {\r\n      return self.item($(this)).id;\r\n    }).get();\r\n\r\n    var $options = [];\r\n\r\n    // Filter out all items except for the one passed in the argument\r\n    function onlyItem (item) {\r\n      return function () {\r\n        return $(this).val() == item.id;\r\n      };\r\n    }\r\n\r\n    for (var d = 0; d < data.length; d++) {\r\n      var item = this._normalizeItem(data[d]);\r\n\r\n      // Skip items which were pre-loaded, only merge the data\r\n      if ($.inArray(item.id, existingIds) >= 0) {\r\n        var $existingOption = $existing.filter(onlyItem(item));\r\n\r\n        var existingData = this.item($existingOption);\r\n        var newData = $.extend(true, {}, item, existingData);\r\n\r\n        var $newOption = this.option(newData);\r\n\r\n        $existingOption.replaceWith($newOption);\r\n\r\n        continue;\r\n      }\r\n\r\n      var $option = this.option(item);\r\n\r\n      if (item.children) {\r\n        var $children = this.convertToOptions(item.children);\r\n\r\n        Utils.appendMany($option, $children);\r\n      }\r\n\r\n      $options.push($option);\r\n    }\r\n\r\n    return $options;\r\n  };\r\n\r\n  return ArrayAdapter;\r\n});\r\n\nS2.define('select2/data/ajax',[\r\n  './array',\r\n  '../utils',\r\n  'jquery'\r\n], function (ArrayAdapter, Utils, $) {\r\n  function AjaxAdapter ($element, options) {\r\n    this.ajaxOptions = this._applyDefaults(options.get('ajax'));\r\n\r\n    if (this.ajaxOptions.processResults != null) {\r\n      this.processResults = this.ajaxOptions.processResults;\r\n    }\r\n\r\n    AjaxAdapter.__super__.constructor.call(this, $element, options);\r\n  }\r\n\r\n  Utils.Extend(AjaxAdapter, ArrayAdapter);\r\n\r\n  AjaxAdapter.prototype._applyDefaults = function (options) {\r\n    var defaults = {\r\n      data: function (params) {\r\n        return $.extend({}, params, {\r\n          q: params.term\r\n        });\r\n      },\r\n      transport: function (params, success, failure) {\r\n        var $request = $.ajax(params);\r\n\r\n        $request.then(success);\r\n        $request.fail(failure);\r\n\r\n        return $request;\r\n      }\r\n    };\r\n\r\n    return $.extend({}, defaults, options, true);\r\n  };\r\n\r\n  AjaxAdapter.prototype.processResults = function (results) {\r\n    return results;\r\n  };\r\n\r\n  AjaxAdapter.prototype.query = function (params, callback) {\r\n    var matches = [];\r\n    var self = this;\r\n\r\n    if (this._request != null) {\r\n      // JSONP requests cannot always be aborted\r\n      if ($.isFunction(this._request.abort)) {\r\n        this._request.abort();\r\n      }\r\n\r\n      this._request = null;\r\n    }\r\n\r\n    var options = $.extend({\r\n      type: 'GET'\r\n    }, this.ajaxOptions);\r\n\r\n    if (typeof options.url === 'function') {\r\n      options.url = options.url.call(this.$element, params);\r\n    }\r\n\r\n    if (typeof options.data === 'function') {\r\n      options.data = options.data.call(this.$element, params);\r\n    }\r\n\r\n    function request () {\r\n      var $request = options.transport(options, function (data) {\r\n        var results = self.processResults(data, params);\r\n\r\n        if (self.options.get('debug') && window.console && console.error) {\r\n          // Check to make sure that the response included a `results` key.\r\n          if (!results || !results.results || !$.isArray(results.results)) {\r\n            console.error(\r\n              'Select2: The AJAX results did not return an array in the ' +\r\n              '`results` key of the response.'\r\n            );\r\n          }\r\n        }\r\n\r\n        callback(results);\r\n      }, function () {\r\n        // Attempt to detect if a request was aborted\r\n        // Only works if the transport exposes a status property\r\n        if ($request.status && $request.status === '0') {\r\n          return;\r\n        }\r\n\r\n        self.trigger('results:message', {\r\n          message: 'errorLoading'\r\n        });\r\n      });\r\n\r\n      self._request = $request;\r\n    }\r\n\r\n    if (this.ajaxOptions.delay && params.term != null) {\r\n      if (this._queryTimeout) {\r\n        window.clearTimeout(this._queryTimeout);\r\n      }\r\n\r\n      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);\r\n    } else {\r\n      request();\r\n    }\r\n  };\r\n\r\n  return AjaxAdapter;\r\n});\r\n\nS2.define('select2/data/tags',[\r\n  'jquery'\r\n], function ($) {\r\n  function Tags (decorated, $element, options) {\r\n    var tags = options.get('tags');\r\n\r\n    var createTag = options.get('createTag');\r\n\r\n    if (createTag !== undefined) {\r\n      this.createTag = createTag;\r\n    }\r\n\r\n    var insertTag = options.get('insertTag');\r\n\r\n    if (insertTag !== undefined) {\r\n        this.insertTag = insertTag;\r\n    }\r\n\r\n    decorated.call(this, $element, options);\r\n\r\n    if ($.isArray(tags)) {\r\n      for (var t = 0; t < tags.length; t++) {\r\n        var tag = tags[t];\r\n        var item = this._normalizeItem(tag);\r\n\r\n        var $option = this.option(item);\r\n\r\n        this.$element.append($option);\r\n      }\r\n    }\r\n  }\r\n\r\n  Tags.prototype.query = function (decorated, params, callback) {\r\n    var self = this;\r\n\r\n    this._removeOldTags();\r\n\r\n    if (params.term == null || params.page != null) {\r\n      decorated.call(this, params, callback);\r\n      return;\r\n    }\r\n\r\n    function wrapper (obj, child) {\r\n      var data = obj.results;\r\n\r\n      for (var i = 0; i < data.length; i++) {\r\n        var option = data[i];\r\n\r\n        var checkChildren = (\r\n          option.children != null &&\r\n          !wrapper({\r\n            results: option.children\r\n          }, true)\r\n        );\r\n\r\n        var checkText = option.text === params.term;\r\n\r\n        if (checkText || checkChildren) {\r\n          if (child) {\r\n            return false;\r\n          }\r\n\r\n          obj.data = data;\r\n          callback(obj);\r\n\r\n          return;\r\n        }\r\n      }\r\n\r\n      if (child) {\r\n        return true;\r\n      }\r\n\r\n      var tag = self.createTag(params);\r\n\r\n      if (tag != null) {\r\n        var $option = self.option(tag);\r\n        $option.attr('data-select2-tag', true);\r\n\r\n        self.addOptions([$option]);\r\n\r\n        self.insertTag(data, tag);\r\n      }\r\n\r\n      obj.results = data;\r\n\r\n      callback(obj);\r\n    }\r\n\r\n    decorated.call(this, params, wrapper);\r\n  };\r\n\r\n  Tags.prototype.createTag = function (decorated, params) {\r\n    var term = $.trim(params.term);\r\n\r\n    if (term === '') {\r\n      return null;\r\n    }\r\n\r\n    return {\r\n      id: term,\r\n      text: term\r\n    };\r\n  };\r\n\r\n  Tags.prototype.insertTag = function (_, data, tag) {\r\n    data.unshift(tag);\r\n  };\r\n\r\n  Tags.prototype._removeOldTags = function (_) {\r\n    var tag = this._lastTag;\r\n\r\n    var $options = this.$element.find('option[data-select2-tag]');\r\n\r\n    $options.each(function () {\r\n      if (this.selected) {\r\n        return;\r\n      }\r\n\r\n      $(this).remove();\r\n    });\r\n  };\r\n\r\n  return Tags;\r\n});\r\n\nS2.define('select2/data/tokenizer',[\r\n  'jquery'\r\n], function ($) {\r\n  function Tokenizer (decorated, $element, options) {\r\n    var tokenizer = options.get('tokenizer');\r\n\r\n    if (tokenizer !== undefined) {\r\n      this.tokenizer = tokenizer;\r\n    }\r\n\r\n    decorated.call(this, $element, options);\r\n  }\r\n\r\n  Tokenizer.prototype.bind = function (decorated, container, $container) {\r\n    decorated.call(this, container, $container);\r\n\r\n    this.$search =  container.dropdown.$search || container.selection.$search ||\r\n      $container.find('.select2-search__field');\r\n  };\r\n\r\n  Tokenizer.prototype.query = function (decorated, params, callback) {\r\n    var self = this;\r\n\r\n    function createAndSelect (data) {\r\n      // Normalize the data object so we can use it for checks\r\n      var item = self._normalizeItem(data);\r\n\r\n      // Check if the data object already exists as a tag\r\n      // Select it if it doesn't\r\n      var $existingOptions = self.$element.find('option').filter(function () {\r\n        return $(this).val() === item.id;\r\n      });\r\n\r\n      // If an existing option wasn't found for it, create the option\r\n      if (!$existingOptions.length) {\r\n        var $option = self.option(item);\r\n        $option.attr('data-select2-tag', true);\r\n\r\n        self._removeOldTags();\r\n        self.addOptions([$option]);\r\n      }\r\n\r\n      // Select the item, now that we know there is an option for it\r\n      select(item);\r\n    }\r\n\r\n    function select (data) {\r\n      self.trigger('select', {\r\n        data: data\r\n      });\r\n    }\r\n\r\n    params.term = params.term || '';\r\n\r\n    var tokenData = this.tokenizer(params, this.options, createAndSelect);\r\n\r\n    if (tokenData.term !== params.term) {\r\n      // Replace the search term if we have the search box\r\n      if (this.$search.length) {\r\n        this.$search.val(tokenData.term);\r\n        this.$search.focus();\r\n      }\r\n\r\n      params.term = tokenData.term;\r\n    }\r\n\r\n    decorated.call(this, params, callback);\r\n  };\r\n\r\n  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {\r\n    var separators = options.get('tokenSeparators') || [];\r\n    var term = params.term;\r\n    var i = 0;\r\n\r\n    var createTag = this.createTag || function (params) {\r\n      return {\r\n        id: params.term,\r\n        text: params.term\r\n      };\r\n    };\r\n\r\n    while (i < term.length) {\r\n      var termChar = term[i];\r\n\r\n      if ($.inArray(termChar, separators) === -1) {\r\n        i++;\r\n\r\n        continue;\r\n      }\r\n\r\n      var part = term.substr(0, i);\r\n      var partParams = $.extend({}, params, {\r\n        term: part\r\n      });\r\n\r\n      var data = createTag(partParams);\r\n\r\n      if (data == null) {\r\n        i++;\r\n        continue;\r\n      }\r\n\r\n      callback(data);\r\n\r\n      // Reset the term to not include the tokenized portion\r\n      term = term.substr(i + 1) || '';\r\n      i = 0;\r\n    }\r\n\r\n    return {\r\n      term: term\r\n    };\r\n  };\r\n\r\n  return Tokenizer;\r\n});\r\n\nS2.define('select2/data/minimumInputLength',[\r\n\r\n], function () {\r\n  function MinimumInputLength (decorated, $e, options) {\r\n    this.minimumInputLength = options.get('minimumInputLength');\r\n\r\n    decorated.call(this, $e, options);\r\n  }\r\n\r\n  MinimumInputLength.prototype.query = function (decorated, params, callback) {\r\n    params.term = params.term || '';\r\n\r\n    if (params.term.length < this.minimumInputLength) {\r\n      this.trigger('results:message', {\r\n        message: 'inputTooShort',\r\n        args: {\r\n          minimum: this.minimumInputLength,\r\n          input: params.term,\r\n          params: params\r\n        }\r\n      });\r\n\r\n      return;\r\n    }\r\n\r\n    decorated.call(this, params, callback);\r\n  };\r\n\r\n  return MinimumInputLength;\r\n});\r\n\nS2.define('select2/data/maximumInputLength',[\r\n\r\n], function () {\r\n  function MaximumInputLength (decorated, $e, options) {\r\n    this.maximumInputLength = options.get('maximumInputLength');\r\n\r\n    decorated.call(this, $e, options);\r\n  }\r\n\r\n  MaximumInputLength.prototype.query = function (decorated, params, callback) {\r\n    params.term = params.term || '';\r\n\r\n    if (this.maximumInputLength > 0 &&\r\n        params.term.length > this.maximumInputLength) {\r\n      this.trigger('results:message', {\r\n        message: 'inputTooLong',\r\n        args: {\r\n          maximum: this.maximumInputLength,\r\n          input: params.term,\r\n          params: params\r\n        }\r\n      });\r\n\r\n      return;\r\n    }\r\n\r\n    decorated.call(this, params, callback);\r\n  };\r\n\r\n  return MaximumInputLength;\r\n});\r\n\nS2.define('select2/data/maximumSelectionLength',[\r\n\r\n], function (){\r\n  function MaximumSelectionLength (decorated, $e, options) {\r\n    this.maximumSelectionLength = options.get('maximumSelectionLength');\r\n\r\n    decorated.call(this, $e, options);\r\n  }\r\n\r\n  MaximumSelectionLength.prototype.query =\r\n    function (decorated, params, callback) {\r\n      var self = this;\r\n\r\n      this.current(function (currentData) {\r\n        var count = currentData != null ? currentData.length : 0;\r\n        if (self.maximumSelectionLength > 0 &&\r\n          count >= self.maximumSelectionLength) {\r\n          self.trigger('results:message', {\r\n            message: 'maximumSelected',\r\n            args: {\r\n              maximum: self.maximumSelectionLength\r\n            }\r\n          });\r\n          return;\r\n        }\r\n        decorated.call(self, params, callback);\r\n      });\r\n  };\r\n\r\n  return MaximumSelectionLength;\r\n});\r\n\nS2.define('select2/dropdown',[\r\n  'jquery',\r\n  './utils'\r\n], function ($, Utils) {\r\n  function Dropdown ($element, options) {\r\n    this.$element = $element;\r\n    this.options = options;\r\n\r\n    Dropdown.__super__.constructor.call(this);\r\n  }\r\n\r\n  Utils.Extend(Dropdown, Utils.Observable);\r\n\r\n  Dropdown.prototype.render = function () {\r\n    var $dropdown = $(\r\n      '<span class=\"select2-dropdown\">' +\r\n        '<span class=\"select2-results\"></span>' +\r\n      '</span>'\r\n    );\r\n\r\n    $dropdown.attr('dir', this.options.get('dir'));\r\n\r\n    this.$dropdown = $dropdown;\r\n\r\n    return $dropdown;\r\n  };\r\n\r\n  Dropdown.prototype.bind = function () {\r\n    // Should be implemented in subclasses\r\n  };\r\n\r\n  Dropdown.prototype.position = function ($dropdown, $container) {\r\n    // Should be implmented in subclasses\r\n  };\r\n\r\n  Dropdown.prototype.destroy = function () {\r\n    // Remove the dropdown from the DOM\r\n    this.$dropdown.remove();\r\n  };\r\n\r\n  return Dropdown;\r\n});\r\n\nS2.define('select2/dropdown/search',[\r\n  'jquery',\r\n  '../utils'\r\n], function ($, Utils) {\r\n  function Search () { }\r\n\r\n  Search.prototype.render = function (decorated) {\r\n    var $rendered = decorated.call(this);\r\n\r\n    var $search = $(\r\n      '<span class=\"select2-search select2-search--dropdown\">' +\r\n        '<input class=\"select2-search__field\" type=\"search\" tabindex=\"-1\"' +\r\n        ' autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"' +\r\n        ' spellcheck=\"false\" role=\"textbox\" />' +\r\n      '</span>'\r\n    );\r\n\r\n    this.$searchContainer = $search;\r\n    this.$search = $search.find('input');\r\n\r\n    $rendered.prepend($search);\r\n\r\n    return $rendered;\r\n  };\r\n\r\n  Search.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    this.$search.on('keydown', function (evt) {\r\n      self.trigger('keypress', evt);\r\n\r\n      self._keyUpPrevented = evt.isDefaultPrevented();\r\n    });\r\n\r\n    // Workaround for browsers which do not support the `input` event\r\n    // This will prevent double-triggering of events for browsers which support\r\n    // both the `keyup` and `input` events.\r\n    this.$search.on('input', function (evt) {\r\n      // Unbind the duplicated `keyup` event\r\n      $(this).off('keyup');\r\n    });\r\n\r\n    this.$search.on('keyup input', function (evt) {\r\n      self.handleSearch(evt);\r\n    });\r\n\r\n    container.on('open', function () {\r\n      self.$search.attr('tabindex', 0);\r\n\r\n      self.$search.focus();\r\n\r\n      window.setTimeout(function () {\r\n        self.$search.focus();\r\n      }, 0);\r\n    });\r\n\r\n    container.on('close', function () {\r\n      self.$search.attr('tabindex', -1);\r\n\r\n      self.$search.val('');\r\n    });\r\n\r\n    container.on('focus', function () {\r\n      if (container.isOpen()) {\r\n        self.$search.focus();\r\n      }\r\n    });\r\n\r\n    container.on('results:all', function (params) {\r\n      if (params.query.term == null || params.query.term === '') {\r\n        var showSearch = self.showSearch(params);\r\n\r\n        if (showSearch) {\r\n          self.$searchContainer.removeClass('select2-search--hide');\r\n        } else {\r\n          self.$searchContainer.addClass('select2-search--hide');\r\n        }\r\n      }\r\n    });\r\n  };\r\n\r\n  Search.prototype.handleSearch = function (evt) {\r\n    if (!this._keyUpPrevented) {\r\n      var input = this.$search.val();\r\n\r\n      this.trigger('query', {\r\n        term: input\r\n      });\r\n    }\r\n\r\n    this._keyUpPrevented = false;\r\n  };\r\n\r\n  Search.prototype.showSearch = function (_, params) {\r\n    return true;\r\n  };\r\n\r\n  return Search;\r\n});\r\n\nS2.define('select2/dropdown/hidePlaceholder',[\r\n\r\n], function () {\r\n  function HidePlaceholder (decorated, $element, options, dataAdapter) {\r\n    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));\r\n\r\n    decorated.call(this, $element, options, dataAdapter);\r\n  }\r\n\r\n  HidePlaceholder.prototype.append = function (decorated, data) {\r\n    data.results = this.removePlaceholder(data.results);\r\n\r\n    decorated.call(this, data);\r\n  };\r\n\r\n  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {\r\n    if (typeof placeholder === 'string') {\r\n      placeholder = {\r\n        id: '',\r\n        text: placeholder\r\n      };\r\n    }\r\n\r\n    return placeholder;\r\n  };\r\n\r\n  HidePlaceholder.prototype.removePlaceholder = function (_, data) {\r\n    var modifiedData = data.slice(0);\r\n\r\n    for (var d = data.length - 1; d >= 0; d--) {\r\n      var item = data[d];\r\n\r\n      if (this.placeholder.id === item.id) {\r\n        modifiedData.splice(d, 1);\r\n      }\r\n    }\r\n\r\n    return modifiedData;\r\n  };\r\n\r\n  return HidePlaceholder;\r\n});\r\n\nS2.define('select2/dropdown/infiniteScroll',[\r\n  'jquery'\r\n], function ($) {\r\n  function InfiniteScroll (decorated, $element, options, dataAdapter) {\r\n    this.lastParams = {};\r\n\r\n    decorated.call(this, $element, options, dataAdapter);\r\n\r\n    this.$loadingMore = this.createLoadingMore();\r\n    this.loading = false;\r\n  }\r\n\r\n  InfiniteScroll.prototype.append = function (decorated, data) {\r\n    this.$loadingMore.remove();\r\n    this.loading = false;\r\n\r\n    decorated.call(this, data);\r\n\r\n    if (this.showLoadingMore(data)) {\r\n      this.$results.append(this.$loadingMore);\r\n    }\r\n  };\r\n\r\n  InfiniteScroll.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('query', function (params) {\r\n      self.lastParams = params;\r\n      self.loading = true;\r\n    });\r\n\r\n    container.on('query:append', function (params) {\r\n      self.lastParams = params;\r\n      self.loading = true;\r\n    });\r\n\r\n    this.$results.on('scroll', function () {\r\n      var isLoadMoreVisible = $.contains(\r\n        document.documentElement,\r\n        self.$loadingMore[0]\r\n      );\r\n\r\n      if (self.loading || !isLoadMoreVisible) {\r\n        return;\r\n      }\r\n\r\n      var currentOffset = self.$results.offset().top +\r\n        self.$results.outerHeight(false);\r\n      var loadingMoreOffset = self.$loadingMore.offset().top +\r\n        self.$loadingMore.outerHeight(false);\r\n\r\n      if (currentOffset + 50 >= loadingMoreOffset) {\r\n        self.loadMore();\r\n      }\r\n    });\r\n  };\r\n\r\n  InfiniteScroll.prototype.loadMore = function () {\r\n    this.loading = true;\r\n\r\n    var params = $.extend({}, {page: 1}, this.lastParams);\r\n\r\n    params.page++;\r\n\r\n    this.trigger('query:append', params);\r\n  };\r\n\r\n  InfiniteScroll.prototype.showLoadingMore = function (_, data) {\r\n    return data.pagination && data.pagination.more;\r\n  };\r\n\r\n  InfiniteScroll.prototype.createLoadingMore = function () {\r\n    var $option = $(\r\n      '<li ' +\r\n      'class=\"select2-results__option select2-results__option--load-more\"' +\r\n      'role=\"treeitem\" aria-disabled=\"true\"></li>'\r\n    );\r\n\r\n    var message = this.options.get('translations').get('loadingMore');\r\n\r\n    $option.html(message(this.lastParams));\r\n\r\n    return $option;\r\n  };\r\n\r\n  return InfiniteScroll;\r\n});\r\n\nS2.define('select2/dropdown/attachBody',[\r\n  'jquery',\r\n  '../utils'\r\n], function ($, Utils) {\r\n  function AttachBody (decorated, $element, options) {\r\n    this.$dropdownParent = options.get('dropdownParent') || $(document.body);\r\n\r\n    decorated.call(this, $element, options);\r\n  }\r\n\r\n  AttachBody.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    var setupResultsEvents = false;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('open', function () {\r\n      self._showDropdown();\r\n      self._attachPositioningHandler(container);\r\n\r\n      if (!setupResultsEvents) {\r\n        setupResultsEvents = true;\r\n\r\n        container.on('results:all', function () {\r\n          self._positionDropdown();\r\n          self._resizeDropdown();\r\n        });\r\n\r\n        container.on('results:append', function () {\r\n          self._positionDropdown();\r\n          self._resizeDropdown();\r\n        });\r\n      }\r\n    });\r\n\r\n    container.on('close', function () {\r\n      self._hideDropdown();\r\n      self._detachPositioningHandler(container);\r\n    });\r\n\r\n    this.$dropdownContainer.on('mousedown', function (evt) {\r\n      evt.stopPropagation();\r\n    });\r\n  };\r\n\r\n  AttachBody.prototype.destroy = function (decorated) {\r\n    decorated.call(this);\r\n\r\n    this.$dropdownContainer.remove();\r\n  };\r\n\r\n  AttachBody.prototype.position = function (decorated, $dropdown, $container) {\r\n    // Clone all of the container classes\r\n    $dropdown.attr('class', $container.attr('class'));\r\n\r\n    $dropdown.removeClass('select2');\r\n    $dropdown.addClass('select2-container--open');\r\n\r\n    $dropdown.css({\r\n      position: 'absolute',\r\n      top: -999999\r\n    });\r\n\r\n    this.$container = $container;\r\n  };\r\n\r\n  AttachBody.prototype.render = function (decorated) {\r\n    var $container = $('<span></span>');\r\n\r\n    var $dropdown = decorated.call(this);\r\n    $container.append($dropdown);\r\n\r\n    this.$dropdownContainer = $container;\r\n\r\n    return $container;\r\n  };\r\n\r\n  AttachBody.prototype._hideDropdown = function (decorated) {\r\n    this.$dropdownContainer.detach();\r\n  };\r\n\r\n  AttachBody.prototype._attachPositioningHandler =\r\n      function (decorated, container) {\r\n    var self = this;\r\n\r\n    var scrollEvent = 'scroll.select2.' + container.id;\r\n    var resizeEvent = 'resize.select2.' + container.id;\r\n    var orientationEvent = 'orientationchange.select2.' + container.id;\r\n\r\n    var $watchers = this.$container.parents().filter(Utils.hasScroll);\r\n    $watchers.each(function () {\r\n      $(this).data('select2-scroll-position', {\r\n        x: $(this).scrollLeft(),\r\n        y: $(this).scrollTop()\r\n      });\r\n    });\r\n\r\n    $watchers.on(scrollEvent, function (ev) {\r\n      var position = $(this).data('select2-scroll-position');\r\n      $(this).scrollTop(position.y);\r\n    });\r\n\r\n    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,\r\n      function (e) {\r\n      self._positionDropdown();\r\n      self._resizeDropdown();\r\n    });\r\n  };\r\n\r\n  AttachBody.prototype._detachPositioningHandler =\r\n      function (decorated, container) {\r\n    var scrollEvent = 'scroll.select2.' + container.id;\r\n    var resizeEvent = 'resize.select2.' + container.id;\r\n    var orientationEvent = 'orientationchange.select2.' + container.id;\r\n\r\n    var $watchers = this.$container.parents().filter(Utils.hasScroll);\r\n    $watchers.off(scrollEvent);\r\n\r\n    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);\r\n  };\r\n\r\n  AttachBody.prototype._positionDropdown = function () {\r\n    var $window = $(window);\r\n\r\n    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');\r\n    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');\r\n\r\n    var newDirection = null;\r\n\r\n    var offset = this.$container.offset();\r\n\r\n    offset.bottom = offset.top + this.$container.outerHeight(false);\r\n\r\n    var container = {\r\n      height: this.$container.outerHeight(false)\r\n    };\r\n\r\n    container.top = offset.top;\r\n    container.bottom = offset.top + container.height;\r\n\r\n    var dropdown = {\r\n      height: this.$dropdown.outerHeight(false)\r\n    };\r\n\r\n    var viewport = {\r\n      top: $window.scrollTop(),\r\n      bottom: $window.scrollTop() + $window.height()\r\n    };\r\n\r\n    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);\r\n    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);\r\n\r\n    var css = {\r\n      left: offset.left,\r\n      top: container.bottom\r\n    };\r\n\r\n    // Determine what the parent element is to use for calciulating the offset\r\n    var $offsetParent = this.$dropdownParent;\r\n\r\n    // For statically positoned elements, we need to get the element\r\n    // that is determining the offset\r\n    if ($offsetParent.css('position') === 'static') {\r\n      $offsetParent = $offsetParent.offsetParent();\r\n    }\r\n\r\n    var parentOffset = $offsetParent.offset();\r\n\r\n    css.top -= parentOffset.top;\r\n    css.left -= parentOffset.left;\r\n\r\n    if (!isCurrentlyAbove && !isCurrentlyBelow) {\r\n      newDirection = 'below';\r\n    }\r\n\r\n    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {\r\n      newDirection = 'above';\r\n    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {\r\n      newDirection = 'below';\r\n    }\r\n\r\n    if (newDirection == 'above' ||\r\n      (isCurrentlyAbove && newDirection !== 'below')) {\r\n      css.top = container.top - parentOffset.top - dropdown.height;\r\n    }\r\n\r\n    if (newDirection != null) {\r\n      this.$dropdown\r\n        .removeClass('select2-dropdown--below select2-dropdown--above')\r\n        .addClass('select2-dropdown--' + newDirection);\r\n      this.$container\r\n        .removeClass('select2-container--below select2-container--above')\r\n        .addClass('select2-container--' + newDirection);\r\n    }\r\n\r\n    this.$dropdownContainer.css(css);\r\n  };\r\n\r\n  AttachBody.prototype._resizeDropdown = function () {\r\n    var css = {\r\n      width: this.$container.outerWidth(false) + 'px'\r\n    };\r\n\r\n    if (this.options.get('dropdownAutoWidth')) {\r\n      css.minWidth = css.width;\r\n      css.position = 'relative';\r\n      css.width = 'auto';\r\n    }\r\n\r\n    this.$dropdown.css(css);\r\n  };\r\n\r\n  AttachBody.prototype._showDropdown = function (decorated) {\r\n    this.$dropdownContainer.appendTo(this.$dropdownParent);\r\n\r\n    this._positionDropdown();\r\n    this._resizeDropdown();\r\n  };\r\n\r\n  return AttachBody;\r\n});\r\n\nS2.define('select2/dropdown/minimumResultsForSearch',[\r\n\r\n], function () {\r\n  function countResults (data) {\r\n    var count = 0;\r\n\r\n    for (var d = 0; d < data.length; d++) {\r\n      var item = data[d];\r\n\r\n      if (item.children) {\r\n        count += countResults(item.children);\r\n      } else {\r\n        count++;\r\n      }\r\n    }\r\n\r\n    return count;\r\n  }\r\n\r\n  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {\r\n    this.minimumResultsForSearch = options.get('minimumResultsForSearch');\r\n\r\n    if (this.minimumResultsForSearch < 0) {\r\n      this.minimumResultsForSearch = Infinity;\r\n    }\r\n\r\n    decorated.call(this, $element, options, dataAdapter);\r\n  }\r\n\r\n  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {\r\n    if (countResults(params.data.results) < this.minimumResultsForSearch) {\r\n      return false;\r\n    }\r\n\r\n    return decorated.call(this, params);\r\n  };\r\n\r\n  return MinimumResultsForSearch;\r\n});\r\n\nS2.define('select2/dropdown/selectOnClose',[\r\n\r\n], function () {\r\n  function SelectOnClose () { }\r\n\r\n  SelectOnClose.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('close', function (params) {\r\n      self._handleSelectOnClose(params);\r\n    });\r\n  };\r\n\r\n  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {\r\n    if (params && params.originalSelect2Event != null) {\r\n      var event = params.originalSelect2Event;\r\n\r\n      // Don't select an item if the close event was triggered from a select or\r\n      // unselect event\r\n      if (event._type === 'select' || event._type === 'unselect') {\r\n        return;\r\n      }\r\n    }\r\n\r\n    var $highlightedResults = this.getHighlightedResults();\r\n\r\n    // Only select highlighted results\r\n    if ($highlightedResults.length < 1) {\r\n      return;\r\n    }\r\n\r\n    var data = $highlightedResults.data('data');\r\n\r\n    // Don't re-select already selected resulte\r\n    if (\r\n      (data.element != null && data.element.selected) ||\r\n      (data.element == null && data.selected)\r\n    ) {\r\n      return;\r\n    }\r\n\r\n    this.trigger('select', {\r\n        data: data\r\n    });\r\n  };\r\n\r\n  return SelectOnClose;\r\n});\r\n\nS2.define('select2/dropdown/closeOnSelect',[\r\n\r\n], function () {\r\n  function CloseOnSelect () { }\r\n\r\n  CloseOnSelect.prototype.bind = function (decorated, container, $container) {\r\n    var self = this;\r\n\r\n    decorated.call(this, container, $container);\r\n\r\n    container.on('select', function (evt) {\r\n      self._selectTriggered(evt);\r\n    });\r\n\r\n    container.on('unselect', function (evt) {\r\n      self._selectTriggered(evt);\r\n    });\r\n  };\r\n\r\n  CloseOnSelect.prototype._selectTriggered = function (_, evt) {\r\n    var originalEvent = evt.originalEvent;\r\n\r\n    // Don't close if the control key is being held\r\n    if (originalEvent && originalEvent.ctrlKey) {\r\n      return;\r\n    }\r\n\r\n    this.trigger('close', {\r\n      originalEvent: originalEvent,\r\n      originalSelect2Event: evt\r\n    });\r\n  };\r\n\r\n  return CloseOnSelect;\r\n});\r\n\nS2.define('select2/i18n/en',[],function () {\r\n  // English\r\n  return {\r\n    errorLoading: function () {\r\n      return 'The results could not be loaded.';\r\n    },\r\n    inputTooLong: function (args) {\r\n      var overChars = args.input.length - args.maximum;\r\n\r\n      var message = 'Please delete ' + overChars + ' character';\r\n\r\n      if (overChars != 1) {\r\n        message += 's';\r\n      }\r\n\r\n      return message;\r\n    },\r\n    inputTooShort: function (args) {\r\n      var remainingChars = args.minimum - args.input.length;\r\n\r\n      var message = 'Please enter ' + remainingChars + ' or more characters';\r\n\r\n      return message;\r\n    },\r\n    loadingMore: function () {\r\n      return 'Loading more results…';\r\n    },\r\n    maximumSelected: function (args) {\r\n      var message = 'You can only select ' + args.maximum + ' item';\r\n\r\n      if (args.maximum != 1) {\r\n        message += 's';\r\n      }\r\n\r\n      return message;\r\n    },\r\n    noResults: function () {\r\n      return 'No results found';\r\n    },\r\n    searching: function () {\r\n      return 'Searching…';\r\n    }\r\n  };\r\n});\r\n\nS2.define('select2/defaults',[\r\n  'jquery',\r\n  'require',\r\n\r\n  './results',\r\n\r\n  './selection/single',\r\n  './selection/multiple',\r\n  './selection/placeholder',\r\n  './selection/allowClear',\r\n  './selection/search',\r\n  './selection/eventRelay',\r\n\r\n  './utils',\r\n  './translation',\r\n  './diacritics',\r\n\r\n  './data/select',\r\n  './data/array',\r\n  './data/ajax',\r\n  './data/tags',\r\n  './data/tokenizer',\r\n  './data/minimumInputLength',\r\n  './data/maximumInputLength',\r\n  './data/maximumSelectionLength',\r\n\r\n  './dropdown',\r\n  './dropdown/search',\r\n  './dropdown/hidePlaceholder',\r\n  './dropdown/infiniteScroll',\r\n  './dropdown/attachBody',\r\n  './dropdown/minimumResultsForSearch',\r\n  './dropdown/selectOnClose',\r\n  './dropdown/closeOnSelect',\r\n\r\n  './i18n/en'\r\n], function ($, require,\r\n\r\n             ResultsList,\r\n\r\n             SingleSelection, MultipleSelection, Placeholder, AllowClear,\r\n             SelectionSearch, EventRelay,\r\n\r\n             Utils, Translation, DIACRITICS,\r\n\r\n             SelectData, ArrayData, AjaxData, Tags, Tokenizer,\r\n             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,\r\n\r\n             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,\r\n             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,\r\n\r\n             EnglishTranslation) {\r\n  function Defaults () {\r\n    this.reset();\r\n  }\r\n\r\n  Defaults.prototype.apply = function (options) {\r\n    options = $.extend(true, {}, this.defaults, options);\r\n\r\n    if (options.dataAdapter == null) {\r\n      if (options.ajax != null) {\r\n        options.dataAdapter = AjaxData;\r\n      } else if (options.data != null) {\r\n        options.dataAdapter = ArrayData;\r\n      } else {\r\n        options.dataAdapter = SelectData;\r\n      }\r\n\r\n      if (options.minimumInputLength > 0) {\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          MinimumInputLength\r\n        );\r\n      }\r\n\r\n      if (options.maximumInputLength > 0) {\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          MaximumInputLength\r\n        );\r\n      }\r\n\r\n      if (options.maximumSelectionLength > 0) {\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          MaximumSelectionLength\r\n        );\r\n      }\r\n\r\n      if (options.tags) {\r\n        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);\r\n      }\r\n\r\n      if (options.tokenSeparators != null || options.tokenizer != null) {\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          Tokenizer\r\n        );\r\n      }\r\n\r\n      if (options.query != null) {\r\n        var Query = require(options.amdBase + 'compat/query');\r\n\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          Query\r\n        );\r\n      }\r\n\r\n      if (options.initSelection != null) {\r\n        var InitSelection = require(options.amdBase + 'compat/initSelection');\r\n\r\n        options.dataAdapter = Utils.Decorate(\r\n          options.dataAdapter,\r\n          InitSelection\r\n        );\r\n      }\r\n    }\r\n\r\n    if (options.resultsAdapter == null) {\r\n      options.resultsAdapter = ResultsList;\r\n\r\n      if (options.ajax != null) {\r\n        options.resultsAdapter = Utils.Decorate(\r\n          options.resultsAdapter,\r\n          InfiniteScroll\r\n        );\r\n      }\r\n\r\n      if (options.placeholder != null) {\r\n        options.resultsAdapter = Utils.Decorate(\r\n          options.resultsAdapter,\r\n          HidePlaceholder\r\n        );\r\n      }\r\n\r\n      if (options.selectOnClose) {\r\n        options.resultsAdapter = Utils.Decorate(\r\n          options.resultsAdapter,\r\n          SelectOnClose\r\n        );\r\n      }\r\n    }\r\n\r\n    if (options.dropdownAdapter == null) {\r\n      if (options.multiple) {\r\n        options.dropdownAdapter = Dropdown;\r\n      } else {\r\n        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);\r\n\r\n        options.dropdownAdapter = SearchableDropdown;\r\n      }\r\n\r\n      if (options.minimumResultsForSearch !== 0) {\r\n        options.dropdownAdapter = Utils.Decorate(\r\n          options.dropdownAdapter,\r\n          MinimumResultsForSearch\r\n        );\r\n      }\r\n\r\n      if (options.closeOnSelect) {\r\n        options.dropdownAdapter = Utils.Decorate(\r\n          options.dropdownAdapter,\r\n          CloseOnSelect\r\n        );\r\n      }\r\n\r\n      if (\r\n        options.dropdownCssClass != null ||\r\n        options.dropdownCss != null ||\r\n        options.adaptDropdownCssClass != null\r\n      ) {\r\n        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');\r\n\r\n        options.dropdownAdapter = Utils.Decorate(\r\n          options.dropdownAdapter,\r\n          DropdownCSS\r\n        );\r\n      }\r\n\r\n      options.dropdownAdapter = Utils.Decorate(\r\n        options.dropdownAdapter,\r\n        AttachBody\r\n      );\r\n    }\r\n\r\n    if (options.selectionAdapter == null) {\r\n      if (options.multiple) {\r\n        options.selectionAdapter = MultipleSelection;\r\n      } else {\r\n        options.selectionAdapter = SingleSelection;\r\n      }\r\n\r\n      // Add the placeholder mixin if a placeholder was specified\r\n      if (options.placeholder != null) {\r\n        options.selectionAdapter = Utils.Decorate(\r\n          options.selectionAdapter,\r\n          Placeholder\r\n        );\r\n      }\r\n\r\n      if (options.allowClear) {\r\n        options.selectionAdapter = Utils.Decorate(\r\n          options.selectionAdapter,\r\n          AllowClear\r\n        );\r\n      }\r\n\r\n      if (options.multiple) {\r\n        options.selectionAdapter = Utils.Decorate(\r\n          options.selectionAdapter,\r\n          SelectionSearch\r\n        );\r\n      }\r\n\r\n      if (\r\n        options.containerCssClass != null ||\r\n        options.containerCss != null ||\r\n        options.adaptContainerCssClass != null\r\n      ) {\r\n        var ContainerCSS = require(options.amdBase + 'compat/containerCss');\r\n\r\n        options.selectionAdapter = Utils.Decorate(\r\n          options.selectionAdapter,\r\n          ContainerCSS\r\n        );\r\n      }\r\n\r\n      options.selectionAdapter = Utils.Decorate(\r\n        options.selectionAdapter,\r\n        EventRelay\r\n      );\r\n    }\r\n\r\n    if (typeof options.language === 'string') {\r\n      // Check if the language is specified with a region\r\n      if (options.language.indexOf('-') > 0) {\r\n        // Extract the region information if it is included\r\n        var languageParts = options.language.split('-');\r\n        var baseLanguage = languageParts[0];\r\n\r\n        options.language = [options.language, baseLanguage];\r\n      } else {\r\n        options.language = [options.language];\r\n      }\r\n    }\r\n\r\n    if ($.isArray(options.language)) {\r\n      var languages = new Translation();\r\n      options.language.push('en');\r\n\r\n      var languageNames = options.language;\r\n\r\n      for (var l = 0; l < languageNames.length; l++) {\r\n        var name = languageNames[l];\r\n        var language = {};\r\n\r\n        try {\r\n          // Try to load it with the original name\r\n          language = Translation.loadPath(name);\r\n        } catch (e) {\r\n          try {\r\n            // If we couldn't load it, check if it wasn't the full path\r\n            name = this.defaults.amdLanguageBase + name;\r\n            language = Translation.loadPath(name);\r\n          } catch (ex) {\r\n            // The translation could not be loaded at all. Sometimes this is\r\n            // because of a configuration problem, other times this can be\r\n            // because of how Select2 helps load all possible translation files.\r\n            if (options.debug && window.console && console.warn) {\r\n              console.warn(\r\n                'Select2: The language file for \"' + name + '\" could not be ' +\r\n                'automatically loaded. A fallback will be used instead.'\r\n              );\r\n            }\r\n\r\n            continue;\r\n          }\r\n        }\r\n\r\n        languages.extend(language);\r\n      }\r\n\r\n      options.translations = languages;\r\n    } else {\r\n      var baseTranslation = Translation.loadPath(\r\n        this.defaults.amdLanguageBase + 'en'\r\n      );\r\n      var customTranslation = new Translation(options.language);\r\n\r\n      customTranslation.extend(baseTranslation);\r\n\r\n      options.translations = customTranslation;\r\n    }\r\n\r\n    return options;\r\n  };\r\n\r\n  Defaults.prototype.reset = function () {\r\n    function stripDiacritics (text) {\r\n      // Used 'uni range + named function' from http://jsperf.com/diacritics/18\r\n      function match(a) {\r\n        return DIACRITICS[a] || a;\r\n      }\r\n\r\n      return text.replace(/[^\\u0000-\\u007E]/g, match);\r\n    }\r\n\r\n    function matcher (params, data) {\r\n      // Always return the object if there is nothing to compare\r\n      if ($.trim(params.term) === '') {\r\n        return data;\r\n      }\r\n\r\n      // Do a recursive check for options with children\r\n      if (data.children && data.children.length > 0) {\r\n        // Clone the data object if there are children\r\n        // This is required as we modify the object to remove any non-matches\r\n        var match = $.extend(true, {}, data);\r\n\r\n        // Check each child of the option\r\n        for (var c = data.children.length - 1; c >= 0; c--) {\r\n          var child = data.children[c];\r\n\r\n          var matches = matcher(params, child);\r\n\r\n          // If there wasn't a match, remove the object in the array\r\n          if (matches == null) {\r\n            match.children.splice(c, 1);\r\n          }\r\n        }\r\n\r\n        // If any children matched, return the new object\r\n        if (match.children.length > 0) {\r\n          return match;\r\n        }\r\n\r\n        // If there were no matching children, check just the plain object\r\n        return matcher(params, match);\r\n      }\r\n\r\n      var original = stripDiacritics(data.text).toUpperCase();\r\n      var term = stripDiacritics(params.term).toUpperCase();\r\n\r\n      // Check if the text contains the term\r\n      if (original.indexOf(term) > -1) {\r\n        return data;\r\n      }\r\n\r\n      // If it doesn't contain the term, don't return anything\r\n      return null;\r\n    }\r\n\r\n    this.defaults = {\r\n      amdBase: './',\r\n      amdLanguageBase: './i18n/',\r\n      closeOnSelect: true,\r\n      debug: false,\r\n      dropdownAutoWidth: false,\r\n      escapeMarkup: Utils.escapeMarkup,\r\n      language: EnglishTranslation,\r\n      matcher: matcher,\r\n      minimumInputLength: 0,\r\n      maximumInputLength: 0,\r\n      maximumSelectionLength: 0,\r\n      minimumResultsForSearch: 0,\r\n      selectOnClose: false,\r\n      sorter: function (data) {\r\n        return data;\r\n      },\r\n      templateResult: function (result) {\r\n        return result.text;\r\n      },\r\n      templateSelection: function (selection) {\r\n        return selection.text;\r\n      },\r\n      theme: 'default',\r\n      width: 'resolve'\r\n    };\r\n  };\r\n\r\n  Defaults.prototype.set = function (key, value) {\r\n    var camelKey = $.camelCase(key);\r\n\r\n    var data = {};\r\n    data[camelKey] = value;\r\n\r\n    var convertedData = Utils._convertData(data);\r\n\r\n    $.extend(this.defaults, convertedData);\r\n  };\r\n\r\n  var defaults = new Defaults();\r\n\r\n  return defaults;\r\n});\r\n\nS2.define('select2/options',[\r\n  'require',\r\n  'jquery',\r\n  './defaults',\r\n  './utils'\r\n], function (require, $, Defaults, Utils) {\r\n  function Options (options, $element) {\r\n    this.options = options;\r\n\r\n    if ($element != null) {\r\n      this.fromElement($element);\r\n    }\r\n\r\n    this.options = Defaults.apply(this.options);\r\n\r\n    if ($element && $element.is('input')) {\r\n      var InputCompat = require(this.get('amdBase') + 'compat/inputData');\r\n\r\n      this.options.dataAdapter = Utils.Decorate(\r\n        this.options.dataAdapter,\r\n        InputCompat\r\n      );\r\n    }\r\n  }\r\n\r\n  Options.prototype.fromElement = function ($e) {\r\n    var excludedData = ['select2'];\r\n\r\n    if (this.options.multiple == null) {\r\n      this.options.multiple = $e.prop('multiple');\r\n    }\r\n\r\n    if (this.options.disabled == null) {\r\n      this.options.disabled = $e.prop('disabled');\r\n    }\r\n\r\n    if (this.options.language == null) {\r\n      if ($e.prop('lang')) {\r\n        this.options.language = $e.prop('lang').toLowerCase();\r\n      } else if ($e.closest('[lang]').prop('lang')) {\r\n        this.options.language = $e.closest('[lang]').prop('lang');\r\n      }\r\n    }\r\n\r\n    if (this.options.dir == null) {\r\n      if ($e.prop('dir')) {\r\n        this.options.dir = $e.prop('dir');\r\n      } else if ($e.closest('[dir]').prop('dir')) {\r\n        this.options.dir = $e.closest('[dir]').prop('dir');\r\n      } else {\r\n        this.options.dir = 'ltr';\r\n      }\r\n    }\r\n\r\n    $e.prop('disabled', this.options.disabled);\r\n    $e.prop('multiple', this.options.multiple);\r\n\r\n    if ($e.data('select2Tags')) {\r\n      if (this.options.debug && window.console && console.warn) {\r\n        console.warn(\r\n          'Select2: The `data-select2-tags` attribute has been changed to ' +\r\n          'use the `data-data` and `data-tags=\"true\"` attributes and will be ' +\r\n          'removed in future versions of Select2.'\r\n        );\r\n      }\r\n\r\n      $e.data('data', $e.data('select2Tags'));\r\n      $e.data('tags', true);\r\n    }\r\n\r\n    if ($e.data('ajaxUrl')) {\r\n      if (this.options.debug && window.console && console.warn) {\r\n        console.warn(\r\n          'Select2: The `data-ajax-url` attribute has been changed to ' +\r\n          '`data-ajax--url` and support for the old attribute will be removed' +\r\n          ' in future versions of Select2.'\r\n        );\r\n      }\r\n\r\n      $e.attr('ajax--url', $e.data('ajaxUrl'));\r\n      $e.data('ajax--url', $e.data('ajaxUrl'));\r\n    }\r\n\r\n    var dataset = {};\r\n\r\n    // Prefer the element's `dataset` attribute if it exists\r\n    // jQuery 1.x does not correctly handle data attributes with multiple dashes\r\n    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {\r\n      dataset = $.extend(true, {}, $e[0].dataset, $e.data());\r\n    } else {\r\n      dataset = $e.data();\r\n    }\r\n\r\n    var data = $.extend(true, {}, dataset);\r\n\r\n    data = Utils._convertData(data);\r\n\r\n    for (var key in data) {\r\n      if ($.inArray(key, excludedData) > -1) {\r\n        continue;\r\n      }\r\n\r\n      if ($.isPlainObject(this.options[key])) {\r\n        $.extend(this.options[key], data[key]);\r\n      } else {\r\n        this.options[key] = data[key];\r\n      }\r\n    }\r\n\r\n    return this;\r\n  };\r\n\r\n  Options.prototype.get = function (key) {\r\n    return this.options[key];\r\n  };\r\n\r\n  Options.prototype.set = function (key, val) {\r\n    this.options[key] = val;\r\n  };\r\n\r\n  return Options;\r\n});\r\n\nS2.define('select2/core',[\r\n  'jquery',\r\n  './options',\r\n  './utils',\r\n  './keys'\r\n], function ($, Options, Utils, KEYS) {\r\n  var Select2 = function ($element, options) {\r\n    if ($element.data('select2') != null) {\r\n      $element.data('select2').destroy();\r\n    }\r\n\r\n    this.$element = $element;\r\n\r\n    this.id = this._generateId($element);\r\n\r\n    options = options || {};\r\n\r\n    this.options = new Options(options, $element);\r\n\r\n    Select2.__super__.constructor.call(this);\r\n\r\n    // Set up the tabindex\r\n\r\n    var tabindex = $element.attr('tabindex') || 0;\r\n    $element.data('old-tabindex', tabindex);\r\n    $element.attr('tabindex', '-1');\r\n\r\n    // Set up containers and adapters\r\n\r\n    var DataAdapter = this.options.get('dataAdapter');\r\n    this.dataAdapter = new DataAdapter($element, this.options);\r\n\r\n    var $container = this.render();\r\n\r\n    this._placeContainer($container);\r\n\r\n    var SelectionAdapter = this.options.get('selectionAdapter');\r\n    this.selection = new SelectionAdapter($element, this.options);\r\n    this.$selection = this.selection.render();\r\n\r\n    this.selection.position(this.$selection, $container);\r\n\r\n    var DropdownAdapter = this.options.get('dropdownAdapter');\r\n    this.dropdown = new DropdownAdapter($element, this.options);\r\n    this.$dropdown = this.dropdown.render();\r\n\r\n    this.dropdown.position(this.$dropdown, $container);\r\n\r\n    var ResultsAdapter = this.options.get('resultsAdapter');\r\n    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);\r\n    this.$results = this.results.render();\r\n\r\n    this.results.position(this.$results, this.$dropdown);\r\n\r\n    // Bind events\r\n\r\n    var self = this;\r\n\r\n    // Bind the container to all of the adapters\r\n    this._bindAdapters();\r\n\r\n    // Register any DOM event handlers\r\n    this._registerDomEvents();\r\n\r\n    // Register any internal event handlers\r\n    this._registerDataEvents();\r\n    this._registerSelectionEvents();\r\n    this._registerDropdownEvents();\r\n    this._registerResultsEvents();\r\n    this._registerEvents();\r\n\r\n    // Set the initial state\r\n    this.dataAdapter.current(function (initialData) {\r\n      self.trigger('selection:update', {\r\n        data: initialData\r\n      });\r\n    });\r\n\r\n    // Hide the original select\r\n    $element.addClass('select2-hidden-accessible');\r\n    $element.attr('aria-hidden', 'true');\r\n\r\n    // Synchronize any monitored attributes\r\n    this._syncAttributes();\r\n\r\n    $element.data('select2', this);\r\n  };\r\n\r\n  Utils.Extend(Select2, Utils.Observable);\r\n\r\n  Select2.prototype._generateId = function ($element) {\r\n    var id = '';\r\n\r\n    if ($element.attr('id') != null) {\r\n      id = $element.attr('id');\r\n    } else if ($element.attr('name') != null) {\r\n      id = $element.attr('name') + '-' + Utils.generateChars(2);\r\n    } else {\r\n      id = Utils.generateChars(4);\r\n    }\r\n\r\n    id = id.replace(/(:|\\.|\\[|\\]|,)/g, '');\r\n    id = 'select2-' + id;\r\n\r\n    return id;\r\n  };\r\n\r\n  Select2.prototype._placeContainer = function ($container) {\r\n    $container.insertAfter(this.$element);\r\n\r\n    var width = this._resolveWidth(this.$element, this.options.get('width'));\r\n\r\n    if (width != null) {\r\n      $container.css('width', width);\r\n    }\r\n  };\r\n\r\n  Select2.prototype._resolveWidth = function ($element, method) {\r\n    var WIDTH = /^width:(([-+]?([0-9]*\\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;\r\n\r\n    if (method == 'resolve') {\r\n      var styleWidth = this._resolveWidth($element, 'style');\r\n\r\n      if (styleWidth != null) {\r\n        return styleWidth;\r\n      }\r\n\r\n      return this._resolveWidth($element, 'element');\r\n    }\r\n\r\n    if (method == 'element') {\r\n      var elementWidth = $element.outerWidth(false);\r\n\r\n      if (elementWidth <= 0) {\r\n        return 'auto';\r\n      }\r\n\r\n      return elementWidth + 'px';\r\n    }\r\n\r\n    if (method == 'style') {\r\n      var style = $element.attr('style');\r\n\r\n      if (typeof(style) !== 'string') {\r\n        return null;\r\n      }\r\n\r\n      var attrs = style.split(';');\r\n\r\n      for (var i = 0, l = attrs.length; i < l; i = i + 1) {\r\n        var attr = attrs[i].replace(/\\s/g, '');\r\n        var matches = attr.match(WIDTH);\r\n\r\n        if (matches !== null && matches.length >= 1) {\r\n          return matches[1];\r\n        }\r\n      }\r\n\r\n      return null;\r\n    }\r\n\r\n    return method;\r\n  };\r\n\r\n  Select2.prototype._bindAdapters = function () {\r\n    this.dataAdapter.bind(this, this.$container);\r\n    this.selection.bind(this, this.$container);\r\n\r\n    this.dropdown.bind(this, this.$container);\r\n    this.results.bind(this, this.$container);\r\n  };\r\n\r\n  Select2.prototype._registerDomEvents = function () {\r\n    var self = this;\r\n\r\n    this.$element.on('change.select2', function () {\r\n      self.dataAdapter.current(function (data) {\r\n        self.trigger('selection:update', {\r\n          data: data\r\n        });\r\n      });\r\n    });\r\n\r\n    this.$element.on('focus.select2', function (evt) {\r\n      self.trigger('focus', evt);\r\n    });\r\n\r\n    this._syncA = Utils.bind(this._syncAttributes, this);\r\n    this._syncS = Utils.bind(this._syncSubtree, this);\r\n\r\n    if (this.$element[0].attachEvent) {\r\n      this.$element[0].attachEvent('onpropertychange', this._syncA);\r\n    }\r\n\r\n    var observer = window.MutationObserver ||\r\n      window.WebKitMutationObserver ||\r\n      window.MozMutationObserver\r\n    ;\r\n\r\n    if (observer != null) {\r\n      this._observer = new observer(function (mutations) {\r\n        $.each(mutations, self._syncA);\r\n        $.each(mutations, self._syncS);\r\n      });\r\n      this._observer.observe(this.$element[0], {\r\n        attributes: true,\r\n        childList: true,\r\n        subtree: false\r\n      });\r\n    } else if (this.$element[0].addEventListener) {\r\n      this.$element[0].addEventListener(\r\n        'DOMAttrModified',\r\n        self._syncA,\r\n        false\r\n      );\r\n      this.$element[0].addEventListener(\r\n        'DOMNodeInserted',\r\n        self._syncS,\r\n        false\r\n      );\r\n      this.$element[0].addEventListener(\r\n        'DOMNodeRemoved',\r\n        self._syncS,\r\n        false\r\n      );\r\n    }\r\n  };\r\n\r\n  Select2.prototype._registerDataEvents = function () {\r\n    var self = this;\r\n\r\n    this.dataAdapter.on('*', function (name, params) {\r\n      self.trigger(name, params);\r\n    });\r\n  };\r\n\r\n  Select2.prototype._registerSelectionEvents = function () {\r\n    var self = this;\r\n    var nonRelayEvents = ['toggle', 'focus'];\r\n\r\n    this.selection.on('toggle', function () {\r\n      self.toggleDropdown();\r\n    });\r\n\r\n    this.selection.on('focus', function (params) {\r\n      self.focus(params);\r\n    });\r\n\r\n    this.selection.on('*', function (name, params) {\r\n      if ($.inArray(name, nonRelayEvents) !== -1) {\r\n        return;\r\n      }\r\n\r\n      self.trigger(name, params);\r\n    });\r\n  };\r\n\r\n  Select2.prototype._registerDropdownEvents = function () {\r\n    var self = this;\r\n\r\n    this.dropdown.on('*', function (name, params) {\r\n      self.trigger(name, params);\r\n    });\r\n  };\r\n\r\n  Select2.prototype._registerResultsEvents = function () {\r\n    var self = this;\r\n\r\n    this.results.on('*', function (name, params) {\r\n      self.trigger(name, params);\r\n    });\r\n  };\r\n\r\n  Select2.prototype._registerEvents = function () {\r\n    var self = this;\r\n\r\n    this.on('open', function () {\r\n      self.$container.addClass('select2-container--open');\r\n    });\r\n\r\n    this.on('close', function () {\r\n      self.$container.removeClass('select2-container--open');\r\n    });\r\n\r\n    this.on('enable', function () {\r\n      self.$container.removeClass('select2-container--disabled');\r\n    });\r\n\r\n    this.on('disable', function () {\r\n      self.$container.addClass('select2-container--disabled');\r\n    });\r\n\r\n    this.on('blur', function () {\r\n      self.$container.removeClass('select2-container--focus');\r\n    });\r\n\r\n    this.on('query', function (params) {\r\n      if (!self.isOpen()) {\r\n        self.trigger('open', {});\r\n      }\r\n\r\n      this.dataAdapter.query(params, function (data) {\r\n        self.trigger('results:all', {\r\n          data: data,\r\n          query: params\r\n        });\r\n      });\r\n    });\r\n\r\n    this.on('query:append', function (params) {\r\n      this.dataAdapter.query(params, function (data) {\r\n        self.trigger('results:append', {\r\n          data: data,\r\n          query: params\r\n        });\r\n      });\r\n    });\r\n\r\n    this.on('keypress', function (evt) {\r\n      var key = evt.which;\r\n\r\n      if (self.isOpen()) {\r\n        if (key === KEYS.ESC || key === KEYS.TAB ||\r\n            (key === KEYS.UP && evt.altKey)) {\r\n          self.close();\r\n\r\n          evt.preventDefault();\r\n        } else if (key === KEYS.ENTER) {\r\n          self.trigger('results:select', {});\r\n\r\n          evt.preventDefault();\r\n        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {\r\n          self.trigger('results:toggle', {});\r\n\r\n          evt.preventDefault();\r\n        } else if (key === KEYS.UP) {\r\n          self.trigger('results:previous', {});\r\n\r\n          evt.preventDefault();\r\n        } else if (key === KEYS.DOWN) {\r\n          self.trigger('results:next', {});\r\n\r\n          evt.preventDefault();\r\n        }\r\n      } else {\r\n        if (key === KEYS.ENTER || key === KEYS.SPACE ||\r\n            (key === KEYS.DOWN && evt.altKey)) {\r\n          self.open();\r\n\r\n          evt.preventDefault();\r\n        }\r\n      }\r\n    });\r\n  };\r\n\r\n  Select2.prototype._syncAttributes = function () {\r\n    this.options.set('disabled', this.$element.prop('disabled'));\r\n\r\n    if (this.options.get('disabled')) {\r\n      if (this.isOpen()) {\r\n        this.close();\r\n      }\r\n\r\n      this.trigger('disable', {});\r\n    } else {\r\n      this.trigger('enable', {});\r\n    }\r\n  };\r\n\r\n  Select2.prototype._syncSubtree = function (evt, mutations) {\r\n    var changed = false;\r\n    var self = this;\r\n\r\n    // Ignore any mutation events raised for elements that aren't options or\r\n    // optgroups. This handles the case when the select element is destroyed\r\n    if (\r\n      evt && evt.target && (\r\n        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'\r\n      )\r\n    ) {\r\n      return;\r\n    }\r\n\r\n    if (!mutations) {\r\n      // If mutation events aren't supported, then we can only assume that the\r\n      // change affected the selections\r\n      changed = true;\r\n    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {\r\n      for (var n = 0; n < mutations.addedNodes.length; n++) {\r\n        var node = mutations.addedNodes[n];\r\n\r\n        if (node.selected) {\r\n          changed = true;\r\n        }\r\n      }\r\n    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {\r\n      changed = true;\r\n    }\r\n\r\n    // Only re-pull the data if we think there is a change\r\n    if (changed) {\r\n      this.dataAdapter.current(function (currentData) {\r\n        self.trigger('selection:update', {\r\n          data: currentData\r\n        });\r\n      });\r\n    }\r\n  };\r\n\r\n  /**\r\n   * Override the trigger method to automatically trigger pre-events when\r\n   * there are events that can be prevented.\r\n   */\r\n  Select2.prototype.trigger = function (name, args) {\r\n    var actualTrigger = Select2.__super__.trigger;\r\n    var preTriggerMap = {\r\n      'open': 'opening',\r\n      'close': 'closing',\r\n      'select': 'selecting',\r\n      'unselect': 'unselecting'\r\n    };\r\n\r\n    if (args === undefined) {\r\n      args = {};\r\n    }\r\n\r\n    if (name in preTriggerMap) {\r\n      var preTriggerName = preTriggerMap[name];\r\n      var preTriggerArgs = {\r\n        prevented: false,\r\n        name: name,\r\n        args: args\r\n      };\r\n\r\n      actualTrigger.call(this, preTriggerName, preTriggerArgs);\r\n\r\n      if (preTriggerArgs.prevented) {\r\n        args.prevented = true;\r\n\r\n        return;\r\n      }\r\n    }\r\n\r\n    actualTrigger.call(this, name, args);\r\n  };\r\n\r\n  Select2.prototype.toggleDropdown = function () {\r\n    if (this.options.get('disabled')) {\r\n      return;\r\n    }\r\n\r\n    if (this.isOpen()) {\r\n      this.close();\r\n    } else {\r\n      this.open();\r\n    }\r\n  };\r\n\r\n  Select2.prototype.open = function () {\r\n    if (this.isOpen()) {\r\n      return;\r\n    }\r\n\r\n    this.trigger('query', {});\r\n  };\r\n\r\n  Select2.prototype.close = function () {\r\n    if (!this.isOpen()) {\r\n      return;\r\n    }\r\n\r\n    this.trigger('close', {});\r\n  };\r\n\r\n  Select2.prototype.isOpen = function () {\r\n    return this.$container.hasClass('select2-container--open');\r\n  };\r\n\r\n  Select2.prototype.hasFocus = function () {\r\n    return this.$container.hasClass('select2-container--focus');\r\n  };\r\n\r\n  Select2.prototype.focus = function (data) {\r\n    // No need to re-trigger focus events if we are already focused\r\n    if (this.hasFocus()) {\r\n      return;\r\n    }\r\n\r\n    this.$container.addClass('select2-container--focus');\r\n    this.trigger('focus', {});\r\n  };\r\n\r\n  Select2.prototype.enable = function (args) {\r\n    if (this.options.get('debug') && window.console && console.warn) {\r\n      console.warn(\r\n        'Select2: The `select2(\"enable\")` method has been deprecated and will' +\r\n        ' be removed in later Select2 versions. Use $element.prop(\"disabled\")' +\r\n        ' instead.'\r\n      );\r\n    }\r\n\r\n    if (args == null || args.length === 0) {\r\n      args = [true];\r\n    }\r\n\r\n    var disabled = !args[0];\r\n\r\n    this.$element.prop('disabled', disabled);\r\n  };\r\n\r\n  Select2.prototype.data = function () {\r\n    if (this.options.get('debug') &&\r\n        arguments.length > 0 && window.console && console.warn) {\r\n      console.warn(\r\n        'Select2: Data can no longer be set using `select2(\"data\")`. You ' +\r\n        'should consider setting the value instead using `$element.val()`.'\r\n      );\r\n    }\r\n\r\n    var data = [];\r\n\r\n    this.dataAdapter.current(function (currentData) {\r\n      data = currentData;\r\n    });\r\n\r\n    return data;\r\n  };\r\n\r\n  Select2.prototype.val = function (args) {\r\n    if (this.options.get('debug') && window.console && console.warn) {\r\n      console.warn(\r\n        'Select2: The `select2(\"val\")` method has been deprecated and will be' +\r\n        ' removed in later Select2 versions. Use $element.val() instead.'\r\n      );\r\n    }\r\n\r\n    if (args == null || args.length === 0) {\r\n      return this.$element.val();\r\n    }\r\n\r\n    var newVal = args[0];\r\n\r\n    if ($.isArray(newVal)) {\r\n      newVal = $.map(newVal, function (obj) {\r\n        return obj.toString();\r\n      });\r\n    }\r\n\r\n    this.$element.val(newVal).trigger('change');\r\n  };\r\n\r\n  Select2.prototype.destroy = function () {\r\n    this.$container.remove();\r\n\r\n    if (this.$element[0].detachEvent) {\r\n      this.$element[0].detachEvent('onpropertychange', this._syncA);\r\n    }\r\n\r\n    if (this._observer != null) {\r\n      this._observer.disconnect();\r\n      this._observer = null;\r\n    } else if (this.$element[0].removeEventListener) {\r\n      this.$element[0]\r\n        .removeEventListener('DOMAttrModified', this._syncA, false);\r\n      this.$element[0]\r\n        .removeEventListener('DOMNodeInserted', this._syncS, false);\r\n      this.$element[0]\r\n        .removeEventListener('DOMNodeRemoved', this._syncS, false);\r\n    }\r\n\r\n    this._syncA = null;\r\n    this._syncS = null;\r\n\r\n    this.$element.off('.select2');\r\n    this.$element.attr('tabindex', this.$element.data('old-tabindex'));\r\n\r\n    this.$element.removeClass('select2-hidden-accessible');\r\n    this.$element.attr('aria-hidden', 'false');\r\n    this.$element.removeData('select2');\r\n\r\n    this.dataAdapter.destroy();\r\n    this.selection.destroy();\r\n    this.dropdown.destroy();\r\n    this.results.destroy();\r\n\r\n    this.dataAdapter = null;\r\n    this.selection = null;\r\n    this.dropdown = null;\r\n    this.results = null;\r\n  };\r\n\r\n  Select2.prototype.render = function () {\r\n    var $container = $(\r\n      '<span class=\"select2 select2-container\">' +\r\n        '<span class=\"selection\"></span>' +\r\n        '<span class=\"dropdown-wrapper\" aria-hidden=\"true\"></span>' +\r\n      '</span>'\r\n    );\r\n\r\n    $container.attr('dir', this.options.get('dir'));\r\n\r\n    this.$container = $container;\r\n\r\n    this.$container.addClass('select2-container--' + this.options.get('theme'));\r\n\r\n    $container.data('element', this.$element);\r\n\r\n    return $container;\r\n  };\r\n\r\n  return Select2;\r\n});\r\n\nS2.define('jquery-mousewheel',[\r\n  'jquery'\r\n], function ($) {\r\n  // Used to shim jQuery.mousewheel for non-full builds.\r\n  return $;\r\n});\r\n\nS2.define('jquery.select2',[\r\n  'jquery',\r\n  'jquery-mousewheel',\r\n\r\n  './select2/core',\r\n  './select2/defaults'\r\n], function ($, _, Select2, Defaults) {\r\n  if ($.fn.select2 == null) {\r\n    // All methods that should return the element\r\n    var thisMethods = ['open', 'close', 'destroy'];\r\n\r\n    $.fn.select2 = function (options) {\r\n      options = options || {};\r\n\r\n      if (typeof options === 'object') {\r\n        this.each(function () {\r\n          var instanceOptions = $.extend(true, {}, options);\r\n\r\n          var instance = new Select2($(this), instanceOptions);\r\n        });\r\n\r\n        return this;\r\n      } else if (typeof options === 'string') {\r\n        var ret;\r\n        var args = Array.prototype.slice.call(arguments, 1);\r\n\r\n        this.each(function () {\r\n          var instance = $(this).data('select2');\r\n\r\n          if (instance == null && window.console && console.error) {\r\n            console.error(\r\n              'The select2(\\'' + options + '\\') method was called on an ' +\r\n              'element that is not using Select2.'\r\n            );\r\n          }\r\n\r\n          ret = instance[options].apply(instance, args);\r\n        });\r\n\r\n        // Check if we should be returning `this`\r\n        if ($.inArray(options, thisMethods) > -1) {\r\n          return this;\r\n        }\r\n\r\n        return ret;\r\n      } else {\r\n        throw new Error('Invalid arguments for Select2: ' + options);\r\n      }\r\n    };\r\n  }\r\n\r\n  if ($.fn.select2.defaults == null) {\r\n    $.fn.select2.defaults = Defaults;\r\n  }\r\n\r\n  return Select2;\r\n});\r\n\n  // Return the AMD loader configuration so it can be used outside of this file\r\n  return {\r\n    define: S2.define,\r\n    require: S2.require\r\n  };\r\n}());\r\n\r\n  // Autoload the jQuery bindings\r\n  // We know that all of the modules exist above this, so we're safe\r\n  var select2 = S2.require('jquery.select2');\r\n\r\n  // Hold the AMD module references on the jQuery function that was just loaded\r\n  // This allows Select2 to use the internal loader outside of this file, such\r\n  // as in the language files.\r\n  jQuery.fn.select2.amd = S2;\r\n\r\n  // Return the Select2 instance for anyone who is importing it.\r\n  return select2;\r\n}));\r\n"

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(265))

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(266))

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(267))

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(268))

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);


/***/ })

/******/ });