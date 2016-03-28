"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var StationTable = React.createClass({

   render: function() {
       return (
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-body">
                      <h4>Current Stations</h4>
                      <br/>
                      <table className="table table-bordered table-striped">
                         <tr>
                            <td>ID</td>
                            <td>Station Name</td>
                            <td>Address</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Shanghai</td>
                            <td>64 White Avenue</td>
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

module.exports = StationTable;
