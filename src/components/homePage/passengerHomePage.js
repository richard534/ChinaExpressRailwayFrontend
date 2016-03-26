"use strict";

var React = require('react');
var BookTicketsPanel = require('./bookTicketsPanel');
var PopularRoutesPanel = require('./popularRoutesPanel');

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
               <BookTicketsPanel sourceStation={this.props.sourceStation}
                   destinationStation={this.props.destinationStation}
                   departureDate={this.props.departureDate} />
               <PopularRoutesPanel />
           </div>
       );
     }
});

module.exports = passengerHomePage;
