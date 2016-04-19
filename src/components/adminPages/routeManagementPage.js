"use strict";

var React = require('react');
var AddNewRoutePanel = require('./adminPanels/addNewRoutePanel');
var DeleteRoutePanel = require('./adminPanels/deleteRoutePanel');
var RoutesTable = require('./adminTables/routesTable');
var auth = require('../auth/auth.js');
var toastr = require('toastr');
var _ = require('lodash');

var RouteManagementPage = React.createClass({
    getInitialState: function() {
        return {
            routes: [],
            sourceStation: "",
            destinationStation: "",
            train: "",
            duration: "",

            routeID: ""
        };
    },

    componentWillMount: function() {
        this.getRoutes();
    },

    getRoutes: function() {
        var self = this;
        var token = auth.getToken();

        return $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/train/getAllTrainRoutes',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)) {
                  toastr.error('No Routes found');
              }
              self.setState({routes: results});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving routes');
          }
        });
    },

    handleRouteDelete: function(e) {
        e.preventDefault();
        var token = auth.getToken();

        $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          data: {
              trainRouteID: this.state.routeID
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/train/deleteTrainRoute',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(results === false){
                  toastr.error('Delete train failed');
                  return;
              }
              toastr.success('Train Deleted');
              location.reload();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Delete train failed');
          }
        });
    },

    handleAddRoute: function(e) {
        e.preventDefault();
        var token = auth.getToken();

        var data = {
            trainID: this.state.train,
            sourceStationID: this.state.sourceStation,
            arrivalStationID: this.state.destinationStation,
            journeyTime: this.state.duration
        };

        $.ajax({
          type: "post",
          data: data, // Data to be sent to the server
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/train/addTrainRoute',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(results === false){
                  toastr.error('Add Route failed');
                  return;
              }
              toastr.success('Route Added');
              location.reload();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Add Route failed');
          }
        });
    },

    handleSourceStationIDInput: function(e) {
      var value = e.target.value;
      this.setState({sourceStation: value});
    },

    handleDestinationStationIDInput: function(e) {
      var value = e.target.value;
      this.setState({destinationStation: value});
    },

    handleTrainIDInput: function(e) {
      var value = e.target.value;
      this.setState({train: value});
    },

    handleDurationInput: function(e) {
      var value = e.target.value;
      this.setState({duration: value});
    },

    handleRouteIDInput: function(e) {
      var value = e.target.value;
      this.setState({routeID: value});
    },



   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Route Management</h1>
                    <br/>
                </div>
                <AddNewRoutePanel
                    sourceStation={this.state.sourceStation}
                    destinationStation={this.state.destinationStation}
                    train={this.state.train}
                    duration={this.state.duration}
                    handleAddRoute={this.handleAddRoute}
                    handleSourceStationIDInput={this.handleSourceStationIDInput}
                    handleDestinationStationIDInput={this.handleDestinationStationIDInput}
                    handleTrainIDInput={this.handleTrainIDInput}
                    handleDurationInput={this.handleDurationInput}/>
                <DeleteRoutePanel
                     routeID={this.state.routeID}
                     handleRouteDelete={this.handleRouteDelete}
                     handleRouteIDInput={this.handleRouteIDInput}/>
                <RoutesTable
                    routes={this.state.routes} />
            </div>
       );
     }
});

module.exports = RouteManagementPage;
