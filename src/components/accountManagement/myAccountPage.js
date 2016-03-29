"use strict";

var React = require('react');
var ViewMyTicketsPanel = require('./accountManagementHomePanels/viewMyTicketsPanel');
var ManageWalletPanel = require('./accountManagementHomePanels/manageWalletPanel');
var EditAccountDetailsPanel = require('./accountManagementHomePanels/editAccountDetailsPanel');

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
