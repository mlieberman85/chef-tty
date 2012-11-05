/*
 * GET home page.
 */

exports.server = function (req, res) {
    var httpProxy = require('http-proxy');
    var proxy = new httpProxy.RoutingProxy();
    proxy.proxyRequest(req, res, {
        host: req.params.server,
        port: 9091
    });
};