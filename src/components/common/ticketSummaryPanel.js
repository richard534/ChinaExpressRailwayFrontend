"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ticketSummaryPanel = React.createClass({
    getDefaultProps: function() {
        return {
            buttonLink: "",
            schedulesFound: true
        };
    },

    // TODO set cost of tickets
    // TODO set params to pass query
    // TODO add departure date of selected ticket
    // TODO add type selected ticket
    render: function() {
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
                          <h2 id="total">£40.50</h2>
                          <br />
                          <Link to={this.props.buttonLink} params={{scheduleId: 1,
                                  numFCTickets: 1,
                                  numSCTickets: 1}}><button type="submit" className="btn btn-primary btn-block">Continue</button></Link>
                          <hr />
                          <div className='row'>
                              <div className="col-md-4">
                                  <p>Out:</p>
                              </div>
                              <div className="col-md-8">
                                  <p className="text-right">16:00 (28th Feb)</p>
                              </div>
                          </div>
                          <p>{this.props.sourceStation} to {this.props.destinationStation}</p>
                          <p>Standard</p>
                      </div>
                  </div>
                </div>
           );
         }
     }
});

module.exports = ticketSummaryPanel;
