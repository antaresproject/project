$(function () {
    var $params = null, $instanceName = null;
    console.log($params, $instanceName);

    window.antaresEvents.emit('dt_reinit', $('#' + $instanceName), $params.options);
});
