"use strict";

var React = require('react');
var StationTable = require('./adminTables/StationTable');
var AddNewStationPanel = require('./adminPanels/addNewStationPanel');
var DeleteStationPanel = require('./adminPanels/deleteStationPanel');

var StationManagementPage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Station Management</h1>
                    <br/>
                </div>

                <AddNewStationPanel />
                <DeleteStationPanel />
                <StationTable />

            </div>
       );
     }
});

module.exports = StationManagementPage;
