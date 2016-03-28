"use strict";

var React = require('react');

var AddNewStationPanel = React.createClass({

   render: function() {
       return (

               <div className="col-md-7">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <h4>Add New Station</h4>
                          <br/>
                          <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="stationName" className="col-md-3 control-label">Station Name:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="stationName" placeholder="Enter Station Name..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ticketID" className="col-md-3 control-label">Station Address:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="ticketID" placeholder="Enter Station Address..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-9 pull-right">
                                    <button type="submit" className="btn btn-primary btn-block">Add New Station</button>
                                </div>
                            </div>
                        </form>
                      </div>
                  </div>
              </div>

       );
     }
});

module.exports = AddNewStationPanel;
