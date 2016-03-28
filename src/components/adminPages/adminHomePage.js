"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AdminHomePage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Administration Home</h1>
                    <br/>
                </div>
                <div className="col-md-4">
                    <div className="panel panel-default">
                       <div className="panel-body">
                           <img className="img-responsive pull-left" width="100" alt="Stations" src="/images/train-station-icon.png"/>
                           <p className="smallPanelTextPadding">Here you can manage the stations available on the system</p>
                           <br/>
                           <Link to="ManageStations"><button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Stations</button></Link>
                       </div>
                   </div>
               </div>
               <div className="col-md-4">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <img className="img-responsive pull-left" width="100" alt="Trains" src="/images/train-icon.png"/>
                          <p className="smallPanelTextPadding">Here you can manage trains that can be scheduled to routes</p>
                          <br/>
                          <Link to="ManageTrains"><button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Trains</button></Link>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="panel panel-default">
                     <div className="panel-body">
                         <img className="img-responsive pull-left" width="100" alt="Schedule" src="/images/schedule-icon.png"/>
                         <p className="smallPanelTextPadding">Here you can manage the train schedule</p>
                         <br/>
                         <Link to="ManageSchedule"><button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Schedule</button></Link>
                     </div>
                 </div>
             </div>

             <div className="col-md-4">
                 <div className="panel panel-default">
                    <div className="panel-body">
                        <img className="img-responsive pull-left" width="100" alt="Routes" src="/images/route-icon.png"/>
                        <p className="smallPanelTextPadding">Here you can manage the routes available to passengers</p>
                        <br/>
                        <Link to="ManageRoutes"><button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Routes</button></Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="panel panel-default">
                   <div className="panel-body">
                       <img className="img-responsive pull-left" width="100" alt="Accounts" src="/images/accounts-icon.png"/>
                       <p className="smallPanelTextPadding">Here you can manage employee/admin accounts</p>
                       <br/>
                       <Link to="ManageAccounts"><button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Admin/Employee Accounts</button></Link>
                   </div>
               </div>
           </div>
        </div>
       );
     }
});

module.exports = AdminHomePage;
