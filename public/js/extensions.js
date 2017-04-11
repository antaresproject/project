$(document).ready(function() {
    $(document).on('click', '.component-prompt-modal', function(e) {

        var
            $this = $(this),
            url = $this.attr('href'),
            title = $this.data('title'),
            description = $this.data('description'),
            actionUrl = $this.data('action-url');

        APP.swal.init('skin2', 'typeInfo', {
            title: title,
            type: 'warning',
            text: description,
            showCancelButton: true,
            closeOnConfirm: false
        }, function() {
            var
                $container = $('.sweet-container'),
                $content = $container.find('.sweet-content');

            $content.find('p').text('Please wait...');
            $container.find('.footer').find('button').attr('disabled', 'disabled').prop('disabled', true);

            $.get(url).then(function(response) {
                APP.swal.init('skin2', 'typeInfo', {
                    title: title,
                    showCancelButton: false,
                    showConfirmButton: false,
                    html: response
                });

                var
                    $console = $('#install-progress-console'),
                    previewUrl = $console.data('url');

                $console.closest('.sweet-content').css({
                    position: 'relative',
                    marginBottom: 0,
                    minHeight: '400px'
                });

                $.get(actionUrl).success(function() {
                    initProgress($console, previewUrl);
                });
            });

        });

        function initProgress($console, url) {
            (function refresh() {
                $.get(url).then(function(response) {
                    var text = response.console.replace(/\r\n/g,"\n");

                    if(text !== $console.html()) {
                        $console.html(text).scrollTop( $console.get(0).scrollHeight );
                    }

                    if(response.redirect) {
                        $console.html(text + "\nRefreshing browser...").scrollTop( $console.get(0).scrollHeight );
                        window.location.replace(response.redirect);
                    }
                    else {
                        setTimeout(refresh, 1000);
                    }
                });
            })();
        }

        e.preventDefault();
    });
});