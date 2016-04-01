"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var bookTicketsPanel = React.createClass({
    getDefaultProps: function() {
        return {
            buttonLink: "",
            sourceStation: "",
            destinationStation: "",
            departureDate: {}
        };
    },

    dateClickHandler: function(event) {
        event.preventDefault();
        $("#date").datepicker();
    },

   render: function() {
       return (
             <div className="col-md-4">
                 <div className="panel panel-default">
                    <div className="panel-body">
                      <form>
                          <div className="form-group">
                              <label htmlFor="from">From</label>
                              <input className="form-control" id="from" placeholder="Enter station name..." />
                          </div>
                          <div className="form-group">
                              <label htmlFor="to">To</label>
                              <input className="form-control" id="to" placeholder="Enter station name..." />
                          </div>
                          <div className="form-group">
                              <label htmlFor="date">Departing</label>
                              <input className="form-control" id="date" onClick={this.dateClickHandler} type="text" readonly="true" placeholder="Select Departure Date..." />
                          </div>
                          <div className="form-group">
                              <div className="col-md-6 pull-left timeCombobox">
                                  <label htmlFor="time">Time</label>
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
                                <div className="col-md-6 pull-left" id="timeCombobox2">
                                    <select className="form-control">
                                        <option className="selected">00</option>
                                        <option>15</option>
                                        <option>30</option>
                                        <option>45</option>
                                    </select>
                                </div>
                          </div>
                          <Link to={this.props.buttonLink}><button type="submit" className="btn btn-primary btn-block">Book Tickets</button></Link>
                      </form>
                    </div>
                  </div>
             </div>
       );
     }
});

module.exports = bookTicketsPanel;
