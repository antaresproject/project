$(function () {
    var $params = null, $instanceName = null;
    window.antaresEvents.emit('dt_reinit', $('#' + $instanceName), $params.options);
});
