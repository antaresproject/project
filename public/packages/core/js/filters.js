
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