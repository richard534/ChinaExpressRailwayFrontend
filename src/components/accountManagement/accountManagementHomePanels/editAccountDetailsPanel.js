"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var EditAccountDetailsPanel = React.createClass({

   render: function() {
       return (
           <div className="col-md-4">
               <div className="panel panel-default">
                  <div className="panel-body">
                      <img className="img-responsive pull-left" width="100" alt="editAcountDetails" src="/images/accounts-icon.png"/>
                      <p className="smallPanelTextPadding">Here you can edit your account details such as changing password or email</p>
                      <br/>
                      <Link to="EditAccountDetails"><button type="submit" className="btn btn-primary btn-block" id="reportButton">Edit Account Details</button></Link>
                  </div>
               </div>
           </div>
        );
    }
});

  module.exports = EditAccountDetailsPanel;
