"use strict";

var React = require('react');
var CreateNewAccountPanel = require('./adminPanels/createNewAccountPanel');

var ManageAccountsPage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Account Management</h1>
                    <br/>
                </div>
                <CreateNewAccountPanel />
            </div>
       );
     }
});

module.exports = ManageAccountsPage;
