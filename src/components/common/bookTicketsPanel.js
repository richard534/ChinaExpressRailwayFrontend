"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var bookTicketsPanel = React.createClass({
    getDefaultProps: function() {
        return {
            sourceStation: "",
            destinationStation: "",
            departureDate: "",
            departureTimeHour: "",
            departureTimeMin: ""
        };
    },

    dateClickHandler: function(event) {
        var self = this;
        event.preventDefault();
        $("#date").datepicker({
            onSelect: function(date) {
                self.handleChange();
            },
            startDate: Date.now(),
            minDate: 0
        });
    },

    handleChange: function() {
        var values = {
            sourceStation: this.refs.from.getDOMNode().value,
            destinationStation: this.refs.to.getDOMNode().value,
            departureDate: this.refs.date.getDOMNode().value,
            departureTimeHour: this.refs.hour.getDOMNode().value,
            departureTimeMin: this.refs.min.getDOMNode().value
        };
        this.props.onUpdate(values);
    },

   render: function() {
       return (
             <div className="col-md-4">
                 <div className="panel panel-default">
                    <div className="panel-body">
                      <form onChange={this.handleChange} onSubmit={this.props.handleSubmit}>
                          <div className="form-group">
                              <label>From</label>
                              <input className="form-control" value={this.props.sourceStation} ref="from" placeholder="Enter station name..." />
                          </div>
                          <div className="form-group">
                              <label>To</label>
                              <input className="form-control" value={this.props.destinationStation} ref="to" placeholder="Enter station name..." />
                          </div>
                          <div className="form-group">
                              <label>Departing</label>
                              <input className="form-control" value={this.props.departureDate} ref="date" id="date" onClick={this.dateClickHandler} placeholder="Select Departure Date..."/>
                          </div>
                          <div className="form-group">
                              <div className="col-md-6 pull-left timeCombobox">
                                  <label>Time</label>
                                  <select className="form-control" value={this.props.departureTimeHour} ref="hour">
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
                                <div className="col-md-6 pull-left" id="timeCombobox2">
                                    <select className="form-control" value={this.props.departureTimeMin} ref="min">
                                        <option className="selected">00</option>
                                        <option>15</option>
                                        <option>30</option>
                                        <option>45</option>
                                    </select>
                                </div>
                          </div>
                          <Link to={this.props.buttonLink} query={{ src: this.props.sourceStation,
                                  dest: this.props.destinationStation,
                                  dDate: this.props.departureDate,
                                  dTHour: this.props.departureTimeHour,
                                  dTMin: this.props.departureTimeMin }}>
                                  <button type="submit" className="btn btn-primary btn-block">Book Tickets</button></Link>
                      </form>
                    </div>
                  </div>
             </div>
       );
     }
});

module.exports = bookTicketsPanel;
