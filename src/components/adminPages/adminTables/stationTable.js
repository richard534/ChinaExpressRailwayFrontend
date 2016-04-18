"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var StationTable = React.createClass({


   render: function() {
       var table;
       var stations = this.props.stations;

       var renderNoStationTable = function() {
           return (
                <h4>No stations Found</h4>
           );
       };

       var createStationRow = function(station) {
            return (
                <tr key={station.stationID}>
                    <td>{station.stationID}</td>
                    <td>{station.name}</td>
                    <td>{station.address}</td>
                </tr>
            );
        };

       var renderStationTable = function() {
           return (
               <table className="table table-bordered table-striped">
                  <tr>
                     <td>StationID</td>
                     <td>Station Name</td>
                     <td>Station Address</td>
                 </tr>
                 {stations.map(createStationRow)}
               </table>
           );
       };

       if(_.isEmpty(stations)){
           table = renderNoStationTable();
       } else {
           table = renderStationTable();
       }



       return (
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-body">
                      <h4>Current Stations</h4>
                      <br/>
                      {table}
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
