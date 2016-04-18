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
                        <form className="form-horizontal" onSubmit={this.props.handleAddRoute}>
                            <div className="form-group">
                              <label className="col-md-3 control-label">Source Station ID:</label>
                                  <div className="col-md-9 pull-left">
                                      <input className="form-control" onChange={this.props.handleSourceStationIDInput} value={this.props.sourceStation} placeholder="Enter Source Station ID..." />
                                    </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dest" className="col-md-3 control-label">Dest Station ID:</label>
                                    <div className="col-md-9 pull-left">
                                        <input className="form-control" onChange={this.props.handleDestinationStationIDInput} value={this.props.destinationStation} placeholder="Enter Destination Station ID..." />
                                    </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="train" className="col-md-3 control-label">Train ID:</label>
                                  <div className="col-md-9 pull-left">
                                      <input className="form-control" onChange={this.props.handleTrainIDInput} value={this.props.train} placeholder="Enter TrainID..." />
                                    </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="journ" className="col-md-3 control-label">Duration:</label>
                                <div className="col-md-9">
                                    <input className="form-control" onChange={this.props.handleDurationInput} value={this.props.duration} placeholder="Enter Journey Duration..." />
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
