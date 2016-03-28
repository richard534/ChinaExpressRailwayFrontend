"use strict";

var React = require('react');

var AddNewTrainPanel = React.createClass({

   render: function() {
       return (

               <div className="col-md-7">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <h4>Add New Train</h4>
                          <br/>
                          <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="trainName" className="col-md-3 control-label">Train Name:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="trainName" placeholder="Enter Train Name..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="maxSeats" className="col-md-3 control-label">Max Seats:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="maxSeats" placeholder="Enter Max Seats..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numFirstClassSeats" className="col-md-3 control-label">Num First Class Seats:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="numFirstClassSeats" placeholder="Enter Number of First Class Seats..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numStandardClassSeats" className="col-md-3 control-label">Num Standard Class Seats:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="numStandardClassSeats" placeholder="Enter Number of Standard Class Seats..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-9 pull-right">
                                    <button type="submit" className="btn btn-primary btn-block">Add New Train</button>
                                </div>
                            </div>
                        </form>
                      </div>
                  </div>
              </div>

       );
     }
});

module.exports = AddNewTrainPanel;
