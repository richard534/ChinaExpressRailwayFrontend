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

    dateClickHandler: function() {
        console.log("click");
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
                              <input className="form-control" id="date" placeholder="Select Departure Date..." />
                          </div>
                          <div className="form-group">
                              <div className="col-md-6 pull-left timeCombobox">
                                  <label htmlFor="time">Time</label>
                                  <select className="form-control" id="time">
                                      <option className="selected">1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                      <option>9</option>
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
                                      <option>24</option>
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
                          <Link to={this.props.buttonLink}><button type="submit" className="btn btn-primary btn-block" id="bookTicketButton">Book Tickets</button></Link>
                      </form>
                    </div>
                  </div>
             </div>
       );
     }
});

module.exports = bookTicketsPanel;
