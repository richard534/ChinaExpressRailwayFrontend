/*eslint-disable strict */ // Disabling strict on eslint. Cant run strict mode becuase we require global variables, jquery

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./common/header');
var Footer = require('./common/footer');
$ = jQuery = require('jquery');

// Main parent react component handles mounting the header, react-router routehandler and footer
var App = React.createClass({
   render: function() {
       return (
           <div>
             <Header />
             <RouteHandler />
             <Footer />
           </div>
       );
   }
});

module.exports = App;
