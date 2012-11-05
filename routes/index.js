
/*
 * GET home page.
 */

exports.index = function(req, res){
    var exec = require('child_process').exec,
        child, servers;
    child = exec ('for i in `knife node list`; do knife node show $i; done | grep IP | sed s/IP://g | sed -e "s/^[ \\t]*//g"',
        function(error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if(error !== null) {
                console.log('exec error: ' + error);
            }
            else {
                servers = stdout;
                res.render('index', {
                    title: 'Express',
                    servers: servers
                });
            }
        });
};