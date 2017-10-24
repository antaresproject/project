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
            text: this.description,
            animation: false
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
function dtContextMenu() {
    getItems = function (trigger, e) {
        function hide() {
            setTimeout(function () {
                $('#context-menu-layer').hide();
                $('.context-menu-list').hide();
            }, 50);
        }
        function isURL(str) {
            var pattern = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
            return pattern.test(str)
        }
        function action($el) {
            var $href = $el.attr("href");
            if ($el.hasClass('bindable')) {
                hide();
                return $el.trigger("click");

            } else if ($el.hasClass('triggerable')) {
                var description = $el.data('description'), title = $el.data('title'), method = $el.data('http-method') || 'GET';
                if (description !== undefined && title !== undefined && $href !== undefined) {
                    hide();
                    (new ConfirmModal($href, title, description, method, $el)).open();
                    return false;
                }
                hide();
                return $el.trigger("click");
            } else {
                return isURL($href) && "#" !== $href && (window.location.href = $href)
            }
        }
        var element = {}, elements = {};
        if ($(trigger).is("tr"))
            var $target = $(trigger);
        else if ($(trigger).is("td"))
            var $target = $(trigger).closest("tr");
        return $target.closest(".tbl-c").find("tr.is-selected").length > 1 ? ($(trigger).closest(".tbl-c").find("#table-ma").closest(".ddown").find(".ddown__menu li").each(function (index, el) {

            var $el = $(el),
                    $name = $el.find("a").text(),
                    $text = $el.find("a").text(),
                    $icon = $el.find("a i:first").attr("class").split(" "),
                    $icon = $icon[1].split("-"),
                    $icon = $icon[1],
                    $href = $el.find("a").attr("href");

            element[$name] = {
                callback: function () {
                    return action($el.find("a"));
                },
                icon: $icon,
                name: $text
            }, elements = $.extend({}, element)
        }),
                {
                    items: elements
                }) : ($target.find(".mass-actions-menu a").each(function (index, el) {

            var $el = $(el), $name = $el.text(), $text = $el.html(), $icon = $el.data("icon");
            element[$name] = {
                callback: function () {
                    return action($el);
                },
                icon: $icon,
                name: $text
            }, elements = $.extend({}, element)
        }), {
            items: elements
        })
    }, $(".antares-table tbody tr").each(function (index, item) {
        $.contextMenu({
            selector: ".billevo-table tbody tr",
            build: function (trigger, e) {
                return getItems(trigger, e)
            },
            events: {
                show: function () {
                    var $self = $(this);
                    $self.closest(".tbl-c").find("tr.is-selected").length > 1 ? $self.closest(".tbl-c").find("#table-ma").attr("disabled", !1) : ($self.closest(".tbl-c").find("#table-ma").prop("disabled", !0), $(this).closest("table").find("tr").removeClass("is-selected"), $(this).addClass("is-selected"))
                }
            }
        }), $.contextMenu({
            selector: ".billevo-table td.dt-actions",
            build: function (trigger, e) {
                return getItems(trigger, e)
            },
            trigger: "left",
            events: {
                show: function () {
                    var $self = $(this);
                    $self.closest(".tbl-c").find("tr.is-selected").length > 1 ? $self.closest(".tbl-c").find("#table-ma").attr("disabled", !1) : ($self.closest(".tbl-c").find("#table-ma").prop("disabled", !0), $(this).closest("table").find("tr").removeClass("is-selected"), $(this).addClass("is-selected"))
                }
            },
        })
    })
}
dtContextMenu();
$(document).on("datatablesLoaded", function () {
    dtContextMenu();
});