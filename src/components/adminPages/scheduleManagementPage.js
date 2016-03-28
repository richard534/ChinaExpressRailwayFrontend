"use strict";

var React = require('react');
var AddNewSchedulePanel = require('./adminPanels/addNewSchedulePanel');
var DeleteSchedulePanel = require('./adminPanels/DeleteSchedulePanel');
var ScheduleTable = require('./adminTables/scheduleTable');

var ScheduleManagementPage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Schedule Management</h1>
                    <br/>
                </div>

                <AddNewSchedulePanel />
                <DeleteSchedulePanel />
                <ScheduleTable />

            </div>
       );
     }
});

module.exports = ScheduleManagementPage;
