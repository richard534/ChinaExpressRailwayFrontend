"use strict";

var React = require('react');
var StationTable = require('./adminTables/stationTable');
var AddNewStationPanel = require('./adminPanels/addNewStationPanel');
//var DeleteStationPanel = require('./adminPanels/deleteStationPanel');
var auth = require('../auth/auth.js');
var toastr = require('toastr');
var _ = require('lodash');

var StationManagementPage = React.createClass({
    getInitialState: function() {
        return {
            stations: [],
            stationName: "",
            stationAddress: ""
            //stationID: ""
        };
    },

    componentWillMount: function() {
        this.getStations();
    },

    getStations: function() {
        var self = this;
        var token = auth.getToken();

        return $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/train/station',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)) {
                  toastr.error('No Stations found');
              }
              self.setState({stations: results});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving passenger tickets');
          }
        });
    },

    /*
    handleStationDelete: function(e) {
        e.preventDefault();
        console.log("Delete Station");
    },
    */

    handleAddStation: function(e) {
        e.preventDefault();
        var token = auth.getToken();

        var data = {
            stationName: this.state.stationName,
            stationAddress: this.state.stationAddress
        };

        $.ajax({
          type: "post",
          data: data, // Data to be sent to the server
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/train/addStation',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(results === false){
                  toastr.error('Add Station failed');
                  return;
              }
              toastr.success('Station Added');
              location.reload();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Add Station failed');
          }
        });
    },

    handleStationNameInput: function(e) {
      var value = e.target.value;
      this.setState({stationName: value});
    },

    handleStationAddressInput: function(e) {
      var value = e.target.value;
      this.setState({stationAddress: value});
    },

    /*
    handleStationIDInput: function(e) {
      var value = e.target.value;
      this.setState({stationID: value});
    },
    */

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Station Management</h1>
                    <br/>
                </div>

                <AddNewStationPanel
                    stationName={this.state.stationName}
                    stationAddress={this.state.stationAddress}
                    handleStationNameInput={this.handleStationNameInput}
                    handleStationAddressInput={this.handleStationAddressInput}
                    handleAddStation={this.handleAddStation} />

                {/* // Removed due to lack of web service functionality
                    <DeleteStationPanel
                        stationID={this.state.stationID}
                        handleStationIDInput={this.handleStationIDInput}
                        handleStationDelete={this.handleStationDelete} />
                */}

                <StationTable
                    stations={this.state.stations} />

            </div>
       );
     }
});

module.exports = StationManagementPage;
