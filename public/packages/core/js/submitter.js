$(document).ready(function () {
    var button = $('.client-submit'), form = button.closest('form');
    if (form.length > 0) {
        form.keydown(function (e) {
            if (e.ctrlKey && e.keyCode == 13) {
                var config = $.extend({}, APP.swal.cb1Info(), {
                    title: button.data('title'),
                    text: ''
                });
                $('.sweet-container .sweet-alert').keydown(function (e) {
                    if (e.keyCode == 13) {
                        button.trigger('click');
                    }
                });
                swal(config, function (isConfirm) {
                    if (isConfirm) {
                        button.trigger('click');
                    }
                });
                e.preventDefault();
                e.stopPropagation();
            }
        });
    }

});