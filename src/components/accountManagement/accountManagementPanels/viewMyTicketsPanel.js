"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ViewMyTicketsPanel = React.createClass({

   render: function() {
       return (
           <div className="col-md-4">
               <div className="panel panel-default">
                  <div className="panel-body">
                      <img className="img-responsive pull-left" width="100" alt="ViewMyTickets" src="/images/ticket-icon.svg"/>
                      <p className="smallPanelTextPadding">View tickets purchased for past and future travel. You can also print tickets</p>
                      <br/>
                      <Link to="MyAccount"><button type="submit" className="btn btn-primary btn-block" id="reportButton">View My Tickets</button></Link>
                  </div>
               </div>
           </div>
        );
    }
});

  module.exports = ViewMyTicketsPanel;
