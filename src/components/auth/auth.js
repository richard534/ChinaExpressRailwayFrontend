'use strict';

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var _ = require('lodash');

// cb stands for callback
// AJAX call to server to check user details. return false or token and username
function requestAuthentication(username, pass, cb) {
        var data = {
            username: username,
            password: pass
        };

        return $.ajax({
            type: "post",
            data: data,
            dataType: 'text',
            url: 'http://localhost:8087/checkDetails',
            success: function(tokenResults) {
                if(_.isObject(tokenResults) || tokenResults === "failed"){
                    cb({
                        authenticated: false
                    });
                    return;
                }
                // Determine if user is passenger, employee or admin and set associated flag
                var token = tokenResults; // Account token
                if(username.startsWith('a/') || username.startsWith('A/')){
                    // user is admin
                    cb({
                        authenticated: true,
                        token: token,
                        type: "admin",
                        username: username
                    });
                } else if (username.startsWith('e/') || username.startsWith('E/')) {
                    // user is employee
                    cb({
                        authenticated: true,
                        token: token,
                        type: "employee",
                        username: username
                    });
                } else {
                    // user is passenger
                    cb({
                        authenticated: true,
                        token: token,
                        type: "passenger",
                        username: username
                    });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus + ': ' + errorThrown);
                cb({ authenticated: false });
            }
        });
}

// Rerieve admin account username and ID
function getAdminAccount(username, token, cb) {
    return $.ajax({
        type: "get",
        headers: {
            "Authorization": token
        },
        dataType: 'json', // The type of data that you're expecting back from the server
        url: 'http://localhost:8087/admin/getAdminAccount?username=' + username,
        success: function(result) {
            cb({
                Id: result.adminId,
                username: result.person.userName
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ': ' + errorThrown);
        }
    });
}

// Rerieve employee account username and ID
function getEmployeeAccount(username, token, cb) {
    return $.ajax({
        type: "get",
        headers: {
            "Authorization": token
        },
        dataType: 'json', // The type of data that you're expecting back from the server
        url: 'http://localhost:8087/employee/getEmployeeAccount?username=' + username,
        success: function(result) {
            cb({
                Id: result.employeeId,
                username: result.person.userName
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ': ' + errorThrown);
        }
    });
}

// Rerieve admin passenger username and ID
function getPassengerAccount(username, token, cb) {
    return $.ajax({
        type: "get",
        headers: {
            "Authorization": token
        },
        dataType: 'json', // The type of data that you're expecting back from the server
        url: 'http://localhost:8087/passenger/getPassengerAccount?username=' + username,
        success: function(result) {
            cb({
                Id: result.passengerID,
                username: result.person.userName
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ': ' + errorThrown);
        }
    });
}

module.exports = {
    // Login function to handle login requests
    login: function login(username, pass, cb) {
        if(!username || !pass) {
            cb(false);
            return;
        }
        var _this = this;

        // Check local storage for existing token
        cb = arguments[arguments.length - 1];
        if (localStorage.token) {
          if (cb) {cb(true); }
          this.onChange(true);
          return;
        }

        // If no token in local storage, request auth from server
        requestAuthentication(username, pass, function(res) {
            if (res.authenticated) {
                localStorage.token = res.token;
                var accountType = res.type;
                var usernameToRequest = res.username;
                var token = res.token;

                if(accountType === "admin") {
                    getAdminAccount(usernameToRequest, token, function(getAdminAccountResult) {
                        localStorage.adminId = getAdminAccountResult.Id;
                        localStorage.username = getAdminAccountResult.username;
                        if (cb) {cb(true, "admin"); }
                        _this.onChange(true);
                    });
                } else if(accountType === "employee") {
                    getEmployeeAccount(usernameToRequest, token, function(getEmployeeAccountResult) {
                        localStorage.employeeId = getEmployeeAccountResult.Id;
                        localStorage.username = getEmployeeAccountResult.username;
                        if (cb) {cb(true, "employee"); }
                        _this.onChange(true);
                    });
                } else {
                    getPassengerAccount(usernameToRequest, token, function(getPassengerAccountResult) {
                        localStorage.passengerId = getPassengerAccountResult.Id;
                        localStorage.username = getPassengerAccountResult.username;
                        if (cb) {cb(true, "passenger"); }
                        _this.onChange(true);
                    });
                }
            } else {
                if (cb) {cb(false); } // If auth UnSuccessful callback set to false
                _this.onChange(false);
            }
        });

    },

    // get token from localstorage
    getToken: function getToken() {
        return localStorage.token;
    },

    // get passengerID from localstorage
    getPassengerId: function getPassengerId() {
        return localStorage.passengerId;
    },

    // // get adminID from localstorage
    getAdminId: function getAdminId() {
        return localStorage.adminId;
    },

    // get employeeID from localstorage
    getEmployeeId: function getEmployeeId() {
        return localStorage.employeeId;
    },

    // get username from localstorage
    getUsername: function getUsername() {
        return localStorage.username;
    },

    // Logout, clear localstorage
    logout: function logout(cb) {
        localStorage.clear();
        if (cb) {cb(); }
        this.onChange(false);
    },

    // Check if localstorage token is present
    loggedIn: function loggedIn() {
        return !!localStorage.token;
    },

    // Check if logged in as passsenger
    loggedInAsPassenger: function loggedIn() {
        return !!localStorage.passengerId;
    },

    // Check if logged in as Admin
    loggedInAsAdmin: function loggedIn() {
        return !!localStorage.adminId;
    },

    // Check if logged in as Employee
    loggedInAsEmployee: function loggedIn() {
        return !!localStorage.employeeId;
    },

    onChange: function onChange() {},

    // function to restrict access to certain react components
    // component is passed to function as paramter
    // function returns redirect to signin if logged in user does not match role required parameter
    // else user is allowed access to page
    requireAuth: function(Component, roleRequired) {
        var self = this;
        return React.createClass({
            statics: {
                willTransitionTo: function(transition, params, query, callback) {
                    // Check is client is logged in at all
                    if(self.loggedIn()) {
                        if(!roleRequired){
                            callback();
                        }
                        if(roleRequired === "admin") {
                            // Check admin account is logged in
                            if(self.loggedInAsAdmin()) {
                                callback();
                            } else {
                                toastr.error('You must be logged in as an admin to access this page');
                                transition.redirect('SigninPage');
                                callback();
                            }
                        } else if(roleRequired === "employee") {
                            // Check employee account is logged in
                            if(self.loggedInAsEmployee()) {
                                callback();
                            } else {
                                toastr.error('You must be logged in as an employee to access this page');
                                transition.redirect('SigninPage');
                                callback();
                            }
                        } else if(roleRequired === "passenger") {
                            // Check passenger account is logged in
                            if(self.loggedInAsPassenger()) {
                                callback();
                            } else {
                                toastr.error('You must be logged in as a passenger to access this page');
                                transition.redirect('SigninPage');
                                callback();
                            }
                        }
                    } else {
                        toastr.error('You must be logged in to access this page');
                        transition.redirect('SigninPage');
                        callback();
                    }
                }
            },

            render: function() {
                return (<Component {...this.props}/>);
            }
        });
    }
};
