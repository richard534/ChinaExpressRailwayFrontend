"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EmployeePaymentPanel = require('./employeePanels/employeeePaymentPanel');
var toastr = require('toastr');
var validate = require('validate.js');
var auth = require('../auth/auth.js');

var constraints = {
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
var EmployeeConfirmBookingPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            scheduleId: 0,
            numTickets: 0,

            ticketPrice: 0,
            sourceStation: "",
            destinationStation: "",
            date: "",
            time: "",
            class: "",

            data: {
                email: "",
                firstName: "",
                lastName: ""
            },
            errors: {
                email: "Enter Customer details in order to make booking"
            }
        };
    },

    componentWillMount: function() {

        this.setState({scheduleId: this.props.query.scheduleId});
        this.setState({numTickets: this.props.query.numTickets});
        this.setState({ticketPrice: this.props.query.ticketPrice});
        this.setState({sourceStation: this.props.query.sourceStation});
        this.setState({destinationStation: this.props.query.destinationStation});
        this.setState({date: this.props.query.date});
        this.setState({time: this.props.query.time});
        this.setState({class: this.props.query.class});
    },

    handleSubmit: function() {
        var self = this;
        var token = auth.getToken();
        var ticketID = this.state.scheduleId;

        var numFirstClass = 0;
        var numStandardClass = 0;

        if(this.state.class === "First"){
            numFirstClass = this.state.numTickets;
        } else {
            numStandardClass = this.state.numTickets;
        }

        var data = {
            firstName: this.state.data.firstName,
            lastName: this.state.data.lastName,
            emailAddress: this.state.data.email,
            scheduleID: this.state.scheduleId,
            numFirstClass: numFirstClass,
            numSecondClass: numStandardClass
        };

        return $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          data: data, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://52.31.154.40:8087/employee/bookTicket',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              toastr.success('Booking successful.');
              self.transitionTo('EmployeeHome');
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error Booking Ticket');
          }
        });
    },

    onUpdate: function(val){
        this.setState({
            data: {
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

   render: function() {
       return (
           <div className="container">

             <EmployeePaymentPanel
                 ticketPrice={this.state.ticketPrice}
                 sourceStation={this.state.sourceStation}
                 destinationStation={this.state.destinationStation}
                 date={this.state.date}
                 time={this.state.time}
                 class={this.state.class}
                 handleSubmit={this.handleSubmit}
                 onUpdate={this.onUpdate}
                 errors={this.state.errors}
                 data={this.state.data} />

           </div>
       );
     }
});

module.exports = EmployeeConfirmBookingPage;
