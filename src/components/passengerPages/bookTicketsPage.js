"use strict";

var React = require('react');
var SelectTicketsPanel = require('../common/selectTicketsPanel');
var TicketSummaryPanel = require('../common/ticketSummaryPanel');
var auth = require('../auth/auth.js');

// TODO populate h1 placeholders
// TODO populate requested dates
// TODO retrieve tickets using ajax call and diaplay viable tickets
var BookTicketsPage = auth.requireAuth(React.createClass({
    getInitialState: function() {
        return {
            sourceStation: this.props.query.src,
            destinationStation: this.props.query.dest,
            departureDate: this.props.query.dDate,
            departureTimeHour: this.props.query.dTHour,
            departureTimeMin: this.props.query.dTMin
        };
    },

   render: function() {
       return (
            <div className="container">
                <SelectTicketsPanel backButtonLink="app"/>
                <TicketSummaryPanel buttonLink="SelectDeliveryMethod"/>
           </div>
       );
     }
}), "passenger");

module.exports = BookTicketsPage;
