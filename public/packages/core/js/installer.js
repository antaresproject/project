(function ($) {
    var $progress = $('#progress'), $console = $('#install-progress-console #console'), url = $console.data('url'),
            lastHash = '',
            editor = CodeMirror.fromTextArea(document.getElementById("console"), {
                lineNumbers: false,
                mode: "javascript",
                theme: 'cobalt'
            });

    $console.perfectScrollbar();

    (function refresh() {
        $.ajax({
            url: url,
            success: function (response) {
                if (parseInt(response.progress) > 30) {
                    $('.stop-and-back').remove();
                }
                if (parseInt(response.progress) > parseInt($progress.text())) {
                    $progress.text(response.progress);
                }
                if (response.redirect) {
                    window.location.replace(response.redirect);
                } else {
                    var text = '';
                    if (response.console !== undefined) {
                        var text = response.console.replace(/\r\n/g, "\n");

                    } else {
                        if ($(response).find('.login-box').length) {
                            window.location.replace('/');
                        }
                    }
                    editor.getDoc().setValue(text);
                    editor.execCommand('goDocEnd');
                    setTimeout(refresh, 1000);

                }
            },
            error: function () {
                window.location.replace('/');
            }
        });
    })();

})(jQuery);