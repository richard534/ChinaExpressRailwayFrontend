"use strict";

var React = require('react');

var RegistrationPage = React.createClass({

   render: function() {
       return (
           <div className="container">
               <div className="row">
                   <h1>Create An Account</h1>
                   <br/>
               </div>
               <div className="col-md-8">
                   <div className="panel panel-default">
                      <div className="panel-body">
                      <h4>Sign In Details</h4>
                      <br/>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input className="form-control" id="email" placeholder="Enter Email Address..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="confEmail">Confirm Email Address</label>
                                        <input className="form-control" id="confEmail" placeholder="Confrim Email Address..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input className="form-control" id="password" placeholder="Enter Password..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="confPassword">Confirm Password</label>
                                        <input className="form-control" id="confPassword" placeholder="Confrim Password..." />
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <h4>Contact Details</h4>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input className="form-control" id="firstName" placeholder="Enter First Name..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input className="form-control" id="lastName" placeholder="Enter Last Name..." />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary btn-block">Create Account</button>
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
