"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var paymentPanel = React.createClass({


   render: function() {
       return (
           <div className="container">
               <div className="col-md-4">
                  <div className="panel panel-default">
                     <div className="panel-body">
                         <label>Total:</label>
                         <h2 id="total">£40.50</h2>
                         <br />
                         <Link to="EmployeeHome"><button type="submit" className="btn btn-primary btn-block">Book Now</button></Link>
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
           </div>
       );
     }
});

module.exports = paymentPanel;
