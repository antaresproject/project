'use strict';
var instance = function () {};
var oTable;
instance.datatables = instance.datatables || {};
instance.prototype.init = function () {
    var self = this;
    (function datatables() {
        $(inject.id).on('init.dt', function () {
            $(this).closest('.tbl-c').LoadingOverlay('hide');
        });
        $(inject.id).closest('.tbl-c').LoadingOverlay('show');
        oTable = $(inject.id).DataTable(self.datatables.options);
        self.datatables.filterSearch();
        self.datatables.filterTags();
        self.datatables.selectMechanics();
        self.datatables.zeroData();

    }());
};
instance.prototype.datatables = {
    variables: inject.variables,
    options: inject.options,
    timeout: null,
    delay: (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })(),
    filterSearch: function () {
        var self = this;
        var input = $(this.variables.table.selector).closest('.tbl-c').find('.card-ctrls .mdl-textfield__input');
        input.closest('form').submit(function (e) {
            oTable.search($(this).find('input:text').val()).draw();
            return false;
        });
    },
    filterTags: function () {
//        $(this.variables.table.selector).closest('.tbl-c').find('.card-filter__sgl').on('click', 'i', function (e) {
//            $(this).closest('.card-filter__sgl').hide();
//        });
    },
    container: function () {
        return this.variables.table.closest('.tbl-c');
    },
    selectMechanics: function () {
        var $tblC = this.container(), $tableMa = this.container().find('#table-ma');
        if ($(this.variables.table.selector).data('massable') !== 0) {
            (function ($, c, b) {
                $.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "), function (d) {
                    a(d)
                });
                a("focusin", "focus" + b);
                a("focusout", "blur" + b);
                $.addOutsideEvent = a;
                function a(g, e) {
                    e = e || g + b;
                    var d = $(),
                            h = g + "." + e + "-special-event";
                    $.event.special[e] = {
                        setup: function () {
                            d = d.add(this);
                            if (d.length === 1) {
                                $(c).bind(h, f)
                            }
                        },
                        teardown: function () {
                            d = d.not(this);
                            if (d.length === 0) {
                                $(c).unbind(h)
                            }
                        },
                        add: function (i) {
                            var j = i.handler;
                            i.handler = function (l, k) {
                                l.target = k;
                                j.apply(this, arguments)
                            }
                        }
                    };
                    function f(i) {
                        $(d).each(function () {
                            var j = $(this);
                            if (this !== i.target && !j.has(i.target).length) {
                                j.triggerHandler(e, [i.target])
                            }
                        })
                    }
                }
            })(jQuery, document, "outside");
            $(this.variables.table.selector).closest('.tbl-c').selectable({
                delay: 100,
                distance: 100,
                stop: function (event, ui) {
                    $(this).find('.ui-selected').removeClass('ui-selected').addClass('is-selected');
                }
            });
            $(this.variables.table.selector).closest('.tbl-c').find('tbody').multiSelect({
                unselectOn: false,
                keepSelection: true,
                selected: 'is-selected',
            });
        }

        $(this.variables.table.selector).on('click', function () {
            var self = $(this);
            setTimeout(function () {
                if (self.find('tr.is-selected').length > 1) {
                    self.closest('.tbl-c').find('#table-ma').removeClass('is-disabled').removeAttr('disabled');
                } else {
                    self.closest('.tbl-c').find('#table-ma').addClass('is-disabled').attr('disabled', 'disabled');
                }
            }, 150);
        });
        $tableMa.on('click', function () {
            var
                    self = $(this),
                    isDisabled = self.hasClass('is-disabled');
            self.siblings('.ddown__content').css('display', isDisabled ? 'none' : 'block')
        });
        if (!$(this.variables.table.selector).hasClass('no-dblclick')) {
            $('body').on('dblclick', '.tbl-c ' + this.variables.table.selector + ' tbody tr', function () {

                var
                        anchor = $(this).find('.mass-actions-menu a:first'),
                        description = anchor.data('description'),
                        title = anchor.data('title'),
                        href = anchor.attr('href');

                if (anchor.hasClass('triggerable')) {
                    return anchor.click();
                }
                if (description !== undefined && title !== undefined && href !== undefined) {
                    (new ConfirmModal(href, title, description, $(this))).open();
                    return false;
                } else if (href !== undefined) {
                    $('body').LoadingOverlay('show');
                    window.location.href = href;
                }
            });
        }
        $tblC.bind("clickoutside", function (event) {
            $(this).find('tr').removeClass('is-selected');
            $tableMa.addClass('is-disabled');
        });
    },
    disableSelection: function () {

    },
    zeroData: function () {
        var bTable = $(this.variables.table.selector);
        bTable.closest('.tbl-c').LoadingOverlay('hide');
        var cell = bTable.find('tbody td');
        var zeroElement = bTable.find('tbody .dataTables_empty');
        if (cell.length === 1 && zeroElement.length) {
            bTable.closest('.tbl-c').addClass('tbl-c--zd');
        }
    }

};


$(function () {
    window.instance = new instance();
    window.instance.init();

});
