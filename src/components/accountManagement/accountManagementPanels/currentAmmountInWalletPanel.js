"use strict";

var React = require('react');

var CurrentAmmountInWallet = React.createClass({

   render: function() {
       return (
               <div className="col-md-4 pull-right">
                   <div className="panel panel-default">
                       <div className="panel-body">
                           <p className="text-muted">Current Amount In Wallet</p>
                           <h4>£{this.props.walletBalance}</h4>
                       </div>
                   </div>
               </div>
        );
    }
});

module.exports = CurrentAmmountInWallet;
