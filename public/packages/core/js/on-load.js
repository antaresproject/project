function AjaxLoader() {
    this.reInit = function () {
        AntaresForms.elements.select(),
                AntaresForms.elements.tooltip(),
                AntaresForms.elements.rangeSlider(),
                AntaresForms.elements.readOnly(),
                componentHandler.upgradeAllRegistered()
    },
            this.reValidate = function () {

            }
}
$(document).ready(function () {
    if ($.fn.dataTableExt !== undefined) {
        $.fn.dataTableExt.sErrMode = "none";
    }
    $('.app-install .app-content__footer button, .app-install .app-content__footer a').on('click', function () {

        if ($('.app-install form')[0].checkValidity()) {
            $(this).addClass('is-refreshing');
            $('.app-install').LoadingOverlay('show');
        }

        return true;
    });
    $.ajaxSetup({
        cache: false,
        timeout: 120000,
        complete: function (xhr, status) {
            if (status === 401) {
                window.location.href = '/';
            } else {
                try {
                    AntaresForms.init();
                    APP.init();
                    componentHandler.upgradeAllRegistered();
                    var ajaxHandler = new AjaxLoader;
                    ajaxHandler.reInit(), ajaxHandler.reValidate();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    });
});
(function (win) {
    'use strict';
    var listeners = [],
            doc = win.document,
            MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
            observer;

    function ready(selector, fn) {
        // Store the selector and callback to be monitored
        listeners.push({
            selector: selector,
            fn: fn
        });
        if (!observer) {
            // Watch for changes in the document
            observer = new MutationObserver(check);
            observer.observe(doc.documentElement, {
                childList: true,
                subtree: true
            });
        }
        // Check if the element is currently in the DOM
        check();
    }

    function check() {
        // Check the DOM for elements matching a stored selector
        for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
            listener = listeners[i];
            // Query for elements matching the specified selector
            elements = doc.querySelectorAll(listener.selector);
            for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
                element = elements[j];
                // Make sure the callback isn't invoked with the 
                // same element more than once
                if (!element.ready) {
                    element.ready = true;
                    // Invoke the callback with the element
                    listener.fn.call(element, element);
                }
            }
        }
    }

    // Expose `ready`
    win.ready = ready;

})(this);
var ConfirmModal = (function () {
    var cachedModal;

    function ConfirmModal(url, title, description, httpMethod, from) {
        if (httpMethod === void 0) {
            httpMethod = 'GET';
        }
        this.url = url;
        this.title = title;
        this.description = description;
        this.httpMethod = httpMethod;
        this.from = from;
    }


    ConfirmModal.prototype.getConfig = function () {
        return $.extend({}, APP.swal.cb1Warning(), {
            title: this.title,
            text: this.description
        });
    };
    ConfirmModal.prototype.getModal = function () {
        if (cachedModal === undefined) {
            cachedModal = $('.sweet-container');
        }

        return cachedModal;
    };
    ConfirmModal.prototype.getFooter = function () {
        return this.getModal().find('.footer');
    };
    ConfirmModal.prototype.isGetHttpMethod = function () {
        return this.httpMethod === 'GET';
    },
            ConfirmModal.prototype.getTargetHttpMethod = function () {
                return this.isGetHttpMethod() ? 'GET' : 'POST';
            },
            ConfirmModal.prototype.buildForm = function () {

                var $footer = this.getFooter();

                var $methodInput = $('<input/>', {
                    name: '_method',
                    type: 'hidden',
                    value: this.httpMethod
                });

                var $form = $('<form/>', {
                    action: this.url,
                    method: this.getTargetHttpMethod()
                }).html($footer.wrap('<div/>').parent().html()).append($methodInput);

                $footer.replaceWith($form);

                $form.on('click', '.sweet-cancel', function () {
                    APP.swal.close();

                    return false;
                });
            };

    ConfirmModal.prototype.post = function (path, params, method) {
        method = method || "post";
        var form = $('<form/>', {
            action: path,
            method: method
        });
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var hiddenField = $('<input/>', {
                    type: 'hidden',
                    name: 'attr[]',
                    value: params[key]
                });
                form.append(hiddenField);
            }
        }
        $('body').append(form);
        form.submit();
    };
    ConfirmModal.prototype.open = function () {

        var self = this;
        var isMassAction = self.from.hasClass('mass-action');
        if (isMassAction) {
            var selected = self.from.closest('.tbl-c').find('table tbody tr.is-selected div.mass-actions-menu');
            if (selected.length <= 0) {
                return false;
            }
        }
        swal(this.getConfig(), function (isConfirm) {
            if (isConfirm) {
                self.getModal().LoadingOverlay('show');
                if (self.isGetHttpMethod()) {
                    if (isMassAction) {
                        var params = {};
                        selected.each(function (index, item) {
                            params[index] = $(item).attr('data-id');
                        });
                        return self.post(self.from.attr('href'), params, 'POST');

                    } else {
                        window.location.href = self.url;
                    }
                }
            }
        });

        if (!this.isGetHttpMethod()) {
            this.buildForm();
        }
    };

    return ConfirmModal;
}());

$(document).ready(function () {
    ready('.filter-multiple-select', function (element) {
        $(element).select2();
    });
    ready('.card--logs .card__content', function (element) {
        $(element).closest('.card--logs').find('.filter-container select').select2();
    });
    ready('#notification-counter', function (element) {
        var $sidebarNotifications = $('aside.sidebar--notifications');

        $sidebarNotifications.find('.sidebar__footer div').on('click', function (e) {
            e.preventDefault();

            $.ajax({
                url: $(this).data('url'),
                success: function () {
                    $sidebarNotifications.find('.sidebar__content .sidebar__list').html();
                    $sidebarNotifications.find('.sidebar__footer').addClass('hidden');
                    $sidebarNotifications.find('.badge').html('0');
                    $('.notification-counter').html('0');
                }
            });

            return false;
        });

        var $sidebarAlerts = $('aside.sidebar--alerts');

        $sidebarAlerts.find('.sidebar__footer div').on('click', function (e) {
            e.preventDefault();

            $.ajax({
                url: $(this).data('url'),
                success: function () {
                    $sidebarAlerts.find('.sidebar__content .sidebar__list').html();
                    $sidebarAlerts.find('.sidebar__footer').addClass('hidden');
                    $sidebarAlerts.find('.badge').html('0');
                }
            });

            return false;
        });

        var url = $('.sidebar--notifications').data('url');

        $.ajax({
            url: url,
            success: function (response) {
                var
                    notifications = response.notifications.items;

                if (notifications.length > 0) {
                    $sidebarNotifications.find('.sidebar__footer').removeClass('hidden');
                    $sidebarNotifications.find('.sidebar__content .sidebar__list').html('').append(notifications.join(''));
                }

                $('.sidebar__header .notification-counter').html(response.notifications.count);

                $('#notification-counter')
                    .html(response.notifications.count)
                    .attr('data-count', response.notifications.count);

                var alerts = response.alerts.items;

                $('#main-alerts').parent().find('span.badge').html(response.alerts.count);

                $sidebarAlerts.find('.badge').html(response.alerts.count);

                if (alerts.length > 0) {
                    $sidebarAlerts.find('.sidebar__footer').removeClass('hidden');
                    $sidebarAlerts.find('.sidebar__content .sidebar__list').html('').append(alerts.join(''))
                }

                $('.notification-item .flex-block__close', document).on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var
                        handler = $(this),
                        url = $('.sidebar .sidebar__content:first').data('delete'),
                        id = handler.closest('.notification-item').data('id'),
                        badge = handler.closest('.sidebar').find('.badge'),
                        count = parseInt(badge.text());

                    handler.closest('.flex-block').remove();

                    $.ajax({
                        url: url,
                        method: 'POST',
                        data: {id: id},
                        success: function (response) {
                            if (count <= 0) {
                                return
                            }
                            badge.text(count - 1);
                            if ((count - 1) <= 0) {
                                $('.sidebar__footer').addClass('hidden');
                            }
                        },
                        complete: function () {
                            return false;
                        },
                        always: function () {
                            return false;
                        }
                    });
                });

                $('aside.sidebar--notifications .sidebar__header-right .btn-more', document).on('click', function (e) {
                    $sidebarNotifications.removeClass('sidebar--open');
                });
            }
        });
    });
    ready('.disabled-delete-brand', function (element) {
        $(element).click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            var handler = $(this);
            swal($.extend({}, APP.swal.cb1Info(), {
                title: handler.attr('data-disabled'),
                text: '',
                html: false,
                cancelButtonText: 'OK',
                showCancelButton: true,
                showConfirmButton: false,
                closeOnCancel: true
            }));
            return false;
        });
    });

    $('.delete-logs-menu-breadcrumb', document).click(function (e) {
        e.preventDefault();
        if ($('.delete-logs-modal').length) {
            var handler = $('.delete-logs-modal');
            APP.modal.init({
                element: handler,
                title: handler.data('title')
            });
            var breadcrumbs = $(this).closest('.breadcrumbs');
            breadcrumbs.find('.is-active').removeClass('is-active');
            breadcrumbs.find('.ddown--open').removeClass('ddown--open');
        }
        return false;
    });
    $('.mdl-close-modal', document).click(function (e) {
        $.modal.close();
        return false;
    });
    try {
        $(".daterangepicker-delete-logs").daterangepicker({
            datepickerOptions: {
                numberOfMonths: 3,
                mirrorOnCollision: false,
            },
            dateFormat: 'yy-mm-dd',
        });
    } catch (err) {
        console.log(err);
    }
    $('.daterangepicker-delete-logs', document).change(function (e) {
        if ($(this).val().length) {
            $('.logs-confirm-delete').removeAttr('disabled');
        } else {
            $('.logs-confirm-delete').attr('disabled', 'disabled');
        }
        return false;
    });
    $('.logs-confirm-delete', document).click(function (e) {
        var handler = $(this);
        e.preventDefault();
        swal($.extend({}, APP.swal.cb1Warning(), {
            title: handler.data('title'),
            text: '',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No',
            closeOnConfirm: false,
            closeOnCancel: true
        }), function (isConfirm) {
            if (isConfirm) {
                return handler.closest('form').submit();
            }
        });
        return false;
    });
    $('.mail-change-driver', document).on("change", function (e) {
        var handler = $(this), driver = handler.val();

        handler.closest('form').find('.mail-control').each(function (index, item) {
            var element = $(item).closest('.form-block'), desc = $('.form-block-desc[role="' + element.attr('role') + '"]');
            if (element.attr('role') === driver) {
                element.removeClass('hidden-block');
                desc.removeClass('hidden-block');
            } else {
                element.addClass('hidden-block');
                desc.addClass('hidden-block');
            }

        });
        return false;
    });


    $("#main-notifications").on("click", function (e) {
        var sidebarNotifications = ($("#main-notifications"), $(".sidebar--notifications")), openClass = ($(".sidebar--notifications #close-sidebar"), "sidebar--open");
        e.preventDefault();
        e.stopPropagation(), sidebarNotifications.addClass(openClass);
        var handler = $(this);
        $.ajax({
            url: handler.data('url'),
            method: 'POST',
            success: function () {
                $('#notification-counter').attr('data-count', 0)
                $('#notification-counter').text(0);
                return false;
            },
            complete: function () {
                return false;
            },
            always: function () {
                return false;
            }
        });
        return false;
    });
    $("#main-alerts").on("click", function (e) {
        var sidebarNotifications = ($("#main-alerts"), $(".sidebar--alerts")), openClass = ($(".sidebar--alerts #close-sidebar"), "sidebar--open");
        e.preventDefault();
        e.stopPropagation(), sidebarNotifications.addClass(openClass);
        var handler = $(this);
        $.ajax({
            url: handler.data('url'),
            method: 'POST',
            success: function () {
                $('#main-alerts').parent().find('span.badge').text(0);
            },
            complete: function () {
                return false;
            },
            always: function () {
                return false;
            }
        });
        return false;
    });



    var sidebar = ($("#main-alerts"), $(".sidebar--alerts")), openClass = ($(".sidebar--alerts #close-sidebar"), "sidebar--open");
    $(document).on("click", function (e) {
        sidebar.removeClass(openClass);
    });
    $("#main-alerts").on("click", function (e) {
        e.stopPropagation(), sidebar.addClass(openClass);
    });
    $(".sidebar--alerts").on("click", "#close-sidebar", function (e) {
        e.preventDefault(), e.stopPropagation(), sidebar.removeClass(openClass);
    });


    $('.confirm', document).on('click', function (e) {
        var
                $this = $(this),
                title = $this.data('title'),
                description = $this.data('description'),
                method = $this.data('http-method') || 'GET',
                url = $this.attr('href');

        (new ConfirmModal(url, title, description, method, $this)).open();

        e.preventDefault();
        e.stopPropagation();
    });
    $('.delete-activity-log', document).on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        alert(1);
        return true;
    });

    $('.main-content').on('click', '.btn.is-disabled', function (e) {
        e.preventDefault();
        return false;
    });
    $('.sidebar').perfectScrollbar();
    $('#system-report').on('click', function (e) {
        e.preventDefault();
        handler = $(this);
        swal($.extend({}, APP.swal.cb1Warning(), {
            title: handler.attr('title'),
            text: '',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonText: 'No',
            closeOnConfirm: false,
            closeOnCancel: true
        }), function (isConfirm) {
            if (isConfirm) {
                $('.sweet-alert').divPreload('on');

                $.ajax({
                    url: handler.attr('rel'),
                    dataType: 'json',
                    success: function (response) {
                        $('.sweet-alert').divPreload('off');
                        window.location.href = response.redirect;
                        APP.swal.close();
                    },
                    error: function (error) {
                        $('.sweet-alert').divPreload('off');
                        swal($.extend({}, APP.swal.cb1Error(), {
                            title: error.responseText,
                            text: '',
                            showConfirmButton: false,
                            showCancelButton: true,
                            closeOnConfirm: false,
                            closeOnCancel: true
                        }));

                    }
                });
            }

        });
        return false;
    });
    ready('.jquery-modal .card__header-right', function (item) {
        var element = $(item);
        element.find('.zmdi-window-maximize').remove();
        $('<i/>').attr({
            class: 'card-enlarge zmdi zmdi-window-restore'
        }).on('click', function () {
            var card = $(this).closest('.card--enlarged');
            var id = card.data('id');
            var previewUrl = card.data('preview-url');
            $.modal.close();
            var gridStackItem = $('.grid-stack-item[id=' + id + ']'), overlayPreloader = gridStackItem.find('.grid-stack-item-content');
            overlayPreloader.LoadingOverlay('show');
            //overlayPreloader.divPreload('on');
            $.ajax({
                url: previewUrl,
                data: {
                    width: gridStackItem.data('gs-width'),
                    height: gridStackItem.data('gs-height'),
                    attributes: $('.widget-selector').find('a[rel=' + id + ']').data('attributes')
                },
                method: 'POST',
                success: function (response) {
                    var count = $(response).find('.widget-ajax-response').length;
                    var content = (count > 1) ? $(response).find('.widget-ajax-response:last') : $(response).find('.widget-ajax-response');
                    if (!content.length) {
                        content = response;
                    }
                    if (gridStackItem.find('.card__content').length > 0) {
                        if ($(content).find('.card__content').length > 0) {
                            overlayPreloader.find('.card__content').html($(content).find('.card__content').html());
                        } else {
                            gridStackItem.find('.card__content').html(content);
                        }
                    } else {
                        gridStackItem.find('.grid-stack-item-content').html(content);
                    }
                    overlayPreloader.LoadingOverlay('hide');
                }
            });
        }).appendTo(element);
    });
    ready('.card-enlarge.zmdi-window-maximize', function (element) {
        $(element).on('click', function () {
            if ($(this).closest('.jquery-modal.current').length) {
                return false;
            }
            var bigCard = $('div.card--enlarged[data-id=' + $(this).closest('.grid-stack-item').attr('id') + ']'), width = bigCard.data('width'), height = bigCard.data('height'), id = $(this).closest('.grid-stack-item').attr('id'), previewUrl = bigCard.data('preview-url');
            if (!bigCard.length) {
                return false;
            }
            bigCard.modal();
            bigCard.LoadingOverlay('show');
            $.ajax({
                url: previewUrl,
                data: {
                    width: width === undefined ? false : width,
                    height: height === undefined ? false : height,
                    attributes: $('.widget-selector').find('a[rel=' + id + ']').data('attributes')
                },
                method: 'POST',
                success: function (response) {
                    var count = $(response).find('.widget-ajax-response').length;
                    var content = (count > 1) ? $(response).find('.widget-ajax-response:last') : $(response).find('.widget-ajax-response');
                    if ($(response).find('.card__content').length > 0) {
                        bigCard.html(response);
                    } else {
                        bigCard.find('.card__content').html(response);
                    }
                },
                complete: function () {
                    bigCard.LoadingOverlay('hide');
                }
            });
            return false;
        });
    });
    if ($('.activity-logger-filter').length) {
        $('.activity-logger-filter').select2();
    }


});
(function ($, undefined) {
    var _defaults = {
        color: "rgba(255, 255, 255, 0.5)",
        maxSize: "100px",
        minSize: "20px",
        resizeInterval: 0,
        size: "50%",
        preloader: false
    };

    $.LoadingOverlaySetup = function (settings) {
        $.extend(true, _defaults, settings);
    };

    $.LoadingOverlay = function (action, options) {
        switch (action.toLowerCase()) {
            case "show":
                var settings = $.extend(true, {}, _defaults, options);
                _Show("body", settings, true);
                break;

            case "hide":
                _Hide("body", options);
                break;
        }
    };

    $.fn.LoadingOverlay = function (action, options) {
        switch (action.toLowerCase()) {
            case "show":
                var settings = $.extend(true, {}, _defaults, options);
                return this.each(function () {
                    _Show(this, settings, false);
                });

            case "hide":
                return this.each(function () {
                    _Hide(this, options);
                });
        }
    };


    function _Show(container, settings, fixed) {
        container = $(container);
        var count = container.data("LoadingOverlayCount");
        if (count === undefined)
            count = 0;
        if (count == 0) {
            var overlay = $("<div>", {
                class: "loadingoverlay",
                css: {
                    "background-color": settings.color,
                    "background-image": (settings.image ? "url(" + settings.image + ")" : "none"),
                    "background-position": "center center",
                    "background-repeat": "no-repeat"
                }
            });

            if (fixed) {
                overlay.css({
                    "position": "fixed",
                    "top": 0,
                    "left": 0,
                    "width": "100%",
                    "height": "100%",
                    "z-index": "999"
                });
            } else {
                overlay.css({
                    "position": "absolute",
                    "top": 0,
                    "left": 0,
                    "z-index": "999"
                });
                _CalculateSize(container, overlay, settings);
                if (container.css("position") == "static") {
                    overlay.css({
                        "top": container.position().top + parseInt(container.css("margin-top")) + parseInt(container.css("border-top-width")),
                        "left": container.position().left + parseInt(container.css("margin-left")) + parseInt(container.css("border-left-width"))
                    });
                }
                if (settings.resizeInterval > 0) {
                    var resizeIntervalId = setInterval(function () {
                        _CalculateSize(container, overlay, settings);
                    }, settings.resizeInterval);
                    container.data("LoadingOverlayResizeIntervalId", resizeIntervalId);
                }
            }
            if (settings.preloader) {
                $($('#preloader-container').html()).appendTo(overlay);
            }
            overlay.appendTo(container);
            clone = $('.spinner-container').clone();
            $(clone).css('display', 'block').appendTo(overlay)
        }
        count++;
        container.data("LoadingOverlayCount", count);

        $('.loadingoverlay').each(function (index, item) {
            height = $(item).height();
            if (height < 100) {
                $(item).find('.spinner-container img').css('height', height + 'px');
            }

        });
    }

    function _Hide(container, force) {
        container = $(container);
        var count = container.data("LoadingOverlayCount");
        if (count === undefined)
            return;
        count--;
        if (force || count <= 0) {
            var resizeIntervalId = container.data("LoadingOverlayResizeIntervalId");
            if (resizeIntervalId)
                clearInterval(resizeIntervalId);
            container.removeData("LoadingOverlayCount").removeData("LoadingOverlayResizeIntervalId");
            container.children(".loadingoverlay").remove();
        } else {
            container.data("LoadingOverlayCount", count);
        }
    }

    function _CalculateSize(container, overlay, settings) {
        var size = "auto";
        if (settings.size && settings.size != "auto") {
            var size = Math.min(container.innerWidth(), container.innerHeight()) * parseFloat(settings.size) / 100;
            if (settings.maxSize && size > parseInt(settings.maxSize))
                size = parseInt(settings.maxSize) + "px";
            if (settings.minSize && size < parseInt(settings.minSize))
                size = parseInt(settings.minSize) + "px";
        }
        $(overlay).css({
            "width": container.innerWidth(),
            "height": container.innerHeight(),
            "background-size": size
        });
    }

}(jQuery));