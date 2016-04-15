"use strict";

var React = require('react');
var ViewMyTicketsPanel = require('./accountManagementHomePanels/viewMyTicketsPanel');
var ManageWalletPanel = require('./accountManagementHomePanels/manageWalletPanel');
var EditAccountDetailsPanel = require('./accountManagementHomePanels/editAccountDetailsPanel');
var auth = require('../auth/auth.js');

var MyAccountPage = React.createClass({
    getInitialState: function() {
        return {
            username: "",
            isPassenger: false
        };
    },

    componentWillMount: function() {
        this.setState({
            username: auth.getUsername(),
            isPassenger: auth.loggedInAsPassenger()
        });
    },

   render: function() {
       var panels;

       var renderPassengerScreen = function() {
           return (
               <div>
                   <ViewMyTicketsPanel />
                   <ManageWalletPanel />
                   <EditAccountDetailsPanel />
               </div>
           );
       };

       var renderOtherScreen = function() {
           return (
               <div>
                   <EditAccountDetailsPanel />
               </div>
           );
       };

       if(this.state.isPassenger){
           panels = renderPassengerScreen;
       } else {
           panels = renderOtherScreen;
       }

       return (
           <div className="container">
                <div className="col-md-12">
                    <h1>Welcome Back Richard</h1>
                    <br/>
                </div>
                {panels}
            </div>
       );
     }
});

module.exports = MyAccountPage;
