"use strict";

var React = require('react');

var AddNewSchedulePanel = React.createClass({

    departureDateClickHandler: function(event) {
        event.preventDefault();
        var self = this;
        $("#departureDate").datepicker({
            onSelect: function(date) {
                self.handleChange();
            },
            startDate: Date.now(),
            minDate: 0
        });
        this.handleChange();
    },

    arrivalDateClickHandler: function(event) {
        event.preventDefault();
        var self = this;
        $("#arrivalDate").datepicker({
            onSelect: function(date) {
                self.handleChange();
            },
            startDate: Date.now(),
            minDate: 0
        });
        this.handleChange();
    },

    handleChange: function() {
        var values = {
            routeID: this.refs.routeID.getDOMNode().value,
            depDate: this.refs.departureDate.getDOMNode().value,
            depTimeH: this.refs.departureTimeHour.getDOMNode().value,
            depTimeM: this.refs.departureTimeMin.getDOMNode().value,
            arrDate: this.refs.arrivalDate.getDOMNode().value,
            arrTimeH: this.refs.arrivaTimeHour.getDOMNode().value,
            arrTimeM: this.refs.arrivalTimeMin.getDOMNode().value
        };
        this.props.onAddScheduleUpdate(values);
    },

   render: function() {
       return (

               <div className="col-md-7">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <h4>Add New Schedule</h4>
                          <br/>
                          <form className="form-horizontal" onSubmit={this.props.handleAddSchedule} onChange={this.handleChange}>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Train Route ID:</label>
                                <div className="col-md-9">
                                    <input className="form-control" ref="routeID" placeholder="Enter Train Route ID..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Departure Date:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="departureDate" ref="departureDate" onClick={this.departureDateClickHandler} onkeydown="return false;" autoComplete="off" placeholder="Enter Departure Date..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Departure Time:</label>
                                    <div className="col-md-4 pull-left">
                                        <select className="form-control" ref="departureTimeHour">
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
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>00</option>
                                        </select>
                                      </div>
                                      <div className="col-md-4 pull-left">
                                          <select className="form-control" ref="departureTimeMin">
                                              <option className="selected">00</option>
                                              <option>15</option>
                                              <option>30</option>
                                              <option>45</option>
                                          </select>
                                      </div>
                              </div>
                              <div className="form-group">
                                  <label className="col-md-3 control-label">Arrival Date:</label>
                                  <div className="col-md-9">
                                      <input className="form-control" id="arrivalDate" ref="arrivalDate" onClick={this.arrivalDateClickHandler} onkeydown="return false;" autoComplete="off" placeholder="Enter Arrival Date..." />
                                  </div>
                              </div>
                              <div className="form-group">
                                  <label className="col-md-3 control-label">Arrival Time:</label>
                                      <div className="col-md-4 pull-left">
                                          <select className="form-control" ref="arrivaTimeHour">
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
                                              <option>13</option>
                                              <option>14</option>
                                              <option>15</option>
                                              <option>16</option>
                                              <option>17</option>
                                              <option>18</option>
                                              <option>19</option>
                                              <option>20</option>
                                              <option>21</option>
                                              <option>22</option>
                                              <option>23</option>
                                              <option>00</option>
                                          </select>
                                        </div>
                                        <div className="col-md-4 pull-left">
                                            <select className="form-control" ref="arrivalTimeMin">
                                                <option className="selected">00</option>
                                                <option>15</option>
                                                <option>30</option>
                                                <option>45</option>
                                            </select>
                                        </div>
                                </div>

                            <div className="form-group">
                                <div className="col-md-9 pull-right">
                                    <button type="submit" className="btn btn-primary btn-block">Add New Schedule</button>
                                </div>
                            </div>
                        </form>
                      </div>
                  </div>
              </div>

       );
     }
});

module.exports = AddNewSchedulePanel;
