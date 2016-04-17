"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// TODO add onsubmit/onchange props
var paymentPanel = React.createClass({
   render: function() {
       var self = this;
       var payButton;

       var renderEnabledPayButton = function() {
           return (
               <button type="submit" className="btn btn-primary btn-block">Pay Now</button>
           );
       };

       var renderDisabledPayButton = function() {
           return (
               <button type="button" className="btn btn-primary btn-block" disabled>Pay Now</button>
           );
       };


       if(self.props.ammountLeftInWallet < 0){
           payButton = renderDisabledPayButton();
       } else {
           payButton = renderEnabledPayButton();
       }



       return (
           <div className="col-md-4">
              <div className="panel panel-default">
                 <div className="panel-body">
                     <form onSubmit={this.props.handleSubmit}>
                         <label>Total:</label>
                         <h2 id="total">£{this.props.ticketPrice}</h2>
                         <br />
                         <label>Current Amount in Wallet:</label>
                         <h4 id="total">£{this.props.ammountInWallet}</h4>
                         <label>Amount in Wallet After Purchase:</label>
                         <h4 id="total">£{this.props.ammountLeftInWallet}</h4>
                         <br />
                         {payButton}
                     </form>
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
});

module.exports = paymentPanel;
