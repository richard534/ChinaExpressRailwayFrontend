"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ViewTickesPage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <div className="row">
                    <h1>Ticket Management</h1>
                    <br/>
                </div>

                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h4>My Tickets</h4>
                            <br/>
                            <form className="form-horizontal">
                                <div className="form-group pull-left">
                                  <label className="col-md-4 control-label">Show me:</label>
                                      <div className="col-md-8">
                                          <select className="form-control">
                                              <option>All Tickets</option>
                                              <option>Tickets From Last Week</option>
                                              <option>Tickets From Last Month</option>
                                          </select>
                                        </div>
                                </div>
                            </form>

                            <table className="table table-bordered table-striped">
                               <tr>
                                  <td>Route</td>
                                  <td>TicketNum</td>
                                  <td>Departure Date/Time</td>
                                  <td>Arrival Date/Time</td>
                                  <td>Status</td>
                              </tr>
                              <tr>
                                  <td>Shanghai-Beijing</td>
                                  <td>123</td>
                                  <td>5th June 11:25</td>
                                  <td>5th June 17:00</td>
                                  <td>Booked</td>
                              </tr>
                            </table>
                            <nav>
                                <ul className="pager">
                                  <li className="previous disabled"><a href="#" onClick=""><span aria-hidden="true">&larr;</span> Previous</a></li>
                                  <li className="next"><a href="#" onClick="">Next <span aria-hidden="true">&rarr;</span></a></li>
                                </ul>
                              </nav>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h4>Re-send Tickets</h4>
                            <br/>
                            <form className="form-horizontal">
                                <div className="form-group">
                                  <label className="col-md-4 control-label">Enter ID of Ticket to send:</label>
                                  <div className="col-md-8">
                                      <input className="form-control"placeholder="Enter Ticket ID..." />
                                  </div>
                              </div>
                            </form>
                              <hr/>
                              <p className="text-center">We will send your ticket to: TestEmail@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <Link to="MyAccount"><button className="btn btn-primary">Back</button></Link>
                    <br/><br/>
                </div>

            </div>
       );
     }
});

module.exports = ViewTickesPage;
