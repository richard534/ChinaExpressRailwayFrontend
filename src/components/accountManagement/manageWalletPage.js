"use strict";

var React = require('react');
var CurrentAmmountInWallet = require('./accountManagementPanels/currentAmmountInWalletPanel');
var PaymentDetailsPanel = require('./accountManagementPanels/paymentDetailsPanel');

var ManageWalletPage = React.createClass({

   render: function() {
       return (
           <div className="container">
               <div className="row">
                   <h1>Manage Wallet</h1>
                   <br/>
               </div>
               <CurrentAmmountInWallet />
               <PaymentDetailsPanel />

            </div>
       );
     }
});

module.exports = ManageWalletPage;
