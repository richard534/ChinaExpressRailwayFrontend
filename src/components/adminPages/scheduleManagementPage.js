"use strict";

var React = require('react');
var AddNewSchedulePanel = require('./adminPanels/addNewSchedulePanel');
var DeleteSchedulePanel = require('./adminPanels/deleteSchedulePanel');
var ScheduleTable = require('./adminTables/scheduleTable');
var auth = require('../auth/auth.js');
var toastr = require('toastr');
var _ = require('lodash');
var DateJs = require('datejs');

var ScheduleManagementPage = React.createClass({
    getInitialState: function() {
        return {
            schedules: [],
            trainRoute: "",
            departureDate: "",
            departureTimeHour: "",
            departureTimeMin: "",
            arrivalDate: "",
            arrivalTimeHour: "",
            arrivalTimeMin: "",

            scheduleID: ""
        };
    },

    componentWillMount: function() {
        this.getSchedules();
    },

    // get schedules from web server
    getSchedules: function() {
        var self = this;
        var token = auth.getToken();

        $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/schedule/getAllSchedules',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)) {
                  toastr.error('No schedules found');
              }
              self.setState({schedules: results});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving schedules');
          }
        });
    },

    // handle delete schedule
    handleDeleteSchedule: function(e) {
        e.preventDefault();
        var token = auth.getToken();
        var trainID = this.state.trainID;

        var data = {
            scheduleID: this.state.scheduleID
        };

        $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          data: data,
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/schedule/deleteSchedule',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(results === false){
                  toastr.error('Schedule Deleted');
                  return;
              }
              toastr.success('Schedule Deleted');
              location.reload();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Delete Schedule Failed');
          }
        });

    },

    // handle add schedule functionality
    handleAddSchedule: function(e) {
        e.preventDefault();
        var self = this;
        var token = auth.getToken();

        var requestedDDate = new Date(self.state.departureDate);
        var departureDate = requestedDDate.toString("ddd, MMM dd yyyy");

        var requestedADate = new Date(self.state.arrivalDate);
        var arrivalDate = requestedADate.toString("ddd, MMM dd yyyy");

        var departureTime = self.state.departureTimeHour + ":" + self.state.departureTimeMin + ":00";
        var arrivalTime = self.state.arrivalTimeHour + ":" + self.state.arrivalTimeMin + ":00";


        var data = {
            trainRouteID: self.state.trainRoute,
            departureDate: departureDate,
            departureTime: departureTime,
            arrivalDate: arrivalDate,
            arrivalTime: arrivalTime,
            availableFirstClass: "90",
            availableSecondClass: "90"
        };

        return $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          data: data,
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/schedule/addSchedule',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)) {
                  toastr.error('Failed to add schedule');
              } else if(results === "true"){
                  self.setState({schedules: results});
              }
              location.reload();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Failed to add schedule');
          }
        });
    },

    // set component state to user input
    onAddScheduleUpdate: function(val) {
        this.setState({ trainRoute: val.routeID});
        this.setState({departureDate: val.depDate});
        this.setState({departureTimeHour: val.depTimeH});
        this.setState({departureTimeMin: val.depTimeM});
        this.setState({arrivalDate: val.arrDate});
        this.setState({arrivalTimeHour: val.arrTimeH});
        this.setState({arrivalTimeMin: val.arrTimeM});
    },

    // set component state to user input
    handleScheduleIDInput: function(e) {
      var value = e.target.value;
      this.setState({scheduleID: value});
    },

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Schedule Management</h1>
                    <br/>
                </div>

                <AddNewSchedulePanel
                    trainRoute={this.state.trainRoute}
                    departureDate={this.state.departureDate}
                    departureTimeHour={this.state.departureTimeHour}
                    departureTimeMin={this.state.departureTimeMin}
                    arrivalDate={this.state.arrivalDate}
                    arrivalTimeHour={this.state.arrivalTimeHour}
                    arrivalTimeMin={this.state.arrivalTimeMin}
                    onAddScheduleUpdate={this.onAddScheduleUpdate}
                    handleAddSchedule={this.handleAddSchedule}/>
                <DeleteSchedulePanel
                    scheduleID={this.state.scheduleID}
                    handleScheduleIDInput={this.handleScheduleIDInput}
                    handleDeleteSchedule={this.handleDeleteSchedule}/>
                <ScheduleTable
                    schedules={this.state.schedules} />

            </div>
       );
     }
});

module.exports = ScheduleManagementPage;
