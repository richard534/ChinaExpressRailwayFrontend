"use strict";

var React = require('react');
var auth = require('../../auth/auth.js');
var _ = require('lodash');
var toastr = require('toastr');

var CanceledTrainsModal = React.createClass({
    getDefaultProps: function() {
        return {
            canceledTicketReport: ""
        };
    },

   render: function() {
       var table;
       var reports = this.props.canceledTicketReport;

       var renderNoReportsTable = function() {
           return (
                <h4>No Tickets Found</h4>
           );
       };

       var createReportRow = function(report) {
           var status;
           if(report.cancelled){
               status = "Cancelled";
           } else {
               status = "Not Cancelled";
           }
            return (
                <tr key={report.routeID}>
                    <td>{report.ticketID}</td>
                    <td>{report.schedule.scheduleID}</td>
                    <td>{report.schedule.trainRoute.train.trainName}</td>
                    <td>{report.schedule.trainRoute.sourceStation.name}</td>
                    <td>{report.schedule.trainRoute.arrivalStation.name}</td>
                    <td>{report.schedule.departureDate}</td>
                    <td>{report.schedule.departureTime}</td>
                    <td>{report.schedule.arrivalDate}</td>
                    <td>{report.schedule.arrivalTime}</td>
                    <td>{report.numberOfSecondClass}</td>
                    <td>{report.numberOfFirstClass}</td>
                    <td>{status}</td>
                </tr>
            );
        };

       var renderReportsTable = function() {
           return (
               <table className="table table-bordered table-striped">
                  <tr>
                     <td>TicketID</td>
                     <td>ScheduleID</td>
                     <td>Train Name</td>
                     <td>Source Station</td>
                     <td>Arrival Station</td>
                     <td>Departure Date</td>
                     <td>Departure Time</td>
                     <td>Arrival Date</td>
                     <td>Arrival Time</td>
                     <td>#Standard Class Ordered</td>
                     <td>#First Class Ordered</td>
                     <td>Status</td>
                 </tr>
                 <tr>
                     {reports.map(createReportRow)}
                 </tr>
               </table>
           );
       };

       if(_.isEmpty(reports)){
           table = renderNoReportsTable();
       } else {
           table = renderReportsTable();
       }

       return (
           <div className="modal fade" id="CanceledTrainsModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
             <div className="modal-dialog modal-lg" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                   <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                   <h4 className="modal-title" id="myModalLabel">Canceled Trains Report</h4>
                 </div>
                 <div className="modal-body">
                     {table}
                 </div>
                 <div className="modal-footer">
                   <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                 </div>
               </div>
             </div>
           </div>

       );
     }
});

module.exports = CanceledTrainsModal;
