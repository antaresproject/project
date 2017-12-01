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
/******/ 	return __webpack_require__(__webpack_require__.s = 685);
/******/ })
/************************************************************************/
/******/ ({

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(686);


/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AntaresDatatablesFilters = {
    init: function init() {
        this.values();
        this.addFilter();
        this.closeFilter();
        this.editFilter();
        this.filtersSwiper();
        this.addDropJSFilters();
    },
    filtersSwiper: function filtersSwiper() {
        $('.swiper-filters').each(function () {
            var self = $(this);
            var mySwiper = new Swiper(this, {
                slidesPerView: 'auto',
                nextButton: '.swiper-filters-next',
                prevButton: '.swiper-filters-prev',
                freeMode: true
            });

            $(window).resize(_.debounce(function () {
                if (typeof mySwiper.update === 'function') {
                    mySwiper.update();
                }
            }, 300));

            window.requestAnimationFrame(function () {
                window.antaresEvents.on('filters.append', function (element, table, response) {
                    mySwiper.update();
                    unlockSwiperFIlter(mySwiper, self, element);

                    $('.antares-dropjs-filter--out.drop').off('click');
                    $('.antares-dropjs-filter--out.drop').on('click', function () {
                        var self = $(this);
                        setTimeout(function () {
                            if (self.hasClass('drop-enabled')) {
                                mySwiper.lockSwipes();
                            }
                        }, 500);
                    });
                    setTimeout(function () {
                        haveSlidesFilter(element);
                    }, 300);
                });
                window.antaresEvents.on('filters.beforeClose', function () {
                    unlockSwiperFIlter(mySwiper, self);
                });
                window.antaresEvents.on('filters.delete', function () {
                    setTimeout(function () {
                        mySwiper.update();
                        unlockSwiperFIlter(mySwiper, self);
                        setTimeout(function () {
                            haveSlidesFilter(self);
                        }, 300);
                    }, 300);
                });
            });
        });

        function haveSlidesFilter(element) {
            if (element.closest('.card-ctrls__right').find('.swiper-wrapper').children().length === 0) {
                element.closest('.tab-search--filter').addClass('swiper--no-slides');
                element.closest('.tbl-c').adjustCardHeight();
            } else {
                element.closest('.tab-search--filter').removeClass('swiper--no-slides');
            }
        }
        function unlockSwiperFIlter(mySwiperV, element, elme) {
            var allWidthSlides = 0;
            for (var i = 0; i < element.find('.swiper-slide').length; i++) {
                allWidthSlides += $(element.find('.swiper-slide')[i]).width();
            }
            if (element.closest('.swiper-filters--box .swiper-container').width() < allWidthSlides + 100) {
                if (typeof mySwiperV.unlockSwipes === 'function') {
                    mySwiperV.unlockSwipes();
                    element.closest('.swiper-filters--box').removeClass('swiper-filters--no-active');
                }
            } else {
                if (typeof mySwiperV.lockSwipes === 'function') {
                    mySwiperV.lockSwipes();
                    element.closest('.swiper-filters--box').addClass('swiper-filters--no-active');
                }
            }
        }
    },

    dropCgf: {
        position: 'bottom right',
        openOn: 'click',
        constrainToWindow: true,
        constrainToScrollParent: false,
        classes: 'antares-dropjs-filter--out drop',
        hoverOpenDelay: 0,
        hoverCloseDelay: 50,
        focusDelay: 0,
        blurDelay: 50,
        beforeClose: function beforeClose() {
            window.antaresEvents.emit('filters.beforeClose');
            if ($('.filter--date-picker').hasClass('dropJS-filter--open')) {
                return false;
            } else if ($('.select2-container').hasClass('select2-container--open')) {
                return false;
            }
        }
    },
    mobileDropJS: {
        tetherOptions: {
            constraints: [{
                to: 'scrollParent',
                pin: true
            }]
        }
    },

    addDropJSFilters: function addDropJSFilters(target) {
        if (target === undefined) {
            target = $('.dropjs--no-active');
        }
        for (var i = 0; i < target.length; i++) {
            var self = this;
            var dropTwo;
            dropTwo = new Drop(Object.assign({
                target: $(target[i]).find('span:last-of-type')[0],
                content: $(target[i]).next('.dropjs-wrapper')[0]
            }, self.dropCgf, self.mobileDropJS));
            dropTwo.open();
            dropTwo.position();
            dropTwo.close();
            target.removeClass('dropjs--no-active');
        }
    },
    values: function values() {
        function spinnerToSlider(parent) {
            var values = [];
            var valMin = parseInt(parent.find('.filter-spinner--min').val(), 10);
            var valMax = parseInt(parent.find('.filter-spinner--max').val().replace('$', '').replace(/,/g, ''), 10);
            values.push(valMin);
            values.push(valMax);
            parent.find('.filter-slider').slider('values', values); // add positions to slider
        }

        $('.filter-spinner-mode-min').spinner({
            start: 0,
            culture: 'en-US',
            step: 1,
            numberFormat: 'C',
            spin: function spin(event, ui) {
                // IF YOU TOUCH SPINNER
                var parent = $(this).closest('.filter-content');
                parent.find('.filter-spinner--min').spinner('option', 'max', parent.find('.filter-spinner--max').attr('aria-valuenow')); // maximum for min spinner
                parent.find('.filter-spinner--min').spinner('option', 'min', parent.attr('data-min'));
                spinnerToSlider(parent);
            }
        });
        $('.filter-spinner-mode-max').spinner({
            start: 0,
            culture: 'en-US',
            step: 1,
            numberFormat: 'C',
            spin: function spin(event, ui) {
                // IF YOU TOUCH SPINNER
                var parent = $(this).closest('.filter-content');
                parent.find('.filter-spinner--max').spinner('option', 'min', parent.find('.filter-spinner--min').attr('aria-valuenow')); // minimum for max spinner
                parent.find('.filter-spinner--max').spinner('option', 'max', parent.attr('data-max'));
                spinnerToSlider(parent);
            }
        });

        var slider = $('[data-slider]'),
            rangeSlider = $('[data-slider-range-filter]');

        slider.slider({
            // one dot
            slide: function slide(event, ui) {
                if ($(this).siblings('.slider-val').length) {
                    $(this).siblings('.slider-val').val(ui.value);
                    $(this).siblings('.slider-val').valid();
                }
            }
        });

        rangeSlider.slider({
            //two dot
            create: function create() {
                var parent = $(this).closest('.filter-content');
                var dataName = parent.attr('data-type');
                var dataMin = parseInt(parent.attr('data-type', dataName).attr('data-min'), 10);
                var dataMax = parseInt(parent.attr('data-type', dataName).attr('data-max'), 10);
                parent.find('.filter-slider').slider('option', 'min', dataMin);
                parent.find('.filter-slider').slider('option', 'max', dataMax);

                parent.find('.filter-slider').slider('values', [parent.find('.filter-spinner--min').attr('aria-valuenow'), parent.find('.filter-spinner--max').attr('aria-valuenow')]); // add positions to slider
            },
            range: true,
            slide: function slide(event, ui) {
                var parent = $(this).closest('.filter-content');
                parent.find('.filter-spinner--min').spinner('value', ui.values[0]); //add positions to spinner
                parent.find('.filter-spinner--max').spinner('value', ui.values[1]); //add positions to spinner
                parent.find('.filter-spinner--max').spinner('option', 'min', parent.find('.filter-spinner--min').attr('aria-valuenow'));
                parent.find('.filter-spinner--min').spinner('option', 'max', parent.find('.filter-spinner--max').attr('aria-valuenow'));
            }
        });
        this.dateRangeFilter();
    },
    dateRangeFilter: function dateRangeFilter() {
        var dateRangePickerFilter = $('[data-daterangepicker--filter="true"]');

        for (var i = 0; i < dateRangePickerFilter.length; i++) {
            var dateselector = $(dateRangePickerFilter[i]),
                start = dateselector.data('start'),
                end = dateselector.data('end'),
                format = dateselector.data('format');

            dateselector.daterangepicker({
                mirrorOnCollision: true,
                verticalOffset: 0,
                maxDate: null,
                onOpen: function onOpen() {
                    var thisDropBox = $('.drop.antares-dropjs-filter--out.drop-element .filter-content');
                    thisDropBox.addClass('dropJS-filter--open');
                },
                onClose: function onClose() {
                    var thisDropBox = $('.drop.antares-dropjs-filter--out.drop-element .filter-content');
                    setTimeout(function () {
                        thisDropBox.removeClass('dropJS-filter--open');
                        // window.antaresEvents.emit('filters.beforeClose');  // MOMOOOOOOOOOORE LAGS
                    }, 500);
                },
                dateFormat: format,
                initialText: dateselector.data('placeholder')
            }).on('change', function (event) {
                var handler = $(this),
                    values = $.parseJSON(handler.val()),
                    column = handler.closest('.slider-box').find('.filter-config').attr('column'),
                    daterangepicker = $('.filter-container .filter-config[column=' + column + ']').find('[data-daterangepicker--filter]');
                setTimeout(function () {
                    daterangepicker.daterangepicker('setRange', {
                        start: moment(values.start).toDate(),
                        end: moment(values.end).toDate()
                    });
                }, 200);
            });
            if (start.length > 0 && end.length > 0) {
                dateselector.daterangepicker('setRange', { start: moment(start).toDate(), end: moment(end).toDate() });
            }

            //            var doubleDate = $(dateRangePickerFilter[i]).closest('.filter-content').attr('data-daterangepicker-text')
            //            var dateStart = moment(doubleDate.split('-')[0])
            //            var dateEnd = moment(doubleDate.split('-')[1])
            //
            //            $(dateRangePickerFilter[i]).daterangepicker("setRange", {start: dateStart._d, end: dateEnd._d});
        }
    },
    addFilter: function addFilter() {
        var self = this;

        function addTemplateBadge(targetFilter, typeFilter, selectedStatus, content) {
            var thisSlider = targetFilter.closest('.filters').find('.card-filters--swiper');
            thisSlider.append(content);
            for (var i = 0; i < thisSlider.find('.slider-box option').length; i++) {
                if (thisSlider.find('.slider-box option')[i].value === selectedStatus) {
                    $(thisSlider.find('.slider-box option')[i]).attr('selected', 'selected');
                }
            }
        }

        function addTemplateDatePicker(targetFilter, typeFilter, thisTextDatePicker, content) {
            targetFilter.closest('.filters').find('.card-filters--swiper').append(content);
            self.dateRangeFilter();
        }

        window.antaresEvents.on('filters.append', function (element, table, filter) {
            var parent = $(element).closest('.filter-content');
            var typeFilter = $(filter).find('.filter').data('type');

            if (typeFilter === 'status') {
                var selectedStatus = parent.find('.select2-selection__rendered').attr('title');
                var haveSameStatusFilter = false;
                //                for (var i = 0; i < $('.filter-type--badge').length; i++) {
                //                    if ($('.filter-type--badge span')[i].textContent === selectedStatus) {
                //                        haveSameStatusFilter = true;
                //                    }
                //                }

                if (haveSameStatusFilter === false) {
                    var filterContainer = $(element).closest('.filters').find('.card-filters--swiper');
                    var parent = $(element).closest('.filter-content');
                    addTemplateBadge(parent, typeFilter, selectedStatus, filter);
                    window.antaresEvents.emit('filters.swiper.update');
                    self.editFilter();
                    AntaresForms.elements.tooltip();
                    $(this).closest('.filter-content').find('.ddown-multi__submenu').hide();
                    $('.antares-dropjs-filter').off('mousedown mouseup');
                    AntaresDdownGeneral.scrollCloseDropdowns();
                    self.addDropJSFilters(filterContainer.find('.dropjs--no-active'));

                    if (table !== null) {
                        table.dataTable().api().draw();
                    }
                } else if (haveSameStatusFilter === true) {
                    self.filterAlertBadge('error', selectedStatus);
                }
            }
            if (typeFilter === 'datePicker') {
                var parent = $(element).closest('.filter-content'),
                    placeholder = $(element).closest('li').find('input:text[data-daterangepicker]').data('placeholder'),
                    thisTextDatePicker = parent.find('.comiseo-daterangepicker-triggerbutton')[0].textContent,
                    filterContainer = $(element).closest('.filters').find('.card-filters--swiper');

                if (thisTextDatePicker !== placeholder) {
                    addTemplateDatePicker(parent, typeFilter, thisTextDatePicker, filter);

                    window.antaresEvents.emit('filters.swiper.update');
                    self.addDropJSFilters(filterContainer.closest('.filters').find('.dropjs--no-active'));

                    $(element).closest('li').find('input:text[data-daterangepicker]').daterangepicker({
                        mirrorOnCollision: true,
                        verticalOffset: 0,
                        onOpen: function onOpen() {
                            var thisDropBox = $('.drop.antares-dropjs-filter--out.drop-element [data-daterangepicker-text]');
                            thisDropBox.addClass('dropJS-filter--open');
                        },
                        onClose: function onClose() {
                            var thisDropBox = $('.drop.antares-dropjs-filter--out.drop-element [data-daterangepicker-text]');
                            setTimeout(function () {
                                thisDropBox.removeClass('dropJS-filter--open');
                            }, 500);
                        }
                    });
                    if (table !== null) {
                        table.dataTable().api().draw();
                    }

                    //                    var thisOriginalTextDatePicker = parent.find("[data-daterangepicker]").daterangepicker("getRange")
                    //                    $('[data-daterangepicker-text="' + thisTextDatePicker + '"] [data-daterangepicker--filter]').daterangepicker("setRange", thisOriginalTextDatePicker);

                    self.editFilter();

                    //$(this).closest('.filter-content').find('.ddown-multi__submenu').hide();
                }
            }
        });
    },
    closeFilter: function closeFilter() {
        window.antaresEvents.on('filters.delete', function (element) {
            var $self = $(element);

            $(this).closest('.card-filter__sgl').addClass('animated fadeOutRight');
            setTimeout(function () {
                var typeFilter = $self.closest('.filter').attr('data-type');
                var countFilter = $('.swiper-filters--box').attr('data-filter-' + typeFilter);
                countFilter--;
                $self.closest('.swiper-wrapper').css('transform', 'translate3d(0px,0px,0px');
                $self.closest('.swiper-filters--box').attr('data-filter-' + typeFilter, countFilter);

                $self.closest('.swiper-slide').remove();
                $self.closest('.ddown--filter-edit').remove();
                $self.closest('.card-filter__sgl').remove();
                var tooltipId = $self.closest('.card-filter__sgl').attr('aria-describedby'),
                    $tooltip = $('#' + tooltipId);
                $tooltip.remove();
            }, 300);
            window.antaresEvents.emit('filters.delete.after', element);
        });
    },
    editFilter: function editFilter() {
        var self = this;

        $('.change-filter').off('click');

        window.antaresEvents.on('filters.update', function (element, table, response) {
            if ($(element).data('type') === 'status') {
                var newSelectStatus = $(element).closest('.slider-box').find('.select2-selection__rendered').attr('title');

                var originTarget = $('.drop-enabled').closest('.antares-dropjs-filter');
                var haveSameStatusFilter = false;
                for (var i = 0; i < $('.filter-type--badge').length; i++) {
                    if ($('.filter-type--badge span')[i].textContent === newSelectStatus) {
                        haveSameStatusFilter = true;
                    }
                }

                if (haveSameStatusFilter === false) {
                    originTarget.find('.card-filter__sgl').attr('data-filter-value', newSelectStatus);
                    originTarget.find('.card-filter__sgl span:last-of-type').text(newSelectStatus);
                    $('.drop').removeClass('drop-enabled');
                    $('.drop').removeClass('drop-open');
                    $('.drop').removeClass('drop-after-open');
                    $('body').removeClass('drop-open');

                    $('.antares-table').dataTable().api().draw();
                }
                var slider = $(element).closest('.slider-box');
                if (slider.length > 0) {
                    var column = slider.find('.filter-config').attr('column'),
                        value = slider.find('.filter-config').find('select').val(),
                        target = $('.filter-container .filter-config[column=' + column + ']').find('select');
                    target.val(value).trigger('change');
                }
            } else if ($(element).hasClass('add-daterange-button')) {
                var newDate = $(element).closest('.slider-box').find('.comiseo-daterangepicker-triggerbutton')[0].textContent;
                var oldDate = $(element).closest('[data-daterangepicker-text]');
                var allSliderDatePicker = $('.swiper-filters--box [data-type="datePicker"]');
                for (var i = 0; i < allSliderDatePicker.length; i++) {
                    var correctTargetText = $(allSliderDatePicker[i]).find('.antares-dropjs-filter--out.drop.drop-target');
                    if (correctTargetText.text() === oldDate.attr('data-daterangepicker-text')) {
                        correctTargetText.text(newDate);
                        oldDate.attr('data-daterangepicker-text', newDate);
                    }
                }
                $('.drop').removeClass('drop-enabled');
                $('.drop').removeClass('drop-open');
                $('.drop').removeClass('drop-after-open');
                $('body').removeClass('drop-open');

                $('.antares-table').dataTable().api().draw();
            }
        });
    }
};
$(function () {
    window.AntaresDatatablesFilters = AntaresDatatablesFilters;
    AntaresDatatablesFilters.init();
});

//ajax

var countCard = 0;

$(document).ajaxSuccess(function () {
    countCard++;
    if (countCard === $('.card').length) {
        $('.card').each(function () {
            $(this).find('.card__content').adjustCardHeight();
        });
        if ($('.page-datatables').length !== 0) {
            AntaresDatatablesFilters.dateRangeFilter();
            AntaresDatatablesFilters.filtersSwiper();
            AntaresDatatablesFilters.addDropJSFilters();
            AntaresMobileSelectMode.selectRowsDataTables();
            // AntaresDdownMulti.init();
        }
    }
});

/***/ })

/******/ });