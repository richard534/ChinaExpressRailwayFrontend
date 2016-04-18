"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var CreateNewAccountPanel = React.createClass({

    handleChange: function() {
        var values = {
            accountType: this.refs.accountType.getDOMNode().value,
            userName: this.refs.username.getDOMNode().value,
            email: this.refs.email.getDOMNode().value,
            password: this.refs.password.getDOMNode().value,
            confPassword: this.refs.confPass.getDOMNode().value,
            firstName: this.refs.firstName.getDOMNode().value,
            lastName: this.refs.lastName.getDOMNode().value
        };
        this.props.onUpdate(values);
    },

   render: function() {
       var self = this;
       var errors;
       var createAccountButton;

       var populateErrorsList = function() {
           return (
               <div className="div-md-12 alert alert-danger" id="dangerDiv">
                   <div>{self.props.errors.accountType}</div>
                   <div>{self.props.errors.userName}</div>
                   <div>{self.props.errors.email}</div>
                   <div>{self.props.errors.password}</div>
                   <div>{self.props.errors.confPassword}</div>
                   <div>{self.props.errors.firstName}</div>
                   <div>{self.props.errors.lastName}</div>
               </div>
           );
       };

       var disabledcreateAccountButton = function() {
           return (
               <button type="button" className="btn btn-primary btn-block disabled">Create New Account</button>
           );
       };

       var enabledcreateAccountButton = function() {
           return (
               <button type="submit" className="btn btn-primary btn-block">Create New Account</button>
           );
       };

       if(!_.isEmpty(self.props.errors)) {
           errors = populateErrorsList();
           createAccountButton = disabledcreateAccountButton();
       } else {
           createAccountButton = enabledcreateAccountButton();
       }

       return (

               <div className="col-md-7">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <h4>Create New Account</h4>
                          <br/>
                          {errors}
                          <form className="form-horizontal" onSubmit={this.props.handleSubmit} onChange={this.handleChange}>
                            <div className="form-group">
                              <label htmlFor="accountType" className="col-md-3 control-label">Account Type:</label>
                                  <div className="col-md-9 pull-left">
                                      <select className="form-control" value={this.props.data.accountType} ref="accountType">
                                          <option>Employee</option>
                                          <option>Admin</option>
                                      </select>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username" className="col-md-3 control-label">Username:</label>
                                <div className="col-md-9">
                                    <input className="form-control" value={this.props.data.username} ref="username" placeholder="Enter Username..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-3 control-label">Email Address:</label>
                                <div className="col-md-9">
                                    <input className="form-control" value={this.props.data.email} ref="email" placeholder="Enter Email Address..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="col-md-3 control-label">Password:</label>
                                <div className="col-md-9">
                                    <input className="form-control" type="password" value={this.props.data.password} ref="password" placeholder="Enter Password..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPass" className="col-md-3 control-label">Confirm Password:</label>
                                <div className="col-md-9">
                                    <input className="form-control" type="password" value={this.props.data.confPassword} ref="confPass" placeholder="Confirm Password..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">First Name</label>
                                <div className="col-md-9">
                                    <input className="form-control" value={this.props.data.firstName} ref="firstName" placeholder="Enter First Name..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Last Name</label>
                                <div className="col-md-9">
                                    <input className="form-control" value={this.props.data.lastName} ref="lastName" placeholder="Enter Last Name..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-9 pull-right">
                                    {createAccountButton}
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
