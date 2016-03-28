"use strict";

var React = require('react');

var DeleteRoutePanel = React.createClass({

   render: function() {
       return (
               <div className="col-md-5">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <h4>Delete Route</h4>
                          <br/>
                          <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="scheduleID" className="col-md-3 control-label">Route ID:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="scheduleID" placeholder="Enter Schedule ID..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-9 pull-right">
                                    <button type="submit" className="btn btn-primary btn-block">Delete Route</button>
                                </div>
                            </div>
                        </form>
                    </div>
                  </div>
              </div>
       );
     }
});

module.exports = DeleteRoutePanel;
