"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ScheduleTable = React.createClass({

   render: function() {
       return (
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-body">
                      <h4>Current Schedules</h4>
                      <br/>
                      <table className="table table-bordered table-striped">
                         <tr>
                            <td>ID</td>
                            <td>Route</td>
                            <td>Departure Date</td>
                            <td>Departure Time</td>
                            <td>Arrival Date</td>
                            <td>Arrival Time</td>
                            <td>1st Class Avail</td>
                            <td>Standard Class Avail</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                      </table>
                      <nav>
                          <ul className="pager">
                            <li className="previous disabled"><a href="#" onClick=""><span aria-hidden="true">&larr;</span> Previous</a></li>
                            <li className="next"><a href="#" onClick="">Next <span aria-hidden="true">&rarr;</span></a></li>
                          </ul>
                        </nav>
                    </div>
                </div>
              <Link to="AdminHome"><button className="btn btn-primary">Back</button></Link>
              <br />
              <br />
            </div>
       );
     }
});

module.exports = ScheduleTable;
