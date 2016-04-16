"use strict";

var React = require('react');
var SelectTicketsPanel = require('../common/selectTicketsPanel');
var TicketSummaryPanel = require('../common/ticketSummaryPanel');
var auth = require('../auth/auth.js');
var toastr = require('toastr');
var _ = require('lodash');
var DateJs = require('datejs');

// TODO populate h1 placeholders
// TODO populate requested dates
// TODO retrieve tickets using ajax call and diaplay viable tickets
var BookTicketsPage = auth.requireAuth(React.createClass({
    getInitialState: function() {
        return {
            sourceStation: {
                sourceStationName: this.props.query.src,
                sourceStationId: ""
            },
            destinationStation: {
                destinationStationName: this.props.query.dest,
                destinationStationId: ""
            },
            requestedParameters: {
                requestedDepartureDate: this.props.query.dDate,
                requestedDepartureTimeHour: this.props.query.dTHour,
                requestedDepartureTimeMin: this.props.query.dTMin
            },

            schedules: [],
            schedulesFound: true,
            leftSchedule: {
                scheduleID: 0,
                date: "",
                availableFirstClass: 0,
                availableStandardClass: 0
            },
            middleSchedule: {
                scheduleID: 0,
                date: "",
                availableFirstClass: 0,
                availableStandardClass: 0
            },
            rightSchedule: {
                scheduleID: 0,
                date: "",
                availableFirstClass: 0,
                availableStandardClass: 0
            },
            selectedTicket: "",
            selectedticketPrice: 0,
            totalTicketCost: 3.30
        };
    },

    componentWillMount: function() {
        var self = this;

        self.getSourceStation(function() {
            self.getDestStation(function() {
                self.getSchedules();
            });
        });

    },

    getSourceStation: function(cb) {
        var self = this;
        var sourceStationName = this.state.sourceStation.sourceStationName;

        return $.ajax({
          type: "get",
          data: {
              "station": sourceStationName
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://52.31.154.40:8087/train/station',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              self.setState({
                  sourceStation: {
                      sourceStationName: results[0].name,
                      sourceStationId: results[0].stationID
                  }
              });
              cb();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving schedules');
              self.setState({schedulesFound: false});
          }
        });
    },

    getDestStation: function(cb) {
        var self = this;
        var destinationStationName = this.state.destinationStation.destinationStationName;

        return $.ajax({
          type: "get",
          data: {
              "station": destinationStationName
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://52.31.154.40:8087/train/station',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              self.setState({
                  destinationStation: {
                      destinationStationName: results[0].name,
                      destinationStationId: results[0].stationID
                  }
              });
              cb();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving schedules');
              self.setState({schedulesFound: false});
          }
        });
    },


    getSchedules: function() {

        var requestedDate = new Date(this.state.requestedParameters.requestedDepartureDate);
        var departureDate = requestedDate.toString("ddd, MMM dd yyyy");

        var departureTime = this.state.requestedParameters.requestedDepartureTimeHour + ":" + this.state.requestedParameters.requestedDepartureTimeMin;

        var data = {
            sourceStationID: this.state.sourceStation.sourceStationId,
            arrivalStationID: this.state.destinationStation.destinationStationId,
            departureDate: departureDate,
            departureTime: departureTime
        };
        var self = this;

        return $.ajax({
          type: "post",
          data: data, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://52.31.154.40:8087/schedule/getSchedules',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)){
                  toastr.error('No tickets found');
                  self.setState({schedulesFound: false});
                  return;
              }
              results.map(function(schedule){
                  self.setState({
                      schedules: self.state.schedules.concat([schedule])
                  });
              });

              var leftSchedule = {
                  date: (new Date(self.state.schedules[0].departureDate)).toDateString(),
                  scheduleID: self.state.schedules[0].scheduleID,
                  availableFirstClass: self.state.schedules[0].availableFirstClass,
                  availableStandardClass: self.state.schedules[0].availableStandardClass
              };
              var middleSchedule = {
                  date: (new Date(self.state.schedules[1].departureDate)).toDateString(),
                  scheduleID: self.state.schedules[1].scheduleID,
                 availableFirstClass: self.state.schedules[1].availableFirstClass,
                  availableStandardClass: self.state.schedules[1].availableStandardClass
              };
              var rightSchedule = {
                  date: (new Date(self.state.schedules[2].departureDate)).toDateString(),
                  scheduleID: self.state.schedules[2].scheduleID,
                  availableFirstClass: self.state.schedules[2].availableFirstClass,
                  availableStandardClass: self.state.schedules[2].availableStandardClass
              };

              self.setState({ leftSchedule: leftSchedule});
              self.setState({ middleSchedule: middleSchedule});
              self.setState({ rightSchedule: rightSchedule});

          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving schedules');
              self.setState({schedulesFound: false});
          }
        });
    },

    handleScheduleSelection: function(e) {
        console.log("clickEvent");
        var selected = e.currentTarget.id;
        this.setState({selectedTicket: selected});

        var ticketPrice = Number(e.currentTarget.value).toFixed(2);
        this.setState({selectedticketPrice: ticketPrice});

        var totalTicketCost = Number(ticketPrice * 1).toFixed(2);
        this.setState({totalTicketCost: totalTicketCost});
    },

   render: function() {

       return (
            <div className="container">
                <SelectTicketsPanel backButtonLink="app"
                    sourceStation={this.state.sourceStation.sourceStationName}
                    destinationStation={this.state.destinationStation.destinationStationName}
                    leftSchedule={this.state.leftSchedule}
                    middleSchedule={this.state.middleSchedule}
                    rightSchedule={this.state.rightSchedule}
                    handleScheduleSelection={this.handleScheduleSelection}
                    schedulesFound={this.state.schedulesFound}
                    />

                <TicketSummaryPanel buttonLink="SelectDeliveryMethod"
                    sourceStation={this.state.sourceStation.sourceStationName}
                    destinationStation={this.state.destinationStation.destinationStationName}
                    totalTicketCost={this.state.totalTicketCost}
                    schedulesFound={this.state.schedulesFound} />
           </div>
       );
    }
}), "passenger");

module.exports = BookTicketsPage;
