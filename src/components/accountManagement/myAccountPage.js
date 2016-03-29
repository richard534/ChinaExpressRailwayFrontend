"use strict";

var React = require('react');
var ViewMyTicketsPanel = require('./accountManagementPanels/viewMyTicketsPanel');
var ManageWalletPanel = require('./accountManagementPanels/manageWalletPanel');
var EditAccountDetailsPanel = require('./accountManagementPanels/editAccountDetailsPanel');

var MyAccountPage = React.createClass({

   render: function() {
       return (
           <div className="container">
                <div className="col-md-12">
                    <h1>Welcome Back Richard</h1>
                    <br/>
                </div>
                <ViewMyTicketsPanel />
                <ManageWalletPanel />
                <EditAccountDetailsPanel />
            </div>
       );
     }
});

module.exports = MyAccountPage;
