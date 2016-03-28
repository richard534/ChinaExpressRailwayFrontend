"use strict";

var React = require('react');

var DeleteStationPanel = React.createClass({

   render: function() {
       return (
               <div className="col-md-5">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <h4>Delete Station</h4>
                          <br/>
                          <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="stationName" className="col-md-3 control-label">StationId:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="stationName" placeholder="Enter Station Name..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-9 pull-right">
                                    <button type="submit" className="btn btn-primary btn-block">Delete Station</button>
                                </div>
                            </div>
                        </form>
                    </div>
                  </div>
              </div>
       );
     }
});

module.exports = DeleteStationPanel;
