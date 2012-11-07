/*
 * GET home page.
 */

exports.server = function (req, res) {
/*    var httpProxy = require('http-proxy');
    var proxy = new httpProxy.RoutingProxy();
    console.log("Request url: " +  req.url)
    proxy.proxyRequest(req, res, {
        host: 'localhost',
        port: 9081
    });*/

    var request = require('request');
    request('http://' + req.params.server, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            res.send(body);
        }
    })
};
