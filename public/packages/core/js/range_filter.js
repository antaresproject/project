ready('.datatable-disable-selected-filter', function (element) {
    $(element).click(function (e) {
        e.preventDefault();
        var overlayed = $(this).closest('.tbl-c');
        if (!overlayed.length) {
            overlayed = $(this).closest('.card');
        }

        var element = $(this), handler = element.parent(), table = element.parents('.tbl-c').find('[data-table-init]'), container = element.closest('.ddown--filter-edit');
        var url = $(this).data('url') !== undefined && $(this).data('url').length > 0 ? $(this).data('url') : $('input.datatables-filter-destroy').val();

        $.ajax({
            url: url,
            method: 'POST',
            data: {
                route: handler.attr('route'),
                params: {
                    column: handler.attr('column'),
                    value: handler.attr('value')
                }
            },
            type: 'GET',
            success: function (response) {
                var logs = handler.closest('.card--logs');
                container.remove();
                table.dataTable().api().draw();
                $('.filter-container select').removeAttr('disabled');

                if (logs.length) {
                    var url = logs.find('.card-ctrls').data('url');
                    $.ajax({
                        url: url,
                        success: function (response) {
                            var childrens = $(response).closest('.widget-ajax-response').children().length;
                            if (childrens > 1) {
                                logs.closest('.grid-stack-item-content').find('.card__content').html($(response).closest('.widget-ajax-response').html());
                            } else {
                                var classname = $(response).attr('class').split(' ')[0], container = logs.closest('.' + classname);
                                if (container.length > 0) {
                                    container.html($(response).html());
                                }
                            }
                            $('.filter-container select[name=' + handler.attr('column') + ']').select2();
                        }
                    })
                }
            }
        });
        window.antaresEvents.emit('filters.delete', this);
        return false;
    });
});

$(document).ready(function () {
    ready('.add-daterange-button', function (element) {
        bindButton(element);
    });

    function bindButton(button) {
        $(button).on('click', function (e) {
            var container = $(button).closest('.filter-container');

            if (container.length > 0) {
                var column = container.find('.filter-config').attr('column');
                if ($(button).closest('.grid-stack-item-content').find('.swiper-container .dropjs-target[column="' + column + '"]').length > 0) {
                    // return false;
                }
            }


            var element = $(this);
            e.preventDefault();
            var overlay = $(this).closest('.grid-stack-item-content'), table = null;
            if (overlay.length <= 0) {
                overlay = $(this).closest('.tbl-c');
            }
            table = overlay.find('[data-table-init]');
            var handler = $(this), filterContainer = null, classname = null, column = null;
            var input = handler.closest('.ddown__sgl--range').find('input.daterangepicker-filter'), value = input.val();
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
                url: $('#filter-save-url').data('url'),
                type: 'POST',
                data: {
                    classname: classname,
                    params: {
                        column: column,
                        value: value
                    }
                },
                success: function (response) {

                    if (handler.closest('.drop-content').length) {
                        window.antaresEvents.emit('filters.update', element, table, response);
                    } else {
                        window.antaresEvents.emit('filters.append', element, table, response);
                    }
                },
            });
            return false;
        });
    }

});