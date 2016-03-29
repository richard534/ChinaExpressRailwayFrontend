"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PaymentDetailsPanel = React.createClass({

   render: function() {
       return (

           <div className="col-md-8 pull-left">
               <div className="panel panel-default">
                   <div className="panel-body">
                       <h4>Add Funds</h4>
                       <br/>
                       <form className="form-horizontal">
                         <div className="form-group">
                             <label htmlFor="walletAmmount" className="col-md-4 control-label">Amount you wish to add to wallet:</label>
                             <div className="col-md-8">
                                 <input className="form-control" id="walletAmmount" placeholder="Enter Amount to add to wallet..." />
                             </div>
                         </div>
                         <hr />
                       <h4>Card Details</h4>
                       <br/>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Card Type:</label>
                                 <div className="col-md-9 pull-left">
                                     <select className="form-control">
                                         <option>Visa</option>
                                         <option>Mastercard</option>
                                     </select>
                                   </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Card Number:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" id="journ" placeholder="Enter Card Number..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Name on Card:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" id="journ" placeholder="Enter Name on Card..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Expiry Date (MM/YY):</label>
                                 <div className="col-md-9 pull-left">
                                     <div className="col-md-6 pull-left">
                                         <select className="form-control">
                                             <option>01</option>
                                             <option>02</option>
                                             <option>03</option>
                                             <option>04</option>
                                             <option>05</option>
                                             <option>06</option>
                                             <option>07</option>
                                             <option>08</option>
                                             <option>09</option>
                                             <option>10</option>
                                             <option>11</option>
                                             <option>12</option>
                                         </select>
                                       </div>
                                       <div className="col-md-6 pull-left">
                                           <select className="form-control">
                                               <option>2016</option>
                                               <option>2017</option>
                                               <option>2018</option>
                                               <option>2019</option>
                                               <option>2020</option>
                                               <option>2021</option>
                                           </select>
                                       </div>
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Security Code:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" placeholder="Enter Security Code on Card..." />
                                 </div>
                           </div>
                           <hr />
                           <h4>Billing Address</h4>
                           <br/>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Address:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" id="journ" placeholder="Enter Address..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Town:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" id="journ" placeholder="Enter Town Name..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">County:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" id="journ" placeholder="Enter County..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Postcode:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" id="journ" placeholder="Enter Postcode..." />
                                 </div>
                           </div>
                           <br />
                           <div className="form-group">
                               <div className="col-md-9 pull-right">
                                   <button type="submit" className="btn btn-primary btn-block">Pay Now</button>
                               </div>
                           </div>

                       </form>
                   </div>
               </div>
           <Link to="MyAccount"><button className="btn btn-primary">Back</button></Link>
           <br/><br/>
           </div>
        );
    }
});

module.exports = PaymentDetailsPanel;
