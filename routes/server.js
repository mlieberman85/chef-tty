/*
 * GET home page.
 */

exports.server = function (req, res) {
    var httpProxy = require('http-proxy');
    var proxy = new httpProxy.RoutingProxy();
    console.log("Request url: " +  req.url)
    proxy.proxyRequest(req, res, {
        host: 'localhost',
        port: 9081
    });
};
