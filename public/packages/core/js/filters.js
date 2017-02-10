ready('.datatables-card-filter i', function (element) {
    $(element).click(function (e) {
        e.preventDefault();
        var overlayed = $(this).closest('.tbl-c');
        if (!overlayed.length) {
            overlayed = $(this).closest('.card');
        }
        overlayed.LoadingOverlay('show');
        var element = $(this), handler = element.parent(), table = element.parents('.tbl-c').find('[data-table-init]'), container = element.closest('.ddown--filter-edit');
        var url = $(this).data('url') !== undefined && $(this).data('url').length > 0 ? $(this).data('url') : $('input.datatables-filter-destroy').val();

        $.ajax({
            url: url,
            data: {
                route: handler.attr('route'),
                params: {
                    column: handler.attr('column'),
                    value: handler.attr('value')
                }
            },
            type: 'POST',
            success: function (response) {
                var logs = handler.closest('.card--logs');
                container.remove();
                table.dataTable().api().draw();
                $('.filter-container select').removeAttr('disabled');
                overlayed.LoadingOverlay('hide');
                if (logs.length) {
                    logs.LoadingOverlay('show');
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
                            logs.LoadingOverlay('hide');
                            $('.filter-container select[name=' + handler.attr('column') + ']').select2();
                        }
                    })
                }
            }
        });
        return false;
    });
});
$(document).ready(function () {

    function inlineFilter(element) {
        var $li = $(element).closest('li');
        if ($li.hasClass('mdl-disabled')) {
            return false;
        }
        var $ul = $li.closest('ul.ddown__menu');
        $ul.LoadingOverlay('show');
        var container = $(element).closest('.ddown--filter-edit');
        var handler = container.find('.datatables-card-filter');
        var newValue = $(element).find('input.filter-value').val();
        var self = $(element);
        var table = self.closest('.tbl-c').find('[data-table-init]');
        $.ajax({
            url: $('input.datatables-filter-update').val(),
            data: {
                column: handler.attr('column'),
                old: handler.attr('value'),
                new : newValue
            },
            type: 'POST',
            success: function (response) {
                $ul.LoadingOverlay('hide');
                self.closest('.ddown--filter-edit').replaceWith(response);
                table.dataTable().api().draw();
            },
            complete: function (error) {
                $ul.LoadingOverlay('hide');
            }
        });
    }
    $('.card-filter .datatables-filter-item').on('click', function (e) {
        e.preventDefault();
        inlineFilter(this);
        return false;
    });
    $('.main-content').on('click', '.card-filter .datatables-filter-item', function (e) {
        e.preventDefault();
        inlineFilter(this);
        return false;
    });
    ready('.filter-multiple-select', function (element) {
        $(element).select2();
    });


});