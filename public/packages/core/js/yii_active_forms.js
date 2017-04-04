/*! Antares_Front-End - v0.7.1 - 2016-08-09 */!function ($) {
    var getAFValue = function (o) {
        var type, c = [];
        if (o.length)
            return "span" === o[0].tagName.toLowerCase() ? (o.find(":checked").each(function () {
                c.push(this.value);
            }), c.join(",")) : (type = o.attr("type"), "checkbox" === type || "radio" === type ? o.filter(":checked").val() : o.val());
    };
    $.fn.yiiactiveform = function (options) {
        return this.each(function () {
            var settings = $.extend({}, $.fn.yiiactiveform.defaults, options || {}), $form = $(this);
            void 0 === settings.validationUrl && (settings.validationUrl = $form.attr("action")),
                    $.each(settings.attributes, function (i) {
                        this.value = getAFValue($form.find("#" + this.inputID)), settings.attributes[i] = $.extend({}, {
                            validationDelay: settings.validationDelay,
                            validateOnChange: settings.validateOnChange,
                            validateOnType: settings.validateOnType,
                            hideErrorMessage: settings.hideErrorMessage,
                            inputContainer: settings.inputContainer,
                            errorCssClass: settings.errorCssClass,
                            successCssClass: settings.successCssClass,
                            beforeValidateAttribute: settings.beforeValidateAttribute,
                            afterValidateAttribute: settings.afterValidateAttribute,
                            validatingCssClass: settings.validatingCssClass,
                            errorCallback: settings.errorCallback
                        }, this);
                    }), $form.data("settings", settings), settings.submitting = !1;
            var validate = function (attribute, forceValidate) {
                forceValidate && (attribute.status = 2), $.each(settings.attributes, function () {
                    this.value !== getAFValue($form.find("#" + this.inputID)) && (this.status = 2, forceValidate = !0);
                }), forceValidate && (void 0 !== settings.timer && clearTimeout(settings.timer),
                        settings.timer = setTimeout(function () {
                            settings.submitting || $form.is(":hidden") || (void 0 === attribute.beforeValidateAttribute || attribute.beforeValidateAttribute($form, attribute)) && ($.each(settings.attributes, function () {
                                2 === this.status && (this.status = 3, $.fn.yiiactiveform.getInputContainer(this, $form).addClass(this.validatingCssClass));
                            }), $.fn.yiiactiveform.validate($form, function (data) {
                                var hasError = !1;
                                $.each(settings.attributes, function () {
                                    2 !== this.status && 3 !== this.status || (hasError = $.fn.yiiactiveform.updateInput(this, data, $form) || hasError);
                                }), void 0 !== attribute.afterValidateAttribute && attribute.afterValidateAttribute($form, attribute, data, hasError);
                            }, settings.errorCallback));
                        }, attribute.validationDelay));
            };
            if ($.each(settings.attributes, function (i, attribute) {
                this.validateOnChange && $form.find("#" + this.inputID).change(function () {
                    validate(attribute, !1);
                }).blur(function () {
                    2 !== attribute.status && 3 !== attribute.status && validate(attribute, !attribute.status);
                }), this.validateOnType && $form.find("#" + this.inputID).keyup(function () {
                    attribute.value !== getAFValue($(this)) && validate(attribute, !1);
                });
            }), settings.validateOnSubmit) {
                $form.on("mouseup keyup", ":submit", function () {
                    $form.data("submitObject", $(this));
                });
                var validated = !1;
                $form.submit(function () {
                    return validated ? (validated = !1, !0) : (void 0 !== settings.timer && clearTimeout(settings.timer),
                            settings.submitting = !0, void 0 === settings.beforeValidate || settings.beforeValidate($form) ? $.fn.yiiactiveform.validate($form, function (data) {
                        var hasError = !1;
                        if ($.each(settings.attributes, function () {
                            hasError = $.fn.yiiactiveform.updateInput(this, data, $form) || hasError;
                        }), $.fn.yiiactiveform.updateSummary($form, data), (void 0 === settings.afterValidate || settings.afterValidate($form, data, hasError)) && !hasError) {
                            validated = !0;
                            var $button = $form.data("submitObject") || $form.find(":submit:first");
                            return void ($button.length ? $button.click() : $form.submit());
                        }
                        settings.submitting = !1;
                    }, settings.errorCallback) : settings.submitting = !1, !1);
                });
            }
            $form.bind("reset", function () {
                setTimeout(function () {
                    $.each(settings.attributes, function () {
                        this.status = 0;
                        var $error = $form.find("#" + this.errorID), $container = $.fn.yiiactiveform.getInputContainer(this, $form);
                        $container.removeClass(this.validatingCssClass + " " + this.errorCssClass + " " + this.successCssClass),
                                $error.html("").hide(), this.value = getAFValue($form.find("#" + this.inputID));
                    }), $form.find("label, :input").each(function () {
                        $(this).removeClass(settings.errorCss);
                    }), $("#" + settings.summaryID).hide().find("ul").html(""), void 0 === settings.focus || window.location.hash || $form.find(settings.focus).focus();
                }, 1);
            }), void 0 === settings.focus || window.location.hash || $form.find(settings.focus).focus();
        });
    }, $.fn.yiiactiveform.getInputContainer = function (attribute, form) {
        return void 0 === attribute.inputContainer ? form.find("#" + attribute.inputID).closest("div") : form.find(attribute.inputContainer).filter(':has("#' + attribute.inputID + '")');
    }, $.fn.yiiactiveform.updateInput = function (attribute, messages, form) {
        attribute.status = 1;
        var $error, $container, hasError = !1, $el = form.find("#" + attribute.inputID), errorCss = form.data("settings").errorCss;
        return $el.length && (hasError = null !== messages && $.isArray(messages[attribute.id]) && messages[attribute.id].length > 0,
                $error = form.find("#" + attribute.errorID), $container = $.fn.yiiactiveform.getInputContainer(attribute, form),
                $container.removeClass(attribute.validatingCssClass + " " + attribute.errorCssClass + " " + attribute.successCssClass),
                $container.find("label, :input").each(function () {
            $(this).removeClass(errorCss);
        }), hasError ? ($error.html('<p>' + messages[attribute.id][0] + '</p>'), $container.addClass(attribute.errorCssClass)) : (attribute.enableAjaxValidation || attribute.clientValidation) && $container.addClass(attribute.successCssClass),
                attribute.hideErrorMessage || $error.toggle(hasError), attribute.value = getAFValue($el)),
                hasError;
    }, $.fn.yiiactiveform.updateSummary = function (form, messages) {
        var settings = $(form).data("settings"), content = "";
        if (void 0 !== settings.summaryID) {
            if (messages) {
                var summaryAttributes = [];
                for (var i in settings.attributes)
                    settings.attributes[i].summary && summaryAttributes.push(settings.attributes[i].id);
                $.each(settings.attributes, function () {
                    $.inArray(this.id, summaryAttributes) !== -1 && $.isArray(messages[this.id]) && $.each(messages[this.id], function (j, message) {
                        content = content + "<li>" + message + "</li>";
                    });
                });
            }
            $("#" + settings.summaryID).toggle("" !== content).find("ul").html(content);
        }
    }, $.fn.yiiactiveform.validate = function (form, successCallback, errorCallback) {
        var $form = $(form), settings = $form.data("settings"), needAjaxValidation = !1, messages = {};
        if ($.each(settings.attributes, function () {
            var value, msg = [];
            void 0 === this.clientValidation || !settings.submitting && 2 !== this.status && 3 !== this.status || (value = getAFValue($form.find("#" + this.inputID)),
                    this.clientValidation(value, msg, this), msg.length && (messages[this.id] = msg)),
                    !this.enableAjaxValidation || msg.length || !settings.submitting && 2 !== this.status && 3 !== this.status || (needAjaxValidation = !0);
        }), !needAjaxValidation || settings.submitting && !$.isEmptyObject(messages))
            return void (settings.submitting ? setTimeout(function () {
                successCallback(messages);
            }, 200) : successCallback(messages));
        var $button = $form.data("submitObject"), extData = "&" + settings.ajaxVar + "=" + $form.attr("id");
        $button && $button.length && (extData += "&" + $button.attr("name") + "=" + $button.attr("value")),
                $.ajax({
                    url: settings.validationUrl,
                    type: $form.attr("method"),
                    data: $form.serialize() + extData,
                    dataType: "json",
                    success: function (data) {
                        null !== data && "object" == typeof data ? ($.each(settings.attributes, function () {
                            this.enableAjaxValidation || delete data[this.id];
                        }), successCallback($.extend({}, messages, data))) : successCallback(messages);
                    },
                    error: function () {
                        void 0 !== errorCallback && errorCallback();
                    }
                });
    }, $.fn.yiiactiveform.getSettings = function (form) {
        return $(form).data("settings");
    }, $.fn.yiiactiveform.defaults = {
        ajaxVar: "ajax",
        validationUrl: void 0,
        validationDelay: 200,
        validateOnSubmit: !1,
        validateOnChange: !0,
        validateOnType: !1,
        hideErrorMessage: !1,
        inputContainer: void 0,
        errorCss: "error",
        errorCssClass: "error",
        successCssClass: "success",
        validatingCssClass: "validating",
        summaryID: void 0,
        timer: void 0,
        beforeValidateAttribute: void 0,
        afterValidateAttribute: void 0,
        beforeValidate: void 0,
        afterValidate: void 0,
        focus: void 0,
        attributes: [],
        errorCallback: void 0
    };
}(jQuery);