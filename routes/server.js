/*
 * GET home page.
 */
var request = require('request');
exports.server = function (req, res) {
/*    var httpProxy = require('http-proxy');
    var proxy = new httpProxy.RoutingProxy();
    console.log("Request url: " +  req.url)
    proxy.proxyRequest(req, res, {
        host: 'localhost',
        port: 9081
    });*/
    console.log("Sending request to: " + req.params.server);
    request('http://' + req.params.server, function(error, response, body) {
        console.log(response);
        if(!error && response.statusCode == 200) {
            res.send(body);
        }
    })
};
