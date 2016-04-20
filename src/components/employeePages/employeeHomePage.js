"use strict";

var React = require('react');
var BookTicketsPanel = require('../common/bookTicketsPanel');
var auth = require('../auth/auth.js');
var validate = require('validate.js');
var _ = require('lodash');
var toastr = require('toastr');
var BookedTrainsModal = require('./employeeModals/bookedTrainsModal');
var CanceledTrainsModal = require('./employeeModals/canceledTrainsModal');

var ticketConstraints = {
    ticketId: {
        presence: true
    }
};

var constraints = {
    sourceStation: {
        presence: true
    },
    destinationStation: {
        presence: true
    },
    departureDate: {
        presence: true
    }
};

var employeeHomePage = auth.requireAuth(React.createClass({

    getInitialState: function() {
        return {
                data: {
                    sourceStation: "",
                    destinationStation: "",
                    departureDate: "",
                    departureTimeHour: "",
                    departureTimeMin: ""
                },
                errors: {
                    sourceStation: "Please enter your journey requirements"
                },

                ticket: {
                    ticketId: ""
                },
                ticketErrors: {
                    ticketId: "Enter Ticket Num"
                },
                bookedTicketReport: "",
                canceledTicketReport: ""
        };
    },

    // set this components state to user input
    onUpdate: function(val){
        this.setState({
            data: {
                sourceStation: val.sourceStation,
                destinationStation: val.destinationStation,
                departureDate: val.departureDate,
                departureTimeHour: val.departureTimeHour,
                departureTimeMin: val.departureTimeMin
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


    // Handle ajax call to server to delete ticket by ticketID
    handleDeleteTicketSubmit: function(e) {
        e.preventDefault();

        var self = this;
        var token = auth.getToken();
        var ticketID = this.state.ticket.ticketId;

        return $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/ticket/cancelTicket?ticketID=' + ticketID,
          dataType: 'text', // The type of data that you're expecting back from the server
          success: function(results) {
              toastr.success('Ticket Canceled');
              location.reload();
          },
          error: function(jqXHR, textStatus, errorThrown) {
            toastr.error('Error Cancelling ticket');
            console.log(textStatus + " " + errorThrown);
          }
        });
    },

    // handler method for updating ticketID field after user input
    handleTicketIdChange: function() {
        this.setState({
            ticket: {
                ticketId: this.refs.ticketId.getDOMNode().value
            }
        }, this.validateTicket);
    },

    // validate entered ticket string against ticketConstraints object
    validateTicket: function () {
        var validationErrors = validate(this.state.ticket, ticketConstraints);
        if(validationErrors){
            this.setState({ticketErrors: validationErrors});
        } else {
            this.setState({ticketErrors: {}});
        }
    },

    // Retrieve canceled tickets report object from webservice and set it to state
    getCanceledTicketsReport: function() {
        var self = this;
        var token = auth.getToken();
        var ticketID = this.props.ticketID;

        return $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          data: {
              "ticketID": ticketID
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/employee/getCancelledTickets',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)){
                  toastr.error('No canceled tickets present on system');
                  return;
              }
              self.setState({canceledTicketReport: results});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving canceled tickets report');
          }
        });
    },

    // Retrieve booked tickets report object from webservice and set it to state
    getBookedTrainsReport: function() {
        var self = this;
        var token = auth.getToken();
        var ticketID = this.props.ticketID;

        return $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          data: {
              "ticketID": ticketID
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/employee/getBookedTickets',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)){
                  toastr.error('No booked tickets present on system');
                  return;
              }
              self.setState({bookedTicketReport: results});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving booked tickets report');
          }
        });
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

               <BookTicketsPanel
                   buttonLink="EmployeeBookTickets"
                   sourceStation={this.state.data.sourceStation}
                   destinationStation={this.state.data.destinationStation}
                   departureDate={this.state.data.departureDate}
                   departureTimeHour={this.state.data.departureTimeHour}
                   departureTimeMin={this.state.data.departureTimeMin}
                   onUpdate={this.onUpdate}
                   errors={this.state.errors} />

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
                                 <button type="submit" className="btn btn-primary btn-block" id="reportButton" data-toggle="modal" data-target="#BookedTrainsModal" onClick={this.getBookedTrainsReport}>Generate Booked Trains Report</button>
                             </div>
                         </div>
                      </div>
                      <div className="col-md-6">
                          <div className="panel panel-default">
                             <div className="panel-body">
                                 <img className="img-responsive pull-left" width="100" alt="Report" src="/images/reportImage.png"/>
                                 <p className="smallPanelTextPadding">Here you can generate a canceled trains report</p>
                                 <br/>
                                 <button type="submit" className="btn btn-primary btn-block" id="reportButton" data-toggle="modal" data-target="#CanceledTrainsModal" onClick={this.getCanceledTicketsReport}>Generate Canceled Trains Report</button>
                             </div>
                         </div>
                      </div>
                  </div>
                  <BookedTrainsModal bookedTicketReport={this.state.bookedTicketReport} />
                  <CanceledTrainsModal canceledTicketReport={this.state.canceledTicketReport} />
           </div>

       );
   }
}), "employee");

module.exports = employeeHomePage;
