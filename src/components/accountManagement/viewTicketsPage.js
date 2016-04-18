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
           console.log(ticket);
           var status = ticket.cancelled;
           if(status === "true"){
               status = "Cancelled";
           } else {
               status = "Not Cancelled";
           }

           var departureDate = new Date(ticket.schedule.departureDate).toDateString();
           var departureTime = new Date(ticket.schedule.departureTime).toDateString();
           var arrivalDate = new Date(ticket.schedule.arrivalDate).toDateString();
           var arrivalTime = new Date(ticket.schedule.arrivalTime).toDateString();

            return (
                <tr key={ticket.ticketID}>
                    <td>{ticket.ticketID}</td>
                    <td>{ticket.schedule.trainRoute.sourceStation.name}</td>
                    <td>{ticket.schedule.trainRoute.arrivalStation.name}</td>
                    <td>{departureDate}</td>
                    <td>{departureTime}</td>
                    <td>{arrivalDate}</td>
                    <td>{arrivalTime}</td>
                    <td>{status}</td>
                </tr>
            );
        };

       var renderTicketsTable = function() {
           return (
               <table className="table table-bordered table-striped">
                  <tr>
                     <td>TicketID</td>
                     <td>Departure Station</td>
                     <td>Arrival Station</td>
                     <td>Departure Date</td>
                     <td>Departure Time</td>
                     <td>Arrival Date</td>
                     <td>Arrival Time</td>
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
