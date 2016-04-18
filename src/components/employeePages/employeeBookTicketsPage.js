"use strict";

var React = require('react');
var SelectTicketsPanel = require('../common/selectTicketsPanel');
var TicketSummaryPanel = require('../common/ticketSummaryPanel');
var auth = require('../auth/auth.js');
var toastr = require('toastr');
var _ = require('lodash');
var DateJs = require('datejs');

var EmployeeBookTicketsPage = auth.requireAuth(React.createClass({
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
                time: "",
                availableFirstClass: 0,
                availableStandardClass: 0
            },
            middleSchedule: {
                scheduleID: 0,
                date: "",
                time: "",
                availableFirstClass: 0,
                availableStandardClass: 0
            },
            rightSchedule: {
                scheduleID: 0,
                date: "",
                time: "",
                availableFirstClass: 0,
                availableStandardClass: 0
            },

            selectedTicket: {
                id: "",
                individualprice: 0,
                totalPrice: 0,
                date: "",
                time: "",
                class: "",
                numTickets: 1
            },

            continueBtn: true
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
          url: 'http://localhost:8087/train/station',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)){
                  toastr.error('No tickets found');
                  self.setState({schedulesFound: false});
                  return;
              }

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
          url: 'http://localhost:8087/train/station',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)){
                  toastr.error('No tickets found');
                  self.setState({schedulesFound: false});
                  return;
              }

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
          url: 'http://localhost:8087/schedule/getSchedules',
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
                  time: (new Date(self.state.schedules[0].departureTime)).toTimeString(),
                  scheduleID: self.state.schedules[0].scheduleID,
                  availableFirstClass: self.state.schedules[0].availableFirstClass,
                  availableStandardClass: self.state.schedules[0].availableSecondClass
              };
              var middleSchedule = {
                  date: (new Date(self.state.schedules[1].departureDate)).toDateString(),
                  time: (new Date(self.state.schedules[1].departureTime)).toTimeString(),
                  scheduleID: self.state.schedules[1].scheduleID,
                 availableFirstClass: self.state.schedules[1].availableFirstClass,
                  availableStandardClass: self.state.schedules[1].availableSecondClass
              };
              var rightSchedule = {
                  date: (new Date(self.state.schedules[2].departureDate)).toDateString(),
                  time: (new Date(self.state.schedules[2].departureTime)).toTimeString(),
                  scheduleID: self.state.schedules[2].scheduleID,
                  availableFirstClass: self.state.schedules[2].availableFirstClass,
                  availableStandardClass: self.state.schedules[2].availableSecondClass
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

    onUpdate: function(val){
        var numTickets = val.numTickets;

        var ticket = this.state.selectedTicket;
        ticket.numTickets = numTickets;
        ticket.totalPrice = Number(ticket.individualprice * numTickets).toFixed(2);
        this.setState({numTickets: ticket});
    },

    handleScheduleSelection: function(e) {
        var selectedScheduleId = e.target.getAttribute('data-scheduleId');
        var selectedScheduleDate = e.target.getAttribute('data-date');
        var selectedScheduleTime = e.target.getAttribute('data-time').substring(0, 8);
        var selectedScheduleClass = e.target.getAttribute('data-class');
        var selectedSchedulePrice = Number(e.target.getAttribute('data-price')).toFixed(2);
        var numTickets = this.state.selectedTicket.numTickets;
        var totalTicketCost = Number(selectedSchedulePrice * numTickets).toFixed(2);


        var selectedTicket = {
            id: selectedScheduleId,
            individualprice: selectedSchedulePrice,
            totalPrice: totalTicketCost,
            date: selectedScheduleDate,
            time: selectedScheduleTime,
            class: selectedScheduleClass,
            numTickets: numTickets
        };

        this.setState({selectedTicket: selectedTicket});
        this.setState({continueBtn: false}); // Enable continue button on summary panel
    },



   render: function() {
       return (
            <div className="container">
                <SelectTicketsPanel backButtonLink="EmployeeHome"
                    sourceStation={this.state.sourceStation.sourceStationName}
                    destinationStation={this.state.destinationStation.destinationStationName}
                    leftSchedule={this.state.leftSchedule}
                    middleSchedule={this.state.middleSchedule}
                    rightSchedule={this.state.rightSchedule}
                    handleScheduleSelection={this.handleScheduleSelection}
                    schedulesFound={this.state.schedulesFound} />

                <TicketSummaryPanel buttonLink="EmployeeConfirmBooking"
                    sourceStation={this.state.sourceStation.sourceStationName}
                    destinationStation={this.state.destinationStation.destinationStationName}
                    schedulesFound={this.state.schedulesFound}
                    continueBtn={this.state.continueBtn}
                    selectedTicket={this.state.selectedTicket}
                    totalNumTickets={this.state.totalNumTickets}
                    date={this.state.selectedTicket.date}
                    time={this.state.selectedTicket.time}
                    class={this.state.selectedTicket.class}
                    ticketPrice={this.state.selectedTicket.totalPrice}
                    onUpdate={this.onUpdate}
                    scheduleId={this.state.selectedTicket.id}
                    numTickets={this.state.selectedTicket.numTickets}
                    showNumTicketSelector="true"/>
           </div>
       );
     }
}), "employee");

module.exports = EmployeeBookTicketsPage;
