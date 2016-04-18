"use strict";

var React = require('react');
var Router = require('react-router');
var CreateNewAccountPanel = require('./adminPanels/createNewAccountPanel');
var validate = require('validate.js');
var auth = require('../auth/auth.js');
var toastr = require('toastr');

var constraints = {
    accountType: {
        presence: true
    },
    userName: {
        presence: true
    },
    email: {
        presence: true,
        email: true
    },
    password: {
        presence: true,
        length: { minimum: 5 }
    },
    confPassword: {
        presence: true,
        equality: "password"
    },
    firstName: {
        presence: true
    },
    lastName: {
        presence: true
    }
};
var ManageAccountsPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            data: {
                accountType: "",
                userName: "",
                email: "",
                password: "",
                confPassword: "",
                firstName: "",
                lastName: ""
            },
            errors: {
                userName: "Enter details to create account"
            }
        };
    },

    onUpdate: function(val){
        this.setState({
            data: {
                accountType: val.accountType,
                userName: val.userName,
                email: val.email,
                password: val.password,
                confPassword: val.confPassword,
                firstName: val.firstName,
                lastName: val.lastName
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

    handleSubmit: function() {
        var self = this;
        var token = auth.getToken();
        var ticketID = this.state.scheduleId;

        var username = this.state.data.userName;
        var accountType = self.state.data.accountType;

        var URL;
        if(accountType === "Employee"){
            if(!username.startsWith("e/")) {
                toastr.error("Employee Accounts must start with /e");
                return;
            }
            URL = "http://localhost:8087/employee/createAccountEmployee";
        } else {
            if(!username.startsWith("a/")) {
                toastr.error("Admin Accounts must start with /a");
                return;
            }
            URL = "http://localhost:8087/admin/createAccountAdmin";
        }

        var data = {
            emailAddress: this.state.data.email,
            password: this.state.data.password,
            username: this.state.data.userName,
            firstName: this.state.data.firstName,
            lastName: this.state.data.lastName
        };

        console.log(data);
        $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          data: data, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: URL,
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              toastr.success('Account Creation Successful.');
              self.transitionTo('AdminHome');
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error creating account');
          }
        });
    },

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Account Management</h1>
                    <br/>
                </div>
                <CreateNewAccountPanel
                    handleSubmit={this.handleSubmit}
                    onUpdate={this.onUpdate}
                    data={this.state.data}
                    errors={this.state.errors} />
            </div>
       );
     }
});

module.exports = ManageAccountsPage;
