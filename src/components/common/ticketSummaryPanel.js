"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ticketSummaryPanel = React.createClass({
    getDefaultProps: function() {
        return {
            buttonLink: "",
            schedulesFound: true,
            selectedTicket: {
                totalPrice: 0,
                date: "",
                time: "",
                class: ""
            },
            numFTickets: 0,
            numSTickets: 0,

            showNumTicketSelector: "true"
        };
    },

    // TODO set params to pass query
    handleChange: function() {
        var values = {
            numTickets: this.refs.numTicket.getDOMNode().value
        };
        this.props.onUpdate(values);
    },


    render: function() {
        var self = this;
        var ticketSelector = null;

        var renderTicketSelector = function() {
            return (
                <div>
                    <label>Number of tickets: </label>
                    <select ref="numTicket" onChange={self.handleChange} value={self.props.totalNumTickets}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            );
        };

        var renderNumTicketsLabel = function() {
            return (
                <div>
                    <label>Number of tickets: {self.props.totalNumTickets}</label>
                </div>
            );
        };

        if(this.props.showNumTicketSelector === "true"){
            ticketSelector = renderTicketSelector();
        } else {
            ticketSelector = renderNumTicketsLabel();
        }

        if(!this.props.schedulesFound){
            return (
                <div></div>
            );
        } else {
           return (
                <div className="col-md-4">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <label>Total:</label>
                          <h2 id="total">£{this.props.ticketPrice}</h2>
                          {ticketSelector}
                          <br />
                          <Link to={this.props.buttonLink} query={{
                                  scheduleId: this.props.selectedTicket.id,
                                  numTickets: this.props.selectedTicket.numTickets,
                                  ticketPrice: this.props.selectedTicket.totalPrice,
                                  sourceStation: this.props.sourceStation,
                                  destinationStation: this.props.destinationStation,
                                  date: this.props.date,
                                  time: this.props.time,
                                  class: this.props.class }}>
                                  <button type="submit" className="btn btn-primary btn-block" disabled={this.props.continueBtn}>Continue</button></Link>
                          <hr />
                          <div className='row'>
                              <div className="col-md-4">
                                  <p>Out:</p>
                              </div>
                              <div className="col-md-8">
                                  <p className="text-right">{this.props.date} {this.props.time}</p>
                              </div>
                          </div>
                          <p>{this.props.sourceStation} to {this.props.destinationStation}</p>
                          <p>{this.props.class}</p>
                      </div>
                  </div>
                </div>
           );
         }
     }
});

module.exports = ticketSummaryPanel;
