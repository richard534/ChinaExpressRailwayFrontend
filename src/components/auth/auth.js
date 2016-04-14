'use strict';

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');

// cb stands for callback
function requestAuthentication(username, pass, cb) {
        var data = {
            username: username,
            password: pass
        };

        return $.ajax({
            type: "post",
            data: data,
            dataType: 'text',
            url: 'http://52.31.154.40:8087/checkDetails',
            success: function(tokenResults) {
                // Determine if user is passenger, employee or admin and set associated flag
                if(username.startsWith('a/') || username.startsWith('A/')){
                    // user is admin
                    console.log("Admin");
                    var token = tokenResults; // Account token
                    console.log(token);
                    cb({
                        authenticated: true,
                        token: token,
                        type: "admin",
                        username: username
                    });
                } else if (username.startsWith('e/') || username.startsWith('E/')) {
                    // user is employee
                    console.log("Employee");
                    cb({
                        authenticated: true,
                        token: tokenResults,
                        type: "employee",
                        username: username
                    });
                } else {
                    // user is passenger
                    console.log("Passenger");
                    cb({
                        authenticated: true,
                        token: tokenResults,
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

function getAdminAccount(username, token, cb) {
    return $.ajax({
        type: "get",
        headers: {
            "Authorization": token
        },
        dataType: 'json', // The type of data that you're expecting back from the server
        url: 'http://52.31.154.40:8087/admin/getAdminAccount?username=' + username,
        success: function(result) {
            console.log(result);
            cb({
                adminId: result.adminId,
                username: result.person.userName
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ': ' + errorThrown);
        }
    });
}

function getEmployeeAccount(username, token, cb) {
    return $.ajax({
        type: "get",
        headers: {
            "Authorization": token
        },
        dataType: 'json', // The type of data that you're expecting back from the server
        url: 'http://52.31.154.40:8087/employee/getEmployeeAccount?username=' + username,
        success: function(result) {
            console.log(result);
            cb({
                employeeId: result.employeeId,
                username: result.person.userName
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ': ' + errorThrown);
        }
    });
}

function getPassengerAccount(username, token, cb) {
    return $.ajax({
        type: "get",
        headers: {
            "Authorization": token
        },
        dataType: 'json', // The type of data that you're expecting back from the server
        url: 'http://52.31.154.40:8087/passenger/getPassengerAccount?username=' + username,
        success: function(result) {
            console.log(result);
            cb({
                passengerId: result.passengerId,
                username: result.person.userName
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ': ' + errorThrown);
        }
    });
}

module.exports = {
    login: function login(username, pass, cb) {
        if(!username || !pass) {
            cb(false);
            return;
        }
        var _this = this;

        cb = arguments[arguments.length - 1];
        if (localStorage.token) {
          if (cb) {cb(true); }
          this.onChange(true);
          return;
        }

        requestAuthentication(username, pass, function(res) {
            if (res.authenticated) {
                localStorage.token = res.token;
                var accountType = res.type;
                var usernameToRequest = res.username;
                var token = res.token;

                if(accountType === "admin") {
                    getAdminAccount(usernameToRequest, token, function(getAdminAccountResult) {
                        localStorage.adminId = getAdminAccountResult.adminId;
                        localStorage.username = getAdminAccountResult.username;
                        if (cb) {cb(true, "admin"); }
                        _this.onChange(true);
                    });
                } else if(accountType === "employee") {
                    getEmployeeAccount(usernameToRequest, token, function(getEmployeeAccountResult) {
                        localStorage.employeeId = getEmployeeAccountResult.employeeId;
                        localStorage.username = getEmployeeAccountResult.username;
                        if (cb) {cb(true, "employee"); }
                        _this.onChange(true);
                    });
                } else {
                    getPassengerAccount(usernameToRequest, token, function(getPassengerAccountResult) {
                        localStorage.passengerId = getPassengerAccountResult.passengerId;
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

    getToken: function getToken() {
        return localStorage.token;
    },

    getPassengerId: function getPassengerId() {
        return localStorage.passengerId;
    },

    getAdminId: function getAdminId() {
        return localStorage.adminId;
    },

    getEmployeeId: function getEmployeeId() {
        return localStorage.employeeId;
    },

    getUsername: function getUsername() {
        return localStorage.username;
    },

    logout: function logout(cb) {
        localStorage.clear();
        if (cb) {cb(); }
        this.onChange(false);
    },

    loggedIn: function loggedIn() {
        return !!localStorage.token;
    },

    onChange: function onChange() {},

    requireAuth: function(Component) { // TODO maybe add parameter that specifies account type required
        var self = this;
        return React.createClass({
            statics: {
                willTransitionTo: function(transition, params, query, callback) {
                    if(self.loggedIn()) {
                        callback();
                    } else {
                        toastr.error('You must be logged in to access this page');
                        transition.redirect('signIn');
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
