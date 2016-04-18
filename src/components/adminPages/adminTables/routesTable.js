"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var RoutesTable = React.createClass({

   render: function() {
       var table;
       var routes = this.props.routes;

       var renderNorouteTable = function() {
           return (
                <h4>No routes Found</h4>
           );
       };

       var createrouteRow = function(route) {
            return (
                <tr key={route.trainRouteID}>
                    <td>{route.trainRouteID}</td>
                    <td>{route.journeyTime}</td>
                    <td>{route.sourceStation.name}</td>
                    <td>{route.arrivalStation.name}</td>
                </tr>
            );
        };

       var renderrouteTable = function() {
           return (
               <table className="table table-bordered table-striped">
                  <tr>
                     <td>RouteID</td>
                     <td>Journey Time</td>
                     <td>Source Station</td>
                     <td>Destination Station</td>
                 </tr>
                 {routes.map(createrouteRow)}
               </table>
           );
       };

       if(_.isEmpty(routes)){
           table = renderNorouteTable();
       } else {
           table = renderrouteTable();
       }

       return (
           <div className="col-md-12">
               <div className="panel panel-default">
                   <div className="panel-body">
                     <h4>Current Routes</h4>
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

module.exports = RoutesTable;
