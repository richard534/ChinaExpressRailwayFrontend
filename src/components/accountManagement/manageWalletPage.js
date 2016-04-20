"use strict";

var React = require('react');
var CurrentAmmountInWallet = require('./accountManagementPanels/currentAmmountInWalletPanel');
var PaymentDetailsPanel = require('./accountManagementPanels/paymentDetailsPanel');
var toastr = require('toastr');
var validate = require('validate.js');
var auth = require('../auth/auth.js');

var constraints = {
    paymentMethod: {
        presence: true
    },
    ammountToAddToWallet: {
        presence: true
    },
    cardNumber: {
        presence: true,
        length: { minimum: 12 }
    },
    nameOnCard: {
        presence: true
    },
    expiryDateY: {
        presence: true
    },
    expiryDateM: {
        presence: true
    },
    securityCode: {
        presence: true
    },
    address: {
        presence: true
    },
    town: {
        presence: true
    },
    county: {
        presence: true
    },
    postcode: {
        presence: true
    }
};

var ManageWalletPage = React.createClass({
    getInitialState: function() {
        return {
            walletBalance: 0.00,
            passengerID: "",
            data: {
                ammountToAddToWallet: "",
                cardNumber: 0,
                nameOnCard: "",
                expiryDateY: "",
                expiryDateM: "",
                securityCode: "",
                address: "",
                town: "",
                county: "",
                postcode: "",
                paymentMethod: "visa"

            },
            errors: {
                paymentMethod: "Enter payment details"
            }
        };
    },

    componentWillMount: function() {
        this.getPassengerAccount();
    },

    // set this components state to user input
    onUpdate: function(val){
        this.setState({
            data: {
                ammountToAddToWallet: val.ammountToAddToWallet,
                cardNumber: val.cardNumber,
                nameOnCard: val.nameOnCard,
                expiryDateY: val.expiryDateY,
                expiryDateM: val.expiryDateM,
                securityCode: val.securityCode,
                address: val.address,
                town: val.town,
                county: val.county,
                postcode: val.postcode,
                paymentMethod: val.cardType
            }
        }, this.validate);
    },

    validate: function () {
        var validationErrors = validate(this.state.data, constraints);
        if(validationErrors){
            this.setState({errors: validationErrors});
        } else {
            this.setState({errors: {}});
        }
    },

    handleSubmit: function(e) {
        e.preventDefault();
        this.submitPayment(e);
    },

    submitPayment: function(e) {
        e.preventDefault();
        var self = this;

        var passengerID = this.state.passengerID;
        var ammontToAdd = this.state.data.ammountToAddToWallet;
        var paymentMethod = this.state.data.paymentMethod;
        var paymentType = "card";

        var token = auth.getToken();

        var data = {
            passengerID: passengerID,
            fundsAmount: ammontToAdd,
            paymentMethod: paymentMethod,
            paymentType: paymentType
        };
        console.log(data);

        return $.ajax({
          type: "post",
          headers: {
              "Authorization": token
          },
          data: data, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/passenger/addFunds',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              toastr.success('Funds added successfully');
              self.getPassengerAccount();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error adding funds');
          }
        });
    },

    getPassengerAccount: function() {
        var self = this;
        var token = auth.getToken();
        var username = auth.getUsername();

        return $.ajax({
          type: "get",
          headers: {
              "Authorization": token
          },
          data: {
              "username": username
          }, // Data to be sent to the server
          contentType: 'application/x-www-form-urlencoded',
          url: 'http://localhost:8087/passenger/getPassengerAccount',
          dataType: 'json', // The type of data that you're expecting back from the server
          success: function(results) {
              self.setState({walletBalance: Number(results.walletAmount).toFixed(2)});
              self.setState({passengerID: results.passengerID});
          },
          error: function(jqXHR, textStatus, errorThrown) {
              toastr.error('Error retrieving passenger account balance');
          }
        });
    },

   render: function() {
       return (
           <div className="container">
               <div className="row">
                   <h1>Manage Wallet</h1>
                   <br/>
               </div>
               <CurrentAmmountInWallet
                   walletBalance={this.state.walletBalance}/>
               <PaymentDetailsPanel
                   handleSubmit={this.handleSubmit}
                   onUpdate={this.onUpdate}
                   data={this.state.data}
                   errors={this.state.errors} />

            </div>
       );
     }
});

module.exports = ManageWalletPage;
