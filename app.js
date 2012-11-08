
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
    , server = require('./routes/server')
  , http = require('http')
  , path = require('path')
  , httpProxy = require('http-proxy');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/server/:server', server.server);

/*var options = {router: 'table.json'};
httpProxy.createServer(options).listen(9081);*/

/*httpProxy.createServer(function(req, res, proxy) {
  //var target = req.params.server + ":9091";
  temp = req.url.split('/');
  console.log(temp);
  console.log('sendint tty.js request to: ', target);
  proxy.proxyRequest(req, res, target);
}).listen(9081);*/

//httpProxy.createServer(testOptions).listen(5000);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
