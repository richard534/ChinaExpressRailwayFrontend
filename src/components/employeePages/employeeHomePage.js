"use strict";

var React = require('react');
var BookTicketsPanel = require('../common/bookTicketsPanel');

var employeeHomePage = React.createClass({

    getInitialState: function() {
        return {
                sourceStation: "",
                destinationStation: "",
                departureDate: {}
        };
    },

   render: function() {
       return (
           <div className="container">
               <BookTicketsPanel buttonLink="EmployeeBookTickets"
                   sourceStation={this.props.sourceStation}
                   destinationStation={this.props.destinationStation}
                   departureDate={this.props.departureDate} />

                   <div className="col-md-8">
                       <div className="panel panel-default">
                          <div className="panel-body">
                              <h4>Delete Ticket</h4>
                              <br/>
                                <form className="form-horizontal">
                                  <div className="form-group">
                                      <label htmlFor="ticketId" className="col-md-2 control-label">TicketId:</label>
                                      <div className="col-sm-10">
                                          <input className="form-control" id="ticketId" placeholder="Enter ticketId..." />
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
});

module.exports = employeeHomePage;
