"use strict";

var React = require('react');
var BookTicketsPanel = require('../common/bookTicketsPanel');
var PopularRoutesPanel = require('./passengerPanels/popularRoutesPanel');

var passengerHomePage = React.createClass({

    getInitialState: function() {
        return {
            sourceStation: "",
            destinationStation: "",
            departureDate: "",
            departureTimeHour: "",
            departureTimeMin: ""
        };
    },

    onUpdate: function(val){
        this.setState({
            sourceStation: val.sourceStation,
            destinationStation: val.destinationStation,
            departureDate: val.departureDate,
            departureTimeHour: val.departureTimeHour,
            departureTimeMin: val.departureTimeMin
        });
    },

    handleSubmit: function(e) {
        var self = this;
        e.preventDefault();

    },

   render: function() {
       return (
           <div className="container">
               <BookTicketsPanel
                   buttonLink="BookTickets"
                   sourceStation={this.state.sourceStation}
                   destinationStation={this.state.destinationStation}
                   departureDate={this.state.departureDate}
                   departureTimeHour={this.state.departureTimeHour}
                   departureTimeMin={this.state.departureTimeMin}
                   onUpdate={this.onUpdate} />
               <PopularRoutesPanel />
           </div>
       );
     }
});

module.exports = passengerHomePage;
