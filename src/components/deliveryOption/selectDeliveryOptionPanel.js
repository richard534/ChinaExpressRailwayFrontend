"use strict";

var React = require('react');

var selectDeliveryOptionPanel = React.createClass({


   render: function() {
       return (
           <div className="col-md-8">
               <div className="panel panel-default">
                  <div className="panel-body">
                      <h1>Select a Delivery Option</h1>
                        <ul className="list-group">
                            <li className="list-group-item clearfix">
                                <div className="col-md-2">
                                    <div className="radio emailRadioButton">
                                     <label>
                                       <input type="radio" name="optionsRadios" id="optionsRadios1 " value="email" checked/>
                                     </label>
                                        Email
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <img src="/images/email-logo.png" alt="..." className="center-block" width="150" />
                                </div>
                                <div className="col-md-6">
                                    <p className="emailParagraph">You will recieve an E-Ticket in an email from us after your booking is confirmed.
                                    Once printed this email will act as your ticket.</p>
                                </div>
                            </li>
                            <hr />
                            <div className="col-md-12">
                                <p className="text-center">We will send your E-Ticket to the following Email Address: Testemail@gmail.com</p>
                            </div>
                        </ul>


                  </div>
              </div>
          </div>
       );
     }
});

module.exports = selectDeliveryOptionPanel;
