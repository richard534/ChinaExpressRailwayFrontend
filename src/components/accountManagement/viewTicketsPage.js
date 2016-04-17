"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var auth = require('../auth/auth.js');
var toastr = require('toastr');
var _ = require('lodash');

var ViewTickesPage = React.createClass({
    getInitialState: function() {
        return {
            tickets: []
        };

    },


    componentWillMount: function() {
        this.getTicketList();
    },

    getTicketList: function() {
        var self = this;
        var token = auth.getToken();
        var passengerID = auth.getPassengerId();

        return $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          data: {
              "passengerID": passengerID
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://52.31.154.40:8087/ticket/previousTickets',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)) {
                  toastr.error('No Tickets found for this account');
              }

              self.setState({tickets: results});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving passenger tickets');
          }
        });
    },

   render: function() {
       var table;
       var tickets = this.state.tickets;

       var renderNoTicketsTable = function() {
           return (
                <h4>No Tickets Found</h4>
           );
       };

       var createTicketRow = function(ticket) {
            return (
                <tr key={ticket.routeID}>
                    <td>{ticket.ticketNum}</td>
                    <td>{ticket.departureDate}</td>
                    <td>{ticket.depaertureTime}</td>
                    <td>{ticket.status}</td>
                </tr>
            );
        };

       var renderTicketsTable = function() {
           return (
               <table className="table table-bordered table-striped">
                  <tr>
                     <td>Route</td>
                     <td>TicketNum</td>
                     <td>Departure Date/Time</td>
                     <td>Arrival Date/Time</td>
                     <td>Status</td>
                 </tr>
                 <tr>
                     {tickets.map(createTicketRow)}
                 </tr>
               </table>
           );
       };

       if(_.isEmpty(tickets)){
           table = renderNoTicketsTable();
       } else {
           table = renderTicketsTable();
       }



       return (
            <div className="container">
                <div className="row">
                    <h1>Ticket Management</h1>
                    <br/>
                </div>

                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h4>My Tickets</h4>
                            <br/>
                            {table}

                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <Link to="MyAccount"><button className="btn btn-primary">Back</button></Link>
                    <br/><br/>
                </div>

            </div>
       );
     }
});

module.exports = ViewTickesPage;
