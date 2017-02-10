var lastKnownPosition, lastSavedPosition = null;
$(document).ready(function () {
    if ($('.last-activity-config').length) {
        var element = $('.last-activity-config'),
            url = element.attr('data-url'),
            period = element.attr('data-period');

        element.remove();
        $.get(url, {userActivity: 1});

        setInterval(function () {
            if (lastKnownPosition !== lastSavedPosition) {
                lastSavedPosition = lastKnownPosition;
                $.get(url, {userActivity: 1});
            }
        }, period * 1000);

        $(document).on("mousemove", function (event) {
            lastKnownPosition = event.pageX + "x" + event.pageY;
        });
    }
});