"use strict";

var React = require('react');
var toastr = require('toastr');
var validate = require('validate.js');
var auth = require('../auth/auth.js');
var _ = require('lodash');

var AccountDetailsPanel = require('./accountManagementPanels/editAccountDetailsPanel');

var constraints = {
    user: {
        presence: true,
        length: { minimum: 5 }
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
    firstName: {
        presence: true
    },
    lastName: {
        presence: true
    }
};

var EditAccountDetailsPage = auth.requireAuth(React.createClass({
    getInitialState: function() {
        return {
            data: {
                user: "",
                pass: "",
                confPass: "",
                email: "",
                firstName: "",
                lastName: ""
            },

            errors: {
                user: "Here you can update your account details"
            }

        };
    },

    // On component mount insert logged in accounts details into fields
    componentWillMount: function() {
        var self = this;

        var token = auth.getToken();
        var username = auth.getUsername();
        var URL;

        if(auth.loggedInAsPassenger()){
            URL = "http://localhost:8087/passenger/getPassengerAccount";
        } else if(auth.loggedInAsAdmin()){
            URL = "http://localhost:8087/admin/getAdminAccount";
        } else if(auth.loggedInAsEmployee()){
            URL = "http://localhost:8087/employee/getEmployeeAccount";
        } else {
            return;
        }

        $.ajax({
          type: "get",
          data: {
              "username": username
          }, // Data to be sent to the server
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: URL,
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              console.log(results);
              self.setState({
                  data: {
                      user: results.person.userName,
                      email: results.person.emailAddress,
                      firstName: results.person.firstName,
                      lastName: results.person.lastName
                  }
              });
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error updating account details');
          }
        });
    },

    // set this components state to user input
    onUpdate: function(val){
        this.setState({
            data: {
                user: val.user,
                pass: val.pass,
                confPass: val.confPass,
                email: val.email,
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

    // Handle submit update user details to server
    handleSubmit: function(e) {
        var self = this;
        e.preventDefault();
        var id;
        var URL;

        if(auth.loggedInAsPassenger()){
            id = auth.getPassengerId();
            URL = "http://localhost:8087/passenger/updatePassengerAccount";
        } else if(auth.loggedInAsAdmin()){
            id = auth.getAdminId();
            URL = "http://localhost:8087/admin/updateAccountAdmin";
        } else if(auth.loggedInAsEmployee()){
            id = auth.getEmployeeId();
            URL = "http://localhost:8087/employee/updateEmployeeAccount";
        } else {
            return;
        }

        var token = auth.getToken();

        var data = {
            userID: id,
            emailAddress: this.state.data.email,
            password: this.state.data.pass,
            username: this.state.data.user,
            firstName: this.state.data.firstName,
            lastName: this.state.data.lastName
        };

        $.ajax({
          type: "post",
          data: data, // Data to be sent to the server
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: URL,
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(results === false){
                  toastr.error('Account Update failed');
                  return;
              }
              toastr.success('Account Updated');
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Account Update failed');
          }
        });
    },

   render: function() {
       return (
           <div className="container">
               <div className="row">
                   <h1>Edit Account Details</h1>
                   <br/>
               </div>
               <AccountDetailsPanel errors={this.state.errors}
                   onUpdate={this.onUpdate}
                   handleSubmit={this.handleSubmit}
                   data={this.state.data} />
            </div>
       );
     }
}));

module.exports = EditAccountDetailsPage;
