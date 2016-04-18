"use strict";

var React = require('react');
var AddNewSchedulePanel = require('./adminPanels/addNewSchedulePanel');
var DeleteSchedulePanel = require('./adminPanels/deleteSchedulePanel');
var ScheduleTable = require('./adminTables/scheduleTable');
var auth = require('../auth/auth.js');
var toastr = require('toastr');
var _ = require('lodash');

var ScheduleManagementPage = React.createClass({
    getInitialState: function() {
        return {
            schedules: [],
            trainRoute: "",
            departureDate: "",
            departureTimeHour: "",
            departureTimeMin: "",

            scheduleID: ""
        };
    },

    componentWillMount: function() {
        this.getSchedules();
    },

    getSchedules: function() {
        var self = this;
        var token = auth.getToken();

    },

    handleAddSchedule: function(e) {
        e.preventDefault();
        var token = auth.getToken();

        return $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://52.31.154.40:8087/schedule/getSchedules',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)) {
                  toastr.error('No Schedules found');
              }
              self.setState({schedules: results});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving Schedules');
          }
        });
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
                    departureTimeMin={this.state.departureTimeMin} />
                <DeleteSchedulePanel
                    scheduleID={this.state.scheduleID} />
                <ScheduleTable
                    schedules={this.state.schedules} />

            </div>
       );
     }
});

module.exports = ScheduleManagementPage;
