"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var validate = require('validate.js');
var _ = require('lodash');

var constraints = {
    user: {
        presence: true,
        length: { minimum: 5 }
    },
    confUser: {
        presence: true,
        equality: "user"
    },
    pass: {
        presence: true,
        length: { minimum: 5 }
    },
    confPass: {
        presence: true,
        equality: "pass"
    },
    email: {
        presence: true,
        email: true
    },
    confEmail: {
        presence: true,
        equality: "email"
    },
    firstName: {
        presence: true
    },
    lastName: {
        presence: true
    }
};

var RegistrationPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
    return {
        data: {
            user: "",
            confUser: "",
            pass: "",
            confPass: "",
            email: "",
            confEmail: "",
            firstName: "",
            lastName: ""
        },
        errors: {
            user: "Enter Account Details"
        }
        };
    },

    changeState: function () {
        this.setState({
            data: {
                user: this.refs.username.getDOMNode().value,
                confUser: this.refs.confUsername.getDOMNode().value,
                pass: this.refs.password.getDOMNode().value,
                confPass: this.refs.confPassword.getDOMNode().value,
                email: this.refs.email.getDOMNode().value,
                confEmail: this.refs.confEmail.getDOMNode().value,
                firstName: this.refs.firstName.getDOMNode().value,
                lastName: this.refs.lastName.getDOMNode().value
            }
        }, this.validate);
    },

    validate: function () {
        var validationErrors = validate(this.state.data, constraints);

            if(validationErrors){
                this.setState({errors: validationErrors});
            } else {
                this.setState({errors: {}});
            }
    },

    handleChange: function(e) {
        this.changeState();
    },

    handleSubmit: function(e) {
        var self = this;
        e.preventDefault();
        var data = {
            emailAddress: this.state.data.email,
            password: this.state.data.pass,
            username: this.state.data.user,
            firstName: this.state.data.firstName,
            lastName: this.state.data.lastName
        };
        return $.ajax({
          type: "post",
          data: data, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/passenger/createAccountPassenger',
          dataType: 'text', // The type of data that you're expecting back from the server
          success: function(results) {
              toastr.success('Account Created');
              self.transitionTo('SigninPage');
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error creating account');
          }
        });
    },

   render: function() {

       var self = this;
       var errorsList;
       var createAccountButton;

       var populateErrorsList = function() {
           return (
               <div className="div-md-12 alert alert-danger" id="dangerDiv">
                   <div>{self.state.errors.user}</div>
                   <div>{self.state.errors.confUser}</div>
                   <div>{self.state.errors.pass}</div>
                   <div>{self.state.errors.confPass}</div>
                   <div>{self.state.errors.email}</div>
                   <div>{self.state.errors.confEmail}</div>
                   <div>{self.state.errors.firstName}</div>
                   <div>{self.state.errors.lastName}</div>
               </div>
           );
       };

       var disabledCreateAccountButton = function() {
           return (
               <button type="button" className="btn btn-primary btn-block disabled">Create Account</button>
           );
       };

       var enabledCreateAccountButton = function() {
           return (
               <button type="submit" className="btn btn-primary btn-block">Create Account</button>
           );
       };

        if(!_.isEmpty(self.state.errors)) {
            errorsList = populateErrorsList();
            createAccountButton = disabledCreateAccountButton();
        } else {
            createAccountButton = enabledCreateAccountButton();
        }

       return (
           <div className="container">
               <div className="row">
                   <h1>Create An Account</h1>
                   <br/>
               </div>
               <div className="col-md-8">
                   <div className="panel panel-default">
                      <div className="panel-body">
                      {errorsList}
                      <h4>Sign In Details</h4>
                      <br/>
                        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input className="form-control" ref="username" value={this.state.user} placeholder="Enter Username..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Confirm Username</label>
                                        <input className="form-control" ref="confUsername" value={this.state.confUser} placeholder="Confrim Username..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" ref="password" value={this.state.pass} type="password" placeholder="Enter Password..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input className="form-control" ref="confPassword" value={this.state.confPass} type="password" placeholder="Confrim Password..." />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h4>Contact Details</h4>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input className="form-control" ref="email" value={this.state.email} placeholder="Enter Email Address..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Confirm Email Address</label>
                                        <input className="form-control" ref="confEmail" value={this.state.confEmail} placeholder="Confirm Email Address..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input className="form-control" ref="firstName" value={this.state.firstName} placeholder="Enter First Name..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input className="form-control" ref="lastName" value={this.state.lastName} placeholder="Enter Last Name..." />
                                    </div>
                                </div>
                            </div>

                            <br />
                            {createAccountButton}
                        </form>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
       );
     }
});

module.exports = RegistrationPage;
