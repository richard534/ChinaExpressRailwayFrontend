"use strict";

var React = require('react');
var PaymentPanel = require('./passengerPanels/paymentPanel.js');
var toastr = require('toastr');
var auth = require('../auth/auth.js');

var paymentPage = React.createClass({
    getInitialState: function() {
        return {
            scheduleId: 0,
            numTickets: 0,

            ticketPrice: 0,
            passengerId: 0,
            sourceStation: "",
            destinationStation: "",
            date: "",
            time: "",
            class: "",

            ammountInWallet: 0,
            ammountLeftInWallet: 0
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

        this.getPassengerDetails();
    },

    getPassengerDetails: function() {
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
          url: 'http://52.31.154.40:8087/passenger/getPassengerAccount',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              var ammountInWallet = results.walletAmount;
              self.setState({ammountInWallet: ammountInWallet});

              var ammountLeft = ammountInWallet - self.state.ticketPrice;
              self.setState({ammountLeftInWallet: ammountLeft});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving passenger details');
          }
        });
    },

    handleSubmit: function() {
        var self = this;
        var token = auth.getToken();
        var ticketID = this.state.scheduleId;

        return $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          data: {
              "ticketID": ticketID
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://52.31.154.40:8087/ticket/getTicket',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              toastr.success('Bookings successful.');
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error Booking Ticket');
          }
        });
    },

   render: function() {
       return (
            <div className="container">
                <PaymentPanel
                    ammountInWallet={this.state.ammountInWallet}
                    ticketPrice={this.state.ticketPrice}
                    ammountLeftInWallet={this.state.ammountLeftInWallet}
                    sourceStation={this.state.sourceStation}
                    destinationStation={this.state.destinationStation}
                    date={this.state.date}
                    time={this.state.time}
                    class={this.state.class}
                    handleSubmit={this.handleSubmit} />
           </div>
       );
     }
});

module.exports = paymentPage;
