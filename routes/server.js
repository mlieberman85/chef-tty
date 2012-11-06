/*
 * GET home page.
 */

exports.server = function (req, res) {
    var httpProxy = require('http-proxy');
    var proxy = new httpProxy.RoutingProxy();
    url = req.params.server + '/server' + req.params.server;
    proxyServerandPort = req.params.server + ':9091';
    var options = {
        router: {
            url: proxyServerandPort
        }
    };  
    console.log("proxying to: " + req.params.server);
    proxy.proxyRequest(req, res, options);
};