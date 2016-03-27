"use strict";

var React = require('react');
var SelectTicketsPanel = require('../common/SelectTicketsPanel');
var TicketSummaryPanel = require('../common/ticketSummaryPanel');

// TODO populate h1 placeholders
// TODO populate requested dates
// TODO retrieve tickets using ajax call and diaplay viable tickets
var BookTicketsPage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <SelectTicketsPanel backButtonLink="app"/>
                <TicketSummaryPanel buttonLink="SelectDeliveryMethod"/>
           </div>
       );
     }
});

module.exports = BookTicketsPage;
