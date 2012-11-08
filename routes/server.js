/*
 * GET home page.
 */
var request = require('request');
exports.server = function (req, res) {
    var httpProxy = require('http-proxy');
    var proxy = new httpProxy.RoutingProxy();
    var proxyServer = req.params.server + "/";
    console.log("Request url: " +  req.url);
    proxy.proxyRequest(req, res, {
        host: proxyServer,
        port: 9091
    });
    console.log("Sending request to: " + req.params.server);
};
