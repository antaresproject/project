$(document).ready(function () {
    $('.main-content').on('click', '.filter-container .datatables-filter-item', function (e) {
        e.preventDefault();
        handler = $(this).find('a');
        id = handler.attr('rel');
        if ($('.datatables-card-filter[rel=' + id + ']').length > 0) {
            return false;
        }
        overlayed = $('.ddown-multi__submenu');
        value = $(this).find('.filter-value').val();
        column = $(this).parents('.filter-container:first').find('.filter-group-column').val();
        route = $('.filter-group-route').val();
        classname = $(this).parents('.filter-container:first').find('input.classname').attr('value');
        table = $(this).parents('.tbl-c').find('[data-table-init]');

        overlayed.LoadingOverlay('show');
        $.ajax({
            url: $('input.datatables-filter-store').val(),
            data: {
                route: route,
                classname: classname,
                params: {
                    column: column,
                    value: value
                }
            },
            type: 'POST',
            success: function (response) {
                $('.card-filter').append(response);
                overlayed.LoadingOverlay('hide');
                table.dataTable().api().draw();
            },
            error: function (error) {
                overlayed.LoadingOverlay('hide');
            }
        });
        return false;
    });
});
