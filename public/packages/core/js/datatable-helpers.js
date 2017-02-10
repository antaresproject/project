$.fn.multiSelect = function (o) {
    var defaults = {
        multiselect: true,
        selected: 'is-selected',
        filter: ' > *',
        unselectOn: false,
        keepSelection: true,
        list: $(this).selector,
        e: null,
        element: null,
        start: false,
        stop: false,
        unselecting: false
    };

    return this.each(function (k, v) {
        var options = $.extend({}, defaults, o || {});
        $(document).on('mousedown', options.list + options.filter, function (e) {
            if (e.which == 1) {
                if (options.handle != undefined && !$(e.target).is(options.handle)) {
                }
                options.e = e;
                options.element = $(this);
                multiSelect(options);
            }
            return true;
        });

        if (options.unselectOn) {

            $(document).on('mousedown', options.unselectOn, function (e) {
                if (!$(e.target).parents().is(options.list) && e.which != 3) {
                    $(options.list + ' .' + options.selected).removeClass(options.selected);
                    if (options.unselecting != false) {
                        options.unselecting();
                    }
                }
            });

        }

    });


};
function multiSelect(o) {

    var target = o.e.target;
    var element = o.element;
    var list = o.list;

    if ($(element).hasClass('ui-sortable-helper')) {
        return false;
    }

    if (o.start != false) {
        var start = o.start(o.e, $(element));
        if (start == false) {
            return false;
        }
    }

    if (o.e.shiftKey && o.multiselect) {
        $(element).addClass(o.selected);
        var first = $(o.list).find('.' + o.selected).first().index();
        var last = $(o.list).find('.' + o.selected).last().index();

        if (last < first) {
            var firstHolder = first;
            first = last;
            last = firstHolder;
        }

        if (first == -1 || last == -1) {
            return false;
        }

        $(o.list).find('.' + o.selected).removeClass(o.selected);

        var num = last - first;
        var x = first;

        for (i = 0; i <= num; i++) {
            $(list).find(o.filter).eq(x).addClass(o.selected);
            x++;
        }
    } else if ((o.e.ctrlKey || o.e.metaKey) && o.multiselect) {
        if ($(element).hasClass(o.selected)) {


            $(element).removeClass('ui-selected');
            setTimeout(function () {
                $(element).removeClass(o.selected);
            }, 100);
        } else {
            $(element).addClass(o.selected);
        }
    } else {
        if (o.keepSelection && !$(element).hasClass(o.selected)) {
            $(list).find('.' + o.selected).removeClass(o.selected);
            $(element).addClass(o.selected);
        } else {
            $(list).find('.' + o.selected).removeClass(o.selected);
            $(element).addClass(o.selected);
        }

    }

    if (o.stop != false) {
        o.stop($(list).find('.' + o.selected), $(element));
    }

}
/*!
 Page length control via links for DataTables
 2014 SpryMedia Ltd - datatables.net/license
 */
(function (i, j, a) {
    if (a.fn.dataTable !== undefined) {
        a.fn.dataTable.LengthLinks = function (d) {
            var c = new a.fn.dataTable.Api(d),
                    f = c.settings()[0],
                    e = a("<div></div>").addClass(f.oClasses.sLength),
                    h = null;
            this.container = function () {
                return e[0]
            };
            e.on("click.dtll", "a", function (b) {
                b.preventDefault();
                c.page.len(1 * a(this).data("length")).draw(!1)
            });
            c.on("draw", function () {
                if (c.page.len() !== h) {
                    var b = f.aLengthMenu,
                            d = 2 === b.length && a.isArray(b[0]) ? b[1] : b,
                            g = 2 === b.length && a.isArray(b[0]) ? b[0] : b,
                            b = a.map(g, function (b, a) {
                                return b == c.page.len() ? '<a class="active" data-length="' +
                                        g[a] + '">' + d[a] + "</a>" : '<a data-length="' + g[a] + '">' + d[a] + "</a>"
                            });
                    e.html(f.oLanguage.sLengthMenu.replace("_MENU_", b.join(" ")));
                    h = c.page.len()
                }
            });
            c.on("destroy", function () {
                e.off("click.dtll", "a")
            })
        };
        a.fn.dataTable.ext.feature.push({
            fnInit: function (d) {
                return (new a.fn.dataTable.LengthLinks(d)).container()
            },
            cFeature: "L",
            sFeature: "LengthLinks"
        });
    }
})(window, document, jQuery);