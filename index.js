/**
 *  Load external modules / see readme for bundle instructions
 */

// creating a server
var path = require('path')
var http = require('http')
var session = require('express-session')
var RedisStore = require('connect-redis')(session);
var server = http.createServer(function (req, res) {
    res.write(200, {
        'Content-Type': 'text/html'
    });
    res.end('<h1>Hello Scott</h1>');
});


//try {
//    //  require.paths = require.paths.unshift(__dirname + '/../node_modules');
//} catch (e) {
//    process.env.NODE_PATH = path.join(__dirname, '/../node_modules') + ':' + process.env.NODE_PATH
//}

require('./lib/exceptions')

if (!process.env.NODE_ENV) process.env.NODE_ENV = "local"

//  Load boot file and fire away!

var app = require('./config/app')();
var port = process.env.PORT || 3000;

app.listen(port);

console.log('\x1b[36mSample Blog\x1b[90m v%s\x1b[0m running as \x1b[1m%s\x1b[0m on http://%s:%d',
    app.set('version'),
    app.set('env'),
    app.set('host'),
    app.address().port
);
