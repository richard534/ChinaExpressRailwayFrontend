"use strict";

var React = require('react');
var Link = require('react-router').Link;

// 404 Not found page, presented when invalid URL entered
var NotFoundPage = React.createClass({
  render: function() {
    return (
        <div className="container">
            <div className="col-md-8">
              <h1>Page not found</h1>
              <p>Whoops! nothing found here!</p>
              <p><Link to='app'>Back to home</Link></p>
            </div>
        </div>
    );
  }
});

module.exports = NotFoundPage;
