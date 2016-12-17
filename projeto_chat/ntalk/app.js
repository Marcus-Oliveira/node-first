/**
 * Module dependencies.
 */

var express = require('express'),
    // load = require('express-load'),
    routes = require('./routes');

var app = module.exports = express.createServer();

// ...stack de configurações do servidor...
// load('models')
//     .then('controllers')
//     .then('routes')
//     .into(app);

// Configuration

app.configure(function() {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
    app.use(express.errorHandler());
});

// Routes

// app.get('/', routes.index);
// app.get('/usuarios', routes.user.index);

app.listen(3000, function() {
    console.log("Ntalk no ar.");
});