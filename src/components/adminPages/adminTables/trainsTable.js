"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var TrainsTable = React.createClass({

   render: function() {

       var table;
       var trains = this.props.trains;

       var renderNotrainTable = function() {
           return (
                <h4>No trains Found</h4>
           );
       };

       var createtrainRow = function(train) {
            return (
                <tr key={train.trainID}>
                    <td>{train.trainID}</td>
                    <td>{train.trainName}</td>
                    <td>{train.maxSeats}</td>
                    <td>{train.maxFirstClass}</td>
                    <td>{train.maxStandard}</td>
                </tr>
            );
        };

       var rendertrainTable = function() {
           return (
               <table className="table table-bordered table-striped">
                  <tr>
                     <td>TrainID</td>
                     <td>Train Name</td>
                     <td>Max Seats</td>
                     <td>Number First Class Seats</td>
                     <td>Number Standard Class Seats</td>
                 </tr>
                 {trains.map(createtrainRow)}
               </table>
           );
       };

       if(_.isEmpty(trains)){
           table = renderNotrainTable();
       } else {
           table = rendertrainTable();
       }

       return (
           <div className="col-md-12">
               <div className="panel panel-default">
                   <div className="panel-body">
                     <h4>Current Trains</h4>
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

module.exports = TrainsTable;
