"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var auth = require('../auth/auth.js');

// TODO add signout button when user is logged in
var Header = React.createClass({

    render: function() {
        var accountButton;

        if(auth.loggedIn()) {
            accountButton = "Sign out";
        } else {
            accountButton = "Sign in";
        }

        return (
            <div className="container">
                    <div className="row" id="headerRow">
                        <div className="col-md-4">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#"><img className="img-responsive pull-left" width="200" alt="Brand" src="/images/CER_logo.png"/></a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <ul className="nav navbar-nav navbar-right">
                              <li className="nav">
                                  <p className="navbar-text"><Link to="Registration" className="navbar-link">Register</Link></p>
                              </li>
                              <li className="nav">
                                  <p className="navbar-text"><Link to="SigninPage" className="navbar-link">{accountButton}</Link></p>
                              </li>
                            </ul>
                        </div>
                    </div>
            </div>
        );
    }
});


module.exports = Header;
