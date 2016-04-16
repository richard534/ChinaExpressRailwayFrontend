"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var validate = require('validate.js');
var toastr = require('toastr');
var auth = require('../auth/auth.js');

var constraints = {
    username: {
        presence: true
    },
    password: {
        presence: true
    }
};

var SignInPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            loggedIn: false,
            data: {
                username: "",
                password: ""
            },
            errors: {
                username: "",
                password: ""
            }
        };
    },

    componentWillMount: function() {
        this.setState({loggedIn: auth.loggedIn()});
    },

    refeshPage: function() {
        location.reload();
    },

    changeState: function () {
        this.setState({
            data: {
                username: this.refs.username.getDOMNode().value,
                password: this.refs.password.getDOMNode().value
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

        if(self.state.loggedIn){ // If logged in submit will logout (logout button will be rendered)
            auth.logout();
            self.setState({loggedIn: false});
        } else {
            var username = this.state.data.username;
            var password = this.state.data.password;
            auth.login(username, password, function(userLoggedIn, accountType) {
                if(userLoggedIn) {
                    toastr.success('SignIn Successful');
                    self.setState({loggedIn: true});
                    if(accountType === "admin"){
                        self.transitionTo('AdminHome');
                    }
                    if(accountType === "employee"){
                        self.transitionTo('EmployeeHome');
                    }
                    if(accountType === "passenger"){
                        self.transitionTo('app');
                    }
                } else {
                    toastr.error('SignIn Unsuccessful');
                }
            });
        }
    },

   render: function() {
       var self = this;
       var header;
       var result;
       var loggedInUser = auth.getUsername();

       if(this.state.loggedIn){
           header = <p>Signed in as <Link to="MyAccount"><strong>{loggedInUser}</strong></Link></p>;
           result =
           <div>
               <button type="submit" className="btn btn-danger btn-block" onClick={this.refeshPage}>Logout</button>
           </div>;

       } else {
           header = <p>Sign in to China Express Railway</p>;
           result =
           <div>
               <div className="form-group">
                   <label>Username</label>
                   <input className="form-control" ref="username"/>
               </div>
               <div className="form-group">
                   <label>Password</label>
                    <input type="password" className="form-control" ref="password"/>
               </div>
               <button type="submit" className="btn btn-success btn-block">Sign in</button>
           </div>;
       }

       return (
           <div className="container">

              <div className="row col-md-4 col-md-offset-4">
                <img src="images/CER_logo.png" className="img-responsive center-block" width="250"/>
                <div className="text-center text-muted">
                  {header}
                </div>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                  <div className="panel panel-default">
                        <div className="panel-body">
                            {result}
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
