"use strict";

var React = require('react');

var AddNewSchedulePanel = React.createClass({

    dateClickHandler: function(event) {
        event.preventDefault();
        $("#departureDate").datepicker();
    },

   render: function() {
       return (

               <div className="col-md-7">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <h4>Add New Schedule</h4>
                          <br/>
                          <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="trainRoute" className="col-md-3 control-label">Train Route:</label>
                                <div className="col-md-9">
                                    <select className="form-control" id="trainRoute">
                                        <option className="selected">1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="departureDate" className="col-md-3 control-label">Departure Date:</label>
                                <div className="col-md-9">
                                    <input className="form-control" id="departureDate" onClick={this.dateClickHandler} type="text" placeholder="Enter Departure Date..." />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="time" className="col-md-3 control-label">Departure Time:</label>
                                    <div className="col-md-4 pull-left">
                                        <select className="form-control" id="time">
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
                                      <div className="col-md-4 pull-left" id="">
                                          <select className="form-control">
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
