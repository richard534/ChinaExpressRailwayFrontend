"use strict";

var React = require('react');
var PaymentPanel = require('./paymentPanel.js');

var paymentPage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <PaymentPanel />
           </div>
       );
     }
});

module.exports = paymentPage;
