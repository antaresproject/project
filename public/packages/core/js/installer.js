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
        $.get(url).then(function (response) {
            if (parseInt(response.progress) > parseInt($progress.text())) {
                $progress.text(response.progress);
            }
            if (response.redirect) {
                window.location.replace(response.redirect);
            } else {
                var text = response.console.replace(/\r\n/g, "\n");
                if (response.hash !== lastHash) {
                    editor.getDoc().setValue(text);
                    $console.scrollTop($console.get(0).scrollHeight);
                    lastHash = response.hash;
                }
                setTimeout(refresh, 1000);
            }
        });
    })();


})(jQuery);