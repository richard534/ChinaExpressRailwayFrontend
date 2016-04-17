"use strict";

var React = require('react');
var BookTicketsPanel = require('../common/bookTicketsPanel');
var auth = require('../auth/auth.js');
var validate = require('validate.js');
var _ = require('lodash');
var toastr = require('toastr');

var ticketConstraints = {
    ticketId: {
        presence: true
    }
};

var employeeHomePage = auth.requireAuth(React.createClass({

    getInitialState: function() {
        return {
                sourceStation: "",
                destinationStation: "",
                departureDate: {},

                ticket: {
                    ticketId: ""
                },
                ticketErrors: {
                    ticketId: "Enter Ticket Num"
                }
        };
    },

    // TODO check this is working
    handleDeleteTicketSubmit: function(e) {
        e.preventDefault();

        var self = this;
        var token = auth.getToken();
        var ticketID = this.state.ticket.ticketId;
        console.log(ticketID);

        return $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          data: {
              "ticketID": ticketID
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://52.31.154.40:8087/ticket/cancelTicket',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)){
                  toastr.error('No ticket found');
                  return;
              }
              toastr.success('Ticket Deleted');
          },
          error: function(jqXHR, textStatus, errorThrown) {
            toastr.error('Error deleting ticket');
            console.log(textStatus + " " + errorThrown);
          }
        });
    },

    handleTicketIdChange: function() {
        this.setState({
            ticket: {
                ticketId: this.refs.ticketId.getDOMNode().value
            }
        }, this.validateTicket);
    },

    validateTicket: function () {
        var validationErrors = validate(this.state.ticket, ticketConstraints);
        if(validationErrors){
            this.setState({ticketErrors: validationErrors});
        } else {
            this.setState({ticketErrors: {}});
        }
    },

   render: function() {
       var self = this;
       var ticketErrors;
       var deleteTicketButton;

       var populateTicketErrorsList = function() {
           return (
               <div className="div-md-12 alert alert-danger" id="dangerDiv">
                   <div>{self.state.ticketErrors.ticketId}</div>
               </div>
           );
       };

       var disabledDeleteTicketButton = function() {
           return (
               <button type="button" className="btn btn-primary btn-block disabled">Delete Ticket</button>
           );
       };

       var enabledDeleteTicketButton = function() {
           return (
               <button type="submit" className="btn btn-primary btn-block">Delete Ticket</button>
           );
       };

       if(!_.isEmpty(self.state.ticketErrors)) {
           ticketErrors = populateTicketErrorsList();
           deleteTicketButton = disabledDeleteTicketButton();
       } else {
           deleteTicketButton = enabledDeleteTicketButton();
       }

       return (
           <div className="container">
               <div className="col-md-12">
                   <h1>Employee Home</h1>
                   <br/>
               </div>
               <BookTicketsPanel buttonLink="EmployeeBookTickets"
                   sourceStation={this.state.sourceStation}
                   destinationStation={this.state.destinationStation}
                   departureDate={this.state.departureDate} />

                   <div className="col-md-8">
                       <div className="panel panel-default">
                          <div className="panel-body">
                              <h4>Delete Ticket</h4>
                              <br/>
                              {ticketErrors}
                                <form className="form-horizontal" onSubmit={this.handleDeleteTicketSubmit} onChange={this.handleTicketIdChange}>
                                  <div className="form-group">
                                      <label className="col-md-2 control-label">TicketId:</label>
                                      <div className="col-sm-7">
                                          <input className="form-control" ref="ticketId" placeholder="Enter ticketId..." />
                                      </div>
                                      <div className="col-md-3">
                                          {deleteTicketButton}
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-8">
                      <div className="col-md-6">
                          <div className="panel panel-default">
                             <div className="panel-body">
                                 <img className="img-responsive pull-left" width="100" alt="Report" src="/images/reportImage.png"/>
                                 <p className="smallPanelTextPadding">Here you can generate a booked trains report</p>
                                 <br/>
                                 <button type="submit" className="btn btn-primary btn-block" id="reportButton">Generate Booked Trains Report</button>
                             </div>
                         </div>
                      </div>
                      <div className="col-md-6">
                          <div className="panel panel-default">
                             <div className="panel-body">
                                 <img className="img-responsive pull-left" width="100" alt="Report" src="/images/reportImage.png"/>
                                 <p className="smallPanelTextPadding">Here you can generate a canceled trains report</p>
                                 <br/>
                                 <button type="submit" className="btn btn-primary btn-block" id="reportButton">Generate Canceled Trains Report</button>
                             </div>
                         </div>
                      </div>
                  </div>
           </div>

       );
   }
}), "employee");

module.exports = employeeHomePage;
