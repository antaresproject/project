$(document).ready(function () {

    $.ajax({
        url: $('.auto-send-url').val(),
        global: false,
        type: 'POST',
        data: {
            'url': $('.auto-send-localization').val(),
            'description': $('.auto-send-description').val(),
            'src': $('.exception-container').html(),
            'autosend': 1
        },
        async: true,
        success: function (response) {
            var attributes = {
                text: 'Auto error notification has been send.',
                dismissQueue: true,
                layout: 'bottomRight',
                maxVisible: 10,
                timeout: 3000,
                animation: {
                    open: 'animated',
                    close: 'animated',
                    easing: 'swing',
                    speed: 500
                }
            };
            noty($.extend({}, APP.noti.successFM("lg", "full"), attributes));

        },
        error: function (error) {
            var attributes = {
                text: 'Auto error notification has not been send.',
                dismissQueue: true,
                layout: 'bottomRight',
                maxVisible: 10,
                timeout: 3000,
                animation: {
                    open: 'animated',
                    close: 'animated',
                    easing: 'swing',
                    speed: 500
                }
            };
            noty($.extend({}, APP.noti.errorFM("lg", "full"), attributes));
        }
    });
});
