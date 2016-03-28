"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var TrainsTable = React.createClass({

   render: function() {
       return (
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-body">
                      <h4>Current Trains</h4>
                      <br/>
                      <table className="table table-bordered table-striped">
                         <tr>
                            <td>Train ID</td>
                            <td>Train Name</td>
                            <td>Max Seats</td>
                            <td>Number First Class Seats</td>
                            <td>Number Standard Class Seats</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Henry</td>
                            <td>40</td>
                            <td>20</td>
                            <td>20</td>
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

module.exports = TrainsTable;
