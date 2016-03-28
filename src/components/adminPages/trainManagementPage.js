"use strict";

var React = require('react');
var AddNewTrainPanel = require('./adminPanels/addNewTrainPanel');
var DeleteTrainPanel = require('./adminPanels/deleteTrainPanel');
var TrainsTable = require('./adminTables/trainsTable');

var TrainManagementPage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Train Management</h1>
                    <br/>
                </div>
                <AddNewTrainPanel />
                <DeleteTrainPanel />
                <TrainsTable />
            </div>
       );
     }
});

module.exports = TrainManagementPage;
