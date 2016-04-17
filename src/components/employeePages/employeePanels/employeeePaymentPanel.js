"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var EmployeePaymentPanel = React.createClass({

    handleChange: function() {
        var values = {
            email: this.refs.email.getDOMNode().value,
            firstName: this.refs.firstName.getDOMNode().value,
            lastName: this.refs.lastName.getDOMNode().value
        };
        this.props.onUpdate(values);
    },

   render: function() {
       var self = this;
       var customerErrors;
       var bookTicketButton;

       var populateErrorsList = function() {
           return (
               <div className="div-md-12 alert alert-danger" id="dangerDiv">
                   <div>{self.props.errors.email}</div>
                   <div>{self.props.errors.firstName}</div>
                   <div>{self.props.errors.lastName}</div>
               </div>
           );
       };

       var disabledBookTicketButton = function() {
           return (
               <button type="button" className="btn btn-primary btn-block disabled">Book Ticket</button>
           );
       };

       var enabledBookTicketButton = function() {
           return (
               <button type="submit" className="btn btn-primary btn-block">Book Ticket</button>
           );
       };

       if(!_.isEmpty(self.props.errors)) {
           customerErrors = populateErrorsList();
           bookTicketButton = disabledBookTicketButton();
       } else {
           bookTicketButton = enabledBookTicketButton();
       }

       return (
           <div className="col-md-4">
              <div className="panel panel-default">
                 <div className="panel-body">
                     <label>Total:</label>
                     <h2 id="total">£{this.props.ticketPrice}</h2>
                     <br />
                     {customerErrors}
                     <form onSubmit={this.props.handleSubmit} onChange={this.handleChange}>
                         <div className="form-group">
                             <label>Customer Email Address</label>
                             <input className="form-control" value={this.props.data.email} ref="email" placeholder="Enter customer email address..." />
                         </div>
                         <div className="form-group">
                             <label>Customer First Name</label>
                             <input className="form-control" value={this.props.data.firstName} ref="firstName" placeholder="Enter customer first name..." />
                         </div>
                         <div className="form-group">
                             <label>Customer Last Name</label>
                             <input className="form-control" value={this.props.data.lastName} ref="lastName" placeholder="Enter customer last name..."/>
                         </div>
                         {bookTicketButton}
                     </form>
                     <hr />
                     <div className='row'>
                         <div className="col-md-4">
                             <p>Out:</p>
                         </div>
                         <div className="col-md-8">
                             <p className="text-right">{this.props.date} {this.props.time}</p>
                         </div>
                     </div>
                     <p>{this.props.sourceStation} to {this.props.destinationStation}</p>
                     <p>{this.props.class}</p>
                 </div>
             </div>
           </div>
       );
     }
});

module.exports = EmployeePaymentPanel;
