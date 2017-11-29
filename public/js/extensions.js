$(document).ready(function () {
    $('.tbl-c').on('dblclick', 'td', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $(document).on('click', '.component-error-modal', function (e) {
        var
            $this = $(this),
            title = $this.data('title'),
            errors = $this.data('errors');

        swal({
            title: title,
            type: 'error',
            html: '<span class="text-left pl20">' + errors.join('<br>') + '</span>',
            closeOnConfirm: false,
            customClass: 'CB CB--type1',
            allowEscapeKey: false,
            animation: false,
            allowOutsideClick: false
        });
    });

    $(document).on('click', '.component-prompt-modal', function (e) {
        var
                $this = $(this),
                url = $this.attr('href'),
                title = $this.data('title'),
                description = $this.data('description'),
                actionUrl = $this.data('action-url'),
                isOnBottom = true,
                stopPreview = false;

        swal({
            title: title,
            type: 'warning',
            text: description,
            showCancelButton: true,
            closeOnConfirm: false,
            customClass: 'CB CB--type1',
            allowEscapeKey: false,
            animation: false,
            allowOutsideClick: false
        }, function () {
            var
                    $container = $('.sweet-container'),
                    $content = $container.find('.sweet-content');

            $content.find('p').text('Please wait...');
            $container.find('.footer').find('button').attr('disabled', 'disabled').prop('disabled', true);

            $.get(url).then(function (response) {
                swal({
                    title: title,
                    showCancelButton: false,
                    showConfirmButton: false,
                    customClass: 'CB CB--type1',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    animation: false,
                    html: response
                });

                $(document).one('click', '.swal__close', function () {
                    stopPreview = true;

                    $content.css({
                        position: 'static',
                        marginBottom: '70px',
                        minHeight: 'auto'
                    });

                    $.get(stopUrl);
                });

                var
                        $console = $('#install-progress-console'),
                        stopUrl = $console.data('stop-url'),
                        previewUrl = $console.data('preview-url');

                $console.on('scroll', function () {
                    var $this = $(this);

                    isOnBottom = ($this.scrollTop() + $this.innerHeight() >= $this[0].scrollHeight);

                });

                $content.css({
                    position: 'relative',
                    marginBottom: 0,
                    minHeight: '400px'
                });

                $.get(actionUrl).success(function () {
                    initProgress($console, previewUrl);
                });
            });
        });

        function initProgress($console, url) {
            (function refresh() {
                $.get(url).then(function (response) {
                    var text = response.console.replace(/\r\n/g, "\n");

                    $console.html(text);

                    if (isOnBottom) {
                        $console.scrollTop($console.get(0).scrollHeight);
                    }

                    if (response.redirect) {
                        $console.html(text + "\nRefreshing browser...").scrollTop($console.get(0).scrollHeight);

                        setTimeout(function () {
                            window.location.replace(response.redirect);
                        }, 2500);
                    } else if (!stopPreview) {
                        setTimeout(refresh, 1000);
                    }
                });
            })();
        }

        e.preventDefault();
    });
});