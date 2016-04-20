"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

// React router handler componnet mounted on html id "app"
Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});
