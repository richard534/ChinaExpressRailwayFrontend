"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var EditAccountDetailsPanel = React.createClass({
    getDefaultProps: function() {
        return {
            accountDetails: {
                user: "",
                pass: "",
                confPass: "",
                email: "",
                firstName: "",
                lastName: ""
            },
            errors: {
                user: ""
            }
        };
    },

    handleChange: function() {
        var values = {
            user: this.refs.user.getDOMNode().value,
            pass: this.refs.pass.getDOMNode().value,
            confPass: this.refs.confPass.getDOMNode().value,
            email: this.refs.email.getDOMNode().value,
            firstName: this.refs.firstName.getDOMNode().value,
            lastName: this.refs.lastName.getDOMNode().value
        };
        this.props.onUpdate(values);
    },

   render: function() {
       var self = this;
       var errorsList;
       var updateAccountButton;

       var populateErrorsList = function() {
           return (
               <div className="div-md-12 alert alert-danger" id="dangerDiv">
                   <div>{self.props.errors.user}</div>
                   <div>{self.props.errors.pass}</div>
                   <div>{self.props.errors.confPass}</div>
                   <div>{self.props.errors.email}</div>
                   <div>{self.props.errors.firstName}</div>
                   <div>{self.props.errors.lastName}</div>
               </div>
           );
       };

       var disabledUpdateAccountButton = function() {
           return (
               <button type="button" className="btn btn-primary btn-block disabled">Update Account</button>
           );
       };

       var enabledUpdateAccountButton = function() {
           return (
               <button type="submit" className="btn btn-primary btn-block">Update Account</button>
           );
       };

        if(!_.isEmpty(self.props.errors)) {
            errorsList = populateErrorsList();
            updateAccountButton = disabledUpdateAccountButton();
        } else {
            updateAccountButton = enabledUpdateAccountButton();
        }


       return (
           <div className="col-md-7">
               <div className="panel panel-default">
                   <div className="panel-body">
                       <h4>Sign In Details</h4>
                       <br/>
                       {errorsList}
                       <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.props.handleSubmit} >
                           <div className="form-group">
                             <label className="col-md-3 control-label">Username:</label>
                             <div className="col-md-9">
                                 <input className="form-control" ref="user" value={this.props.data.user} placeholder="Enter username..." />
                             </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Password:</label>
                             <div className="col-md-9">
                                 <input className="form-control" type="password" ref="pass" value={this.props.data.pass} placeholder="Enter Password..." />
                             </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Confirm Password:</label>
                             <div className="col-md-9">
                                 <input className="form-control" type="password" ref="confPass" value={this.props.data.confPass} placeholder="Confirm Password..." />
                             </div>
                           </div>
                           <hr />
                           <h4>Contact Details</h4>
                           <br/>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Email Address:</label>
                             <div className="col-md-9">
                                 <input className="form-control" type="email" ref="email" value={this.props.data.email} placeholder="Enter Email Address..." />
                             </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">FirstName:</label>
                             <div className="col-md-9">
                                 <input className="form-control" ref="firstName" value={this.props.data.firstName} placeholder="Enter First Name..." />
                             </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Last Name:</label>
                             <div className="col-md-9">
                                 <input className="form-control" ref="lastName" value={this.props.data.lastName} placeholder="Enter Last Name..." />
                             </div>
                           </div>
                           <br />
                           <div className="form-group">
                               <div className="col-md-9 pull-right">
                                   {updateAccountButton}
                               </div>
                           </div>
                       </form>
                   </div>
                   </div>
                   <Link to="MyAccount"><button className="btn btn-primary">Back</button></Link>
                   <br/><br/>
            </div>
        );
    }
});

module.exports = EditAccountDetailsPanel;
