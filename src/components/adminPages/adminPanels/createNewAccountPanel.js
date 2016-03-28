"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CreateNewAccountPanel = React.createClass({

   render: function() {
       return (

               <div className="col-md-7">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <h4>Create New Account</h4>
                          <br/>
                          <form className="form-horizontal">
                            <div className="form-group">
                              <label htmlFor="accountType" className="col-md-3 control-label">Account Type:</label>
                                  <div className="col-md-9 pull-left">
                                      <select className="form-control" id="accountType">
                                          <option>Employee</option>
                                          <option>Admin</option>
                                      </select>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username" className="col-md-3 control-label">Username:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="username" placeholder="Enter Username..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-3 control-label">Email Address:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="email" placeholder="Enter Email Address..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="col-md-3 control-label">Password:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="password" placeholder="Enter Password..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPass" className="col-md-3 control-label">Confirm Password:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="confirmPass" placeholder="Confirm Password..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-9 pull-right">
                                    <button type="submit" className="btn btn-primary btn-block">Create New Account</button>
                                </div>
                            </div>
                        </form>
                      </div>
                  </div>
                  <Link to="AdminHome"><button className="btn btn-primary">Back</button></Link>
                  <br />
                  <br />
              </div>

       );
     }
});

module.exports = CreateNewAccountPanel;
