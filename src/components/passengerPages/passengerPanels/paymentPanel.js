"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var paymentPanel = React.createClass({


   render: function() {
       return (
           <div className="col-md-4">
              <div className="panel panel-default">
                 <div className="panel-body">
                     <label>Total:</label>
                     <h2 id="total">£40.50</h2>
                     <br />
                     <label>Current Amount in Wallet:</label>
                     <h4 id="total">£50.00</h4>
                     <label>Amount in Wallet After Purchase:</label>
                     <h4 id="total">£9.50</h4>
                     <br />
                     <Link to="app"><button type="submit" className="btn btn-primary btn-block">Pay Now</button></Link>
                     <hr />
                     <div className='row'>
                         <div className="col-md-4">
                             <p>Out:</p>
                         </div>
                         <div className="col-md-8">
                             <p className="text-right">16:00 (28th Feb)</p>
                         </div>
                     </div>
                     <p>Beijing to Shanghai</p>
                     <p>Standard</p>
                 </div>
             </div>
           </div>
       );
     }
});

module.exports = paymentPanel;
