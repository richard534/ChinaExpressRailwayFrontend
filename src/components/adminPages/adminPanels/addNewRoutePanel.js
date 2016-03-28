"use strict";

var React = require('react');

var AddNewRoutePanel = React.createClass({

   render: function() {
       return (

            <div className="col-md-7">
                <div className="panel panel-default">
                   <div className="panel-body">
                        <h4>Add New Route</h4>
                        <br/>
                        <form className="form-horizontal">
                            <div className="form-group">
                              <label htmlFor="source" className="col-md-3 control-label">Source Station:</label>
                                  <div className="col-md-9 pull-left">
                                      <select className="form-control" id="source">
                                          <option>01</option>
                                          <option>02</option>
                                          <option>03</option>
                                      </select>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dest" className="col-md-3 control-label">Destination Station:</label>
                                    <div className="col-md-9 pull-left">
                                        <select className="form-control" id="dest">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                      </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="train" className="col-md-3 control-label">Train:</label>
                                  <div className="col-md-9 pull-left">
                                      <select className="form-control" id="train">
                                          <option>01</option>
                                          <option>02</option>
                                          <option>03</option>
                                      </select>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="journ" className="col-md-3 control-label">Departure Date:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="journ" placeholder="Enter Journey Duration..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-9 pull-right">
                                    <button type="submit" className="btn btn-primary btn-block">Add New Route</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

       );
     }
});

module.exports = AddNewRoutePanel;
