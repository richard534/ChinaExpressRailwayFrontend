"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var PaymentDetailsPanel = React.createClass({


    handleChange: function() {
        var values = {
            ammountToAddToWallet: this.refs.ammount.getDOMNode().value,
            cardType: this.refs.cardType.getDOMNode().value,
            cardNumber: this.refs.cardNum.getDOMNode().value,
            nameOnCard: this.refs.nameOnCard.getDOMNode().value,
            expiryDateY: this.refs.expiryY.getDOMNode().value,
            expiryDateM: this.refs.expiryM.getDOMNode().value,
            securityCode: this.refs.secCode.getDOMNode().value,
            address: this.refs.address.getDOMNode().value,
            town: this.refs.town.getDOMNode().value,
            county: this.refs.county.getDOMNode().value,
            postcode: this.refs.postcode.getDOMNode().value
        };
        this.props.onUpdate(values);
    },

   render: function() {
       var self = this;
       var errorsList;
       var paynowButton;

       var populateErrorsList = function() {
           return (
               <div className="div-md-12 alert alert-danger" id="dangerDiv">
                   <div>{self.props.errors.paymentMethod}</div>
                   <div>{self.props.errors.ammountToAddToWallet}</div>
                   <div>{self.props.errors.cardNumber}</div>
                   <div>{self.props.errors.nameOnCard}</div>
                   <div>{self.props.errors.expiryDateY}</div>
                   <div>{self.props.errors.expiryDateM}</div>
                   <div>{self.props.errors.securityCode}</div>
                   <div>{self.props.errors.address}</div>
                   <div>{self.props.errors.town}</div>
                   <div>{self.props.errors.county}</div>
                   <div>{self.props.errors.postcode}</div>
               </div>
           );
       };

       var disabledCreateAccountButton = function() {
           return (
               <button type="button" className="btn btn-primary btn-block disabled">Pay Now</button>
           );
       };

       var enabledCreateAccountButton = function() {
           return (
               <button type="submit" className="btn btn-primary btn-block">Pay Now</button>
           );
       };

       if(!_.isEmpty(self.props.errors)) {
           errorsList = populateErrorsList();
           paynowButton = disabledCreateAccountButton();
       } else {
           paynowButton = enabledCreateAccountButton();
       }


       return (
           <div className="col-md-8 pull-left">
               <div className="panel panel-default">
                   <div className="panel-body">
                       <h4>Add Funds</h4>
                       <br/>
                       {errorsList}
                       <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.props.handleSubmit}>
                         <div className="form-group">
                             <label htmlFor="walletAmmount" className="col-md-4 control-label">Amount you wish to add to wallet:</label>
                             <div className="col-md-8">
                                 <input className="form-control" id="walletAmmount" ref="ammount" value={this.props.data.ammountToAddToWallet} placeholder="Enter Amount to add to wallet..." />
                             </div>
                         </div>
                         <hr />
                       <h4>Card Details</h4>
                       <br/>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Card Type:</label>
                                 <div className="col-md-9 pull-left">
                                     <select className="form-control" ref="cardType" value={this.props.data.ammountToAddToWallet}>
                                         <option>Visa</option>
                                         <option>Mastercard</option>
                                     </select>
                                   </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Card Number:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" ref="cardNum" value={this.props.data.cardNum} placeholder="Enter Card Number..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Name on Card:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" ref="nameOnCard" value={this.props.data.nameOnCard} placeholder="Enter Name on Card..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Expiry Date (MM/YY):</label>
                                 <div className="col-md-9 pull-left">
                                     <div className="col-md-6 pull-left">
                                         <select className="form-control" ref="expiryM" value={this.props.data.expiryDateM}>
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
                                           <select className="form-control" ref="expiryY" value={this.props.data.expiryDateY}>
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
                                     <input className="form-control" ref="secCode" value={this.props.data.securityCode} placeholder="Enter Security Code on Card..." />
                                 </div>
                           </div>
                           <hr />
                           <h4>Billing Address</h4>
                           <br/>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Address:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" ref="address" value={this.props.data.address} placeholder="Enter Address..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Town:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" ref="town" value={this.props.data.town} placeholder="Enter Town Name..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">County:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" ref="county" value={this.props.data.county} placeholder="Enter County..." />
                                 </div>
                           </div>
                           <div className="form-group">
                             <label className="col-md-3 control-label">Postcode:</label>
                                 <div className="col-md-9 pull-left">
                                     <input className="form-control" ref="postcode" value={this.props.data.postcode} placeholder="Enter Postcode..." />
                                 </div>
                           </div>
                           <br />
                           <div className="form-group">
                               <div className="col-md-9 pull-right">
                                   {paynowButton}
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
