"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SignInPage = React.createClass({

   render: function() {
       return (
           <div className="container">

              <div className="row col-md-4 col-md-offset-4">
                <img src="images/CER_logo.png" className="img-responsive center-block" width="250"/>
                <div className="text-center text-muted">
                  <p>Sign in to China Express Railway</p>
                </div>
                <form>
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email"/>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"/>
                      </div>
                      <button type="submit" className="btn btn-success btn-block">Sign in</button>
                      </div>
                    </div>
                </form>

                <div className="panel panel-default">
                  <div className="panel-body">
                    <div className="col-md-12">
                      <p className="text-center">New to China Express Railway?
                      <p className="text-center"><Link to="Registration">Create an account</Link></p></p>
                    </div>
                  </div>
                </div>

                </div>
           </div>
       );
     }
});

module.exports = SignInPage;
