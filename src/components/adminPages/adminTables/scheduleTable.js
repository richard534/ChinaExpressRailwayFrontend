"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var ScheduleTable = React.createClass({

   render: function() {
       var table;
       var schedules = this.props.schedules;

       var renderNoschedulesTable = function() {
           return (
                <h4>No schedules Found</h4>
           );
       };

       var createscheduleRow = function(schedule) {

            var departureDate = new Date(schedule.departureDate).toDateString();
            var departureTime = new Date(schedule.departureTime).toTimeString().substring(0, 8);
            var arrivalDate = new Date(schedule.arrivalDate).toDateString();
            var arrivalTime = new Date(schedule.arrivalTime).toTimeString().substring(0, 8);

            return (
                <tr key={schedule.scheduleID}>
                    <td>{schedule.scheduleID}</td>
                    <td>{schedule.trainRoute.trainRouteID}</td>
                    <td>{departureDate}</td>
                    <td>{departureTime}</td>
                    <td>{arrivalDate}</td>
                    <td>{arrivalTime}</td>
                    <td>{schedule.availableFirstClass}</td>
                    <td>{schedule.availableSecondClass}</td>
                </tr>
            );
        };

       var renderscheduleTable = function() {
           return (
               <table className="table table-bordered table-striped">
                  <tr>
                     <td>ScheduleID</td>
                     <td>RouteID</td>
                     <td>Departure Date</td>
                     <td>Departure Time</td>
                     <td>Arrival Date</td>
                     <td>Arrival Time</td>
                     <td>#First Class Seats Available</td>
                     <td>#Standard Class Seats Available</td>
                 </tr>
                 {schedules.map(createscheduleRow)}
               </table>
           );
       };

       if(_.isEmpty(schedules)){
           table = renderNoschedulesTable();
       } else {
           table = renderscheduleTable();
       }

       return (
           <div className="col-md-12">
               <div className="panel panel-default">
                   <div className="panel-body">
                     <h4>Current Schedules</h4>
                     <br/>
                     {table}
                   </div>
               </div>
             <Link to="AdminHome"><button className="btn btn-primary">Back</button></Link>
             <br />
             <br />
           </div>
       );
     }
});

module.exports = ScheduleTable;
