"use strict";

var React = require('react');
var AddNewRoutePanel = require('./adminPanels/addNewRoutePanel');
var DeleteRoutePanel = require('./adminPanels/deleteRoutePanel');
var RoutesTable = require('./adminTables/routesTable');

var RouteManagementPage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Route Management</h1>
                    <br/>
                </div>
                <AddNewRoutePanel />
                <DeleteRoutePanel />
                <RoutesTable />
            </div>
       );
     }
});

module.exports = RouteManagementPage;
