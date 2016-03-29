"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ManageWalletPanel = React.createClass({

   render: function() {
       return (
           <div className="col-md-4">
               <div className="panel panel-default">
                  <div className="panel-body">
                      <img className="img-responsive pull-left reportThumbnailPadding" width="100" alt="ManageWallet" src="/images/wallet-icon.png"/>
                      <p className="smallPanelTextPadding">Here you can add funds to your wallet using our secure payment processor</p>
                      <br/>
                      <Link to="MyAccount"><button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Wallet</button></Link>
                  </div>
               </div>
           </div>
        );
    }
});

  module.exports = ManageWalletPanel;
