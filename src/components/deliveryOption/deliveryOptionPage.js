"use strict";

var React = require('react');
var SelectDeliveryOptionPanel = require('./selectDeliveryOptionPanel');
var TicketSummaryPanel = require('../common/ticketSummaryPanel');

var deliveryOptionPage = React.createClass({


   render: function() {
       return (
            <div className="container">
                <SelectDeliveryOptionPanel />
                <TicketSummaryPanel />
           </div>
       );
     }
});

module.exports = deliveryOptionPage;
