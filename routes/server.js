/*
 * GET home page.
 */

exports.server = function (req, res) {
    var httpProxy = require('http-proxy');
    var proxy = new httpProxy.RoutingProxy();
    url = '/server' + req.params.server;
    proxyServerandPort = req.params.server + ':9091';
    console.log("proxying to: " + req.params.server);
    proxy.proxyRequest(req, res, require('proxy-by-url')({
        url: {port: 9091, host: req.params.server}
    }));
};