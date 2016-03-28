"use strict";

var React = require('react');
var BookTicketsPanel = require('../common/bookTicketsPanel');
var PopularRoutesPanel = require('./passengerPanels/popularRoutesPanel');

var passengerHomePage = React.createClass({

    getInitialState: function() {
        return {
                sourceStation: "",
                destinationStation: "",
                departureDate: {}
        };
    },

   render: function() {
       return (
           <div className="container">
               <BookTicketsPanel buttonLink="BookTickets"
                   sourceStation={this.props.sourceStation}
                   destinationStation={this.props.destinationStation}
                   departureDate={this.props.departureDate} />
               <PopularRoutesPanel />
           </div>
       );
     }
});

module.exports = passengerHomePage;
