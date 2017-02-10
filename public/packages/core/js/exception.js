var traceReg = new RegExp("(^|\\s)trace-file(\\s|$)");
var collapsedReg = new RegExp("(^|\\s)collapsed(\\s|$)");
var e = document.getElementsByTagName("div");
for (var j = 0, len = e.length; j < len; j++) {
    if (traceReg.test(e[j].className)) {
        e[j].onclick = function () {
            var trace = this.parentNode.parentNode;
            if (collapsedReg.test(trace.className))
                trace.className = trace.className.replace("collapsed", "expanded");
            else
                trace.className = trace.className.replace("expanded", "collapsed");
        }
    }
}
/*]]>*/
$(document).ready(function () {
    $('#app-wrapper').on('click', '.open-modal', function (e) {
        handler = $(this);
        target = handler.attr('data-target');
        APP.modal.init({
            element: target,
            title: $(target).attr('data-title'),
            buttons: {
                'Send': {
                    type: 'primary',
                    action: function () {
                        form = $('.modal-container form');
                        $('<input>').attr({
                            type: 'hidden',
                            name: 'src',
                            value: $('.exception-container').html()
                        }).appendTo(form);
                        form.submit();
                    }
                },
                'Close': {
                    type: 'default',
                    action: function () {
                        $.modal.close();
                    }
                }
            }
        });
        $('.modal-container').html('');
        handler = $(target);
        handler.LoadingOverlay('show');
        $.ajax({
            url: handler.attr('rel'),
            data: {location: window.location.href},
            success: function (response) {
                handler.LoadingOverlay('hide');
                $('.modal-container').html(response);
            },
            error: function (error) {
                $.modal.close();
                noty($.extend({}, APP.noti.errorFM("lg", "full"), {text: handler.attr('data-error')}));
            }
        });
        return false;
    });
});