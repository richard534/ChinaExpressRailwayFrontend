"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var auth = require('../auth/auth.js');

// TODO add signout button when user is logged in
var Header = React.createClass({

    render: function() {
        var accountButton;
        var rightNav;
        var brandLink = "app";

        var renderSignedInNav = function() {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav">
                        <p className="navbar-text"><Link to="Registration" className="navbar-link">Register</Link></p>
                    </li>
                    <li className="nav">
                        <p className="navbar-text"><Link to="MyAccount" className="navbar-link">{auth.getUsername()}</Link></p>
                    </li>
                    <li className="nav">
                        <p className="navbar-text"><Link to="SigninPage" className="navbar-link">{accountButton}</Link></p>
                    </li>
                </ul>

            );
        };

        var renderSignedOutNav = function() {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav">
                        <p className="navbar-text"><Link to="Registration" className="navbar-link">Register</Link></p>
                    </li>
                    <li className="nav">
                        <p className="navbar-text"><Link to="SigninPage" className="navbar-link">{accountButton}</Link></p>
                    </li>
                </ul>

            );
        };

        if(auth.loggedIn()) {
            accountButton = "Sign out";
            rightNav = renderSignedInNav();

            if(auth.loggedInAsPassenger()){
                brandLink = "app";
            } else if(auth.loggedInAsAdmin()){
                brandLink = "AdminHome";
            } else if(auth.loggedInAsEmployee()){
                brandLink = "EmployeeHome";
            }
        } else {
            accountButton = "Sign in";
            rightNav = renderSignedOutNav();
        }

        return (
            <div className="container">
                <div className="row" id="headerRow">
                    <div className="col-md-4">
                        <div className="navbar-header">
                            <Link to={brandLink} className="navbar-brand"><img className="img-responsive pull-left" width="200" alt="Brand" src="/images/CER_logo.png"/></Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                      {rightNav}
                    </div>
                </div>
            </div>
        );
    }
});


module.exports = Header;
