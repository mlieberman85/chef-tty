
/*
 * GET home page.
 */

exports.server = function(req, res){
    var httpProxy = require('http-proxy').httpProxy;
    var proxy = httpProxy;
    proxy.init(req,res);
    proxy.proxyRequest(req.params.server, 4567,'',red);
};
