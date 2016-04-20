"use strict";

var React = require('react');
var BookTicketsPanel = require('../common/bookTicketsPanel');
var PopularRoutesPanel = require('./passengerPanels/popularRoutesPanel');
var validate = require('validate.js');

var constraints = {
    sourceStation: {
        presence: true
    },
    destinationStation: {
        presence: true
    },
    departureDate: {
        presence: true
    }
};

var passengerHomePage = React.createClass({

    getInitialState: function() {
        return {
            data: {
                sourceStation: "",
                destinationStation: "",
                departureDate: "",
                departureTimeHour: "",
                departureTimeMin: ""
            },
            errors: {
                sourceStation: "Please enter your journey requirements"
            }
        };
    },

    // set this components state to user input
    onUpdate: function(val){
        this.setState({
            data: {
                sourceStation: val.sourceStation,
                destinationStation: val.destinationStation,
                departureDate: val.departureDate,
                departureTimeHour: val.departureTimeHour,
                departureTimeMin: val.departureTimeMin
            }
        }, this.validate);
    },

    // Validate user input against contrains object
    validate: function () {
        var validationErrors = validate(this.state.data, constraints);

            if(validationErrors){
                this.setState({errors: validationErrors});
            } else {
                this.setState({errors: {}});
            }
    },


    render: function() {
       return (
           <div className="container">
               <BookTicketsPanel
                   buttonLink="BookTickets"
                   sourceStation={this.state.data.sourceStation}
                   destinationStation={this.state.data.destinationStation}
                   departureDate={this.state.data.departureDate}
                   departureTimeHour={this.state.data.departureTimeHour}
                   departureTimeMin={this.state.data.departureTimeMin}
                   onUpdate={this.onUpdate}
                   errors={this.state.errors} />
               <PopularRoutesPanel />
           </div>
       );
     }
});

module.exports = passengerHomePage;
