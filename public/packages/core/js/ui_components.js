AntaresGridstack = function () {};
AntaresGridstack.dashboard = AntaresGridstack.dashboard || {};
AntaresGridstack.prototype.init = function () {
    var self = this;
    (function gridstack() {
        self.dashboard.gridStack();
        self.dashboard.cardResizePlugin();
        self.dashboard.compare();
        self.dashboard.cardReadability();
        self.dashboard.sliders();
        self.dashboard.widgetActions();
        self.dashboard.filterWidgets();
        self.dashboard.widgetGridEnlarge();
        self.helpers();
    }());
    if ($('.grid-stack').length > 0) {
        $('.grid-stack').data('gridstack').disable();
    }
};
AntaresGridstack.prototype.helpers = function () {

    function gridStackContentFit() {
        setTimeout(function () {
            $('.grid-stack-item').each(function (index, el) {
                var gsiH = $(this).height();
                var headerH = $(this).find('.card__header').height();
                var insideH = $(this).find('.card__content').height();
                $(this).find('.card__content').css({
                    'height': gsiH - headerH,
                    'overflow-y': 'scroll',
                });
                $(this).find('.card__content').perfectScrollbar().css('position', 'relative');
            });
        }, 300);
    }
    function hideWidgetWhenInGridstack() {
        $('.add-widget').each(function (index, item) {
            id = $(item).attr('rel');
            if ($('.grid-stack-item[id=' + id + ']').length > 0) {
                $(item).addClass('hidden');
            }
        });
    }
    hideWidgetWhenInGridstack();
//    gridStackContentFit();
//    $('.grid-stack').on('change', function (e, items) {
//        gridStackContentFit();
//    });

    $(".grid-stack-item").each(function (index, el) {
        $(this).find(".pagination").length && $(this).addClass("gs-pagination");
    });
    $(document).on("click", ".card__mobile-toggle", function () {
        $(this).toggleClass("card__mobile-toggle--open"), $(this).closest(".card").find(".datarow").toggle(),
                $(this).closest(".card").toggleClass("card--mobile-toggled");
    });
};
AntaresGridstack.prototype.dashboard = {
    widgetGridEnlarge: function () {


        //save vars without overwrite with click functions
        var savedPositions = [];
        $('.grid-stack-item').each(function () {
            var $this = $(this);
            savedPositions.push({
                x: $this.attr('data-gs-x'),
                y: $this.attr('data-gs-y'),
                w: $this.attr('data-gs-width'),
                h: $this.attr('data-gs-height'),
            });
        });

        ready('#app-wrapper .card .card-maximize', function (element) {
            $(element).on('click', function () {

                var self = $(this);

                var widget = $(this).closest('.grid-stack-item');
                var grid = $(this).closest('.grid-stack').data('gridstack');

                //set best height to simulate modal
                var currentCellH = grid.cellHeight();
                var headH = $('.main-head').outerHeight(true);
                var windowH = $(window).height();
                var appropriateHeight = (windowH - headH - 485) / currentCellH;


                var openCloseSwitch = $(this).data('openCloseSwitch');

                //identify card number
                var index = widget.index();

                if (!openCloseSwitch) {
                    grid.update(widget, 0, 0, 12, appropriateHeight);
                    $('.app-content').scrollTop(0);
                    widget.addClass('is-maximized');

                } else {
                    $('.grid-stack-item').each(function (index, el) {
                        grid.update(el, parseInt(savedPositions[index].x, 10), parseInt(savedPositions[index].y, 10), parseInt(savedPositions[index].w, 10), parseInt(savedPositions[index].h, 10));
                        $(el).removeClass('is-maximized');
                    });
                }

                $(this).data("openCloseSwitch", !openCloseSwitch);
            });
        });
    },
    gridStack: function () {
        var grid = $('.grid-stack').data('gridstack');
        var gridstack_dashboard = {
            animate: false,
            minWidth: 1200,
            alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            resizable: {
                handles: 'e, se, s, sw, w'
            },
            cellHeight: 15,
            verticalMargin: 20
        };
        $('.grid-stack').gridstack(gridstack_dashboard);
        //widget edit control
        $('.main-head__widgets-control').on('click', function (e) {
            e.preventDefault();
            var grid = $('.grid-stack').data('gridstack'),
                    enabled = $(this).data('enabled');
            if (enabled) {
                grid.disable();
                $(this).children('i').removeClass('icon--widgets-edit-alt').addClass('icon--widgets-edit');
                $('.app-content').toggleClass('app-content--widgets-movable');
                $('.app-content').removeClass('app-content--widgets-editable');
                $('.grid-stack').each(function (index, item) {
                    gridstack = $(item).data('gridstack');
                    gridstack.resizable('.grid-stack-item', false);
                    gridstack.movable('.grid-stack-item', false);
                });
            } else {
                grid.enable();
                $(this).children('i').removeClass('icon--widgets-edit').addClass('icon--widgets-edit-alt');
                $('.app-content').toggleClass('app-content--widgets-movable');
                $('.grid-stack').each(function (index, item) {
                    gridstack = $(item).data('gridstack');
                    gridstack.resizable('.grid-stack-item[data-gs-no-resize=1]', false);
                    gridstack.movable('.grid-stack-item[data-gs-no-move=1]', false);
                    gridstack.resizable('.grid-stack-item[data-gs-no-resize=""]', true);
                    gridstack.movable('.grid-stack-item[data-gs-no-move=""]', true);
                });
            }
            $(this).data("enabled", !enabled);
        });
        $('.card__edit-icons *').on('click', function () {
            var el = $(this).closest('.grid-stack-item');
            el.css('z-index', '7');
        });
        $('.card__edit-view .ddown__menu li').on('click', function () {
            $('.app-content').addClass('app-content--widgets-editable');
        });
    },
    compare: function () {
        var iCheckLoaded = false
        ready(".card--chart ins.iCheck-helper", function (element) {
            $(".card--chart [data-icheck]").on("ifChecked", function (event) {
                $(this).closest(".card").addClass("card--compare");
            }), $(".card--chart [data-icheck]").on("ifUnchecked", function (event) {
                $(this).closest(".card").removeClass("card--compare");
            });
        });


    },
    cardResizePlugin: function () {
        //gridstack resize plugin
        $.fn.cardResize = function (newWidth, newHeight, newX, newY) {

            var grid = $('.grid-stack').data('gridstack'),
                    cardContainer = this.closest('.grid-stack-item'),
                    originalX = this.attr('data-gs-x'),
                    originalY = this.attr('data-gs-y'),
                    originalW = this.attr('data-gs-width'),
                    originalH = this.attr('data-gs-height');
            if (newHeight === null && newX === null && newY === null) {
                grid.update(cardContainer, originalX, originalY, newWidth, originalH);
            } else if ((newX === null && newY === null)) {
                grid.update(cardContainer, originalX, originalY, newWidth, newHeight);
            } else if ((newY === null)) {
                grid.update(cardContainer, newX, originalY, newWidth, newHeight);
            } else {
                grid.update(cardContainer, newX, newY, newWidth, newHeight);
            }
        };
    },
    sliders: function () {

        var newsSlider = $('.card--news .card__slider'),
                cardNewsHeaderH = $('.card--news .card__header').height(),
                cardH = $('.card--news').height() - (cardNewsHeaderH + 12);
        var slick_options = {
            arrows: false,
            autoplay: false,
            dots: false,
            speed: 350
        };
        $('[data-slick="true"]').slick(slick_options);
        //custom buttons
        $('[data-slickPrev="true"]').on('click', function (e) {
            newsSlider.slick('slickPrev');
        });
        $('[data-slickNext="true"]').on('click', function (e) {
            newsSlider.slick('slickNext');
        });
        $('.card--news .slick-slide').css('height', cardH);
        $('.grid-stack').on('change', function (e, items) {

            setTimeout(function () {

                newsSlider.slick('setPosition');
                var cardNewsHeaderH = $('.card--news .card__header').height(),
                        cardH = $('.card--news').height() - (cardNewsHeaderH + 12);
                $('.card--news .slick-slide').css('height', cardH);
            }, 150);
        });
    },
    cardReadability: function () {


    },
    filterWidgets: function () {

        var options = {
            valueNames: [
                {data: ['widget']},
            ],
            searchClass: 'mdl-textfield__input',
            listClass: 'card-bar__items'
        };
        if ($('#widgets-edit').length) {
            var widgetSort = new List('widgets-list', options);
            $('#widget-search', document).on('keypress', function (e) {
                if (e.which == 13) {
                    return false;
                }
            });
        }
    },
    widgetActions: function () {
        $('div.grid-stack-item a.widget-edit').on('click', function (e) {
            e.preventDefault();
            handler = $(this);
            container = handler.parents('.grid-stack-item-content:first').find('.card__content:first');
            $.ajax({
                url: $(this).attr('href'),
                success: function (response) {
                    container.html(response);
                    handler.parents('.btn-group').removeClass('open');
                    handler.parents('.btn').removeClass('dropdown-toggle');
                }
            });
            return false;
        });
        $('div.grid-stack').on('click', 'i.widget-disable', function (e) {
            var modal = $('#delete-widget');
            var button = modal.find('a.btn-primary');
            button.attr('rel', $(this).attr('rel'));
            button.attr('href', $(this).attr('href'));
            var href = $(this).attr('href');
            var id = $(this).closest('.grid-stack-item').attr('id');

            var container = $('div.grid-stack-item[id=' + id + ']');
            var gridstack = container.parents('div.grid-stack:first').data('gridstack');

            $.ajax({
                url: href,
                success: function (response) {
                    gridstack.remove_widget(container);
                    $('a.add-widget[rel=' + id + ']').removeClass('hidden');
                    gridstack.batch_update();
                    gridstack.commit();
                    noty($.extend({}, APP.noti.successFM("lg", "full"), {
                        text: response.message
                    }));

                },
                error: function (error) {
                    noty($.extend({}, APP.noti.errorFM("lg", "full"), {
                        text: error.responseJSON.message
                    }));
                    gridstack.batch_update();
                    gridstack.commit();
                },
            });
            return false;
        });
        $('div.grid-stack-item').on('click', 'a.widget-refresh', function (e) {
            e.preventDefault();
            handler = $(this);
            container = handler.parents('.panel:first').find('.panel-body:first');
            $.ajax({
                url: handler.attr('href'),
                success: function (response) {
                    container.html(response);
                    handler.parents('.btn-group').removeClass('open');
                    handler.parents('.btn').removeClass('dropdown-toggle');
                }
            });
            return false;
        });
        $('.widget-selector').on('click', 'a.add-widget', function (e) {
            e.preventDefault();
            handler = $(this);
            container = $('div.grid-stack:first');
            var grid = $('div.grid-stack:first').data('gridstack');
            id = handler.attr('rel');

            $.ajax({
                url: handler.attr('href'),
                data: {from: $('#current-uri').val(), attributes: handler.attr('data-attributes')},
                type: 'POST',
                success: function (response) {
                    $widget = response;
                    grid.add_widget(response, handler.attr('x'), handler.attr('y'), handler.attr('width'), handler.attr('height'), false);
                    id = $(response).attr('id');
                    $('div.widget-selector a.add-widget[rel=' + id + ']').addClass('hidden');
                    $('.widget-actions').removeClass('hidden');
                },
                error: function (error) {
                    $('div.widget-selector').find('div.dropdown').removeClass('open');
                },
            });
            return false;
        });
    }
};
$(function () {
    //window.antaresGridstack = new AntaresGridstack();
    //antaresGridstack.init();
});
