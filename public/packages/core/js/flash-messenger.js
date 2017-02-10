function generate(type, text) {
    attributes = {
        text: text,
        dismissQueue: true,
        layout: 'bottomRight',
        maxVisible: 10,
        timeout: 3000,
        animation: {
            open: 'animated bounceInRight',
            close: 'animated bounceOutRight',
            easing: 'swing',
            speed: 500
        }
    };
    notifierInstance = (type === 'success') ? APP.noti.successFM("lg", "full") : APP.noti.errorFM("lg", "full");
    noty($.extend({}, notifierInstance, attributes));
}