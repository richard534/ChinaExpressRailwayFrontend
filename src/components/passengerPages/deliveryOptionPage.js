"use strict";

var React = require('react');
var SelectDeliveryOptionPanel = require('./passengerPanels/selectDeliveryOptionPanel');
var TicketSummaryPanel = require('../common/ticketSummaryPanel');
var toastr = require('toastr');
var auth = require('../auth/auth.js');

var deliveryOptionPage = React.createClass({
    getInitialState: function() {
        return {
            scheduleId: 0,
            numTickets: 0,

            ticketPrice: 0,
            passengerId: 0,
            email: "",
            sourceStation: "",
            destinationStation: "",
            date: "",
            time: ""
        };
    },

    componentWillMount: function() {
        var passengerId = auth.getPassengerId();

        this.setState({scheduleId: this.props.query.scheduleId});
        this.setState({passengerId: passengerId});
        this.setState({numTickets: this.props.query.numTickets});
        this.setState({ticketPrice: this.props.query.ticketPrice});
        this.setState({sourceStation: this.props.query.sourceStation});
        this.setState({destinationStation: this.props.query.destinationStation});
        this.setState({date: this.props.query.date});
        this.setState({time: this.props.query.time});
        this.setState({class: this.props.query.class});

        this.getPassengerEmail();
    },

    // Get customer email using logged in users username
    getPassengerEmail: function() {
        var self = this;
        var token = auth.getToken();
        var username = auth.getUsername();

        return $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          data: {
              "username": username
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/passenger/getPassengerAccount',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              self.setState({email: results.person.emailAddress});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving passenger email');
          }
        });
    },

   render: function() {
       return (
            <div className="container">
                <SelectDeliveryOptionPanel email={this.state.email} />
                <TicketSummaryPanel buttonLink="Payment"
                    sourceStation={this.state.sourceStation}
                    destinationStation={this.state.destinationStation}
                    date={this.state.date}
                    time={this.state.time}
                    class={this.state.class}
                    ticketPrice={this.state.ticketPrice}
                    showNumTicketSelector="false"
                    totalNumTickets={this.state.numTickets}
                    scheduleId={this.state.scheduleId}
                    numTickets={this.state.numTickets} />
           </div>
       );
     }
});

module.exports = deliveryOptionPage;
