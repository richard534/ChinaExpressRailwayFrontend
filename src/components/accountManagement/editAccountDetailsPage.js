"use strict";

var React = require('react');

var AccountDetailsPanel = require('./accountManagementPanels/editAccountDetailsPanel');

var EditAccountDetailsPage = React.createClass({

   render: function() {
       return (
           <div className="container">
               <div className="row">
                   <h1>Edit Account Details</h1>
                   <br/>
               </div>
               <AccountDetailsPanel />
            </div>
       );
     }
});

module.exports = EditAccountDetailsPage;
