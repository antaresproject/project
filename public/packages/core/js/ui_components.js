$(function () {
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
    $('body').on('click', 'a.add-widget', function (e) {
        e.preventDefault();
        var handler = $(this), grid = $('div.grid-stack:first').data('gridstack'), id = handler.attr('rel');
        $.ajax({
            url: handler.attr('href'),
            data: {from: $('#current-uri').val(), attributes: handler.attr('data-attributes')},
            type: 'POST',
            success: function (response) {
                grid.addWidget(response, handler.attr('x'), handler.attr('y'), handler.attr('width'), handler.attr('height'), false);
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
});
