"use strict";

var React = require('react');
var AddNewTrainPanel = require('./adminPanels/addNewTrainPanel');
var DeleteTrainPanel = require('./adminPanels/deleteTrainPanel');
var TrainsTable = require('./adminTables/trainsTable');
var auth = require('../auth/auth.js');
var toastr = require('toastr');
var _ = require('lodash');

var TrainManagementPage = React.createClass({
    getInitialState: function() {
        return {
            trains: [],
            trainName: "",
            maxSeats: "",
            numFCSeats: "",
            numSCSeats: "",

            trainID: ""
        };
    },

    componentWillMount: function() {
        this.getTrains();
    },

    getTrains: function() {
        var self = this;
        var token = auth.getToken();

        return $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/train/getAllTrains',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(_.isEmpty(results)) {
                  toastr.error('No trains found');
              }
              self.setState({trains: results});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving trains');
          }
        });
    },

    handleTrainDelete: function(e) {
        e.preventDefault();
        var token = auth.getToken();
        var trainID = this.state.trainID;

        $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/train/deleteTrain?trainID=' + trainID,
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

    handleAddtrain: function(e) {
        e.preventDefault();
        var token = auth.getToken();

        var data = {
            maxFirstClass: this.state.numFCSeats,
            maxStandard: this.state.numSCSeats,
            maxSeats: this.state.maxSeats,
            trainName: this.state.trainName
        };

        $.ajax({
          type: "post",
          data: data, // Data to be sent to the server
          headers: {
              "Authorization": token
          },
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/train/createTrain',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              if(results === false){
                  toastr.error('Add train failed');
                  return;
              }
              toastr.success('Train Added');
              location.reload();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Add train failed');
          }
        });
    },

    handletrainNameInput: function(e) {
      var value = e.target.value;
      this.setState({trainName: value});
    },

    handletrainMaxSeatsInput: function(e) {
      var value = e.target.value;
      this.setState({maxSeats: value});
    },

    handletrainNumFCSeatsInput: function(e) {
      var value = e.target.value;
      this.setState({numFCSeats: value});
    },

    handletrainNumSCSeatsInput: function(e) {
      var value = e.target.value;
      this.setState({numSCSeats: value});
    },

    handletrainIDInput: function(e) {
      var value = e.target.value;
      this.setState({trainID: value});
    },


   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Train Management</h1>
                    <br/>
                </div>
                <AddNewTrainPanel
                    trainName={this.state.trainName}
                    maxSeats={this.state.maxSeats}
                    numFCSeats={this.state.numFCSeats}
                    numSCSeats={this.state.numSCSeats}
                    handletrainNameInput={this.handletrainNameInput}
                    handletrainMaxSeatsInput={this.handletrainMaxSeatsInput}
                    handletrainNumFCSeatsInput={this.handletrainNumFCSeatsInput}
                    handletrainNumSCSeatsInput={this.handletrainNumSCSeatsInput}
                    handleAddtrain={this.handleAddtrain} />
                <DeleteTrainPanel
                    trainID={this.state.trainID}
                    handletrainIDInput={this.handletrainIDInput}
                    handleTrainDelete={this.handleTrainDelete}/>
                <TrainsTable
                    trains={this.state.trains} />
            </div>
       );
     }
});

module.exports = TrainManagementPage;
